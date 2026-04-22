# BaseStyles

## Import

```tsx
import { BaseStyles } from '@loomhq/lens'
```

## Purpose

`BaseStyles` injects foundational Lens global styles.  
Use it once near the root of your app so Lens components and tokens render consistently.

## Usage

```tsx
<>
  <BaseStyles />
  <App />
</>
```

## Related Utility

From type declarations, Lens also exports:

```tsx
import { buildGlobalStylesheet } from '@loomhq/lens'
```

`buildGlobalStylesheet(rootElement?, bodyElement?)` returns a stylesheet string for custom injection flows.

## Type Source

- `.lens-knowledge-base/type-declarations/components/base-styles/base-styles.d.ts`

## Related Docs

- `.lens-knowledge-base/QUICK-REFERENCE.md`
- `.lens-knowledge-base/tokens/_tokens-index.md`
