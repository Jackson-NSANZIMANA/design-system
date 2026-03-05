# 8.IconButton

## Import

```tsx
import { IconButton } from '@loomhq/lens/icons'
import { SvgFolder } from '@loomhq/lens/icons'
```

---

## Usage

Add an image text alternative to convey the component’s purpose.

```tsx
<IconButton altText="Move to Folder" icon={<SvgFolder />} />
```

---

## HTML Tag

Change the HTML wrapper tag with the `htmlTag` prop.

The default tag is `<button>`.  
 Use `href` when using `htmlTag="a"`.

```tsx
<Arrange gap="small">
  <IconButton icon={<SvgArrowForward />} />
  <IconButton htmlTag="a" href="#" icon={<SvgArrowForward />} />
</Arrange>
```

---

## Sizes

```tsx
<Arrange gap="medium">
  <IconButton altText="Add Collaborator" size="small" icon={<SvgAdd />} />
  <IconButton altText="Add Collaborator" size="medium" icon={<SvgAdd />} />
  <IconButton altText="Add Collaborator" size="large" icon={<SvgAdd />} />
</Arrange>
```

---

## Icons

```tsx
<Arrange gap="small">
  <IconButton altText="Play" icon={<SvgPlay />} />
  <IconButton altText="Add Collaborator" icon={<SvgAdd />} />
  <IconButton altText="Back" icon={<SvgArrowBack />} />
</Arrange>
```

See the Icon set for available icons.

---

## States

### Active

```tsx
<IconButton altText="Next" isActive icon={<SvgGrid />} />
```

### Disabled

```tsx
<IconButton altText="Next" isDisabled icon={<SvgArrowForward />} />
```

---

## Color

Use one of the palette colors via `iconColor`.

```tsx
<IconButton altText="Close" icon={<SvgClose />} iconColor="red" />
```

---

## Forwarding Refs

Use the `ref` prop to access the DOM node.

```tsx
;() => {
  const ref = useRef(null)

  const onClick = () => ref.current.focus()

  return (
    <>
      <Spacer bottom="small">
        <IconButton
          ref={ref}
          altText="Add Collaborator"
          size="small"
          icon={<SvgAdd />}
        />
      </Spacer>

      <TextButton onClick={onClick}>Click to focus</TextButton>
    </>
  )
}
```

---

## Accessibility Guidelines

- Always provide `altText` to describe the button’s purpose.
- Do not rely on icon visuals alone to convey meaning.
- If decorative only, reconsider whether `IconButton` is appropriate.

---

## Props

| Name            | Type                                        | Default      |
| --------------- | ------------------------------------------- | ------------ |
| iconColor       | `string`                                    | `'body'`     |
| size            | `'small' \| 'medium' \| 'large'`            | `'medium'`   |
| htmlTag         | `'button' \| 'a'`                           | `'button'`   |
| altText         | `string`                                    | **required** |
| icon            | `React.ReactNode`                           | —            |
| onClick         | `React.MouseEventHandler<HTMLInputElement>` | —            |
| backgroundColor | `string`                                    | —            |
| isActive        | `boolean`                                   | `false`      |
| isDisabled      | `boolean`                                   | `false`      |
| href            | `string`                                    | —            |
| target          | `string`                                    | —            |

---

