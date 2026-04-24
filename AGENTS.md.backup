# PROJECT AI CODING MANDATE — LENS DESIGN SYSTEM

## ⚠️ CRITICAL: READ BEFORE WRITING ANY FRONTEND CODE

This project uses **Lens** (`@loomhq/lens`), the official Loom design system,
as the **sole and exclusive** frontend component library and styling system.

---

## Core Philosophy & Principles

**The Core Doctrine**
_"No frontend element shall exist outside Lens governance."_

**The Lens Pipeline**

- **Lens First Every UI need starts with a Lens catalog lookup.**

- **Lens Only Zero custom CSS/components unless Lens lacks it.**

- **Lens Always Continuous compliance verification.**

## Exception Protocol

- _If Lens genuinely lacks a needed component, follow these steps:_

- Compose from existing Lens primitives.

- Use Lens design tokens for all styling.

- Document the gap for future Lens contribution.

- _NEVER_ invent raw CSS/HTML outside the Lens token system.

---

**Documentation:** https://lens.loom.dev
**Package:** `@loomhq/lens@12.14.0`
**Local Knowledge Base:** `.lens-knowledge-base/`
**Full component docs:** `.lens-knowledge-base/reference/components-full.md` (7000+ lines)
**Full styles docs:** `.lens-knowledge-base/reference/styles-full.md` (1745 lines)

---

## ABSOLUTE RULES (ZERO EXCEPTIONS)

### Rule 0: KB-FIRST LOOKUP ORDER (MANDATORY)

Consult in this exact order. Stop when you have what you need.

**For component API questions:**
1. `.lens-knowledge-base/QUICK-REFERENCE.md`
2. `.lens-knowledge-base/COMPONENT-INDEX.md`
3. `lens-knowledge-base/components/<ComponentName>.md`
**For token and styling questions:**
4. `.lens-knowledge-base/tokens/_tokens-index.md`
   → Then the specific file it points to:
   - Colors → `tokens/colors.md`
   - Typography → `tokens/typography.md`
   - Spacing → `tokens/spacing.md`
   - Shadows/radius → `tokens/shape-and-elevation.md`
   - **className needed** → `tokens/css-utilities.md` ← MANDATORY before any className
   - CSS variables → `tokens/css-variables.md`
   - Responsive → `tokens/responsive-layout.md`

5. `.lens-knowledge-base/exports-verified.json`
6. `https://lens.loom.dev` (last resort only)

**⛔ NEVER read these files for implementation guidance:**
- `reference/styles-full.md` — 1746-line dump, wastes full context budget
- `reference/components-full.md` — same problem

**Mandatory checks before writing any className:**
- Have you read `css-utilities.md` in this session? If not, read it now.
- Is the class you are writing in that file? If not, it is forbidden.
- Are you using deprecated typography names (`text:small`, `text:medium`,
  `text:large`, `text:xlarge`, `text:xxlarge`, `text:xxxlarge`)? Use new names.
   **Requirement:** In every response that writes UI code, include:

- Sources consulted: with file paths (local), and optionally a URL if needed.

### Rule 1: ONLY Lens Components

- **ALWAYS:** import { Button } from '@loomhq/lens'
- **NEVER:** <button className="btn">
- **NEVER:** import { Button } from '@chakra-ui/react'
- **NEVER:** import { Button } from '@mui/material'
- **NEVER:** import { Button } from 'antd'
- **NEVER:** Creating custom styled components

---

### Rule 2: ONLY Lens Design Tokens for Styling

**Styling authority hierarchy — apply in order:**

**LEVEL 1 — Lens component props (always preferred)**
- **ALWAYS:** Use Lens component props: `padding="medium"`, `color="primary"`, `gap="small"`
- **ALWAYS:** Use semantic spacing: `xsmall | small | medium | large | xlarge | xxlarge`

**LEVEL 2 — Lens CSS utility classes**
- **ALLOWED on raw wrapper elements:** Any class from `css-utilities.md`
- **ALLOWED on Lens components:** ONLY external spacing/positioning utilities
  that affect layout relationships, NOT internal appearance
  - ✅ `mr:small`, `ml:auto`, `mt:medium`, `mb:large` (margins — external spacing)
  - ✅ `relative`, `absolute`, `grow:1`, `shrink:0` (layout relationship)
  - ❌ `shadow:large`, `radius:medium`, `bgc:primary`, `c:red`, `text:body`
    (these modify visual appearance — use component props instead)
- **Syntax rule:** Lens utilities use `property:value` (colon) or bare words.
  NEVER use hyphen-separated utilities — those are Tailwind.

**LEVEL 3 — CSS Modules with Lens CSS variables (complex layout fallback)**
- **ALLOWED:** `.module.css` files when Levels 1–2 cannot solve the need
- **ALWAYS:** Values must use ONLY Lens CSS variables: `var(--lns-space-*)`,
  `var(--lns-color-*)`, `var(--lns-radius-*)`, `var(--lns-shadow-*)`
- **NEVER:** Hardcoded `px`, `rem`, `#hex`, `rgb()` values in CSS modules

