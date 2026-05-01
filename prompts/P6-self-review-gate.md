---
file: prompts/P6-self-review-gate.md
role: Pre-submission gate — agent runs on itself
---

Self-review gate.
Zero issues required to pass.
Fix everything found. Re-run from Layer 1.
Do not submit until clean.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYER 1 — IDIOMATIC TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For every file written this session:

| src/ file | Lens-first? | Tokens only? | Designer approved? |
|-----------|-------------|--------------|-------------------|
| [path]    | yes / no    | yes / no     | yes / no          |

Lens-first: reached for Lens component before div?
Tokens only: no px, hex, rem anywhere?
Designer approved: would a Loom designer say it belongs?
Uncertain → answer is no. Fix it.

Any no → fix → update table → then Layer 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYER 2 — PROHIBITION SCAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every src/ file written this session:

□ style={{}}                               clear / line __
□ Tailwind hyphen class                    clear / line __
□ Raw button input select textarea a       clear / line __
□ disabled= not isDisabled                 clear / line __
□ loading= not hasLoader                   clear / line __
□ as="a" not htmlTag="a"                   clear / line __
□ ref={ref} not refHandler                 clear / line __
□ leftIcon rightIcon                       clear / line __
□ Text size deprecated string              clear / line __
□ Base color not semantic token            clear / line __
□ Dynamic className={styles.variable}      clear / line __
□ px rem hex outside CSS modules           clear / line __
□ eslint-disable anywhere                  clear / line __
□ .lens-knowledge-base/ files modified     clear / confirmed

Any found → fix → re-run full scan.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYER 3 — STATE COMPLETENESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Features and pages only. Skip for utility components.

□ Loading → SkeletonContainer or SkeletonText?
□ Empty   → Lens components communicate emptiness?
□ Error   → ErrorContainer or NotificationBar?
           Not Toast. Not Modal.
□ All three reachable from mock data without
  modifying component code?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYER 4 — ARCHITECTURE INTEGRITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ Lens initialization in framework entry point?
□ Every raw div has inline comment justifying use?
□ Structure wraps Content and Action correctly?
□ Every INPUT inside FormField?
□ No application code outside src/?
□ No knowledge base files modified?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESULT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Issues found: [n]

n > 0:
  1. [src/file:line] — [problem] — [correct approach]
  Fix all. Return to Layer 1. Re-run complete gate.

n = 0:
  All layers passed.
  Sources consulted: [paths]
  Linter status: passed
  Ready to submit.