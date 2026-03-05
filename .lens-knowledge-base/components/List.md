# 12.List

## Import

```tsx
import { List, ListRow } from '@loomhq/lens'
```

---

## Usage

```tsx
<List columns={['4fr', '1fr']} gap="large">
  <ListRow paddingX="medium" paddingY="small">
    <div>Content</div>
    <div>Content</div>
  </ListRow>

  <ListRow paddingX="medium" paddingY="small">
    <div>Content</div>
    <div>Content</div>
  </ListRow>
</List>
```

---

## Padding and Height

### With Padding

```tsx
<List>
  <ListRow padding="large">
    <Container borderSide="all">With padding</Container>
  </ListRow>
</List>
```

### With Padding and Fixed Height

```tsx
<List>
  <ListRow paddingX="large" paddingY="small" height={6}>
    <Container borderSide="all">With padding and height</Container>
  </ListRow>
</List>
```

### With Min / Max Height

```tsx
<List>
  <ListRow minHeight={6} maxHeight={8}>
    <Container borderSide="all">With minHeight and maxHeight</Container>
  </ListRow>
</List>
```

---

## Variant

The `variant` prop controls list styling.

- **stripe** (default)
- **border**
- **clear**

```tsx
<Arrange columns="repeat(3, 1fr)" gap="medium">
  <List columns={['1fr']} variant="stripe">
    <ListRow padding="small">
      <Text>stripe</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>stripe</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>stripe</Text>
    </ListRow>
  </List>

  <List columns={['1fr']} variant="border">
    <ListRow padding="small">
      <Text>border</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>border</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>border</Text>
    </ListRow>
  </List>

  <List columns={['1fr']} variant="clear">
    <ListRow padding="small">
      <Text>clear</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>clear</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>clear</Text>
    </ListRow>
  </List>
</Arrange>
```

---

## Background Color

```tsx
<List>
  <ListRow padding="small">Row</ListRow>
  <ListRow padding="small">Row</ListRow>
  <ListRow padding="small" backgroundColor="highlight">
    Row
  </ListRow>
  <ListRow padding="small" backgroundColor="offWhite">
    Row
  </ListRow>
</List>
```

---

## Clickable List Items

### With `onClick`

```tsx
<List columns={['1fr']}>
  <ListRow
    paddingX="medium"
    paddingY="small"
    onClick={() => console.log('clicked')}
  >
    <div>With onClick</div>
  </ListRow>
</List>
```

### With `href`

```tsx
<List columns={['1fr']}>
  <ListRow
    paddingX="medium"
    paddingY="small"
    htmlTag="a"
    href="https://www.loom.com"
  >
    <div>With href</div>
  </ListRow>
</List>
```

---

## Examples

### Simple Settings List

```tsx
<List columns={['1fr', 'auto']} gap="medium">
  <ListRow padding="small">
    <Text hasEllipsis>Use system audio</Text>
    <Switch />
  </ListRow>

  <ListRow padding="small">
    <Text hasEllipsis>Highlight mouse clicks {demoText.long}</Text>
    <Switch />
  </ListRow>

  <ListRow padding="small">
    <Text hasEllipsis>Recording countdown</Text>
    <Switch />
  </ListRow>
</List>
```

---

### Data List

```tsx
;() => {
  const listItems = [
    { title: 'Ryozo', email: 'ryozo@email.com', role: 'Admin' },
    { title: 'Hikaru', email: 'hikaru@email.com', role: 'Admin' },
    { title: 'Yutsuko', email: 'yutsuko@email.com', role: 'Admin' },
  ]

  return (
    <List columns={['2fr', '1fr', '1fr']} gap="medium">
      {listItems.map((item, index) => (
        <ListRow key={index} paddingX="medium" paddingY="small">
          <Text>{item.title}</Text>
          <Text>{item.email}</Text>
          <Text>{item.role}</Text>
        </ListRow>
      ))}
    </List>
  )
}
```

---

### With Ellipsis

```tsx
<List columns={['4fr', '1fr']} gap="large">
  <ListRow paddingX="medium" paddingY="small">
    <div className="ellipsis">
      Ellipsis with utility class — {demoText.long}
    </div>
    <div>Content</div>
  </ListRow>

  <ListRow paddingX="medium" paddingY="small">
    <Text hasEllipsis>Ellipsis with Text component — {demoText.long}</Text>
    <div>Content</div>
  </ListRow>
</List>
```

---

## Props

| Name            | Type                               | Default    |
| --------------- | ---------------------------------- | ---------- |
| variant         | `'clear' \| 'border' \| 'stripe'`  | `'stripe'` |
| htmlTag         | `unknown`                          | `'ul'`     |
| columns         | `(string \| number)[]`             | —          |
| gap             | `ResponsiveType<string \| number>` | —          |
| backgroundColor | `string`                           | —          |
| children        | `React.ReactNode`                  | —          |

---

## ListRow

| Name            | Type                               | Default |
| --------------- | ---------------------------------- | ------- |
| htmlTag         | `unknown`                          | `'li'`  |
| padding         | `ResponsiveType<string \| number>` | —       |
| paddingTop      | `ResponsiveType<string \| number>` | —       |
| paddingBottom   | `ResponsiveType<string \| number>` | —       |
| paddingLeft     | `ResponsiveType<string \| number>` | —       |
| paddingRight    | `ResponsiveType<string \| number>` | —       |
| paddingY        | `ResponsiveType<string \| number>` | —       |
| paddingX        | `ResponsiveType<string \| number>` | —       |
| height          | `ResponsiveType<string \| number>` | —       |
| minHeight       | `ResponsiveType<string \| number>` | —       |
| maxHeight       | `ResponsiveType<string \| number>` | —       |
| backgroundColor | `string`                           | —       |
| className       | `string`                           | —       |
| children        | `React.ReactNode`                  | —       |
| onClick         | `React.ReactEventHandler`          | —       |
| href            | `string`                           | —       |
| role            | `string`                           | —       |

---

