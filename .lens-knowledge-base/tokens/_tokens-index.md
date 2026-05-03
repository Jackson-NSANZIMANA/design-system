# Design System Tokens Index

> ## ⚠️ Agent Instructions — Read This First
>
> Use this index to navigate to exactly the file you need.
> Read ONLY the specific file that answers your question.
>
> **⛔ NEVER read these files for implementation:**
> - `../reference/styles-full.md` — 1746-line combined dump, wastes context budget
> - `../reference/components-full.md` — 7000-line combined dump, wastes context budget
>
> **If a code example in any token file conflicts with the agentic rules,
> the agentic rules take precedence.**

---

## Find Your File

**Need colors?** → `colors.md`
- Light/Dark theme semantic colors, Greyscale, Base colors, Gradients
- ⚠️ Read the "How To Apply Colors" section before using any token

**Need text styling?** → `typography.md`
- Font sizes, weights, line heights, semantic variants
- ⚠️ Use NEW names only: `body-sm` | `body-md` | `body-lg` | `heading-sm` | `heading-md` | `heading-lg`
- ⚠️ NEVER use deprecated names: `small` | `medium` | `large` | `xlarge` | `xxlarge` | `xxxlarge`

**Need spacing or gaps?** → `spacing.md`
- 8px base unit scale: xsmall (4px) → xxlarge (64px)
- ⚠️ Code examples use `style={{}}` — demonstration only, never copy this pattern

**Need shadows or radius?** → `shape-and-elevation.md`
- Shadow: small / medium / large
- Radius: numeric (50–300) AND semantic (medium, large, xlarge, round, full, none)
- Both numeric and semantic names are valid

**Need className values?** → `css-utilities.md`
- All Lens CSS utility classes
- ⚠️ Read the deprecation header before use
- ⚠️ Deprecated: `text:small/medium/large/xlarge/xxlarge/xxxlarge`
- ⚠️ Current: `text:body-sm/md/lg` | `text:heading-sm/md/lg`

**Need CSS variables** → `css-variables.md`
- All `--lns-*` custom property names
- ⚠️ Contains a typo: `---lns-fontSize-xxxlarge` (three dashes) — do not copy, use `--lns-fontSize-heading-lg`
- ⚠️ Lists deprecated variable names — always use current names (table in that file)
- ⚠️ Gradient variables exist but have NO utility class — use a Lens prop that accepts raw CSS strings (e.g. `Container backgroundImage="var(--lns-gradient-...)"`)

**Need responsive behavior?** → `responsive-layout.md`
- Breakpoint prefixes: `xs-` | `sm-` | `md-` | `lg-`
- Algorithmic layouts with Arrange and Split
- ⚠️ `<DemoBox>` in examples does NOT exist in `@loomhq/lens` — replace with `<Container>`
- ⚠️ `sizeMinMax` examples use deprecated names — use `['body-md', 'heading-sm']` not `['medium', 'xlarge']`
- ⚠️ `useMedia` / `<Media>` have JS re-render cost — prefer CSS-based responsive

---

## Trap Reference: What NOT To Do

| Trap | Why | Correct alternative |
|---|---|---|
| `style={{ color: 'var(--lns-color-primary)' }}` | Inline styles always forbidden | `<Text color="primary">` |
| `style={{ background: 'var(--lns-gradient-ai-primary)' }}` | Inline styles always forbidden | `<Container backgroundImage="var(--lns-gradient-ai-primary)" />` |
| `<Text size="medium">` | Deprecated name | `<Text size="body-md">` |
| `className="text:xlarge"` | Deprecated class | `className="text:heading-sm"` |
| `var(--lns-fontSize-medium)` in CSS | Deprecated variable | `var(--lns-fontSize-body-md)` |
| `---lns-fontSize-xxxlarge` | Three-dash typo in docs | `var(--lns-fontSize-heading-lg)` |
| `import { DemoBox } from '@loomhq/lens'` | Does not exist | `<Container>` |
| Reading `reference/styles-full.md` | 1746 lines, wastes context | Use targeted files above |
| `<Text sizeMinMax={['medium', 'xlarge']}>` | Deprecated names | `<Text sizeMinMax={['body-md', 'heading-sm']}>` |
| `className={styles.wrapper}` | Dynamic className — linter error | Static string only: `className="flex p:medium"` |

---

## Linter Ground Truth

The ESLint plugin validates every `className` value against:
`eslint-plugin-lens-compliance/lib/mastery-db.json` → `approvedClasses`

This file contains **1935 approved classes** generated directly from
`@loomhq/lens@12.18.0` package source.

To regenerate after a Lens version update:
```bash
npm run generate:mastery-db
css-utilities.md is the human-readable reference.
mastery-db.json is what the linter actually enforces.
Both are now in sync.