**ALWAYS FORBIDDEN — no exceptions, no levels:**
- **NEVER:** `style={{}}` inline styles with any values whatsoever
- **NEVER:** Tailwind classes — identified by hyphen-separated syntax:
  `flex-col`, `items-center`, `justify-between`, `p-4`, `text-lg`, `bg-blue-500`
- **NEVER:** CSS-in-JS: `styled-components`, emotion `css={}` prop
- **NEVER:** `.scss` / `.less` files
- **NEVER:** Hardcoded pixel/color/rem values anywhere

**The Tailwind vs Lens identification rule:**
```
BEFORE writing any className value, ask:
  1. Does this class appear in css-utilities.md?    YES → allowed (with placement rules above)
                                                    NO  → FORBIDDEN
  2. Does this use hyphen-separated syntax?
     (items-center, flex-col, p-4)                  YES → Tailwind → FORBIDDEN
     (items:center, flexDirection:column, p:large)  YES → Lens     → check placement rules
```
---

### Rule 3: Lens Layout Components — Primary Tool, With Defined Escape Hatches

**Primary rule — always try these first:**
- **ALWAYS:** `<Split>` for flexbox layouts
- **ALWAYS:** `<Arrange>` for CSS Grid layouts
- **ALWAYS:** `<Container>` for containers with padding/border/shadow/radius
- **ALWAYS:** `<Spacer>` for spacing between elements
- **ALWAYS:** `<Align>` for positioning content within a container

**When raw wrapper elements are permitted:**

A raw `<div>` or `<span>` is allowed when a Lens layout component
cannot express what is needed AND the wrapper does not replace a
Lens component — it wraps one.

Valid reasons:
1. Positioning that `<Container>` props cannot express
   (e.g. `position: absolute` on a wrapping shell)
2. React interop: refs, portals, event boundaries
3. Third-party library DOM requirements
4. Display utilities needed at a structural level
   (`flex`, `block`, `none`, responsive show/hide)

Style raw wrappers with classes from `css-utilities.md` ONLY.

**The corrected forbidden example and why:**

```tsx
// ❌ WHAT THE RULE USED TO SAY WAS FORBIDDEN:
<div className="flex items-center">

// WHY IT'S ACTUALLY TWO SEPARATE VIOLATIONS:
//   "flex"         → EXISTS as Lens utility (display: flex) — the word is fine
//   "items-center" → TAILWIND syntax — FORBIDDEN
//                    The Lens equivalent is "items:center" (colon, not hyphen)

// ✅ THE CORRECT LENS VERSION OF THAT SAME THING:
<div className="flex items:center">
```

**Complete placement rules for className:**

| Element | Spacing utilities (mr:*, ml:*, mt:*, mb:*, mx:*, my:*) | Layout utilities (flex, block, items:*, justify:*, grow:*) | Appearance utilities (shadow:*, radius:*, bgc:*, c:*, text:*) |
|---|---|---|---|
| Raw `<div>` / `<span>` | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| Lens layout components (`<Split>`, `<Arrange>`, `<Container>`) | ✅ Allowed (external spacing only) | ❌ Use component props | ❌ Use component props |
| Lens UI components (`<Button>`, `<Text>`, `<Icon>`, etc.) | ✅ Allowed (external spacing only) | ❌ Use component props | ❌ Use component props |

**Real examples from css-utilities.md (canonical patterns):**

```tsx
// ✅ CORRECT — wrapper div with Lens layout utilities
<div className="flex items:center">
  <div className="border p:medium">A</div>
  <div className="border p:xlarge ml:small">B</div>
</div>

// ✅ CORRECT — spacing utility on Lens component (external margin only)
<div className="flex flexWrap items:center">
  <Button className="mr:small">Cancel</Button>
  <Button variant="primary">Save</Button>
  <TextButton className="ml:auto">Options</TextButton>
</div>

// ✅ CORRECT — positioning wrapper
<div className="relative width:full border p:large">
  <div className="absolute right:0 top:0 border">
    <div className="p:small">Absolute</div>
  </div>
</div>

// ✅ CORRECT — responsive utilities
<div className="block sm-none">show on xsmall and smaller</div>
<div className="none sm-block md-none">show only on small</div>

// ❌ FORBIDDEN — Tailwind syntax (hyphen-separated)
<div className="flex items-center gap-4 p-4">

// ❌ FORBIDDEN — appearance utility on Lens component internal
<Button className="shadow:large radius:medium bgc:primary">

// ❌ FORBIDDEN — inline styles always
<div style={{ display: 'flex', alignItems: 'center' }}>

// ❌ FORBIDDEN — raw div replacing a Lens layout component
// (when <Split> or <Arrange> would work)
<div className="flex items:center gap:medium">  ← use <Split> instead
```

**Decision test — before writing any raw `<div>`:**
```
Can <Split>, <Arrange>, <Container>, <Spacer>, or <Align> do this?
  YES → Use the Lens component. Stop.
  NO  → Document why, then use a raw wrapper with css-utilities.md classes only.
```

---

### Rule 4: ONLY Lens Typography — With Deprecation Enforcement

