---
file: QUICK-REFERENCE.md
layer: quick-syntax
answers: "Common syntax patterns at a glance"
load-when:
  - Recalling API patterns quickly
do-not-load-when:
  - Needing full component API (use components/[Name].md)
last-validated: 2026-04-29
---

# Lens Quick Reference — @loomhq/lens@12.14.0

## Setup (REQUIRED in main.tsx)
```tsx
import { getThemeStylesString, getAllCssVarsString } from '@loomhq/lens'
const style = document.createElement('style');
style.innerHTML = getThemeStylesString() + getAllCssVarsString();
document.head.appendChild(style);
```
## Layout Components
| Component | Purpose | Replaces |
| --------- | ------- | -------- |
| `<Container>` | Container with padding/border/color/radius | `<div>` |
| `<Split>` | Flexbox layout | display:flex divs |
| `<SplitSection>` | Flex item with grow/shrink/basis | flex children |
| `<Arrange>` | CSS Grid layout | display:grid| divs |
| `<Align>` | Position content within container | positioning CSS |
| `<Spacer>` | Spacing between elements | margin hacks |
| `<Backdrop>` | Full-screen overlay | overlay divs |
## Typography — ONE component: Text
```tsx
<Text size="heading-lg" htmlTag="h1" variant="mainTitle">Page Title</Text>
<Text size="heading-md" htmlTag="h2" variant="title">Section</Text>
<Text size="body-md" htmlTag="p" variant="body">Paragraph</Text>
<Text size="body-sm" color="bodyDimmed">Secondary</Text>
<Text isInline>Inline span</Text>
<Text fontWeight="bold">Bold</Text>
<Text fontFamily="mono">Code</Text>
```
Sizes: `body-sm` | `body-md` | `body-lg` | `heading-sm` | `heading-md` | `heading-lg`

## Spacing Tokens

| Token | px | Use |
| ----- | -- | --- |
| xsmall | 4 | Tight gaps |
| small | 8 | Default gaps |
| medium | 16 | Section padding |
| large | 24 | Card padding |
| xlarge | 40 | Page spacing |
| xxlarge | 64 | Major divisions |

Numbers multiply by 8: `padding={3}` = 24px

## Button
Variants: `neutral` | `neutralSecondary` | `primary` | `secondary` | `record` | `upgrade` | `danger` | `ai`
Sizes: `small` | `medium` | `large`

```tsx

<Button variant="primary" iconBefore={<SvgAdd />}>Add</Button>
<Button isDisabled>Disabled</Button>
<Button hasLoader>Loading</Button>

```
*Icons (683)*
```tsx

import { Icon } from '@loomhq/lens'
import SvgBell from '@loomhq/lens/icons/bell'
<Icon icon={<SvgBell />} />
```
## Key API Patterns
- **Booleans:** isDisabled, hasLoader (NOT disabled, loading)
- **Element:** htmlTag="a" (NOT as="a")
- **Refs:** refHandler={(r) => ref.current = r} (NOT ref={ref})
- **Icons:** iconBefore / iconAfter (NOT leftIcon / rightIcon)
## Responsive
```tsx
<Arrange gap={{ default: 'small', medium: 'large' }} />
```
**Breakpoints:** `xsmall=496px` `small=768px` `medium=1024px` `large=1200px`
