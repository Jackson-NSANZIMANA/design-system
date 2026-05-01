---
file: prompts/P5-correction-loop.md
role: Linter error recovery — deterministic fix routing
---

Linter error. Correction mode.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ERROR INPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
File:   [exact src/ file path]
Line:   [line number]
Error:  [exact linter message — word for word]
Code:   [exact failing line or block]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — ROUTE BEFORE YOU REASON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do not guess. Read _ROUTER.md first.

Component API error →
  .lens-knowledge-base/components/[Name].md

className or utility error →
  .lens-knowledge-base/tokens/css-utilities.md

Forbidden pattern →
  .lens-knowledge-base/_ROUTER.md Common Traps

Unsure → start at _ROUTER.md and let it route you.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — DIAGNOSE BEFORE YOU FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Root cause:
  What assumption did you make that was wrong?
  Not the error description — the assumption behind it.
  What did you believe that the source file contradicts?

Correct API:
  Quote exact correct usage from the source file.
  Do not paraphrase.

Trap mapping:
  Which _ROUTER.md Common Traps row matches?
  Quote: You wrote / Problem / Correct.
  No match: note explicitly — becomes Step 4 candidate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Show corrected lines only.
Full file only if structural change required.

Never:
  Suppress the linter
  Add eslint-disable
  Modify mastery-db.json
  Modify eslint.config.mjs

The linter is right. Fix the code.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 — CLOSE THE LOOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Already in _ROUTER.md?
  Yes → quote the entry. Note if it was insufficient.
  No  → produce:

  ┌─ TRAP CANDIDATE ──────────────────────────────┐
  │ You wrote:  [wrong pattern]                   │
  │ Problem:    [why it fails — one sentence]     │
  │ Correct:    [right Lens approach]             │
  │ Add to:     _ROUTER.md Common Traps           │
  │ Priority:   CRITICAL / HIGH / MEDIUM / LOW    │
  └───────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sources consulted: [exact paths]
Linter status: [result after fix]