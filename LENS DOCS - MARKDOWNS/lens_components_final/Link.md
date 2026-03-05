# 11.Link

## Import

```tsx
import { Link } from '@loomhq/lens'
```

---

## Usage

```tsx
<Link>Content</Link>
```

---

## Variants

Use `subtle` when you do not want an underline and the surrounding context clearly communicates interactivity.

By default, links should have an underline, as it is a strong accessibility affordance.

```tsx
<Arrange gap="small">
  <Link href="#">Primary</Link>
  <Link variant="neutral" href="#">
    Neutral
  </Link>
  <Link variant="subtle" href="#">
    Subtle
  </Link>
</Arrange>
```

---

## Href

Use `href` to navigate to another location.

```tsx
<Link href="#">Take me somewhere</Link>
```

---

## HTML Tag

Change the HTML wrapper tag using the `htmlTag` prop.

### Rendering `<a>` (default)

```tsx
<Link>Rendering {'<a>'} tag</Link>
```

### Rendering `<button>`

```tsx
<Link htmlTag="button">Rendering {'<button>'} tag</Link>
```

---

## Disabled

```tsx
<Link isDisabled>Can't touch this</Link>
```

---

## Wrapping

Use `noWrap` to prevent the link from wrapping or truncating.

> ⚠️ This does not work if `hasEllipsis` is enabled on a parent `Text` component.

```tsx
<Link noWrap>{demoText.medium}</Link>
```

---

## Examples

### Link in a Paragraph

```tsx
<Text>
  <span>{demoText.medium} </span>
  <Link href="#">clouds.com</Link>
  <span> {demoText.medium}</span>
</Text>
```

---

### With Ellipsis

```tsx
<Text hasEllipsis>
  <Link href="#">{demoText.medium}</Link>
</Text>
```

---

### Size

The `Link` component inherits its size from the surrounding `Text` component.

```tsx
<Text size="xxlarge">
  <Link href="#">Big link</Link>
</Text>
```

---

## Accessibility Guidelines

- Prefer underlined links for clarity and accessibility.
- Do not rely solely on color to indicate interactivity.
- Use `button` only when the action does not navigate.
- Always provide meaningful link text (avoid “Click here”).

---

## Props

| Name       | Type                                         | Default     |
| ---------- | -------------------------------------------- | ----------- |
| variant    | `'neutral' \| 'primary' \| 'subtle'`         | `'primary'` |
| htmlTag    | `'button' \| 'a'`                            | `'a'`       |
| children   | `React.ReactNode`                            | —           |
| href       | `string`                                     | —           |
| isDisabled | `boolean`                                    | `false`     |
| noWrap     | `boolean`                                    | `false`     |
| onClick    | `React.MouseEventHandler<HTMLAnchorElement>` | —           |
| target     | `string`                                     | —           |

---

