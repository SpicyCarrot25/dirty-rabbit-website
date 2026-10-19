# Technical schema checks — 19 October 2026 evening / 20 October handoff

Base: `origin/main` at `315709aaaaa0dd7589ace41a715c530810c86e83`. Fresh isolated worktree and branch; the PR #14 worktree was not used or changed. No deploy or production/database calls.

- Build: 283 pages pass.
- Existing SEO checks: internal links/assets, sitemap/canonical, JSON-LD, 1,414 hreflang links (zero broken/nonreciprocal), 128 review visibility checks pass.
- New rendered check (`node scripts/check-menu-schema.mjs`, now included in `npm run check:seo`): 276 localized `hasMenu` links; 476 visible/schema menu rows across seven languages; 24 guide BreadcrumbLists. Zero errors.
- Both `LocalGuide.astro` and `VisitGuide.astro` **already supply BreadcrumbList via Layout on current main**. No duplicate schema or editorial changes were added. The check now covers every source page using those layouts, validates breadcrumb sequence, names, destinations and the current canonical URL.
- Unit tests: 24/24 business-facts + menu tests pass. Full suite: 108 pass, three pre-existing failures at `tests/pages.test.ts:162` expecting `historia.pillars.care` in ES/EN/CA. That test file and all three translation files are byte-for-byte unchanged from origin/main. This PR does not rewrite unrelated translations to satisfy a stale test.
- Live `/carta/`: all 68 displayed entries match the built names/prices. The underlying menu catalog is byte-for-byte equivalent as parsed JSON to origin/main; no sale prices were changed. The previous schema dropped the second espresso/batch price and the upper cake-range price; those are now represented as multiple Offers / AggregateOffer. Unpriced category-level brunch highlights were removed from Menu schema and the brunch business links to the real carta.
- Fable handoff: `docs/2026-10-20-fable-factual-removals.md`, with original file lines and copy IDs. Public prose changes are deletions only.

## sameAs read-only checks

| URL | Result on 19 October | Action |
|---|---|---|
| `https://instagram.com/dirtyrabbitcoffee` | HTTP 200 → www.instagram.com; profile title identifies Dirty Rabbit specialty coffee Costa Brava. | Keep. |
| `https://www.wikidata.org/wiki/Q138581870` | HTTP 200; entity JSON also HTTP 200, correct café identity. | Keep. |
| `https://g.page/dirtyrabbitcoffee` | HTTP 200 after redirect to Google search for dirtyrabbitcoffee. Does not expose a standalone listing in this fetch. | Keep existing link; record redirect limitation rather than calling it a verified Maps profile. |
| `https://www.facebook.com/dirtyrabbitcoffee` | HTTP 200 but generic Facebook/login content. | Responds; profile identity/ownership cannot be confirmed from this fetch. Keep existing URL. |
| Tripadvisor `d34222403`, locality `g642223` | Direct HTTP fetch blocked 403; web lookup resolves the exact listing with correct name/address/phone. | Replace dead `d28571876` and old locality/slug with the verified listing URL. |
| `https://europeancoffeetrip.com/cafe/dirtyrabbit-sagaro/` | Direct client 403; web read returns café page at correct address with Tue–Sun 08–15 and Monday closed. | Add this verified entity page. |
| Untappd `10322710` | User identifies it as unrelated. | Remove. |
| Bing / Apple | Owner confirmed presence previously; saved 12 October audit has only generic search URLs, not verified entity permalinks. | Do not invent `sameAs` entity links. Exact listing links remain a follow-up. |

Sources: [European Coffee Trip](https://europeancoffeetrip.com/cafe/dirtyrabbit-sagaro/), [Tripadvisor](https://www.tripadvisor.com/Restaurant_Review-g642223-d34222403-Reviews-Dirty_Rabbit-S_Agaro_Costa_Brava_Province_of_Girona_Catalonia.html), [Wikidata entity JSON](https://www.wikidata.org/wiki/Special:EntityData/Q138581870.json), [visible carta](https://dirtyrabbit.es/carta/). HTTP receipts and listing audit are stored outside this website worktree in the marketing `reports/2026-10-20-listings-evidence/` folder. No claim of a Google Rich Results Test run or GBP-menu reconciliation.
