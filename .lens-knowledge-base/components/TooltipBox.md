# TooltipBox

## Import

```tsx
import { TooltipBox } from "@loomhq/lens";
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
| Name | Type (Lens types) | Default | Notes |
| --- | --- | --- |
| `children` | `React.ReactNode` | — |
| `maxWidth` | `Size \| []` | — |
| `onMouseEnter` | `React.ReactEventHandler` | — |
| `onMouseLeave` | `React.ReactEventHandler` | — |
| `layerProps` | `any` | — |
| `zIndex` | `number` | — |
| `children` | `React.ReactNode` | — | Tooltip content |
| `maxWidth` | `Size \| []` | — | Lens emits `[]` here (empty tuple type) |
| `onMouseEnter` | `React.ReactEventHandler` | — | Mouse enter handler |
| `onMouseLeave` | `React.ReactEventHandler` | — | Mouse leave handler |
| `layerProps` | `any` | — | Untyped in Lens `.d.ts` output |
| `zIndex` | `number` | — | Stacking context |

## Related Docs

- `.lens-knowledge-base/components/Tooltip.md`

## Type Source

- `.lens-knowledge-base/type-declarations/components/tooltip/tooltip.d.ts`
