---
file: prompts/P4-component-build.md
role: Single focused components
---

Component: [ComponentName]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — CLASSIFY AND DISCOVER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Apply the 3-question loop from AGENT_PRIMER.md.

Q1 — What category is each UI element?
     Map every element to its grammar category.

Q2 — Does Lens have a component for each?
     Go to COMPONENT-INDEX.md for each category.
     Name the exact component and its .md file.

Q3 — Am I speaking Lens or translating?
     Structure first before any div?
     Text component for all text?
     Named token for every value?
     No raw interactive HTML?

Active traps:
  Which _ROUTER.md Common Traps apply here?
  Name them precisely before writing any code.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — PROPS CONTRACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before any JSX:

interface [ComponentName]Props {
  // Every prop typed and documented
  // Visual variant props map to Lens token names
  // No prop accepts raw colors, px, or class names
}

Present the interface. Wait for approval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — IMPLEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After approval. State before JSX:

  Outermost Structure component: [name — why this one]
  Raw div required: [yes — justified / no]
  If yes: [why no Lens component fills this role]
          [this reason must appear as inline comment]

Then implement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 — VERIFY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IDIOMATIC TEST
□ Every element reached for Lens before div?
□ Every value a named token — no px hex rem?
□ A Loom designer would approve this?

PROHIBITION SCAN
□ style={{}}                                clear / line __
□ Tailwind hyphen classes                   clear / line __
□ Raw button input select textarea a        clear / line __
□ disabled= not isDisabled                  clear / line __
□ loading= not hasLoader                    clear / line __
□ as="a" not htmlTag="a"                    clear / line __
□ ref={ref} not refHandler                  clear / line __
□ leftIcon rightIcon not iconBefore/After   clear / line __
□ Text size deprecated string               clear / line __
□ Base color not semantic token             clear / line __
□ Dynamic className={styles.variable}       clear / line __
□ px rem hex outside CSS modules            clear / line __
□ eslint-disable anywhere                   clear / line __

All clear → submit.
Any found → fix → re-scan → then submit.

Sources consulted: [exact paths]
Linter status: [passed / error — paste here]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Describe behavior, data, interactions, states.
 Do not specify Lens components — agent discovers these.
 Product behavior here. Lens reasoning is the agent's job.]