# 17.Pill

---

## Usage Guidelines

Pills are compact elements used to **highlight information**, **status**, or **categorical data**. They can include text, icons, or both.

---

## Usage Example

```jsx
import { Pill } from '@loomhq/lens'
;<Pill color="white" backgroundColor="grey7">
  Pill
</Pill>
```

---

## Color

Pills should use **one of the palette colors** for foreground (`color`) and background (`backgroundColor`).

### Examples

```jsx
<Arrange gap="small">
  <Pill color="grey8" backgroundColor="yellow">
    Pill
  </Pill>
  <Pill color="white" backgroundColor="grey7">
    Pill
  </Pill>
</Arrange>
```

---

## Icon Support

Pills can include an **icon** on either the left or right side of the text.

### Examples

```jsx
<Arrange gap="small">
  <Pill
    icon={<SvgArrowForward />}
    iconPosition="left"
    color="grey8"
    backgroundColor="grey2"
  >
    Icon on left
  </Pill>

  <Pill
    icon={<SvgArrowForward />}
    iconPosition="right"
    color="grey8"
    backgroundColor="grey2"
  >
    Icon on right
  </Pill>
</Arrange>
```

---

## Props

| name            | type              | default | description                           |
| --------------- | ----------------- | ------- | ------------------------------------- |
| iconPosition    | 'left' \| 'right' | 'left'  | Position of the icon relative to text |
| icon            | React.ReactNode   | —       | Icon to display inside the pill       |
| color           | string            | —       | Text color of the pill                |
| backgroundColor | string            | —       | Background color of the pill          |
| children        | React.ReactNode   | —       | Content inside the pill               |

---

