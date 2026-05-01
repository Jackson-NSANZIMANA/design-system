---
file: prompts/README.md
role: Prompt system index
lensVersion: 12.14.0
---

# Lens Prompt System

| Prompt | File | When |
|--------|------|------|
| P1 | P1-session-starter.md | First message every session |
| P2 | P2-application-scaffold.md | Once — src/ is empty |
| P3 | P3-feature-build.md | Pages and multi-component features |
| P4 | P4-component-build.md | Single components |
| P5 | P5-correction-loop.md | Every linter error |
| P6 | P6-self-review-gate.md | Before every submission |
| P7 | P7-gap-report.md | End of every session |

P0 lives in tool config files only — never in conversation.
P6 is run by the agent on itself — never sent by the engineer.

## Flow

New project:   P1 → P2 → [P3 or P4] → P6 → P7
Every session: P1 → [P3 or P4] → P6 → P7
Linter error:  P5 → fix → re-run P6