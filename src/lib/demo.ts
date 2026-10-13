// DEMO ONLY (branch design/magazine-demo-2026-10-13).
// Approval-only drafts are shown on Vercel preview builds of this demo branch,
// or locally with DR_DEMO_DRAFTS=1. Production builds (VERCEL_ENV=production)
// and plain local builds keep drafts out of every page, route and sitemap.
const env = typeof process !== 'undefined' ? process.env : {};

export const SHOW_DEMO_DRAFTS =
  env.DR_DEMO_DRAFTS === '1' ||
  (env.VERCEL_ENV === 'preview' && (env.VERCEL_GIT_COMMIT_REF || '').startsWith('design/magazine-demo'));

export const isVisiblePost = (data: { draft?: boolean }) => !data.draft || SHOW_DEMO_DRAFTS;
