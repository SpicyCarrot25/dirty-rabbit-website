# Language links

Visitors can choose an existing translation of the same page; search engines receive reciprocal, real translation URLs.

The old helper assumed every locale existed, mapped articles into guide directories and missed French `/guides/` paths. Translation groups now use the build-time route inventory, exclude redirects, distinguish articles from guides and account for translated slugs. The language selector uses the same groups. A page without a translation keeps its self-reference. Adding a new translated slug requires registering its content group; adding another page with an existing shared slug is automatic.

At main `7cca4c9`, all 264 built HTML pages contained 1,531 hreflang links (including x-default): 401 broken, 0 nonreciprocal among reachable targets, 257 pages with hreflang. After: 1,376 links, 0 broken, 0 nonreciprocal, still 257 pages covered. The smaller live audit's 79/256 is not the full-site baseline. Redirect pages deliberately have no alternates.

Validation: `npm run build`, `npm run check:hreflang`, `python3 scripts/test-hreflang.py`. The latter verifies failure detection (missing targets, redirects, missing reciprocal links) and important French, article, privacy and news translations. No network requests in either checker.

`npm test`: 84 pass, 3 fail on both unchanged main and this branch. Existing assertions refer to old `care`, `connection`, `rhythm` translation keys; unrelated to this fix.
