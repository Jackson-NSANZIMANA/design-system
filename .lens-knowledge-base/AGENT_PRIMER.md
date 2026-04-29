---
file: .lens-knowledge-base/AGENT_PRIMER.md
role: Canonical entrypoint for AI agents (read first, every session)
version: @loomhq/lens@12.14.0
sources-of-truth:
  - introduction.md (worldview)
  - guides/component-definition.md (component contract)
  - CLAUDE.md (behavioral absolutes + linter protocol)
next: .lens-knowledge-base/_ROUTER.md (task → file navigation)
last-validated: 2026-04-29
---

# Lens Agent Primer — Worldview, Grammar, Contract

Why this exists
AI assistants default to generic React (div, className, inline styles). This primer makes Lens your first language: think in Lens, compose in Lens, and retrieve specifics only when needed.

Worldview (from introduction.md)
- Lens is a design language, not just a component library.
- Modular by design: small, predictable parts that compose (like 30k car parts).
- Goals: speed, scalability, consistency — write as little CSS as possible, maximize reuse.
- Components are layout-agnostic and content-agnostic; layout is your job; components adapt.

Component contract (from guides/component-definition.md)
- A component solves as few problems as possible (bounded scope → reusability).
- Built with Lens variables/tokens (typography, color, spacing, radius, shadow).
- Layout-agnostic; content-agnostic (translatable).
- When primitives don’t cover it: use wrappers + var(--lns-*) in CSS modules; if it repeats, // TODO: [LENS-GAP] <describe gap>.

The 4 axioms of Lens (always true)
1) Lens or nothing
- All UI from @loomhq/lens (never third-party UI libs).
- If Lens lacks it: compose from Container, Split, Arrange, Align, Spacer, Text.
- If still insufficient: CSS module + var(--lns-*) for wrapper/custom elements only; never modify Lens internals.

2) Tokens are the language of values
- Use named tokens everywhere: body-sm, danger, medium, radius:medium, shadow:small.
- If you’re typing px/rem/hex/numbers-as-values: stop — find the token.

3) Structure components first
- Split = flex layouts; Arrange = grid; Container = styled box; Align = positioning within a box; Spacer = inter-element spacing.
- Raw div is last resort (refs/portals/absolute shells/3rd-party DOM). Style wrappers with Lens utilities only (tokens/css-utilities.md).

4) The linter is infallible
- Errors mean your code is wrong, not the rule.
- Never: eslint-disable, @ts-ignore, rule tampering.
- Fix by consulting the correct component/tokens docs and regenerating.

The Lens grammar (7 categories you compose with)
- Structure: Container, Split, Arrange, Align, Spacer
- Content: Text, Icon, Avatar, Pill, Indicator, Media
- Action: Button, TextButton, IconButton, Link
- Input: TextInput, Select, Checkbox, Radio, Switch, Textarea, Typeahead (always inside FormField)
- Feedback: Toast, NotificationBar, Tooltip, Popover, ErrorContainer
- Loading: Loader, SkeletonContainer, SkeletonText, EllipsesLoader, WaveformLoader, LogoLoader
- Overlay: Modal, ModalCard, Backdrop, Dropdown

How to think (3 questions before coding)
1) What category is this UI need? (use grammar above)
2) Does a Lens component already exist for it?
   - If yes: use it; get exact API from components/[Name].md.
   - If no: compose from Structure primitives. Escalate persistent gaps (LENS-GAP).
3) Am I speaking Lens or translating into it?
   - Speaking Lens: structure components first; Text for all text; tokens everywhere.
   - Translating: divs + flex classes; raw p/h1/spans; px/hex values. If translating: stop and rewrite in Lens.

Behavioral absolutes (from CLAUDE.md)
- No inline styles. Ever. Even var(--lns-*) in style={{}} is forbidden.
- No Tailwind (hyphen syntax like items-center, p-4). Lens uses colon syntax (items:center, p:medium).
- No raw interactive HTML: button, input, select, textarea, a. Use Lens: Button, TextInput, Select, Textarea, Link.
- className with Lens utility classes allowed on wrappers; on Lens components: external spacing/grow/shrink/self only — never appearance/layout (use props).
- Refs: refHandler. Element override: htmlTag. Booleans: is*/has*.

When Lens “can’t”
- Level 1: Compose with Container/Split/Arrange/Text/Spacer/Align.
- Level 2: Lens utility classes on wrappers only (from tokens/css-utilities.md).
- Level 3: CSS modules with var(--lns-*) for wrapper/custom elements.
- Level 4: Pattern repeats → // TODO: [LENS-GAP] <precise need>.

Idiomatic test (quality beyond correctness)
- Lens components before raw HTML?
- All values are named tokens (not px/hex/numbers-as-values)?
- Would a Loom designer say “yes, this belongs here”?
If any answer is “no,” you’re likely compliant but not idiomatic — revise.

Routing (what to read next; load only what you need)
- Find a component: COMPONENT-INDEX.md → then components/[Name].md
- Common syntax patterns: QUICK-REFERENCE.md
- className values: tokens/css-utilities.md (confirm class exists)
- Color/spacing/radius/shadow tokens: tokens/colors.md | spacing.md | shape-and-elevation.md
- CSS variables: tokens/css-variables.md (read deprecations table)
- Responsive: tokens/responsive-layout.md (DemoBox not real → use Container)
- ForwardRef info: MASTER-REFERENCE.md (Forward Ref column)
- Composition inspiration: guides/showcase.md
- Deeper WHY: introduction.md + guides/component-definition.md

Sources consulted (required in every UI code response)
- List the exact files you read (paths). Example:
  Sources: .lens-knowledge-base/COMPONENT-INDEX.md; .lens-knowledge-base/components/Button.md
- If you didn’t read any: say so and pause — ask before proceeding.

Never load (protect attention budget)
- reference/components-full.md (7000 lines) — never
- reference/styles-full.md (1746 lines) — never

Self-correction loop (when linter errors)
- Read the error precisely
- Load the relevant component doc (components/[Name].md) and/or tokens/css-utilities.md
- Regenerate respecting the exact API/contract
- Never silence or bypass the linter