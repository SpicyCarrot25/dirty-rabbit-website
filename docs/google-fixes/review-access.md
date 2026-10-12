# Review access

Every guest can open the existing Google review link immediately, regardless of their star rating or whether they send private feedback.

Applied the stored four-language marketing patch directly to current main `7cca4c9`; no rebase conflicts. Only moved the Google link and its existing translated explanation outside the five-star-only panel. Private feedback behavior and destinations remain unchanged.

Validation: `npm run build` passes; `node scripts/check-review-access.mjs` passes 128 visibility assertions across Spanish, English, Catalan and French, no-JavaScript HTML, ratings 0–5, and feedback success/failure. All requests in the checker are mocked, no external resources load, and no review or feedback is sent. The existing Google URL is preserved; the check does not open or submit to Google.

`npm test`: the same 84 passing and 3 pre-existing old-brand-pillar assertion failures as main. Before publication, inspect the hosted preview visually and verify the existing link opens the intended business, without submitting a review.
