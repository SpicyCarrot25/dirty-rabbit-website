# One business-facts source

**12 October update:** the approved SEO/GEO work confirms the address and Tuesday–Sunday 08:00–15:00 hours from the dated 5 October GBP packet, plus Franc’s Monday closing and 26 October–1 November / 21–27 December 2026 closures. See [the current implementation and measurement note](../seo-geo-2026-10-12.md). Other confirmation fields remain null. The preparation notes below describe the earlier all-null snapshot and its preservation tests.

Visitors retain the currently published facts while address, opening times, winter notices, menu data and facts-page content are prepared for correction through one source file.

Edit `src/data/business-facts.json`. Every confirmation is null. `published` preserves the existing, contradictory copy and schema variants; it is evidence of what is published, not verification that those claims are correct. No winter dates, address, menu version or map pin have been selected.

The source feeds the shared CafeOrCoffeeShop JSON-LD, individual landing-page and guide schemas, the four facts pages, contact translations, the footer, registered article/guide factual passages, all seven menu pages, `llms.txt`, and `/.well-known/brand-facts.json`. Static machine-readable files are now generated endpoints. The old menu.json catalog is in `published.menu` in this same file. Other cafés' content is kept separate from Dirty Rabbit's facts.

## Franc's answers

See [the conflict inventory](fact-conflicts.md) for exact variants and the public page where each appears. It includes three coordinate pairs, Conca versus Platja d'Aro addresses, regular versus summer hours, year-round versus seasonal statements and old brunch prices. The live Spanish menu also contains Cold Brew at €4, which current main omits. Both versions are recorded; this branch keeps main's menu output and makes no decision about that item.

Fill confirmed address, coordinates, normal hours, kitchen closing, summer hours with dates, winter closure dates and the embedded map only from Franc's answer. A null winter closure is unknown; an empty array means Franc confirmed no winter closure. The last closed date belongs in `through`; reopening is the following day.

Menu prices and translations live in `published.menu`. Exact named editorial items can use those prices once `confirmed.menu` is true. Do not infer retired-item aliases. Broad price ranges, per-person estimates and unmatched old item names remain explicit published copy in this same file; reconcile these from Franc's answer and review the resulting prose. The conflict inventory identifies those passages. Approval of the catalog alone does not resolve those separate claims.

The four facts pages' reference details (equipment, suppliers, capacity, payment and contact text) are also preserved in this file. This preparation does not certify those details, ratings or supplier claims.

## Verification

- `npm run build`: all 264 HTML pages build; machine-readable endpoints are generated.
- `python3 scripts/check-facts-preservation.py BASELINE_DIST dist`: compare every page's visible elements/text and parsed JSON-LD with a separately built main. Zero differences with confirmations null. Assets' generated filenames and source whitespace are ignored.
- `npx vitest run tests/business-facts.test.ts`: checks preservation, address/schema/feed updates, regular/summer/kitchen hours, winter closure, a named menu price, JSON-LD escaping and preservation of neighboring cafés' winter claims.
- A local rehearsal temporarily filled the source with obvious test-only values, built the entire site and checked all business objects, all seven menu prices and winter notices. The original file was restored in a finally block, then the normal draft was rebuilt. Evidence is in the marketing workspace's `evidence/google-fixes` directory.
- The existing `npm test` suite has three old brand-pillar assertion failures on main and every branch. New facts tests pass; the failures are unrelated to this change.

The schema follows Google's [LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business). Confirmed closure dates produce `specialOpeningHoursSpecification` with 00:00–00:00. Google Rich Results and deployment checks remain for a later approved preview; no remote validator or publication was invoked.