**Component usage:**
- **ALWAYS:** `<Text>` for ALL semantic text content
- **ALWAYS:** New size names: `body-sm` | `body-md` | `body-lg` |
  `heading-sm` | `heading-md` | `heading-lg`
- **NEVER:** Deprecated size names: `small` | `medium` | `large` |
  `xlarge` | `xxlarge` | `xxxlarge`
- **NEVER:** Raw `<h1>–<h4>`, `<p>`, `<span>` for semantic text
- **NEVER:** Custom font-size or font-weight via style={{}}

**Deprecation enforcement table:**

| ❌ Deprecated (forbidden in new code) | ✅ Required replacement |
|---|---|
| `<Text size="small">` | `<Text size="body-sm">` |
| `<Text size="medium">` | `<Text size="body-md">` |
| `<Text size="large">` | `<Text size="body-lg">` |
| `<Text size="xlarge">` | `<Text size="heading-sm">` |
| `<Text size="xxlarge">` | `<Text size="heading-md">` |
| `<Text size="xxxlarge">` | `<Text size="heading-lg">` |
| `className="text:small"` | `className="text:body-sm"` |
| `className="text:medium"` | `className="text:body-md"` |
| `className="text:large"` | `className="text:body-lg"` |
| `className="text:xlarge"` | `className="text:heading-sm"` |
| `className="text:xxlarge"` | `className="text:heading-md"` |
| `className="text:xxxlarge"` | `className="text:heading-lg"` |

**Props vs utilities — never mix:**

```tsx
// ✅ CORRECT — props on <Text>
<Text size="body-md" fontWeight="bold" color="bodyDimmed">

// ✅ CORRECT — utilities on raw wrapper
<div className="text:body-md weight:bold c:bodyDimmed">

// ❌ WRONG — utility classes on <Text> component
<Text className="text:body-md weight:bold">

// ❌ WRONG — deprecated names anywhere
<Text size="medium">
<div className="text:xlarge">
```

**Semantic variants (prefer over manual size+weight):**

```tsx
// ✅ Use variants when they match the use case
<Text variant="mainTitle">  // heading-md + bold, once per view
<Text variant="title">      // body-lg + bold
<Text variant="body">       // body-md + regular
```
---

### Rule 5: ONLY Lens Icons

- **ALWAYS:** <Icon icon={<SvgIconName />} /> from @loomhq/lens
- **ALWAYS:** Import icons: import { Icon, SvgBell } from '@loomhq/lens'
- **OR:** import SvgBell from '@loomhq/lens/icons/bell'
- **NEVER:** Import from react-icons, heroicons, lucide, etc.
- **NEVER:** Use raw SVGs in component files
- **NEVER:** Use icon fonts

---

### Rule 6: ONLY Lens Form Components

- **ALWAYS:** <TextInput>, <Select>, <Checkbox>, <Radio>, <Switch>, <Textarea>
- **ALWAYS:** <FormField> for form field wrappers with labels
- **NEVER:** Raw <input>, <select>, <textarea> HTML elements
- **NEVER:** Third-party form component libraries

---

### Rule 7: ONLY Lens Feedback Components

- **ALWAYS:** <Toast> / useToast for notifications
- **ALWAYS:** <Modal> for dialogs
- **ALWAYS:** <Tooltip> for hover information
- **ALWAYS:** <Popover> for contextual content
- **ALWAYS:** <NotificationBar> for banners
- **ALWAYS:** <ErrorContainer> for inline errors
- **NEVER:** react-toastify, react-hot-toast, sweetalert2
- **NEVER:** Custom modal implementations
- **NEVER:** Browser alert()/confirm()/prompt()

---
### RULE 8: SYSTEM BOUNDARIES & LINTING PROTOCOL

As an AI Assistant on this project, you must deeply understand your operational boundaries:

1. **The Linter is Infallible:** Our custom ESLint plugin is mathematically derived from the Lens Design System source code. If it throws an error, it is 100% correct.
2. **No Rule Tampering:** You are forbidden from modifying `eslint.config.mjs`, the custom ESLint plugin, or any `.json` mastery databases to bypass an error.
3. **No Local Escapes:** You are forbidden from using `// eslint-disable`, `/* eslint-disable */`, or `@ts-ignore` in the React code to silence Lens violations.
4. **Your Responsibility:** Your sole responsibility when facing a lint error is to study the `.lens-knowledge-base/` and fix the React Component's implementation to match the exact Lens API.
---
### Rule 9: LENS UTILITY CLASS CONTRACT — COMPLETE

**Single source of truth:** `tokens/css-utilities.md`

**Before writing any className value:**
1. Open `css-utilities.md`
2. Confirm the class exists in that file
3. Check it is not in the deprecated list
4. Check placement is valid for your element type

---
### Rule 10: TOKEN FILE TRAPS — KNOWN ISSUES IN KNOWLEDGE BASE

The `.lens-knowledge-base/tokens/` files contain documentation-level
patterns that are NOT valid production patterns. Knowing these prevents
copying them blindly.

**Known traps by file:**

**`spacing.md`**
- Example uses `style={{}}` — demonstration only, never copy

