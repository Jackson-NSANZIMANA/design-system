# SkeletonContainer

## Import

```tsx
import { SkeletonContainer } from '@loomhq/lens'
```

## Purpose

`SkeletonContainer` is used for non-text loading placeholders such as avatars, thumbnails, and icon blocks.

## Usage

```tsx
<Split gap="small">
  <SkeletonContainer />
  <SkeletonContainer height="24px" width="24px" radius="large" animated />
</Split>
```

## Props

| Name | Type | Default |
| --- | --- | --- |
| `animated` | `boolean` | `false` |
| `height` | `string` | `'40px'` |
| `width` | `string` | `'40px'` |
| `radius` | `'medium' \| 'large' \| 'xlarge' \| 'full' \| '175'` | `'full'` |

## Related Docs

- `.lens-knowledge-base/patterns/skeletons.md`

## Type Source

- `.lens-knowledge-base/type-declarations/components/skeleton/skeleton.d.ts`
