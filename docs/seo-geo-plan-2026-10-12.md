# Second PR: approved guide plan, no pruning

Approval: Franc's direct 12 October instruction approves `plans/2026-10-12-seo-geo-plan.md` except pruning, and requests a separate PR after the fixes PR. This branch is stacked on `fix/seo-geo-2026-10-12`. Neither branch is merged or deployed.

## Scope and intent mapping

| Plan intent | Implementation |
| --- | --- |
| Breakfast in Sant Feliu, Palamós, Calonge/Sant Antoni, Santa Cristina | Four new Spanish `desayunar-en-*` guides; local alternatives and town-specific plans, with S’Agaró separately identified |
| Brunch in Platja d’Aro | Expanded existing `/guia/desayunar-cerca-de-centre-platja-daro`; no duplicate `/guia/brunch-en-platja-daro` route |
| Things to do in Palamós, Calonge/Sant Antoni, Begur, Castell d’Aro, Santa Cristina | Five new Spanish destination guides |
| Dog-friendly / vegan and gluten-free | Two new Spanish practical guides with dated source links; no unsupported kitchen or allergen guarantee |
| Children's corner / laptop-friendly | Updated existing Spanish articles, retaining their URLs and original publication dates; specific facilities and working arrangements require confirmation |
| Day trip / cycling | Two requested English routes, plus an English guide index to make the collection navigable |

Thirteen new guides, one English index, three existing Spanish intent pages substantially revised. No stub translations. New Spanish routes have only their own actual hreflang identity. Every existing matcha/chai page and the complete redirect configuration are preserved.

## Local content and evidence

The source links are visible beside the relevant sections. All were read on 12 October 2026. Tourism sources support destination facts, not café hours. Business websites/directories establish a venue reference, not a guarantee it is open at the moment of the reader's visit.

| Town | Distinct evidence used |
| --- | --- |
| Sant Feliu | ANNNA's own bakery description; monastery/Porta Ferrada; former railway greenway; Sant Pol geography — venue website and municipal tourism |
| Palamós | Zero's directory address; port museum; Cala Margarida → La Fosca; S’Alguer — European Coffee Trip and Visit Palamós |
| Calonge/Sant Antoni | TIPED's own breakfast description; castle/plaza Major; Càcul; Doma; inland/coastal distinction — venue website and Costa Brava tourism board |
| Santa Cristina | Can Pijuan commerce listing; Romanyà/Cova d’en Daina; granite gallery; Casa Màgica — Diputació, Generalitat heritage and municipal tourism |
| Begur | Medieval castle; sixteenth-century defensive towers; Indian interpretation centre and audio route — municipal sources |
| Castell d’Aro | Benedormiens documented in 1041; exhibition use; Santa Maria; named historic streets — municipal sources |
| Platja d’Aro | La Maglia address; Cavall Bernat; Cala Rovira; Pla de Palol — venue website and municipal walking itinerary |

The café block gives the live-GBP-verified S’Agaró address and map, contact/phone, brunch link and confirmed closures. It does not invent fixed driving times, free parking, kitchen cutoff or bike storage. Begur's already owner-approved approximate 20-minute reference is retained and distinguished from live routing. Market days were not needed to make these itineraries useful and were not guessed.

European Coffee Trip's live public Dirty Rabbit page lists free Wi-Fi, laptop-friendly, kids-friendly, vegan options, dog-friendly and outdoor seating. The guides attribute those labels to that source. Franc has been asked to confirm finer details; no reopened month, dedicated gluten-free kitchen, reserved workspace or currently available children's corner is asserted. Fitzroy remains seasonally closed; no permanent-closure claim.

## Guide order and measurement

Following §4, four of eight town groups are treatment: Begur, Girona, Platja d’Aro and Sant Feliu, across ES/EN/CA/FR (16 pages). The café section and comparison row put Dirty Rabbit first and label it as our café. Competitor sections are shortened to factual locality/source/status lines. Unverified current availability is explicitly labelled. Existing competitors are retained.

S’Agaró, Pals, Palamós and Calonge retain their venue order as controls for 28 full days after production publication. Shared location FAQs and replacement of 25 actual repeated pillar blocks apply to the guide collection, so these are controls for ordering, not untouched pages. The plan estimated 33 repeated blocks; the current source contained 25 matching editorial blocks. Every guide now has the location answer. No drink-page pruning or redirect is authorized, including the plan's original eight-week pruning rule.

The existing Girona guide URLs remain available with factual alternatives and a link to the new English day-trip guide. No silent redirect or destruction of other-language content. The separate trip page answers a travel itinerary intent rather than creating another Girona café ranking.

Production publication date: **unset**. Preview/publication is not yet available. Record actual release dates before starting GSC comparison. Use final data with three-day lag, 28-day before/after windows, same query→page pairs and seasonal comparisons. New content, shared FAQ and order changes occur together; results are exploratory and cannot isolate order as a causal effect. GEO panel queries/settings remain unchanged. No impact is claimed before compatible observations.

## Checks and release limits

`npm run build`, `npm run check:seo`, and `node scripts/check-seo-plan.mjs` validate the rendered site and retained routes. The dedicated check verifies all 65 matcha/chai source routes, unchanged redirects, the 16 treatment orders, retention of every seasonal Fitzroy reference, new-page incoming links and basic content completeness. The town evidence table above is the editorial thin-content check; word count alone is not sufficient.

Vercel preview verification and visual QA are pending. GitHub branch creation was rejected by the session's approval policy (`never`); the sandbox also rejected binding a local preview server (`listen EPERM`). No attempt was made to bypass either restriction. The source/build can be reviewed locally, but this is not a delivered PR with a verified preview.

No external listing changes, outreach messages, production deployment or merge.