**`responsive-layout.md`**
- `<DemoBox>` does not exist in `@loomhq/lens`
- Replace with `<Container>` in all production code
- `sizeMinMax` examples use deprecated size names
  Correct: `<Text sizeMinMax={['body-md', 'heading-sm']}>`

**`css-variables.md`**
- Contains a typo: `---lns-fontSize-xxxlarge` (three dashes)
  Correct variable: `--lns-fontSize-heading-lg`
- Lists deprecated variable names alongside current ones
  Always use the current name (see deprecation table in that file)

**`css-utilities.md`**
- Lists deprecated typography utilities alongside current ones
  Always use: `text:body-sm/md/lg`, `text:heading-sm/md/lg`

**`shape-and-elevation.md`**
- Only documents numeric radius tokens
  Semantic tokens (medium, large, xlarge, full) also exist
  See css-variables.md for the full list

**Gradient rule — no utility class exists:**

```
Gradients (--lns-gradient-ai-primary, --lns-gradient-ai-secondary)
have NO corresponding utility class in css-utilities.md.

The ONLY valid way to apply a gradient:

  ✅ CSS module:
    .myClass { background: var(--lns-gradient-ai-primary); }

  ❌ FORBIDDEN:
    style={{ background: 'var(--lns-gradient-ai-primary)' }}
    className="gradient:ai-primary"  ← does not exist
```

**Color application hierarchy:**

```
For Lens components:
  → color prop:            <Text color="bodyDimmed">
  → backgroundColor prop:  <Container backgroundColor="backgroundSecondary">

For raw wrapper elements:
  → text color utility:    <div className="c:bodyDimmed">
  → background utility:    <div className="bgc:backgroundSecondary">

In CSS modules:
  → CSS variable:          .x { color: var(--lns-color-bodyDimmed); }

NEVER:
  → style={{ color: 'var(--lns-color-primary)' }}
  → style={{ color: '#1868db' }}
```
---

**Syntax identification:**

```
LENS = colon separator:   p:medium, mr:small, items:center,
                          justify:spaceBetween, c:primary, bgc:background,
                          text:body-md, weight:bold, shadow:large,
                          radius:medium, top:xsmall, grow:1

LENS = bare camelCase:    flex, block, inline, inlineFlex, inlineBlock,
                          none, relative, absolute, sticky, fixed,
                          flexWrap, border, borderTop, borderBottom,
                          borderLeft, borderRight, ellipsis, srOnly

LENS = responsive prefix: xs-flex, sm-none, md-block, lg-c:primary

TAILWIND = hyphen:        flex-col, items-center, justify-between,
                          p-4, text-lg, bg-blue-500  ← ALL FORBIDDEN
```

---

**Placement rules:**

```
ON RAW <div> / <span>:
  → Any class from css-utilities.md ✅
  → Responsive prefixed variants ✅

ON LENS COMPONENTS (<Button>, <Text>, <Icon>, <Container>, <Split>...):
  → External spacing ONLY:
    m:*, mt:*, mb:*, ml:*, mr:*, mx:*, my:* ✅
    grow:*, shrink:*, self:* ✅
  → NEVER appearance classes:
    shadow:*, radius:*, bgc:*, c:*, text:*, weight:* ❌
    (use component props instead)
  → NEVER layout/display classes:
    flex, block, none, items:*, justify:* ❌
    (these break component rendering)
```

---

**Deprecated typography utilities — forbidden in new code:**

```
❌ text:small     → ✅ text:body-sm
❌ text:medium    → ✅ text:body-md
❌ text:large     → ✅ text:body-lg
❌ text:xlarge    → ✅ text:heading-sm
❌ text:xxlarge   → ✅ text:heading-md
❌ text:xxxlarge  → ✅ text:heading-lg
```

---

**The inline style trap in official docs:**

Some files in `.lens-knowledge-base/tokens/` contain `style={{}}` in
their code examples. These are **introspection/demonstration patterns**
that show the token system examining itself. They are NOT production
patterns. `style={{}}` is always forbidden in `src/`. If you see it in
a knowledge base example, do not copy it.

---

**Complete decision tree:**

```
Need to style something?
│
├─ Is it a Lens component?
│   ├─ YES → Use its props (padding=, color=, size=, fontWeight=)
│   │         External margin only: className="mr:small"
│   │         STOP. Do not add other className.
│   │
│   └─ NO (raw wrapper div/span)
│       ├─ Does a class in css-utilities.md solve it?
│       │   YES → Use it. Confirm not deprecated.
│       │   NO  → Use CSS module + var(--lns-*) variables
│       │
│       └─ NEVER: style={{}}, Tailwind, hardcoded values
│
└─ Is the value hardcoded (px, rem, #hex)?
    YES → STOP. Find the Lens token. Never hardcode.
```
---

## LENS COMPONENT MAPPING — USE THIS LOOKUP TABLE (see:@.lens-knowledge-base/COMPONENT-INDEX.md)

**Note:**

- Study components docs(@.lens-knowledge-base/COMPONENT-INDEX.md)
- Study Styling docs (@.lens-knowledge-base/tokens/)

### Layout Components (replacing raw HTML)

