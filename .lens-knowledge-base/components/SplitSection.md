# SplitSection

## Import

```tsx
import { Split, SplitSection } from '@loomhq/lens'
```

## Purpose

`SplitSection` is a flex item wrapper used inside `Split` when you need per-item controls like `grow`, `shrink`, and `basis`.

## Usage

```tsx
<Split gap="small">
  <SplitSection grow={1} basis={20}>
    <Text>Primary</Text>
  </SplitSection>
  <SplitSection grow={0} shrink={0}>
    <Text>Secondary</Text>
  </SplitSection>
</Split>
```

## Props

| Name | Type | Default |
| --- | --- | --- |
| `htmlTag` | `'div' \| 'li'` | `'div'` |
| `grow` | `ResponsiveType<number \| string>` | — |
| `shrink` | `ResponsiveType<number \| string>` | — |
| `basis` | `ResponsiveType<number \| string>` | — |
| `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight` | `ResponsiveType<number \| string>` | — |
| `children` | `React.ReactNode` | — |
| `className` | `never` | — |
| `style` | `never` | — |

## Related Docs

- `.lens-knowledge-base/components/Split.md`

## Type Source

- `.lens-knowledge-base/type-declarations/components/split/split.d.ts`
