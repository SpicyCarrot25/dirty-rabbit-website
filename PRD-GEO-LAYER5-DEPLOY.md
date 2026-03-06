# PRD: GEO Layer 5 — Article Schema + og:type Fix + Content Deploy

## Context
DR website has 130+ guide pages and 35+ article pages. None have Article schema markup. All pages use `og:type="website"` instead of `"article"`. Three new GEO content pieces need deploying.

## Tasks

### 1. Fix Layout.astro — Article support

**File:** `src/layouts/Layout.astro`

Add a new prop `articleMeta` to the Props interface:
```ts
interface ArticleMeta {
  datePublished: string;  // ISO date
  dateModified?: string;  // ISO date  
  author?: string;        // default "Dirty Rabbit"
  section?: string;       // e.g. "Coffee Guide", "Travel"
}
```

When `articleMeta` is provided:
- Change `og:type` from `"website"` to `"article"`
- Add `article:published_time` and `article:modified_time` meta tags
- Add an `Article` object to the `@graph` array:
```json
{
  "@type": "Article",
  "@id": "https://dirtyrabbit.es{pathname}#article",
  "headline": "{title}",
  "description": "{description}",
  "datePublished": "{datePublished}",
  "dateModified": "{dateModified || datePublished}",
  "author": { "@type": "Organization", "name": "Dirty Rabbit", "@id": "https://dirtyrabbit.es/#business" },
  "publisher": { "@type": "Organization", "name": "Dirty Rabbit", "@id": "https://dirtyrabbit.es/#business" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://dirtyrabbit.es{pathname}" },
  "isPartOf": { "@id": "https://dirtyrabbit.es/#website" }
}
```

Also add `<slot name="head" />` in the `<head>` section (before `</head>`) so guide pages can inject extra schema.

### 2. Update ALL guide pages to pass articleMeta

All files in:
- `src/pages/guia/*.astro`
- `src/pages/en/guide/*.astro`
- `src/pages/ca/guia/*.astro`
- `src/pages/ca/articles/*.astro`
- `src/pages/fr/guide/*.astro`
- `src/pages/fr/articles/*.astro`
- `src/pages/en/articles/*.astro`

Add `articleMeta` prop to their `<Layout>` call:
```
articleMeta={{ datePublished: "2026-02-15", dateModified: "2026-03-06", section: "Coffee Guide" }}
```

Use "2026-02-15" as datePublished for existing guides, "2026-03-06" as dateModified.
Use section "Coffee Guide" for guide pages, "Article" for article pages.

### 3. Deploy Brand Facts pages

Create these new pages:

**`src/pages/brand-facts.astro`** (ES version)
- Content from: `../../content-drafts/brand-facts-es.md` (copy content inline)
- Use Layout with breadcrumbs, NO articleMeta (it's a fact page, not article)
- Simple, clean layout matching existing page style
- Wikipedia-neutral tone — this is a fact sheet

**`src/pages/en/brand-facts.astro`** (EN version)  
- Content from: `../../content-drafts/brand-facts-en.md`
- Same approach

### 4. Deploy Answer Hub pages

**`src/pages/guia/mejor-cafe-especialidad-costa-brava-2026.astro`** (ES)
- Content from: `../../content-drafts/answer-hub-es.md`
- Use Layout WITH articleMeta (datePublished: "2026-03-06", section: "Coffee Guide")
- Include comparison table, FAQ section with FAQPage schema

**`src/pages/en/guide/best-specialty-coffee-costa-brava-2026.astro`** (EN)
- Content from: `../../content-drafts/answer-hub-en.md`
- Same approach

### 5. Deploy brand-facts.json

**`public/.well-known/brand-facts.json`**
- Copy from: `../../content-drafts/brand-facts.json`

### 6. Update sitemap

Ensure the new pages appear in the sitemap. Check `astro.config.mjs` for sitemap config — if using @astrojs/sitemap, new pages should auto-include.

## Validation

After all changes:
1. `npm run build` must pass
2. Check built HTML for a guide page — verify Article schema in JSON-LD and `og:type="article"`
3. Check brand-facts page — verify no Article schema, og:type="website"
4. Check `dist/.well-known/brand-facts.json` exists
5. Check Answer Hub pages built correctly with FAQ schema

## Files to modify
- `src/layouts/Layout.astro` — add articleMeta prop, Article schema, og:type conditional, head slot
- All `guia/*.astro`, `guide/*.astro`, `articles/*.astro` pages (~130 files) — add articleMeta prop
- New files: brand-facts (2), answer-hub (2), brand-facts.json (1)

## DO NOT
- Change any existing page content or styling
- Modify the CafeOrCoffeeShop schema
- Change URL structure
- Touch any non-guide/article pages' og:type (homepage etc. stay "website")
