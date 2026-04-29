# CLAUDE.md — Lens Behavior Shim
# Canonical source: .lens-knowledge-base/AGENT_PRIMER.md
# @loomhq/lens@12.14.0

Before any UI code:
1) Read: .lens-knowledge-base/AGENT_PRIMER.md  (worldview + grammar + contract)
2) Route: .lens-knowledge-base/_ROUTER.md      (task → file navigation)
3) Declare sources in every UI response:
   Sources: [list files you read]
   If none: say so and ask before proceeding.

The linter is ground truth:
- Validates className against mastery-db.json (derived from Lens source)
- Errors mean your code is wrong
- Never: eslint-disable, @ts-ignore, rule tampering
- Fix by reading the correct component/tokens docs

Three absolute prohibitions:
- No inline styles (style={{}}) — even with var(--lns-*)
- No Tailwind (hyphen syntax like items-center, p-4); Lens uses colons (items:center, p:medium)
- No raw interactive HTML — use Lens components

When Lens “can’t”:
- Compose from Container/Split/Arrange/Text/Spacer/Align
- Use Lens utilities on wrappers; CSS modules with var(--lns-*) for custom wrappers
- Repeating gap → // TODO: [LENS-GAP] <describe precisely>