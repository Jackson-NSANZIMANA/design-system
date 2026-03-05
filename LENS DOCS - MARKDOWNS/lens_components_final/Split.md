# 41.Split

`Split` is a flexbox-based layout component used to arrange elements horizontally or vertically with flexible spacing, alignment, and wrapping options. Use `SplitSection` for flex-item properties like `grow`, `shrink`, and `basis`.

---

## Usage

```javascript
import { Split, SplitSection } from '@loomhq/lens'
;<Split>
  <div>Content</div>
  <SplitSection grow={1}>Content</SplitSection>
</Split>
```

> All valid HTML elements can be children of `Split`, but `SplitSection` is required to use flex-item properties.

---

## Based on CSS flexbox

Split component is built with CSS flexbox. Learn more about CSS flexbox A Complete Guide to Flexbox.

## Gap

Use `gap` to set equal spacing for rows and columns:

```javascript
<Split gap="medium">
  <DemoBox padding="small">Content</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
</Split>
```

Use `rowGap` and `columnGap` to set independent spacing for each axis:

```javascript
<Split rowGap="medium" columnGap="small">
  <DemoBox padding="small">{demoText.medium}</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
</Split>
```

---

## Align and Justify

`Split` supports flexbox alignment properties:

- `alignItems`
- `alignContent`
- `justifyContent`

```javascript
<Split alignItems="flex-end" height={15}>
  <DemoBox padding="medium">Content</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
  <DemoBox padding="xsmall">Content</DemoBox>
</Split>

<Split justifyContent="space-between">
  <DemoBox padding="medium">Content</DemoBox>
  <DemoBox padding="xsmall">Content</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
</Split>
```

---

## Grow, Shrink, and Basis

Wrap children in `SplitSection` to use:

- `grow` — How much the item should grow relative to others
- `shrink` — How much the item should shrink
- `basis` — Initial size of the item

```javascript
<Split>
  <SplitSection grow={1} shrink={0} basis={20}>
    <DemoBox padding="small">Content</DemoBox>
  </SplitSection>
  <SplitSection grow={1} shrink={1} basis={10}>
    <DemoBox padding="small">Content</DemoBox>
  </SplitSection>
</Split>
```

---

## Wrap

Control whether items wrap using the `wrap` prop (`wrap`, `nowrap`, `wrap-reverse`):

```javascript
<Split wrap="wrap">
  <SplitSection grow={1} basis={30}>
    <DemoBox padding="small">{demoText.medium}</DemoBox>
  </SplitSection>
  <SplitSection grow={1} basis={30}>
    <DemoBox padding="small">{demoText.medium}</DemoBox>
  </SplitSection>
</Split>
```

```javascript
<Split wrap="nowrap">
  <SplitSection grow={1} basis={30}>
    <DemoBox padding="small">{demoText.medium}</DemoBox>
  </SplitSection>
  <SplitSection grow={1} basis={30}>
    <DemoBox padding="small">{demoText.medium}</DemoBox>
  </SplitSection>
</Split>
```

---

## HTML List Tags

Use the `htmlTag` prop to render semantic list markup (`ul`, `ol`, `li`). `SplitSection` and `Split` children automatically render as `<li>` if needed.

```javascript
<Split gap="small" htmlTag="ul">
  <li>
    <DemoBox padding="small">Item 1</DemoBox>
  </li>
  <SplitSection grow={1}>
    <DemoBox padding="small">Item 2</DemoBox>
  </SplitSection>
  <Split>
    <DemoBox padding="small">Item 3</DemoBox>
  </Split>
</Split>
```

---

## Responsive Props

`Split` and `SplitSection` accept responsive values for most props. Pass an object with breakpoint keys:

```javascript
<Split
  gap={{
    default: 'xsmall',
    xsmall: 'small',
    small: 'medium',
    medium: 'large',
    large: 'large',
  }}
>
  <DemoBox padding="small">Content</DemoBox>
  <SplitSection
    grow={{
      default: '0',
      medium: '1',
    }}
  >
    <DemoBox padding="small">Content</DemoBox>
  </SplitSection>
</Split>
```

### Available Breakpoints

| Breakpoint | Min Width     |
| ---------- | ------------- |
| xsmall     | 31em (496px)  |
| small      | 48em (768px)  |
| medium     | 64em (1024px) |
| large      | 75em (1200px) |

---

## Props

## Split Props

| Name           | Type                           | Default          |
| -------------- | ------------------------------ | ---------------- | ---------------------- | ------------------- | ------------------ | ----------------- | --------------------- | ------- | ----- | ----------- | --- |
| gap            | ResponsiveType `<number        | string>`         | 'initial' `responsive` |
| rowGap         | ResponsiveType `<number        | string>`         | — `responsive`         |
| columnGap      | ResponsiveType `<number        | string>`         | — `responsive`         |
| alignItems     | ResponsiveType `< 'start'      | 'stretch'        | 'flex-start'           | 'flex-end'          | 'center'           | 'baseline' >`     | 'center' `responsive` |
| justifyContent | ResponsiveType `< 'flex-start' | 'flex-end'       | 'center'               | 'space-between'     | 'space-around'     | 'space-evenly' >` | — `responsive`        |
| alignContent   | `'flex-start'                  | 'flex-end'       | 'center'               | 'space-between'     | 'space-around'     | 'space-evenly'    | 'stretch'             | 'start' | 'end' | 'baseline'` | —   |
| wrap           | ResponsiveType `< 'nowrap'     | 'wrap'           | 'wrap-reverse' >`      | 'wrap' `responsive` |
| direction      | ResponsiveType `< 'column'     | 'column-reverse' | 'row'                  | 'row-reverse' >`    | 'row' `responsive` |
| htmlTag        | `'div'                         | 'ul'             | 'ol'                   | 'li'`               | 'div'              |
| width          | ResponsiveType `<number        | string>`         | — `responsive`         |
| height         | ResponsiveType `<number        | string>`         | — `responsive`         |
| minWidth       | ResponsiveType `<number        | string>`         | — `responsive`         |
| minHeight      | ResponsiveType `<number        | string>`         | — `responsive`         |
| maxWidth       | ResponsiveType `<number        | string>`         | — `responsive`         |
| maxHeight      | ResponsiveType `<number        | string>`         | — `responsive`         |
| children       | React.ReactNode                | —                |
| className      | never                          | —                |
| style          | never                          | —                |

---

## SplitSection Props

| Name      | Type                                | Default        |
| --------- | ----------------------------------- | -------------- |
| htmlTag   | `'div' \| 'li'`                     | 'div'          |
| width     | ResponsiveType `<number \| string>` | — `responsive` |
| height    | ResponsiveType `<number \| string>` | — `responsive` |
| minWidth  | ResponsiveType `<number \| string>` | — `responsive` |
| minHeight | ResponsiveType `<number \| string>` | — `responsive` |
| maxWidth  | ResponsiveType `<number \| string>` | — `responsive` |
| maxHeight | ResponsiveType `<number \| string>` | — `responsive` |
| children  | React.ReactNode                     | —              |
| grow      | ResponsiveType `<number \| string>` | — `responsive` |
| shrink    | ResponsiveType `<number \| string>` | — `responsive` |
| basis     | ResponsiveType `<number \| string>` | — `responsive` |
| className | never                               | —              |
| style     | never                               | —              |
