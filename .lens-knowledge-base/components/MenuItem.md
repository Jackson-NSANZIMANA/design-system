# MenuItem

## Import

```tsx
import { Menu, MenuItem } from '@loomhq/lens'
```

## Purpose

`MenuItem` is an interactive row for menus, supporting selected/highlighted/disabled states, optional icons, and divider rendering.

## Usage

```tsx
<Menu maxWidth={24}>
  <MenuItem icon={<SvgArchive />}>Archive</MenuItem>
  <MenuItem isSelected>Selected Item</MenuItem>
  <MenuItem hasDivider>Item with divider</MenuItem>
</Menu>
```

## Props

| Name | Type | Default |
| --- | --- | --- |
| `isDisabled` | `boolean` | — |
| `isHighlighted` | `boolean` | — |
| `keyboardMove` | `boolean` | — |
| `isSelected` | `boolean` | — |
| `icon` | `React.ReactNode \| string` | — |
| `hasDivider` | `boolean` | — |
| `children` | `React.ReactNode` | — |
| `columns` | `string` | — |
| `hidden` | `boolean` | — |
| `menuItemRole` | `React.AriaRole` | — |
| `showDeselectIcon` | `boolean` | `false` |

## Related Docs

- `.lens-knowledge-base/components/Menu.md`

## Type Source

- `.lens-knowledge-base/type-declarations/components/menu/menu.d.ts`