| Need                  | ❌ NEVER                         | ✅ ALWAYS (Lens)                              |
| --------------------- | -------------------------------- | --------------------------------------------- |
| Generic container     | `<div>`                          | `<Container>` from lens                       |
| Flexbox layout        | `<div style={{display:'flex'}}>` | `<Split>` from lens                           |
| Vertical stack        | Custom flex column divs          | `<Split direction="column">` from lens        |
| Horizontal row        | Custom flex row divs             | `<Split>` from lens (default direction="row") |
| CSS Grid layout       | `<div style={{display:'grid'}}>` | `<Arrange>` from lens                         |
| Content alignment     | Custom positioning CSS           | `<Align alignment="center">` from lens        |
| Spacing between items | Custom margins                   | `<Spacer bottom="medium">` from lens          |
| Full-screen overlay   | Custom overlay div               | `<Backdrop>` from lens                        |
| Flex item control     | Custom flex properties           | `<SplitSection grow={1}>` from lens           |

### Typography (ALL text goes through Text component)

| Need             | ❌ NEVER       | ✅ ALWAYS (Lens)                                            |
| ---------------- | -------------- | ----------------------------------------------------------- |
| Page title       | `<h1>`         | `<Text size="heading-lg" htmlTag="h1" variant="mainTitle">` |
| Section heading  | `<h2>`, `<h3>` | `<Text size="heading-md" htmlTag="h2" variant="title">`     |
| Body paragraph   | `<p>`          | `<Text htmlTag="p" variant="body">`                         |
| Inline text      | `<span>`       | `<Text htmlTag="span">` or `<Text isInline>`                |
| Small text       | `<small>`      | `<Text size="body-sm">`                                     |
| Dimmed/secondary | Custom color   | `<Text isDimmed>` or `<Text color="bodyDimmed">`            |
| Bold text        | `<strong>`     | `<Text fontWeight="bold">`                                  |
| Monospace        | `<code>`       | `<Text fontFamily="mono">`                                  |

### Interactive Components

| Need             | ❌ NEVER                  | ✅ ALWAYS (Lens)                       |
| ---------------- | ------------------------- | -------------------------------------- |
| Button           | `<button>`                | `<Button>` from lens                   |
| Icon button      | Custom icon button        | `<IconButton>` from lens               |
| Text button      | Custom text button        | `<TextButton>` from lens               |
| Link             | `<a>`                     | `<Link>` from lens                     |
| Checkbox         | `<input type="checkbox">` | `<Checkbox>` from lens                 |
| Radio            | `<input type="radio">`    | `<Radio>` from lens                    |
| Toggle           | Custom checkbox           | `<Switch>` from lens                   |
| Text input       | `<input type="text">`     | `<TextInput>` from lens                |
| Textarea         | `<textarea>`              | `<Textarea>` from lens                 |
| Select/dropdown  | `<select>`                | `<Select>` from lens                   |
| Typeahead/search | Custom autocomplete       | `<Typeahead>` from lens                |
| Search bar       | Custom search             | `<SearchBar>` from lens (if available) |
| Color picker     | Third-party picker        | `<ColorPicker>` from lens              |

### Data Display

| Need             | ❌ NEVER           | ✅ ALWAYS (Lens)                      |
| ---------------- | ------------------ | ------------------------------------- |
| Avatar           | Custom img         | `<Avatar>` from lens                  |
| Badge/pill       | Custom span        | `<Pill>` from lens                    |
| Status indicator | Custom dot         | `<Indicator>` from lens               |
| List             | Custom ul/ol       | `<List>` from lens                    |
| Skeleton loader  | Custom placeholder | `<Skeleton>` from lens                |
| Logo             | Custom img         | `<Logo>` from lens                    |
| Icon             | Raw SVG            | `<Icon icon={<SvgName />}>` from lens |
| Illustration     | Raw SVG            | `<Illustration>` from lens            |

### Feedback & Overlays

| Need                | ❌ NEVER         | ✅ ALWAYS (Lens)              |
| ------------------- | ---------------- | ----------------------------- |
| Modal/dialog        | Custom overlay   | `<Modal>` from lens           |
| Toast               | react-toastify   | `<Toast>` from lens           |
| Tooltip             | Custom hover     | `<Tooltip>` from lens         |
| Popover             | Custom dropdown  | `<Popover>` from lens         |
| Banner/alert        | Custom banner    | `<NotificationBar>` from lens |
| Inline error        | Custom error div | `<ErrorContainer>` from lens  |
| Full-screen overlay | Custom backdrop  | `<Backdrop>` from lens        |

### Navigation

| Need          | ❌ NEVER    | ✅ ALWAYS (Lens)                   |
| ------------- | ----------- | ---------------------------------- |
| Tabs          | Custom tabs | `<Tabs>` from lens                 |
| Dropdown menu | Custom menu | `<Dropdown>` or `<Menu>` from lens |

### Loading States

| Need             | ❌ NEVER           | ✅ ALWAYS (Lens)             |
| ---------------- | ------------------ | ---------------------------- |
| Spinner          | Custom spinner     | `<Loader>` from lens         |
| Logo loader      | Custom animation   | `<LogoLoader>` from lens     |
| Dots loader      | Custom animation   | `<EllipsesLoader>` from lens |
| Waveform loader  | Custom animation   | `<WaveformLoader>` from lens |
| Content skeleton | Custom placeholder | `<Skeleton>` from lens       |

