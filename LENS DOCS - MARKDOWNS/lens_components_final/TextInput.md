# 26.TextInput

A single-line input field used to enter strings of text, numbers, or characters.  
Commonly used in forms, dialogs, and search interfaces.

---

## Import

```tsx
import { TextInput } from '@loomhq/lens'
```

---

## Usage Guidelines

## Purpose

Use `TextInput` when collecting structured or short-form data such as:

- Names
- Emails
- Passwords
- Search queries
- Numbers
- Dates

---

## ✅ Dos

- Match field width to the intended input.
- Use vertically stacked fields unless they can logically be paired (e.g., first/last name).
- Add optional in-line links only at the end of helper text and use sparingly.
- Use with `<FormField>` to provide a label.
- Always include a `type` that best matches the data (email, date, number, etc).

---

## ❌ Don’ts

- Don’t use wide fields for short inputs (ZIP code, CVV, small numbers).
- Don’t use ALL CAPS in labels or placeholders.
- Avoid inputs without labels.
  - If visually hidden, ensure the label is accessible (e.g. `srOnly` utility).
  - Placeholder text alone is not a replacement for a label.

---

## Basic Usage

```tsx
<TextInput />
```

---

## With Icon

The `icon` prop accepts:

- A React node (SVG component)
- An image URL or Data URL

```tsx
<Arrange columns="1fr" gap="small">
  <TextInput placeholder="Search" icon={<SvgSearch />} size="small" />
  <TextInput placeholder="Search" icon={<SvgSearch />} size="medium" />
  <TextInput placeholder="Search" icon={<SvgSearch />} size="large" />

  <TextInput
    placeholder="Search"
    icon="https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png"
    size="small"
  />
</Arrange>
```

---

## Add-On

The `addOn` appears on the right side of the input (opposite of `icon`).

Best used with:

- `Icon`
- `IconButton`

```tsx
<Arrange columns="1fr" gap="small">
  <TextInput
    type="password"
    placeholder="•••••••••••"
    size="small"
    addOn={<IconButton icon={<SvgEye />} />}
  />

  <TextInput
    size="large"
    icon={<SvgSearch />}
    addOn={<IconButton icon={<SvgCode />} />}
  />
</Arrange>
```

---

## Sizes

| Size   | Usage Context                                |
| ------ | -------------------------------------------- |
| small  | Modals, mobile, compact layouts              |
| medium | Default (36px height), covers most use cases |
| large  | Marketing pages, landing pages               |

```tsx
<Arrange columns="1fr" gap="small">
  <TextInput placeholder="Placeholder" size="small" />
  <TextInput placeholder="Placeholder" size="medium" />
  <TextInput placeholder="Placeholder" size="large" />
</Arrange>
```

---

## Type

Choose a type that best matches the expected data.

Supported types:

- `date`
- `datetime-local`
- `email`
- `month`
- `number`
- `password`
- `search`
- `tel`
- `text` (default)
- `time`
- `url`
- `week`

```tsx
<Arrange columns={[13, '1fr']} gap="small">
  date
  <TextInput type="date" />
  email
  <TextInput type="email" />
  number
  <TextInput type="number" />
  password
  <TextInput type="password" />
  search
  <TextInput type="search" />
  text
  <TextInput type="text" />
</Arrange>
```

---

## Error State

Use `hasError` for validation styling.

```tsx
<TextInput hasError value="Some value" onChange={() => {}} />
```

---

## Disabled State

```tsx
<Arrange columns="1fr" gap="small">
  <TextInput isDisabled placeholder="Some value" />

  <TextInput isDisabled placeholder="Search" icon={<SvgSearch />} />

  <TextInput
    isDisabled
    placeholder="Search"
    icon="https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png"
  />
</Arrange>
```

---

## Forwarding Refs

Access the DOM node using `ref`.

```tsx
import { useRef } from 'react'
;() => {
  const ref = useRef(null)

  const onButtonClick = () => {
    ref.current?.focus()
  }

  return (
    <>
      <Spacer bottom="small">
        <Button onClick={onButtonClick}>Focus</Button>
      </Spacer>

      <TextInput ref={ref} />
    </>
  )
}
```

---

## Props

| Name        | Type                                                                                                                                     | Default    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| type        | `'date' \| 'datetime-local' \| 'email' \| 'month' \| 'number' \| 'password' \| 'search' \| 'tel' \| 'text' \| 'time' \| 'url' \| 'week'` | `'text'`   |
| size        | `'small' \| 'medium' \| 'large'`                                                                                                         | `'medium'` |
| placeholder | `string`                                                                                                                                 | —          |
| value       | `string \| number`                                                                                                                       | —          |
| onFocus     | `React.ReactEventHandler`                                                                                                                | —          |
| onChange    | `React.ReactEventHandler`                                                                                                                | —          |
| onBlur      | `React.ReactEventHandler`                                                                                                                | —          |
| onKeyDown   | `React.ReactEventHandler`                                                                                                                | —          |
| isDisabled  | `boolean`                                                                                                                                | —          |
| icon        | `React.ReactNode \| string`                                                                                                              | —          |
| id          | `string`                                                                                                                                 | —          |
| hasError    | `boolean`                                                                                                                                | —          |
| addOn       | `React.ReactNode`                                                                                                                        | —          |

---

