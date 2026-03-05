# 7.Icon

## Import

```tsx
import { Icon, SvgSmile } from '@loomhq/lens'
```

---

## Usage

```tsx
<Icon icon={<SvgSmile />} />
```

See the Icon set for all available SVG icons.

---

## Color

Use one of the palette colors.

```tsx
<Icon color="orange" icon={<SvgLink />} />
```

---

## Size

The default size is **3 × 3 units** (`1.5rem × 1.5rem`).

To change the size, use the `size` prop. The value can be specified in units, pixels, or any valid CSS unit.

```tsx
<Arrange>
  <Icon size={12} icon={<SvgArrowForward />} />
  <Icon size="3rem" icon={<SvgArrowForward />} />
  <Icon icon={<SvgArrowForward />} />
</Arrange>
```

---

## Accessibility

### With Alternative Text

If the icon is not purely decorative, add an `altText` for accessibility.

```tsx
<Icon altText="Favorite" icon={<SvgSmile />} />
```

If the icon is purely decorative, you may omit `altText`.

---

## Props

| Name    | Type              | Default  |
| ------- | ----------------- | -------- |
| color   | `string`          | `'body'` |
| size    | `SizeProp`        | `3`      |
| altText | `string`          | —        |
| icon    | `React.ReactNode` | —        |

---

