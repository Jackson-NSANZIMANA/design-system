# IconButtonBox

## Import

```tsx
import { IconButtonBox } from '@loomhq/lens'
```

## Purpose

`IconButtonBox` is the styled wrapper used by `IconButton`.  
Use `IconButton` for standard interactions; use `IconButtonBox` only when you need the wrapper primitive directly.

## Usage

```tsx
<IconButtonBox as="button" size="medium" isActive={false}>
  <Icon icon={<SvgAdd />} />
</IconButtonBox>
```

## Wrapper Props

| Name | Type | Default |
| --- | --- | --- |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` |
| `isActive` | `boolean` | `false` |
| `backgroundColor` | `string` | — |
| `as` | `'button' \| 'a'` | `'button'` |

## Related Docs

- `.lens-knowledge-base/components/IconButton.md`

## Type Source

- `.lens-knowledge-base/type-declarations/components/icon-button/icon-button.d.ts`
