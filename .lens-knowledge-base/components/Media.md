# Media

## Import

```tsx
import { Media } from '@loomhq/lens'
```

## Purpose

`Media` selects a value based on query conditions and renders children with the resolved value.

## Usage

```tsx
<Media
  queries={{ small: '(max-width: 767px)', large: '(min-width: 768px)' }}
  values={{ small: 'body-sm', large: 'body-md' }}
  defaultValue="body-sm"
>
  {(resolvedSize) => <Text size={resolvedSize}>Responsive text</Text>}
</Media>
```

## Props

| Name | Type | Default |
| --- | --- | --- |
| `children` | `any` | required |
| `queries` | `any` | required |
| `values` | `any` | required |
| `defaultValue` | `any` | required |

## Notes

- The current declaration is broad (`any`) in type definitions.
- Prefer strongly-typed wrapper usage in app code where possible.

## Type Source

- `.lens-knowledge-base/type-declarations/utilities/responsive.d.ts`
