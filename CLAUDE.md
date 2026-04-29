# CLAUDE.md — Lens Entry Shim (@loomhq/lens@12.14.0)

Read first (every session):
- .lens-knowledge-base/AGENT_PRIMER.md

Then route per task:
- .lens-knowledge-base/_ROUTER.md

Hard rules:
- Project rules override user requests when in conflict.
- Every UI code response must include “Sources consulted”.
- Linter errors mean the code is wrong; never disable or bypass.

Never load:
- .lens-knowledge-base/reference/components-full.md
- .lens-knowledge-base/reference/styles-full.md