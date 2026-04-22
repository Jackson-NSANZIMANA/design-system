# TooltipBox

## Import

```tsx
import { TooltipBox } from '@loomhq/lens'
```

## Purpose

`TooltipBox` is the tooltip content container used internally by `Tooltip`.  
Use it when building custom tooltip behavior without the full trigger logic.

## Usage

```tsx
<TooltipBox maxWidth={30}>
  <Text>TooltipBox content</Text>
</TooltipBox>
```

## Props

| Name | Type | Default |
| --- | --- | --- |
| `children` | `React.ReactNode` | — |
| `maxWidth` | `Size \| []` | — |
| `onMouseEnter` | `React.ReactEventHandler` | — |
| `onMouseLeave` | `React.ReactEventHandler` | — |
| `layerProps` | `any` | — |
| `zIndex` | `number` | — |

## Related Docs

- `.lens-knowledge-base/components/Tooltip.md`

## Type Source

- `.lens-knowledge-base/type-declarations/components/tooltip/tooltip.d.ts`
