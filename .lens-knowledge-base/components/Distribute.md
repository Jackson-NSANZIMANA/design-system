# Distribute

## Import

```tsx
import { Distribute } from '@loomhq/lens'
```

## Purpose

`Distribute` is a layout primitive for distributing children along a row/column with configurable alignment, spacing, and optional spread behavior.

## Usage

```tsx
<Distribute gap="small" direction="row" alignment="center">
  <Text>Left</Text>
  <Text>Center</Text>
  <Text>Right</Text>
</Distribute>
```

## Props

| Name | Type | Default |
| --- | --- | --- |
| `children` | `React.ReactNode` | required |
| `direction` | `ResponsiveType<'row' \| 'column'>` | `'row'` |
| `alignment` | `'start' \| 'center' \| 'end' \| 'stretch'` (or array variant) | — |
| `isSpread` | `ResponsiveType<true \| false>` | — |
| `htmlTag` | `'div' \| 'header' \| 'article' \| 'section' \| 'nav' \| 'aside' \| 'footer' \| 'main'` | `'div'` |
| `gap` | `string \| number` | — |

## Type Source

- `.lens-knowledge-base/type-declarations/components/distribute/distribute.d.ts`