---

## LENS API PATTERNS — USE THESE EXACT PATTERNS

### Boolean Props use `is*` and `has*` prefixes

```tsx
// ✅ CORRECT Lens patterns
<Button isDisabled>Disabled</Button>
<Button isFloating>Floating</Button>
<Button hasLoader>Loading</Button>
<Text isInline>Inline</Text>
<Text isDimmed>Dimmed</Text>
<Text hasEllipsis>Truncated text...</Text>

// ❌ WRONG — these are NOT Lens patterns
<Button disabled>       // Wrong: use isDisabled
<Button loading>        // Wrong: use hasLoader
<Text inline>           // Wrong: use isInline
```

---

## Element Override uses `htmlTag`, NOT `as`

```tsx
// ✅ CORRECT
<Button htmlTag="a" href="/somewhere">Link Button</Button>
<Text htmlTag="h1" size="heading-lg">Page Title</Text>
<Container htmlTag="section">Section content</Container>
<Arrange htmlTag="ul">List items</Arrange>
<Split htmlTag="nav">Navigation</Split>

// ❌ WRONG
<Button as="a">        // Wrong: use htmlTag
<Text as="h1">         // Wrong: use htmlTag
```

---

## Refs use `refHandler` function, NOT `ref` prop

```tsx
// ✅ CORRECT
const ref = useRef<HTMLButtonElement>(null)
<Button refHandler={(r) => { ref.current = r }}>Click</Button>
<Container refHandler={(r) => { ref.current = r }}>Content</Container>

// ❌ WRONG
<Button ref={ref}>     // Wrong: use refHandler
```

---

## Icons use the `<Icon>` wrapper component

```tsx
// ✅ CORRECT
import { Icon, SvgBell, SvgClose } from '@loomhq/lens'

<Icon icon={<SvgBell />} />
<Button iconBefore={<SvgBell />}>Notify</Button>
<Button iconAfter={<SvgArrowRight />}>Next</Button>

// ❌ WRONG
<SvgBell />            // Wrong: wrap in <Icon> component
<Bell />               // Wrong: icons use Svg prefix
<IconBell />           // Wrong: not the correct prefix
```

---

### Spacing uses semantic token names

```tsx

// ✅ CORRECT — named semantic tokens
<Container padding="medium">          // 16px
<Split gap="small">                   // 8px
<Spacer bottom="large">              // 24px
<Arrange gap="xlarge">               // 40px

// ✅ ALSO CORRECT — number values (multiplied by 8px)
<Container padding={2}>              // 16px (2 × 8)
<Container maxWidth={40}>            // 320px (40 × 8)

// ✅ ALSO CORRECT — string CSS values
<Container padding="1rem">
<Container maxWidth="50%">

// ❌ WRONG
<Container padding="4">              // "4" is not a valid token
<Container padding={16}>             // Don't use px values as numbers
style={{ padding: '16px' }}          // Never use inline styles
className="p-4"                      // Never use utility classes

```

---

### Responsive values use breakpoint objects

```tsx
// ✅ CORRECT
<Arrange
  gap={{ default: 'small', medium: 'large' }}
  columns={{ default: '1fr', medium: '1fr 1fr 1fr' }}
>

<Split
  direction={{ default: 'column', medium: 'row' }}
  gap={{ default: 'small', large: 'xlarge' }}
>

<Text
  size={{ default: 'body-sm', medium: 'body-lg' }}
>

  // Breakpoints: xsmall = 496px, small = 768px, medium = 1024px, large = 1200px

```

---

### SEMANTIC SPACING REFERENCE

| Token   | px  | rem  | Use for                      |
| ------- | --- | ---- | ---------------------------- |
| xsmall  | 4   | 0.25 | Tight spacing, icon gaps     |
| small   | 8   | 0.5  | Default gap between elements |
| medium  | 16  | 1    | Section padding, form gaps   |
| large   | 24  | 1.5  | Card padding, section gaps   |
| xlarge  | 40  | 2.5  | Page section spacing         |
| xxlarge | 64  | 4    | Major page divisions         |

---

## COLOR TOKENS

Use Lens color token names as string values in component props:

### Common Colors

```tsx
<Text color="body">Default text</Text>
<Text color="bodyDimmed">Secondary text</Text>
<Text color="primary">Primary/link text</Text>
<Text color="danger">Error text</Text>
<Text color="success">Success text</Text>
<Text color="warning">Warning text</Text>

<Container backgroundColor="background">Default bg</Container>
<Container backgroundColor="backgroundSecondary">Alt bg</Container>
<Container backgroundColor="highlight">Highlighted</Container>
<Container backgroundColor="overlay">Overlay bg</Container>
<Container borderColor="border">Default border</Container>
<Container borderColor="primary">Primary border</Container>

```

---

## COMMON UI PATTERNS

### Page Layout

