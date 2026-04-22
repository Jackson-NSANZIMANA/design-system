# ListRow

## Import

```tsx
import { List, ListRow } from '@loomhq/lens'
```

## Purpose

`ListRow` is an item row used inside `List`, with support for spacing, height constraints, background, click handlers, and link semantics.

## Usage

```tsx
<List columns={['2fr', '1fr']}>
  <ListRow paddingX="medium" paddingY="small">
    <Text>Name</Text>
    <Text>Role</Text>
  </ListRow>
</List>
```

## Props

| Name | Type | Default |
| --- | --- | --- |
| `htmlTag` | `keyof JSX.IntrinsicElements` | `'li'` |
| `children` | `React.ReactNode` | — |
| `className` | `string` | — |
| `onClick` | `React.ReactEventHandler` | — |
| `href` | `string` | — |
| `role` | `string` | — |
| `padding`, `paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`, `paddingY`, `paddingX` | `ResponsiveType<string \| number>` | — |
| `height`, `minHeight`, `maxHeight` | `ResponsiveType<string \| number>` | — |
| `backgroundColor` | `string` | — |

## Related Docs

- `.lens-knowledge-base/components/List.md`

## Type Source

- `.lens-knowledge-base/type-declarations/components/list/list.d.ts`
