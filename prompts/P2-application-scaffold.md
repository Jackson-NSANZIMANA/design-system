---
file: prompts/P2-application-scaffold.md
role: Bootstrap src/ from zero — used once per project
---

Scaffold the application foundation inside src/.

src/ is empty. You are the first engineer.
The architecture you establish becomes the foundation
for every feature that follows.
Reason carefully. Make decisions you can defend.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION SPECIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Framework:      [e.g. Next.js 15 App Router / Vite + React 18]
Language:       TypeScript strict
Description:    [what this product does — 2 to 3 sentences]
Primary routes: [list the main pages]
Data:           [mock / REST / GraphQL]
Auth:           [yes — method / no]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 1 — ARCHITECTURAL PLAN
Output before any code. Wait for approval.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think through these openly. Show your reasoning.
These are your decisions — not a checklist to fill.

1. FOLDER STRUCTURE
   Propose the complete src/ directory tree.
   One sentence per directory explaining its purpose.
   Organize for engineers who will maintain this.

2. LENS INITIALIZATION
   Identify the exact file where this goes:
     getThemeStylesString() + getAllCssVarsString()
   See QUICK-REFERENCE.md setup section.
   Name the file. Explain why it goes there.

3. SHARED FOUNDATIONS
   What do all pages share — layout, navigation,
   providers, error boundaries?
   Name the Lens STRUCTURE components that form
   their skeletons. Do not implement yet.

4. IMPLEMENTATION ORDER
   List every file to create in dependency order.
   One sentence of justification per file.
   What must exist before what?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Present the plan. Wait for my approval.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 2 — IMPLEMENTATION SEQUENCE
After approval. In this order. No skipping.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1 — Lens initialization
  Entry point only. Wire theme and CSS vars.
  Confirm Lens renders before building anything on top.

STEP 2 — Root layout
  STRUCTURE components only. No content. No data.
  Spatial logic must be sound before it is filled.

STEP 3 — Shared components
  Apply the 3-question loop to every element.

STEP 4 — First route
  Use P3-feature-build.md for this step.

STEP 5 — Remaining routes
  P3-feature-build.md for each.

After every step:
  Sources consulted: [exact paths]
  Linter status: [passed / not yet run / error]

After all steps: run P6 before declaring done.