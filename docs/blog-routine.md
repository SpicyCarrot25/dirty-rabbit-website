# News y Momentos — weekly drafting routine

Owner instruction: CODEX-BRIEF-seo-pages-blog.md, 13 October 2026.

Keep News y Momentos. Post 1 is the Dirty Rabbit 2026 Summer Guide, based on Canva design DAHNGE5HWkw, with Coffee / Eat / Swim / Explore and the line “No sponsors. No favours. Just what we'd send our friends to.” The named selections must come from that design or Franc; do not substitute a researched list and call it his curation. Since preparation is in October, retain the 2026 summer context and recheck seasonal status before approval.

Every Monday, within the existing marketing analyst run:

1. Read `state/blog-queue.json`, the previous blog draft manifests, `FACTS-CONFIRMED.md`, the approved Google-post source packets and their approval/receipt evidence. `drafts/gbp-posts-2026-10/posts.json` and `receipts.json` are current source pointers. A scheduled receipt is not proof of publication; only an explicit approval record or owner-confirmed source is eligible. Currently A and B are explicitly labelled approved in their source; do not infer approval for C–H solely from their schedule.
2. Reconcile every newly approved Google post by stable source ID plus exact content hash. Put each eligible source into the local weekly queue and prepare a short adaptation. Do not duplicate a source already drafted or published. For revised copy, create a new version and require fresh approval. Use the existing `briefs/v3/<week>/drafts/blog/` output location; write a queue-delta.json there, leaving shared state updates to the supervising process.
3. Aim for two approved blog posts per calendar month, with proposed slots in the first and third weeks. Weekly review is not weekly publication. Count the Summer Guide in its publication month. Queue additional approved Google-post adaptations without publishing beyond two in a month. Do not carry a dated event/closure post into a month where it is no longer useful; mark it expired and record why. An empty eligible queue is a gap, not permission to invent a Google source.
4. Adapt to 150–300 words with one useful local detail, a descriptive title and description, a verified existing photo if appropriate, one relevant internal link and a Maps CTA. Match the source facts; check any opening dates, menus and seasonal claims again. Google posts remain CA / ES / EN in that order. Start blog adaptations in Spanish, unless Franc selects another language; additional language versions are the same editorial post, not extra cadence slots.
5. Save approval-only Markdown with `draft: true`; also save source ID, source text hash, approval evidence path, draft hash, proposed month/slot, language and asset provenance in a manifest. Google-post approval does not approve the adapted blog wording. Submit the exact drafts to Franc via the existing local review handoff and link them from the weekly brief, within its existing two-funnel format. Include all files in analyst-completion.json. Do not send messages, post to a channel or claim a delivery receipt from a local file.
6. Franc approves each exact blog version. Only a separately authorized publishing step can change `draft: true` to false, set the real publication date and merge/deploy. Record the resulting URL/receipt after publication. An approval does not itself prove publication. Rejected drafts remain recorded, not resubmitted as new work.

No new scheduler, API collector, paid-model call or outbound delivery was added. The existing Monday runner reads `plans/loop/weekly-task-prompt.md`; its next scheduled opportunity is 19 October. A future scheduled execution and approval delivery have not yet been observed.

## Initial queue

- Post 1: Summer Guide 2026 — source access blocked; intro/structure prepared in the PR, named selections pending Canva/Franc. No publication slot is committed.
- A-coffee-break: explicitly approved Google source; complete Spanish blog adaptation prepared for Franc. Proposed next available slot after post 1, within two posts/month.
- B-autumn-closing: explicitly approved Google source; eligible for a short timely blog adaptation only before 26 October, subject to the two-post cap and Franc's choice. Expire instead of publishing a stale closure notice.
- C–H: source packets and scheduled readbacks exist; verify exact approval evidence before adapting under this routine.
