# Tab

## Import

```tsx
import { Tab } from '@loomhq/lens'
```

## Status
`Tab` is a legacy/low-level export. Prefer using `Tabs` with the tabs prop (data-driven tabs) unless you have a specific reason to render individual tab items manually.

## Purpose
Tab represents a single tab item. It is typically used as part of the older `<Tabs>` + `<Tab>` composition approach.

### Recommended approach
Use `Tabs` and provide the  `tabs` array.

## Legacy usage (if needed)

```tsx

import { Tabs, Tab } from '@loomhq/lens'

<Tabs>
  <Tab isActive>First</Tab>
  <Tab>Second</Tab>
</Tabs>
```
## Props    

The authoritative prop types come from Lens’ TypeScript declarations. See the type source below.

## Related Docs

- Tabs

## Type Source
- type-declarations/components/tabs/tabs.d.ts (see Tab / TabProps)