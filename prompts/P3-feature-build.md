---
file: prompts/P3-feature-build.md
role: Pages and multi-component features
---

Feature: [name]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 1 — THINK BEFORE YOU BUILD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Apply the 3-question loop from AGENT_PRIMER.md
to every UI element this feature requires.

UI SCHEMA

| UI Element | Category | Lens Component | Token Values | Status |
|------------|----------|----------------|--------------|--------|

  UI Element    every distinct piece of UI named precisely
  Category      one of the 7 grammar categories only
  Lens Component
    Named    → exact component from COMPONENT-INDEX.md
    COMPOSE  → Structure primitives — list them
    GAP      → Lens cannot cover this — describe exactly
  Token Values  every value as a named token
                if you cannot name it: find it first
  Status
    SPEAKING  → Lens-native
    COMPOSING → building from primitives
    GAP       → needs workaround

STATE ARCHITECTURE
  Loading → [Lens loading components — placed where]
  Empty   → [zero-content state in Lens]
  Error   → [ErrorContainer — location]
            [never Toast, never Modal for errors]

FILES IN src/
  [exact file paths with one-line purpose each]

SOURCES TO CONSULT
  [exact .lens-knowledge-base/ paths]
  Route every component through _ROUTER.md first.
  Do not pre-decide files — discover through reasoning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Stop. Present schema. Wait for approval.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 2 — LAYERED IMPLEMENTATION
After approval only.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LAYER 1 — TypeScript interfaces
  Data shapes only. No JSX.

LAYER 2 — Structure skeleton
  STRUCTURE components only.
  No CONTENT. No ACTION. No INPUT yet.

LAYER 3 — Content and states
  Add CONTENT. Implement loading, empty, error fully.
  All three must exist before Layer 4.

LAYER 4 — Actions and interactions
  Add ACTION and INPUT. Wire every handler.

LAYER 5 — Self-review
  Run P6-self-review-gate.md. Fix everything. Then submit.

After each layer:
  Sources consulted: [paths]
  Linter status: [result]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Write what the user sees and does.
 Not which components to use.
 Product behavior here. Lens reasoning is the agent's job.]