```tsx
<Container padding="large" htmlTag="main">
  <Split direction="column" gap="large">
    <Split justifyContent="space-between" alignItems="center">
      <Text size="heading-lg" htmlTag="h1" variant="mainTitle">
        Page Title
      </Text>
      <Button variant="primary">Action</Button>
    </Split>
    <Container borderSide="bottom" />
    {/* Page content */}
  </Split>
</Container>
```

---

### Form Field

```tsx
<FormField label="Email" errorMessage={error}>
  <TextInput placeholder="Enter email..." />
</FormField>
```

---

### Card Pattern

```tsx
<Container
  padding="medium"
  borderSide="all"
  radius="medium"
  shadow="small"
  backgroundColor="background"
>
  <Split direction="column" gap="small">
    <Split justifyContent="space-between" alignItems="center">
      <Text size="heading-sm" variant="title">
        Card Title
      </Text>
      <Pill variant="success">Active</Pill>
    </Split>
    <Text color="bodyDimmed">Card description text</Text>
    <Split gap="small">
      <Button size="small" variant="neutral">
        Edit
      </Button>
      <Button size="small" variant="danger">
        Delete
      </Button>
    </Split>
  </Split>
</Container>
```

---

### Data List

```tsx
<Split direction="column" gap={0}>
  {items.map((item) => (
    <Container key={item.id} padding="small" borderSide="bottom">
      <Split alignItems="center" gap="small">
        <Avatar name={item.name} size="small" />
        <Split direction="column" gap={0}>
          <SplitSection grow={1}>
            <Text fontWeight="medium">{item.name}</Text>
            <Text size="body-sm" color="bodyDimmed">
              {item.email}
            </Text>
          </SplitSection>
        </Split>
        <IconButton icon={<SvgMoreHoriz />} />
      </Split>
    </Container>
  ))}
</Split>
```

---

### Empty State

```tsx
<Align alignment="center">
  <Container padding="xlarge">
    <Split direction="column" alignItems="center" gap="medium">
      <Icon icon={<SvgInbox />} size="large" color="bodyDimmed" />
      <Text size="heading-md" variant="title">
        No items yet
      </Text>
      <Text color="bodyDimmed" alignment="center">
        Get started by creating your first item.
      </Text>
      <Button variant="primary" iconBefore={<SvgAdd />}>
        Create Item
      </Button>
    </Split>
  </Container>
</Align>
```

---

### Modal Pattern

```tsx
<Modal isOpen={isOpen} onClose={onClose} title="Modal Title">
  <Split direction="column" gap="medium">
    {/* Modal content */}
    <FormField label="Name">
      <TextInput placeholder="Enter name..." />
    </FormField>
  </Split>
  <Split justifyContent="flex-end" gap="small">
    <Button variant="neutral" onClick={onClose}>
      Cancel
    </Button>
    <Button variant="primary" onClick={onConfirm}>
      Confirm
    </Button>
  </Split>
</Modal>
```

---

## CSS Injection Setup (REQUIRED in main.tsx)

```tsx
import { getThemeStylesString, getAllCssVarsString } from '@loomhq/lens'

const style = document.createElement('style')
style.innerHTML = getThemeStylesString() + getAllCssVarsString()
document.head.appendChild(style)
```

---

# DECISION TREE FOR EVERY UI ELEMENT

"I need to render [X]"
│
├── Step 1: Check .lens-knowledge-base/COMPONENT-INDEX.md (Index page) || OR .lens-knowledge-base/reference/components-full.md (full 7000 lines doc)
│ Does Lens have a component for [X]?
│ ├── YES → Use it. Import from '@loomhq/lens'. DONE.
│ └── NO → Step 2
│
├── Step 2: Can [X] be composed from Lens primitives?
│ (Container, Split, Arrange, Text, Spacer, Align)
│ ├── YES → Compose using ONLY Lens primitives + tokens. DONE.
│ └── NO → Step 3
│
└── Step 3: ESCALATION
├── Add TODO: // TODO: [LENS-GAP] No component for [X]
└── Build with Container/Split + Lens tokens ONLY.

---

## SELF-CHECK BEFORE SUBMITTING CODE

- [ ] Every UI import comes from @loomhq/lens
- [ ] Zero .css, .scss, .module.css files created
- [ ] Zero style={{}} with hardcoded values
- [ ] Zero className with custom classes
- [ ] Zero raw HTML elements (div, span, p, h1-h6, button, input)
- [ ]- [ ] Zero third-party UI libraries imported
- [ ] All spacing uses named tokens (xsmall/small/medium/large/xlarge/xxlarge)
- [ ] All colors use Lens token names (body, primary, danger, etc.)
- [ ] All text uses <Text> component with proper size/variant
- [ ] All icons use <Icon icon={<SvgName />} />
- [ ] All buttons use proper Lens variants (neutral/primary/record/danger/ai)
- [ ] All boolean props use is*/has* prefix (isDisabled, hasLoader)
- [ ] Element overrides use htmlTag prop, not as prop
- [ ] Refs use refHandler function, not ref prop
- [ ] Layout uses Split (flex) or Arrange (grid), not raw divs
- [ ] getThemeStylesString() + getAllCssVarsString() injected in app entry

---

