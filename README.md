# Lens by Loom — AI-Optimized Design System Layer

> A governance, knowledge, and enforcement layer that makes the [Loom Lens Design System](https://lens.loom.dev) AI-consumable, AI-safe, and AI-guided.

---

## What This Is

This is **not** a component library. It is an **AI agent interface** to the Loom Lens design system (`@loomhq/lens`).

It provides:

- **55 documented components** with usage rules, props, and examples
- **4 custom ESLint rules** that enforce Lens-first development automatically
- **Machine-readable databases** — 1,935 approved CSS utility classes, 103 component signatures
- **Governance rules** for every major AI coding tool (Cursor, Claude, Windsurf, Cline, Copilot)
- **Pattern library** — forms, errors, settings, discovery, disabled states
- **Token documentation** — colors, spacing, typography, elevation, responsive layout
- **Automated validation** — KB validation and lint DB freshness checks in CI

---

## For AI Agents — Start Here
**Note:**
_"Before AI coding: open AGENT_PRIMER.md "_

When building UI with this system, follow this lookup order:

1. AGENTS.md or CLAUDE.md ← governance rules
2. QUICK-REFERENCE.md ← fast component lookup
3. COMPONENT-INDEX.md ← full component list
4. components/<ComponentName>.md ← props + examples
5. tokens/_tokens-index.md ← token reference
6. patterns/ ← composition patterns


**Never use raw HTML elements.** Never apply custom CSS to Lens components. Always use Lens primitives first.

---

## For Human Developers

### Prerequisites

- Node 20 LTS
- pnpm 9.x

### Setup

```bash
git clone https://github.com/Jackson-NSANZIMANA/design-system.git
cd design-system
pnpm install
```
pnpm install automatically installs Husky pre-commit hooks via the prepare script.

### Validate the Knowledge Base
```bash
pnpm kb:validate
```
Syncs TypeScript types from `@loomhq/lens`, validates all 81 markdown links, and verifies 103 component signatures.
### Regenerate Lint Databases
```Bash
pnpm generate:lint-dbs
pnpm verify:lint-dbs
```
Run after upgrading `@loomhq/lens`.


## Project Structure
```text
.
├── AGENTS.md                          # AI governance rules (Cursor, general)
├── CLAUDE.md                          # Claude-specific governance rules
├── .cursor/rules/                     # Cursor IDE rule files
├── .windsurfrules                     # Windsurf IDE rules
├── .clinerules                        # Cline rules
├── .github/copilot-instructions.md    # GitHub Copilot rules
│
├── .lens-knowledge-base/
│   ├── QUICK-REFERENCE.md             # Fast lookup for AI agents
│   ├── COMPONENT-INDEX.md             # All 55 components listed
│   ├── MASTER-REFERENCE.md            # Full reference document
│   ├── components/                    # Individual component docs
│   ├── tokens/                        # Colors, spacing, typography, elevation
│   ├── patterns/                      # Forms, errors, settings, discovery
│   ├── guides/                        # Icons, illustrations, layout guide
│   ├── reference/                     # Full component + styles reference
│   └── type-declarations/             # Synced from @loomhq/lens
│
├── eslint-plugin-lens-compliance/     # Custom ESLint enforcement plugin
│   └── lib/rules/
│       ├── enforce-lens-primitives    # No raw <button>, <input>, <a>, etc.
│       ├── forbid-styling-props       # No inline style, no non-Lens classes
│       ├── component-mastery          # Valid props, required props, nesting
│       └── no-eslint-disable          # No bypassing rules
│
├── scripts/                           # Validation and generation scripts
│   ├── generate-mastery-db.js         # Generates 1,935 approved CSS classes
│   ├── generate-component-mastery-db.js  # Generates component prop DB
│   ├── verify-lint-db-fresh.js        # Confirms DBs match Lens version
│   └── kb/                            # KB validation scripts
│
└── src/                               # Frontend application (coming)
```
---

## Enforcement Stack
Every commit is checked by:

1. guard-protected-paths.sh — prevents modifying enforcement files without explicit flag
2. guard-file-system.sh — prevents Tailwind, CSS files, styled-components patterns in src/
3. verify:lint-dbs — confirms mastery DBs are fresh for current Lens version
4. ESLint — runs 4 custom Lens compliance rules on all staged TS/TSX files
Every push to `main` triggers CI which repeats all of the above.
---
## Design Principles

|**Rule**	|**Meaning**|
|-------|-------|
|**Lens First**|	Always check if a Lens component exists before writing custom code
|**No Component Overrides**|	Never apply custom CSS directly to Lens components
|**Wrapper Pattern**|	For edge cases, build custom wrappers using Lens tokens (var(--lns-*))
|**Escalate Gaps**|	If Lens lacks something, mark with // TODO: [LENS-GAP] <description>
|**No eslint-disable**|	Fix the code; never suppress enforcement

---

## Lens Version
Currently tracking: `@loomhq/lens v12.14.0`

To upgrade: update @loomhq/lens, then run pnpm kb:validate && pnpm generate:lint-dbs.
---
## Author
Jackson NSANZIMANA
