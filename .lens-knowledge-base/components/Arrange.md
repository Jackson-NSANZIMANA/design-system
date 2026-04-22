# 35.Arrange

## Content

```text
Content
Content
Content
```

---

## Usage

```javascript
import { Arrange } from '@loomhq/lens'
;<Arrange>
  <div>Content</div>
  <div>Content</div>
  <div>Content</div>
</Arrange>
```

Arrange is **built on CSS Grid**.

---

## Gap

```javascript
<DemoBox boxType="outline">
  <Arrange gap="medium">
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## Align and Justify

Use `alignItems`, `alignContent`, `justifyItems`, and `justifyContent` similar to CSS Grid.

```javascript
<>
  <DemoBox boxType="outline">
    <Arrange alignItems="end" height={15}>
      <DemoBox padding="medium">Content</DemoBox>
      <DemoBox padding="small">Content</DemoBox>
      <DemoBox padding="xsmall">Content</DemoBox>
    </Arrange>
  </DemoBox>

  <DemoBox boxType="outline">
    <Arrange alignContent="end" height={15}>
      <DemoBox padding="medium">Content</DemoBox>
      <DemoBox padding="small">Content</DemoBox>
      <DemoBox padding="xsmall">Content</DemoBox>
    </Arrange>
  </DemoBox>

  <DemoBox boxType="outline">
    <Arrange justifyItems="end" columns={['1fr', '1fr', '1fr']}>
      <DemoBox padding="medium">Content</DemoBox>
      <DemoBox padding="small">Content</DemoBox>
      <DemoBox padding="xsmall">Content</DemoBox>
    </Arrange>
  </DemoBox>

  <DemoBox boxType="outline">
    <Arrange justifyContent="end">
      <DemoBox padding="medium">Content</DemoBox>
      <DemoBox padding="small">Content</DemoBox>
      <DemoBox padding="xsmall">Content</DemoBox>
    </Arrange>
  </DemoBox>
</>
```

---

## Columns

Works like `grid-template-columns`. Can pass a **string** or **array** of values.

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" columns={['1fr', '2fr', '10rem']}>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>

<DemoBox boxType="outline">
  <Arrange gap="small" columns={['1fr', '2fr', 20]}>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>

<DemoBox boxType="outline">
  <Arrange gap="small" columns="1fr 2fr 10rem">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

For **responsive layouts**, use CSS `auto-fill()` or `auto-fit()`:

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" columns="repeat(auto-fit, minmax(10rem, 1fr))">
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## Rows

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" rows={['4rem', '8rem', 'auto']} justifyContent="stretch">
    <DemoBox height="100%" padding="xsmall">
      Content
    </DemoBox>
    <DemoBox height="100%" padding="xsmall">
      Content
    </DemoBox>
    <DemoBox height="100%" padding="xsmall">
      Content
    </DemoBox>
  </Arrange>
</DemoBox>
```

---

## Auto Flow

`autoFlow` determines whether items are placed in **rows or columns** automatically.

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" autoFlow="column">
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
  <br />
  <Arrange gap="small" autoFlow="row">
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## HTML List Tags

Use `htmlTag` for semantic lists:

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" htmlTag="ul">
    <li>
      <DemoBox padding="small">Item 1</DemoBox>
    </li>
    <li>
      <DemoBox padding="small">Item 2</DemoBox>
    </li>
    <li>
      <DemoBox padding="small">Item 3</DemoBox>
    </li>
  </Arrange>
</DemoBox>
```

---

## Responsive Props

Pass responsive objects where keys are **min-width breakpoints**:

```javascript
<DemoBox boxType="outline">
  <Arrange
    gap={{
      default: 'xsmall',
      xsmall: 'small',
      small: 'medium',
      medium: 'large',
      large: 'xlarge',
    }}
    columns={{ default: ['2fr', '1fr'], '65em': ['1fr', '1fr', '1fr'] }}
  >
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## Props

| Name           | Type                                                                                                               | Default    | Notes                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------------ |
| alignItems     | `ResponsiveType<'start' \| 'end' \| 'center' \| 'stretch' \| 'baseline'>`                                          | `'center'` | Align items vertically   |
| justifyContent | `ResponsiveType<'start' \| 'end' \| 'center' \| 'stretch' \| 'space-around' \| 'space-between' \| 'space-evenly'>` | `'start'`  | Align items horizontally |
| htmlTag        | `'div' \| 'ul' \| 'ol' \| 'li'`                                                                                    | `'div'`    | Semantic element         |
| children       | `React.ReactNode`                                                                                                  | required   | Items inside Arrange     |
| width          | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive width         |
| height         | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive height        |
| minWidth       | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive min width     |
| minHeight      | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive min height    |
| maxWidth       | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive max width     |
| maxHeight      | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive max height    |
| gap            | `ResponsiveType<string \| number> \| null`                                                                         | —          | Grid gap                 |
| justifyItems   | `ResponsiveType<'start' \| 'end' \| 'center' \| 'stretch'>`                                                        | —          | Grid justify-items       |
| alignContent   | `ResponsiveType<'start' \| 'end' \| 'center' \| 'stretch' \| 'space-around' \| 'space-between' \| 'space-evenly'>` | —          | Grid align-content       |
| autoFlow       | `ResponsiveType<'column' \| 'row'>`                                                                                | —          | Grid auto-flow           |
| columns        | `ResponsiveGridSections`                                                                                           | —          | Defines grid columns     |
| rows           | `ResponsiveGridSections`                                                                                           | —          | Defines grid rows        |

