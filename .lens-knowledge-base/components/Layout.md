# Layout

## Import

```tsx
import Layout from '@loomhq/lens'
```

## Purpose

`Layout` groups page sections and controls section sizing/alignment through `Layout.Section`.

## Usage

```tsx
<Layout gap="medium" alignment="start">
  <Layout.Section width="1fr">
    <Text>Main content</Text>
  </Layout.Section>
  <Layout.Section maxWidth={40}>
    <Text>Sidebar</Text>
  </Layout.Section>
</Layout>
```

## Layout Props

| Name | Type | Default |
| --- | --- | --- |
| `alignment` | `'start' \| 'center' \| 'end' \| 'stretch'` (or array variant) | — |
| `gap` | `ResponsiveType<string \| number>` | — |
| `children` | `React.ReactNode` | — |

## Layout.Section Props

| Name | Type | Default |
| --- | --- | --- |
| `width` | `ResponsiveType<string \| number>` | — |
| `maxWidth` | `ResponsiveType<string \| number>` | — |
| `children` | `React.ReactNode` | — |

## Type Source

- `.lens-knowledge-base/type-declarations/components/layout/layout.d.ts`
