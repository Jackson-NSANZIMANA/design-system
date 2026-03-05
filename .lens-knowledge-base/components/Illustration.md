# 9.Illustration

## Import

```tsx
import { Illustration, SvgSmile } from '@loomhq/lens'
```

---

## Usage

```tsx
<Illustration illustration={<SvgSmile />} />
```

See the Illustration set for all available illustrations.

---

## Illustration Set

```tsx
<Arrange gap="medium">
  <Illustration illustration={<IllustrationStarred />} />
  <Illustration illustration={<IllustrationShare />} />
  <Illustration illustration={<IllustrationInviteMembers />} />
</Arrange>
```

---

## Color

Use one of the palette colors.

```tsx
<Illustration color="body" illustration={<IllustrationShare />} />
```

---

## Size

The default size is **12 × 12 units** (`6rem × 6rem`).

To change the size, use the `size` prop. The value can be specified in units, pixels, or any valid CSS unit.

```tsx
<Arrange gap="medium">
  <Illustration illustration={<IllustrationPto />} />
  <Illustration size={9} illustration={<IllustrationPto />} />
  <Illustration size="3rem" illustration={<IllustrationPto />} />
</Arrange>
```

---

## Accessibility

### With Alternative Text

If the illustration is not purely decorative, add an `altText` for accessibility.

```tsx
<Illustration
  altText="Invite team members"
  illustration={<IllustrationInvite />}
/>
```

If the illustration is purely decorative, `altText` may be omitted.

---

## Props

| Name         | Type               | Default    |
| ------------ | ------------------ | ---------- |
| color        | `string`           | `'orange'` |
| size         | `number \| string` | `12`       |
| altText      | `string`           | —          |
| illustration | `React.ReactNode`  | —          |

---