## REFERENCE LOOKUP ORDER

1. FIRST: Check .lens-knowledge-base/COMPONENT-INDEX.md (7000 lines, all components) || Or simply .lens-knowledge-base/COMPONENT-INDEX.md (Components Index page)
2. SECOND: Check .lens-knowledge-base/reference/styles-full.md (all design tokens)
3. THIRD: Check https://lens.loom.dev
4. FOURTH: Check TypeScript types in .lens-knowledge-base/type-declarations/
5. NEVER: Guess prop names — look them up or ask

---

## APPENDIX: VERIFIED COMPONENT LIST (@loomhq/lens@12.14.0)

### Layout (9 components)

- `Align` — content positioning within container
- `Arrange` — CSS Grid layout
- `Backdrop` — full-screen overlay
- `Container` — generic container (padding, border, color, radius)
- `Distribute` — distribution layout
- `Layout` — page layout component
- `Spacer` — spacing between elements
- `Split` — flexbox layout
- `SplitSection` — flex item (grow/shrink/basis)

### Typography (1 component)

- `Text` — ALL text rendering (body, headings, inline, dimmed)

### Interactive (20 components)

- `Button` — primary action element
- `Checkbox` — checkbox input
- `ColorPicker` — color selection
- `Dropdown` — dropdown menu
- `IconButton` — icon-only button
- `IconButtonBox` — icon button variant
- `Link` — navigation link
- `Menu` — menu container
- `MenuItem` — menu item
- `Modal` — dialog overlay
- `ModalCard` — modal card variant
- `Radio` — radio input
- `Select` — dropdown selection
- `Switch` — toggle switch
- `Tab` — individual tab
- `Tabs` — tab container
- `TextButton` — text-styled button
- `TextInput` — text input field
- `Textarea` — multi-line text input
- `Typeahead` — autocomplete/search

### Data Display (9 components)

- `Avatar` — user avatar
- `Icon` — icon wrapper (use with Svg imports)
- `Indicator` — status indicator
- `List` — list container
- `ListRow` — list item
- `Logo` — Loom logo
- `Pill` — badge/tag
- `SkeletonContainer` — skeleton loading container
- `SkeletonText` — skeleton text placeholder

### Feedback (6 components)

- `ErrorContainer` — inline error display
- `NotificationBar` — banner notification
- `Popover` — contextual popover
- `Toast` — temporary notification
- `Tooltip` — hover tooltip
- `TooltipBox` — tooltip variant

### Form (1 component)

- `FormField` — form field wrapper with label/error

### Loading (4 components)

- `EllipsesLoader` — dots animation
- `Loader` — spinner
- `LogoLoader` — logo animation
- `WaveformLoader` — waveform animation

### Utility (2 components)

- `BaseStyles` — base style injection
- `Media` — responsive media queries

### Hooks (5)

- `useFocusedElement` — track focused element
- `useMedia` — responsive breakpoint detection
- `useOnClickOutside` — click outside detection
- `usePreventScroll` — prevent body scroll
- `usePushPageDown` — push page content down

### Icons (683 via subpath)

```tsx
import { Icon } from '@loomhq/lens'
import SvgBell from '@loomhq/lens/icons/bell'
import SvgAdd from '@loomhq/lens/icons/add'

<Icon icon={<SvgBell />} />
<Button iconBefore={<SvgAdd />}>Add</Button>
```

## Illustrations (28 components)

All prefixed with Illustration (e.g., IllustrationGettingStarted).
Import from @loomhq/lens.

Known typo in Lens source: IllutrationFoldersEmptyStateMobile
(missing 's' in "Illustration")

### Key Utility Functions

```tsx
import {
  getThemeStylesString, // CSS theme variables (REQUIRED)
  getAllCssVarsString, // All CSS custom properties (REQUIRED)
  cssUtilities, // CSS utility classes (optional)
  breakpoints, // Breakpoint definitions
  colorsNames, // Available color token names
} from '@loomhq/lens'
```

_See .lens-knowledge-base/icons-inventory.md for complete list._

## Illustrations (28 components)

All prefixed with Illustration (e.g., IllustrationGettingStarted).
Import from @loomhq/lens.

**Known typo in Lens source:** IllutrationFoldersEmptyStateMobile (missing 's' in Illustration")

### Key Utility Functions

```tsx
import {
  getThemeStylesString, // CSS theme variables (REQUIRED)
  getAllCssVarsString, // All CSS custom properties (REQUIRED)
  cssUtilities, // CSS utility classes (optional)
  breakpoints, // Breakpoint definitions
  colorsNames, // Available color token names
} from '@loomhq/lens'
```

---

## REQUIRED: SOURCES CONSULTED (ANTI-HALLUCINATION)

When you output or modify frontend code, you MUST include a short section:

**Sources consulted:**
- `.lens-knowledge-base/COMPONENT-INDEX.md`
- `.lens-knowledge-base/components/<Component>.md`
- `.lens-knowledge-base/tokens/_tokens-index.md` (if styling)
- (optional) `https://lens.loom.dev/...` ONLY if local KB was insufficient

If you did not consult any files, say so explicitly and stop to ask for the missing info.
