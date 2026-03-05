# 25.TextButton

A lightweight button used for secondary actions, inline actions, and low-emphasis interactions.

---

## Import

```tsx
import { TextButton } from '@loomhq/lens'
```

---

## Usage Guidelines

## When to Use

Use `TextButton` for:

- Secondary actions
- Inline actions within content
- Low-emphasis controls
- Toolbar actions
- Compact UI interactions

Avoid using `TextButton` for primary actions — use `Button` instead.

---

## Basic Usage

```tsx
<TextButton icon={<SvgSearch />}>Search</TextButton>
```

---

### Sizes

Available sizes:

- `small`
- `medium` (default)
- `large`

```tsx
<Arrange gap="xsmall">
  <TextButton size="small" icon={<SvgAdd />}>
    Small
  </TextButton>

  <TextButton icon={<SvgAdd />}>Medium</TextButton>

  <TextButton size="large" icon={<SvgAdd />}>
    Large
  </TextButton>
</Arrange>
```

---

### With Icon

```tsx
<Arrange gap="xsmall">
  <TextButton icon={<SvgShare />}>Share</TextButton>

  <TextButton icon={<SvgAdd />}>New Item</TextButton>

  <TextButton icon={<SvgSearch />}>Search</TextButton>
</Arrange>
```

---

### Icon Position

Control icon placement with `iconPosition`.

Options:

- `left` (default)
- `right`

```tsx
<Arrange gap="xsmall">
  <TextButton iconPosition="left" icon={<SvgArrowLeft />}>
    Left
  </TextButton>

  <TextButton iconPosition="right" icon={<SvgArrowRight />}>
    Right
  </TextButton>
</Arrange>
```

---

### Without Icon

```tsx
<Arrange gap="xsmall">
  <TextButton>Open</TextButton>
  <TextButton>Archive</TextButton>
  <TextButton>Delete</TextButton>
</Arrange>
```

---

### Offset

Use `offsetSide` to align the button flush with one side by offsetting padding.

Options:

- `left`
- `right`

```tsx
<Arrange gap="medium" justifyContent="space-between">
  <Container borderSide="left" borderColor="red" borderWidth="2px">
    <Arrange gap="xsmall">
      <TextButton offsetSide="left">Archive</TextButton>

      <TextButton>Delete</TextButton>
    </Arrange>

    <TextButton offsetSide="left" icon={<SvgFolder />}>
      Save
    </TextButton>
  </Container>

  <Container borderSide="right" borderColor="red" borderWidth="2px">
    <Arrange gap="xsmall" justifyContent="end">
      <TextButton>Archive</TextButton>

      <TextButton offsetSide="right">Delete</TextButton>
    </Arrange>

    <Arrange justifyContent="end">
      <TextButton offsetSide="right" icon={<SvgFolder />}>
        Save
      </TextButton>
    </Arrange>
  </Container>
</Arrange>
```

---

## Active State

Use `isActive` to indicate selected or current state.

```tsx
<TextButton isActive icon={<SvgAdd />}>
  New Item
</TextButton>
```

---

## Disabled State

```tsx
<TextButton isDisabled icon={<SvgAdd />}>
  New Item
</TextButton>
```

---

## Rendering as Link

Use `htmlTag="a"` with `href`.

```tsx
<TextButton htmlTag="a" href="https://example.com" target="_blank">
  Open Link
</TextButton>
```

---

## Forwarding Refs

Access the DOM node using `ref`.

```tsx
import { useRef } from 'react'
;() => {
  const ref = useRef(null)

  const onClick = () => {
    ref.current?.focus()
  }

  return (
    <>
      <Spacer bottom="small">
        <TextButton ref={ref} icon={<SvgAdd />}>
          New Item
        </TextButton>
      </Spacer>

      <TextButton onClick={onClick}>Click to focus</TextButton>
    </>
  )
}
```

---

## Props

| Name         | Type                             | Default      |
| ------------ | -------------------------------- | ------------ |
| size         | `'small' \| 'medium' \| 'large'` | `'medium'`   |
| iconPosition | `'left' \| 'right'`              | `'left'`     |
| onClick      | `React.ReactEventHandler`        | —            |
| isDisabled   | `boolean`                        | —            |
| isActive     | `boolean`                        | —            |
| icon         | `React.ReactNode`                | —            |
| children     | `React.ReactNode`                | **required** |
| htmlTag      | `'button' \| 'a'`                | `'button'`   |
| offsetSide   | `'left' \| 'right'`              | —            |
| href         | `string`                         | —            |
| target       | `string`                         | —            |
| type         | `string`                         | —            |

---

