import crypto from 'node:crypto';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

type SquareOrderCreatedPayload = {
  entity_id?: string;
  event_type?: string;
  data?: {
    type?: string;
    id?: string;
    object?: {
      order_created?: {
        order_id?: string;
        location_id?: string;
      };
      order?: {
        id?: string;
        location_id?: string;
      };
    };
  };
};

const BURST_WINDOW_MINUTES = 7;
const BURST_THRESHOLD = 3;
const ALERT_COOLDOWN_MINUTES = 15;
const recentOrderIds = new Set<string>();

function respondOk(res: ServerResponse, message = 'ok') {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, message }));
}

function readRawBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];

    req.on('data', (chunk) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });

    req.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'));
    });

    req.on('error', reject);
  });
}

function getHeaderValue(value: string | string[] | undefined): string | null {
  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return value ?? null;
}

function signaturesMatch(expectedSignature: string, providedSignature: string): boolean {
  const expectedBuffer = Buffer.from(expectedSignature, 'utf8');
  const providedBuffer = Buffer.from(providedSignature, 'utf8');

  if (expectedBuffer.length !== providedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuffer, providedBuffer);
}

function isValidSquareSignature(rawBody: string, providedSignature: string | null): boolean {
  const signatureKey = process.env.SQUARE_WEBHOOK_SIGNATURE_KEY;
  const notificationUrl = process.env.SQUARE_WEBHOOK_URL;

  if (!signatureKey || !notificationUrl || !providedSignature) {
    return false;
  }

  const expectedSignature = crypto
    .createHmac('sha256', signatureKey)
    .update(notificationUrl + rawBody)
    .digest('base64');

  return signaturesMatch(expectedSignature, providedSignature);
}

function extractOrderDetails(payload: SquareOrderCreatedPayload): { orderId: string | null; locationId: string | null } {
  const orderId =
    payload.data?.object?.order_created?.order_id ??
    payload.data?.object?.order?.id ??
    payload.entity_id ??
    payload.data?.id ??
    null;

  const locationId =
    payload.data?.object?.order_created?.location_id ??
    payload.data?.object?.order?.location_id ??
    null;

  return { orderId, locationId };
}

function isOrderCreatedEvent(payload: SquareOrderCreatedPayload): boolean {
  return payload.event_type === 'order.created' || payload.data?.type === 'order.created';
}

function getSupabaseAdminClient(): SupabaseClient | null {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

async function insertOrderEvent(supabase: SupabaseClient, orderId: string, locationId: string | null): Promise<boolean> {
  const { data, error } = await supabase
    .from('order_burst_events')
    .upsert(
      {
        order_id: orderId,
        location_id: locationId,
      },
      {
        onConflict: 'order_id',
        ignoreDuplicates: true,
      }
    )
    .select('id');

  if (error) {
    throw error;
  }

  return Boolean(data && data.length > 0);
}

async function getRecentOrderCount(supabase: SupabaseClient): Promise<number> {
  const windowStart = new Date(Date.now() - BURST_WINDOW_MINUTES * 60 * 1000).toISOString();
  const { count, error } = await supabase
    .from('order_burst_events')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', windowStart);

  if (error) {
    throw error;
  }

  return count ?? 0;
}

async function hasRecentAlert(supabase: SupabaseClient): Promise<boolean> {
  const cooldownStart = new Date(Date.now() - ALERT_COOLDOWN_MINUTES * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from('order_burst_alerts')
    .select('id, created_at')
    .gte('created_at', cooldownStart)
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) {
    throw error;
  }

  return Boolean(data && data.length > 0);
}

// WhatsApp alert is sent by OpenClaw cron (runs locally on Mac Mini).
// This function just records the pending alert in Supabase.
// The cron picks up unsent alerts every 1 minute and delivers via WhatsApp.

async function recordAlert(supabase: SupabaseClient, orderCount: number) {
  const { error } = await supabase.from('order_burst_alerts').insert({
    order_count: orderCount,
    delivered: false,
  });

  if (error) {
    throw error;
  }
}

function rememberOrderId(orderId: string) {
  recentOrderIds.add(orderId);

  // Keep the warm-instance cache bounded.
  if (recentOrderIds.size > 500) {
    const firstValue = recentOrderIds.values().next().value;
    if (firstValue) {
      recentOrderIds.delete(firstValue);
    }
  }
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    return respondOk(res, 'ignored');
  }

  try {
    const rawBody = await readRawBody(req);
    const providedSignature = getHeaderValue(req.headers['x-square-hmacsha256-signature']);

    if (!isValidSquareSignature(rawBody, providedSignature)) {
      console.error('Square webhook signature validation failed');
      return respondOk(res, 'ignored');
    }

    const payload = JSON.parse(rawBody) as SquareOrderCreatedPayload;

    if (!isOrderCreatedEvent(payload)) {
      return respondOk(res, 'ignored');
    }

    const { orderId, locationId } = extractOrderDetails(payload);

    if (!orderId) {
      console.error('Square order.created payload missing order ID');
      return respondOk(res, 'ignored');
    }

    const supabase = getSupabaseAdminClient();

    if (!supabase) {
      console.error('Missing Supabase environment configuration');
      return respondOk(res, 'ignored');
    }

    const seenInMemory = recentOrderIds.has(orderId);

    if (!seenInMemory) {
      const inserted = await insertOrderEvent(supabase, orderId, locationId);

      if (!inserted) {
        console.info(`Square webhook duplicate order ignored: ${orderId}`);
      }

      rememberOrderId(orderId);
    } else {
      rememberOrderId(orderId);
    }

    const recentOrderCount = await getRecentOrderCount(supabase);

    if (recentOrderCount < BURST_THRESHOLD) {
      return respondOk(res);
    }

    const alertOnCooldown = await hasRecentAlert(supabase);

    if (alertOnCooldown) {
      return respondOk(res);
    }

    await recordAlert(supabase, recentOrderCount);
    // Alert recorded — OpenClaw cron will pick it up and send WhatsApp within ~1 min

    return respondOk(res);
  } catch (error) {
    console.error('Square webhook processing failed', error);
    return respondOk(res, 'ignored');
  }
}
