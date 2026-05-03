---
file: tokens/responsive-layout.md
role: Responsive layout — algorithmic approach and responsive props
---

# Responsive Layout

## Core Principle

Let the browser arrange elements. Do not write breakpoint rules for every screen size. Use algorithmic layouts through Arrange and Split. Fall back to responsive props only when fine-tuning is needed.

## Arrange — Grid-Based Algorithmic Layout

Arrange with auto-fit fills columns automatically based on available space:

```tsx
<Arrange gap="medium" columns="repeat(auto-fit, minmax(10rem, 1fr))">
  <Item />
  <Item />
  <Item />
</Arrange>
```

_Arrange with responsive props for explicit control:_

```tsx
<Arrange
  gap={{ default: "xsmall", small: "medium", medium: "large" }}
  columns={{ default: "1fr", medium: ["2fr", "1fr", "1fr"] }}
>
  <Item />
  <Item />
  <Item />
</Arrange>
```

## Split — Flexbox-Based Algorithmic Layout

SplitSection with grow and basis controls proportional space distribution:

```tsx
<Split gap="medium">
  <SplitSection grow={1} basis={20} minWidth={20}>
    <Sidebar />
  </SplitSection>
  <SplitSection grow={100} basis={40}>
    <MainContent />
  </SplitSection>
</Split>
```

The sidebar takes minimum space. Main content takes all remaining space. No media queries needed.

## Responsive Props — Breakpoints

Available breakpoints for responsive prop objects:
|Key| min-width|
|---|----------|
|default| 0px|
|xsmall| 496px|
|small| 768px|
|medium| 1024px|
|large| 1200px|

Custom breakpoints also accepted: `'50em': 'medium'`

## Responsive Text

```tsx
<Text sizeMinMax={['medium', 'xlarge']} fontWeight="bold">
  Grows from medium to xlarge as viewport widens
</Text>
```
## JavaScript-Based Responsive (Use Sparingly)
Only when layout props cannot handle the requirement.
Causes re-renders. Avoid when performance matters.

```tsx
const size = useMedia(
  ['(min-width: 1200px)', '(min-width: 1000px)'],
  ['large', 'medium'],
  'small'
)
```
---
## DemoBox
DemoBox does not exist in Lens. It appears in documentation examples only. Replace with Container in all real code.

---
## Decision Rule
Need responsive layout? → Use Arrange with auto-fit columns or Split with SplitSection grow/basis first. Only reach for responsive props if algorithmic layout cannot handle the requirement. Only reach for useMedia if responsive props cannot handle it.

---
## Critical — Exact Valid Values

alignItems: "start" only
justifyContent: "flex-start" only
wrap: "nowrap" only
direction: "column" only when overriding default
SplitSection: direct child of Split — nothing between them
