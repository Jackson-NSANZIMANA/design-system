# 20.Skeleton

---

## Purpose

Skeleton loading states provide **visual feedback** that content is actively loading.  
They indicate **where and how content will appear** once fully loaded. It is about loading a placeholder
Best suited for **content-rich layouts**, such as:

- Video grids
- Transcripts
- Lists (e.g., meetings, messages)

---

## SkeletonText

Represents **loading text** placeholders.

### Basic Usage

```jsx
import { SkeletonText } from "@loomhq/lens";
<SkeletonText lines={1} size="body-md" />;
```

### Sizes

```jsx
<>
  {availableSizes.map((size, index) => (
    <SkeletonText size={size} key={index} />
  ))}
</>
```

### Number of Lines

```jsx
<SkeletonText lines={3} />
```

### Animation

Use the `animated` prop to indicate **active loading**:

```jsx
<SkeletonText lines={3} animated={true} />
```

### Props

| name     | type     | default   | description                     |
| -------- | -------- | --------- | ------------------------------- |
| size     | TextSize | 'body-md' | Font size of the skeleton text  |
| lines    | number   | 1         | Number of text lines to display |
| animated | boolean  | false     | Enables loading animation       |

---

## SkeletonContainer

Represents **non-text UI elements** (e.g., avatar, icon, thumbnail).

### Basic Usage

```jsx
import { SkeletonContainer } from "@loomhq/lens";
<SkeletonContainer />;
```

### Setting Height, Width, and Radius

```jsx
<Split gap="large">
  <SkeletonContainer animated={true} />
  <SkeletonContainer
    height="24px"
    width="24px"
    radius="large"
    animated={true}
  />
  <SkeletonContainer
    height="1rem"
    width="32px"
    radius="medium"
    animated={true}
  />
</Split>
```

### Animation

```jsx
<Split gap="large">
  <SkeletonContainer />
  <SkeletonContainer animated={true} />
</Split>
```

### Props

| name     | type                                               | default | description               |
| -------- | -------------------------------------------------- | ------- | ------------------------- |
| animated | boolean                                            | false   | Enables loading animation |
| height   | string                                             | '40px'  | Height of the container   |
| width    | string                                             | '40px'  | Width of the container    |
| radius   | 'medium' \| 'large' \| 'xlarge' \| 'full' \| '175' | 'full'  | Border radius             |

---

## Combining SkeletonText and SkeletonContainer

Combine them to **represent richer UI elements**, such as cards or list items:

```jsx
<Container padding="large" radius="large" borderSide="all" borderColor="border">
  <SkeletonContainer animated={true} />
  <Spacer bottom="medium" />
  <SkeletonText lines={2} animated={true} />
</Container>
```

---
