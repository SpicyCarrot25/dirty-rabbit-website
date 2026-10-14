# Automatic review

Every ready PR to main receives an independent Claude Sonnet review through OpenRouter. The required `AI review` status passes only on a validated, complete verdict with no blocking findings for the latest commit. Blocking issues and service failures produce a plain-English PR comment and leave the PR open. CI runs the existing tests (and the website build) separately.

The privileged runner comes from the trusted base revision. PR files are read as text, never executed in that runner. The model receives full before/after changed source files and patches within a 30-file/240-KB limit, without runtime credentials or tools. Potential credential content, binary changes, oversized changes, external forks and changes to review/CI policy require a maintainer review. Pattern detection cannot recognize every possible secret; never commit credentials. Routing requires ZDR endpoints and denies provider data collection.

Set the existing OpenRouter key as repository secret `OPENROUTER_API_KEY`. Require `AI review` and `Build and test` from GitHub Actions, keep other required checks, require an up-to-date branch and zero human approvals, disable force pushes/deletion, and allow administrator bypass. Enable repository auto-merge and then variable `AI_AUTO_MERGE_ENABLED=true`. The separate merge job only queues the reviewed revision and respects branch protection. Changes to this gate itself require explicit administrator review/bypass.

New commits rerun review; update an out-of-date branch to rerun against main. After transient service failure, rerun the failed Actions workflow. Pause new auto-merge requests with `AI_AUTO_MERGE_ENABLED=false`; disable auto-merge on already queued PRs separately. Required checks remain in place.

This gate is a static second opinion, not a guarantee against bugs. It does not include unchanged repository context; missing essential context must block. Merging main triggers the existing production deployment integration.
