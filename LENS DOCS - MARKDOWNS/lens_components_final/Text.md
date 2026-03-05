# 23.Text

---

## Overview

The `Text` component is the foundational typography primitive used across the system.  
It provides consistent sizing, semantic variants, alignment control, truncation, and advanced font configuration.

---

## Basic Usage

```jsx
import { Text } from '@loomhq/lens'
;<Text>Content</Text>
```

---

## Typography System

## Sizes

Heading sizes always render in **bold**, even if another `fontWeight` is provided.

Available sizes:

- body-sm
- body-md (default)
- body-lg
- heading-sm
- heading-md
- heading-lg

```jsx
<>
  {availableSizes.map((size, index) => (
    <Text size={size} key={index}>
      Size {size}
    </Text>
  ))}
</>
```

---

## Font Weights

> ⚠ `book` will be renamed to `regular` to align with Atlassian Design System.

Available weights:

- regular
- medium
- bold

```jsx
<Text fontWeight="regular">Weight regular</Text>
<Text fontWeight="medium">Weight medium</Text>
<Text fontWeight="bold">Weight bold</Text>
```

---

## Semantic Variants

Variants define **meaning and hierarchy**, not just appearance.

| Variant   | Intended Use      |
| --------- | ----------------- |
| mainTitle | Page-level titles |
| title     | Section headers   |
| body      | Paragraph content |

```jsx
<Arrange gap="small" columns="1fr">
  <Text variant="mainTitle">Variant mainTitle — {demoText.title}</Text>

  <Text variant="title">Variant title — {demoText.medium}</Text>

  <Text variant="body">Variant body — {demoText.long}</Text>
</Arrange>
```

---

## Alignment

```jsx
<>
  {['left', 'center', 'right'].map((alignment) => (
    <Container borderSide="bottom" key={alignment}>
      <Text alignment={alignment}>Align {alignment}</Text>
    </Container>
  ))}
</>
```

Options:

- left
- center
- right

---

## HTML Tag

Change the rendered HTML element using `htmlTag`.

```jsx
<>
  <Text htmlTag="h1">Tag h1</Text>
  <Text htmlTag="p">Tag p</Text>
  <Text htmlTag="span">Tag span</Text>
</>
```

Supported tags:

- h1
- h2
- h3
- h4
- p
- span
- div

### Combining Semantic Variant + HTML Tag

```jsx
<>
  <Text htmlTag="h2" variant="title">
    Text with h2 tag and title variant
  </Text>

  <Text htmlTag="h4" size="heading-lg">
    Text with h4 tag and size heading-lg
  </Text>
</>
```

---

## Styling Controls

## Color

Use design system palette tokens.

```jsx
<>
  <Text color="body">Text with color</Text>
  <Text color="bodyDimmed">Text with color</Text>
  <Text color="orange">Text with color</Text>
</>
```

---

## Font Family

Supports alternative font families (e.g., monospace).

```jsx
<>
  <Text fontFamily="mono">Monospace A1B2C3D4E5</Text>
  <Text>Regular A1B2C3D4E5</Text>
</>
```

Options:

- sans-serif (default)
- mono

---

## Advanced Font Settings

Enable OpenType features.

Example: tabular (monospaced) numbers.

```jsx
<Text fontSetting="tnum">02:03:04</Text>
```

Options:

- normal (default)
- tnum

---

## Truncation & Overflow

## Single-Line Ellipsis

```jsx
<Text hasEllipsis>{demoText.long}</Text>
```

---

## Multi-Line Ellipsis

```jsx
<Text hasEllipsis ellipsisLines={2}>
  {demoText.long}
</Text>
```

---

## No Wrap

Prevents wrapping entirely.

> ❗ Does not work if `hasEllipsis` is enabled.

```jsx
<Text noWrap>{demoText.long}</Text>
```

---

## Overflow Wrap

Controls how long tokens (like URLs) wrap.

Options:

- normal (default)
- break-word
- anywhere

```jsx
<Arrange gap="medium" columns="1fr 1fr 1fr">
  <Container maxWidth="180px" padding="small" borderSide="all">
    <Text size="body-sm" color="bodyDimmed">
      normal
    </Text>
    <Text overflowWrap="normal">
      https://example.com/very/long/url/that-overflows
    </Text>
  </Container>

  <Container maxWidth="180px" padding="small" borderSide="all">
    <Text size="body-sm" color="bodyDimmed">
      break-word
    </Text>
    <Text overflowWrap="break-word">
      https://example.com/very/long/url/that-overflows
    </Text>
  </Container>

  <Container maxWidth="180px" padding="small" borderSide="all">
    <Text size="body-sm" color="bodyDimmed">
      anywhere
    </Text>
    <Text overflowWrap="anywhere">
      https://example.com/very/long/url/that-overflows
    </Text>
  </Container>
</Arrange>
```

---

## Inline & Display Behavior

## Inline Text

Use `isInline` when rendering text inside other components without block spacing.

```jsx
<Text isInline>Inline text</Text>
```

---

## Dimmed Text

Use `isDimmed` for lower visual emphasis.

```jsx
<Text isDimmed>Secondary information</Text>
```

---

## Responsive Typography

## sizeMinMax

Allows responsive scaling between two size values.

```jsx
<Text sizeMinMax={['body-sm', 'body-lg']}>Responsive text</Text>
```

---

## Props

| Prop          | Type                                                   | Default      |
| ------------- | ------------------------------------------------------ | ------------ |
| size          | TextSize                                               | 'body-md'    |
| fontFamily    | 'sans-serif' \| 'mono'                                 | 'sans-serif' |
| fontWeight    | 'book' \| 'regular' \| 'medium' \| 'bold'              | 'regular'    |
| htmlTag       | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'p' \| 'span' \| 'div' | 'span'       |
| fontSetting   | 'tnum' \| 'normal'                                     | 'normal'     |
| variant       | 'body' \| 'title' \| 'mainTitle'                       | —            |
| alignment     | 'left' \| 'center' \| 'right'                          | —            |
| color         | string                                                 | —            |
| isInline      | boolean                                                | false        |
| isDimmed      | boolean                                                | false        |
| hasEllipsis   | boolean                                                | false        |
| noWrap        | boolean                                                | false        |
| ellipsisLines | number                                                 | —            |
| overflowWrap  | 'normal' \| 'break-word' \| 'anywhere'                 | 'normal'     |
| sizeMinMax    | string[]                                               | —            |
| className     | string                                                 | —            |
| children      | React.ReactNode                                        | —            |

---

