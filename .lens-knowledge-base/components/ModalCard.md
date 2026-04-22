# ModalCard

## Import

```tsx
import { ModalCard } from '@loomhq/lens'
```

## Purpose

`ModalCard` is the dialog card surface used by `Modal`, and can also be used directly in custom backdrop/drawer flows.

## Usage

```tsx
<ModalCard isOpen onCloseClick={onClose} maxWidth={72}>
  <Container padding="large">
    <Text>Custom modal card content</Text>
  </Container>
</ModalCard>
```

## Props

| Name | Type | Default |
| --- | --- | --- |
| `id` | `string` | — |
| `isOpen` | `boolean` | — |
| `onKeyDown` | `React.ReactEventHandler` | — |
| `onCloseClick` | `React.ReactEventHandler` | — |
| `closeOnEscape` | `boolean` | `true` |
| `placement` | `string` | `'center'` |
| `maxHeight` | `number \| string` | `'70vh'` |
| `maxWidth` | `number \| string` | `60` |
| `ariaLabel` | `string` | — |
| `ariaModal` | `boolean` | `true` |
| `ariaLabelledBy` | `string` | — |
| `removeClose` | `boolean` | `false` |
| `initialFocus` | `HTMLElement \| SVGElement \| string \| false \| (() => HTMLElement \| SVGElement \| string \| false \| undefined)` | `undefined` |

## Related Docs

- `.lens-knowledge-base/components/Modal.md`

## Type Source

- `.lens-knowledge-base/type-declarations/components/modal/modal.d.ts`
