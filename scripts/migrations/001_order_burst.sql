CREATE TABLE IF NOT EXISTS order_burst_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id text NOT NULL,
  location_id text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_order_burst_events_created_at
  ON order_burst_events(created_at);

CREATE UNIQUE INDEX IF NOT EXISTS idx_order_burst_events_order_id
  ON order_burst_events(order_id);

-- Cleanup: auto-delete events older than 24 hours (optional, manual or pg_cron)

CREATE TABLE IF NOT EXISTS order_burst_alerts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  sent_at timestamptz,
  order_count integer NOT NULL,
  delivered boolean DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_order_burst_alerts_pending
  ON order_burst_alerts(delivered) WHERE delivered = false;
