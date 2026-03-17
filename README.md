# Dirty Rabbit Website

Static Astro site deployed on Vercel, with a native Vercel serverless webhook endpoint for Square order burst detection and WhatsApp alerting.

## Commands

All commands run from the project root:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start Astro locally |
| `npm run build` | Build the static site |
| `npm run preview` | Preview the production build |
| `npm test` | Run tests |

## Square Burst Webhook

The webhook handler lives at [api/webhook/square.ts](/Users/spicycarrot/Sites/dirty-rabbit-website/api/webhook/square.ts).

It does the following on each valid Square `order.created` event:

1. Reads the raw request body and validates the `x-square-hmacsha256-signature` header using `SQUARE_WEBHOOK_SIGNATURE_KEY` and `SQUARE_WEBHOOK_URL`.
2. Extracts the Square order ID and stores it in `order_burst_events` in Supabase.
3. Counts how many orders have arrived in the last 7 minutes.
4. If there are at least 3 orders and no alert was sent in the last 15 minutes, sends a WhatsApp alert to Iwonka through OpenClaw.
5. Always returns HTTP `200` so transient webhook issues do not trigger repeated Square retries.

Duplicate webhook deliveries are handled by checking the order ID before insert and by enforcing an alert cooldown in `order_burst_alerts`.

## Environment Variables

Set these in Vercel project settings and in your local `.env` when testing:

| Variable | Required value |
| :-- | :-- |
| `SQUARE_WEBHOOK_SIGNATURE_KEY` | Square webhook signature key from the Square Developer Dashboard |
| `SQUARE_WEBHOOK_URL` | Full webhook URL. Production value: `https://dirtyrabbit.es/api/webhook/square` |
| `SUPABASE_URL` | `https://brgvscagofzftmbtakoa.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key with insert/select access |


Do not hardcode these values in application code.

## Supabase Migration

Run the SQL in [scripts/migrations/001_order_burst.sql](/Users/spicycarrot/Sites/dirty-rabbit-website/scripts/migrations/001_order_burst.sql) in Supabase before enabling the webhook. It creates:

| Table | Purpose |
| :-- | :-- |
| `order_burst_events` | Stores each unique Square order seen by the webhook |
| `order_burst_alerts` | Tracks sent burst alerts so the 15-minute cooldown can be enforced |

## Square Webhook Setup

Set up the webhook in the Square Developer Dashboard or via the Square Webhooks API:

1. Create or edit a webhook subscription for your production application.
2. Set the notification URL to `https://dirtyrabbit.es/api/webhook/square`.
3. Subscribe to the `order.created` event.
4. Copy the webhook signature key into `SQUARE_WEBHOOK_SIGNATURE_KEY`.
5. Deploy the site to Vercel with the required environment variables.

If you manage webhooks through the API instead of the dashboard, the same event type and notification URL are required.

## Local Testing

Use `vercel dev` so the Astro site and the native `api/` function run together locally.

1. Add the required environment variables to a local `.env`.
2. Set `SQUARE_WEBHOOK_URL` to your local or tunneled webhook URL.
3. Run `vercel dev`.
4. Apply the SQL migration in your target Supabase project.
5. Send a signed `POST` request to `/api/webhook/square` with a real or test `order.created` payload.

For local signature validation, the HMAC must be calculated from:

```text
SQUARE_WEBHOOK_URL + raw request body
```

If you are testing from Square directly, expose the local endpoint with a tunnel and register that public URL in both Square and `SQUARE_WEBHOOK_URL`.
