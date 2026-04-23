# Design System Tokens Index

> ## ⚠️ Agent Instructions
> - Use this index to find exactly what you need
> - Read ONLY the specific file that answers your question
> - **NEVER read `../reference/styles-full.md`** — it is 1746 lines
>   and will consume your entire context budget
> - **NEVER read `../reference/components-full.md`** — same reason
> - If a code example in any token file conflicts with the agentic rules,
>   the agentic rules take precedence

---

## Find Your File

**Colors?** → `colors.md`
- Light/Dark theme semantic colors
- Greyscale (grey1–grey8)
- Base colors (red, blue, teal, orange...)
- Gradients (ai-primary, ai-secondary)
- ⚠️ Read the "How To Apply Colors" header before copying any token

**Typography?** → `typography.md`
- Font sizes, weights, line heights
- Semantic variants (body, title, mainTitle)
- ⚠️ Use NEW names: `body-sm/md/lg`, `heading-sm/md/lg`
- ⚠️ NEVER use: `small`, `medium`, `large`, `xlarge`, `xxlarge`, `xxxlarge`

**Spacing?** → `spacing.md`
- 8px base unit scale: xsmall(4px) → xxlarge(64px)
- ⚠️ The code example uses `style={{}}` — that is demonstration code only.
  Never use `style={{}}` in production.

**Shadows and radius?** → `shape-and-elevation.md`
- Shadow: small / medium / large
- Radius: numeric (50–300) and semantic (medium, large, xlarge, round, full, none)
- ⚠️ Both numeric and semantic names exist. Both are valid.

**className values?** → `css-utilities.md`
- All Lens CSS utility classes
- ⚠️ Read the deprecation header first
- ⚠️ Deprecated: `text:small/medium/large/xlarge/xxlarge/xxxlarge`
- ⚠️ Current: `text:body-sm/md/lg`, `text:heading-sm/md/lg`

**CSS variables for a `.module.css` file?** → `css-variables.md`
- All `--lns-*` custom property names
- ⚠️ Contains a typo: `---lns-fontSize-xxxlarge` (three dashes) — do not copy
- ⚠️ Use current names, not deprecated ones (table provided in that file)
- ⚠️ Gradient variables exist but have NO utility class — use CSS module only

**Responsive behavior?** → `responsive-layout.md`
- Breakpoint prefixes: `xs-`, `sm-`, `md-`, `lg-`
- Algorithmic layouts with Arrange and Split
- Responsive props syntax
- ⚠️ `DemoBox` in examples is NOT a real component — replace with `<Container>`
- ⚠️ `sizeMinMax` examples use deprecated names — use new names
- ⚠️ `useMedia`/`<Media>` have performance cost — prefer CSS-based responsive

---

## Trap Reference: What NOT To Do

| Trap | Why it's a trap | Correct alternative |
|---|---|---|
| `style={{ color: 'var(--lns-color-primary)' }}` | Inline styles forbidden | `<Text color="primary">` or CSS module |
| `style={{ background: 'var(--lns-gradient-ai-primary)' }}` | Inline styles forbidden | CSS module with `background: var(--lns-gradient-ai-primary)` |
| `<Text size="medium">` | Deprecated name | `<Text size="body-md">` |
| `className="text:xlarge"` | Deprecated class | `className="text:heading-sm"` |
| `var(--lns-fontSize-medium)` in CSS module | Deprecated variable | `var(--lns-fontSize-body-md)` |
| `---lns-fontSize-xxxlarge` | Three-dash typo in docs | `var(--lns-fontSize-heading-lg)` |
| `import { DemoBox } from '@loomhq/lens'` | Does not exist | `<Container>` |
| Reading `reference/styles-full.md` | 1746 lines, wastes context | Use targeted files above |
| `<Text sizeMinMax={['medium', 'xlarge']}>` | Deprecated names | `<Text sizeMinMax={['body-md', 'heading-sm']}>` |
| `radius="medium"` when numeric precision needed | Semantic may not match expectation | Check semantic↔numeric table in shape-and-elevation.md |

---

## ⛔ Never Read These For Implementation

| File | Reason |
|---|---|
| `../reference/styles-full.md` | 1746-line combined dump. Wastes full context budget. |
| `../reference/components-full.md` | Same problem. Use `../components/<Name>.md` instead. |