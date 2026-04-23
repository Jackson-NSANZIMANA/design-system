# 22.Tabs

---

## Purpose

The `Tabs` component is used to **organize content into multiple sections** where only one section is visible at a time. Tabs help improve content discoverability and reduce visual clutter.

---

## Usage

```jsx
import { Tabs } from '@loomhq/lens'

<Tabs
  tabs={[
    { tabContent: 'First' },
    { tabContent: 'Second', isActive: true },
    { tabContent: 'Third' },
  ]}
/>
```

---

## Active Tab

Set the currently active tab with `isActive`:

```jsx
<Tabs
  tabs={[{ tabContent: 'First' }, { tabContent: 'Second', isActive: true }]}
/>
```

---

## Scroll Offset

`scrollOffset` allows tabs to scroll edge-to-edge on narrow screens. Use the same value as your page padding.

```jsx
<Tabs
  scrollOffset="var(--livePreviewPadding)"
  tabs={demoText.ordinals.map((title, index) => ({
    tabContent: title,
    isActive: index === 0,
  }))}
/>
```

---

## Full Width Tabs

`hasFullTabs` makes all tabs expand equally to fill the container:

```jsx
<Tabs
  hasFullTabs
  tabs={[
    { tabContent: 'Full', isActive: true },
    { tabContent: 'Width' },
    { tabContent: 'Tabs' },
  ]}
/>
```

---

## Bottom Border

Use `hasBottomBorder` to visually separate the tabs from the content:

```jsx
<Tabs
  hasBottomBorder
  tabs={[
    { tabContent: 'First', isActive: true },
    { tabContent: 'Second' },
    { tabContent: 'Third' },
  ]}
/>
```

---

## Tabs with Icons

Add icons to tabs using the `icon` prop:

```jsx
<Tabs
  tabs={[
    { tabContent: 'Tabs', icon: <SvgRecord />, isActive: true },
    { tabContent: 'With', icon: <SvgArrowForward /> },
    { tabContent: 'Icons', icon: <SvgBell /> },
  ]}
/>
```

---

## HTML Tag

Render tabs as `button` or `a` elements using `htmlTag`:

```jsx
<Tabs
  tabs={[
    { tabContent: 'Home', htmlTag: 'a', href: '/' },
    { tabContent: 'About', htmlTag: 'a', href: '/about' },
  ]}
/>
```

---

## Pilled Tabs

Use `isPilledDesign` for pill-shaped tabs. Defaults to `true` if `hasFullTabs` is set:

```jsx
<Tabs isPilledDesign tabs={tabsConfig} />
```

---

## Disabled Tabs

Show unavailable tabs with `isDisabled`:

```jsx
<Tabs
  isPilledDesign
  tabs={tabsConfig.map((tab) => ({
    ...tab,
    isDisabled: !tab.enabled,
  }))}
/>
```

---

## Tabs with Tooltips

Provide additional context via `tooltipProps`:

```jsx
const tabs = [
  {
    tabContent: 'Overview',
    tooltipProps: { content: 'View general information' },
  },
  {
    tabContent: 'Settings',
    tooltipProps: { content: 'Configure preferences', placement: 'top' },
  },
]
;<Tabs tabs={tabs} />
```

---

## With React Router

Use `Link` components for tab content while maintaining accessibility:

```jsx
<Tabs
  tabs={[
    {
      tabContent: (
        <Link tabIndex={-1} to="/">
          Home
        </Link>
      ),
      isActive: true,
      onClick: () => history.push('/'),
    },
    {
      tabContent: <Link to="/about">About</Link>,
      onClick: () => history.push('/about'),
    },
  ]}
/>
```

---

## Deprecated - Legacy Tab Structure

The old `<Tabs>` + `<Tab>` approach is deprecated and **should not be used**. Use the new `tabs` prop structure instead for proper accessibility and keyboard navigation.

---
## Tab (legacy export)

Lens also exports a [`Tab`](Tab.md) component for legacy composition. Prefer the `tabs` prop API shown above unless you specifically need the low-level component.
---
## Props

### Tabs

| name            | type             | default | description                                 |
| --------------- | ---------------- | ------- | ------------------------------------------- |
| scrollOffset    | number \| string | —       | Space for scrollable tabs on narrow screens |
| hasFullTabs     | boolean          | false   | Makes all tabs expand to fill container     |
| children        | React.ReactNode  | —       | Legacy - child `<Tab>` elements             |
| tabs            | TabItem[]        | —       | Array of tab objects                        |
| isPilledDesign  | boolean          | false   | Enables pill-shaped design                  |
| hasBottomBorder | boolean          | false   | Adds bottom border underline                |

### Deprecated - Tab

| name           | type                      | default  | description                      |
| -------------- | ------------------------- | -------- | -------------------------------- |
| htmlTag        | 'a' \| 'button' \| 'span' | 'button' | HTML element type                |
| isDisabled     | boolean                   | false    | Disables the tab                 |
| isActive       | boolean                   | false    | Marks tab as active              |
| icon           | React.ReactNode           | —        | Icon element                     |
| children       | React.ReactNode           | —        | Tab label content                |
| isPilledDesign | boolean                   | false    | Pilled design for individual tab |

