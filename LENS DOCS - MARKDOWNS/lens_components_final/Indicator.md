# 10. Indicator

## Basic Usage

A wrapper that adds a pulsing dot indicator to any component.

Perfect for showing notifications, unread counts, or status indicators on icons, buttons, or other UI elements.

Simply wrap your component with `Indicator` and it automatically positions itself as a badge.

```tsx
<Arrange gap="large" alignItems="center">
  <Indicator>
    <Icon icon={<SvgCalendar />} size={3} color="grey6" />
  </Indicator>
</Arrange>
```

---

## Pulse Effect

By default, the indicator includes a subtle pulsing ring effect that radiates outward from the dot.

This pulse effect can be disabled when a simpler, static indicator is preferred (e.g. low bandwidth or reduced motion contexts).

### With Pulse (default)

```tsx
<Indicator color="blue">
  <Icon icon={<SvgCalendar />} size={3} color="grey6" />
</Indicator>
```

### Without Pulse

```tsx
<Indicator color="blue" withPulse={false}>
  <Icon icon={<SvgCalendar />} size={3} color="grey6" />
</Indicator>
```

---

## Color

The indicator supports two color variants to communicate different types of information:

- **Orange** — Notifications and alerts
- **Blue** — Onboarding and informational indicators

```tsx
<Arrange gap="large" alignItems="center">
  <Container>
    <Text size="small" color="grey6">
      Orange (Notifications)
    </Text>
    <Spacer top="small">
      <Indicator color="orange">
        <Icon icon={<SvgBell />} size={3} color="grey6" />
      </Indicator>
    </Spacer>
  </Container>

  <Container>
    <Text size="small" color="grey6">
      Blue (Onboarding)
    </Text>
    <Spacer top="small">
      <Indicator color="blue">
        <Icon icon={<SvgCalendar />} size={3} color="grey6" />
      </Indicator>
    </Spacer>
  </Container>
</Arrange>
```

---

## Accessibility Guidelines

- Indicators should supplement — not replace — accessible labels.
- Do not rely solely on color to communicate meaning.
- Pair with proper `aria-label`, `altText`, or descriptive text where necessary.

---

## Props

| Name      | Type                 | Default      |
| --------- | -------------------- | ------------ |
| withPulse | `boolean`            | `true`       |
| color     | `'blue' \| 'orange'` | `'blue'`     |
| children  | `React.ReactNode`    | **required** |

---

