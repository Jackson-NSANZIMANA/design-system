# 24.Textarea

Multi-line text input component for longer form content.

---

## Import

```tsx
import { Textarea } from '@loomhq/lens'
```

---

## Basic Usage

```tsx
<Textarea />
```

---

## Rows

Control the visible height using the `rows` prop.

```tsx
<Textarea rows={2} value={demoText.medium} onChange={() => console.log()} />
```

---

## Placeholder

```tsx
<Textarea placeholder="Placeholder" />
```

---

## Sizes

Available sizes:

- `small`
- `medium` (default)

```tsx
<Arrange columns="1fr" gap="small">
  <Textarea placeholder="small" size="small" />
  <Textarea placeholder="medium" size="medium" />
</Arrange>
```

---

## Resize Behavior

Control how the textarea can be resized.

Available options:

- `none`
- `both` (default)
- `horizontal`
- `vertical`

```tsx
<Arrange columns="1fr" gap="small">
  <Textarea resize="none" placeholder="none" rows={1} />
  <Textarea resize="both" placeholder="both" rows={1} />
  <Textarea resize="horizontal" placeholder="horizontal" rows={1} />
  <Textarea resize="vertical" placeholder="vertical" rows={1} />
</Arrange>
```

---

## Disabled State

Use `isDisabled` to prevent interaction.

```tsx
<Textarea
  isDisabled
  rows={2}
  value={demoText.long}
  onChange={() => console.log()}
/>
```

---

## Error State

Use the `error` prop to show validation feedback.

```tsx
<Textarea
  rows={2}
  value={demoText.short}
  onChange={() => console.log()}
  error="Invalid content"
/>
```

---

## Forwarding Refs

You can access the DOM node using `ref`.

```tsx
import { useRef } from 'react'
;() => {
  const inputEl = useRef(null)

  const onButtonClick = () => {
    inputEl.current?.focus()
  }

  return (
    <>
      <Spacer bottom="small">
        <Button onClick={onButtonClick}>Focus this Textarea</Button>
      </Spacer>

      <Textarea ref={inputEl} />
    </>
  )
}
```

---

## Props

| Name        | Type                                             | Default    |
| ----------- | ------------------------------------------------ | ---------- |
| rows        | `number`                                         | `4`        |
| size        | `'small' \| 'medium'`                            | `'medium'` |
| resize      | `'none' \| 'both' \| 'horizontal' \| 'vertical'` | `'both'`   |
| error       | `string`                                         | `null`     |
| value       | `string`                                         | —          |
| placeholder | `string`                                         | —          |
| isDisabled  | `boolean`                                        | —          |
| onChange    | `React.ReactEventHandler`                        | —          |

---

