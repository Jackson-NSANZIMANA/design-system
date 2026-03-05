# Discovery

---

# Purpose

Discovery elements are used to **introduce new features** to users.

---

# Colors

| Token | Usage |
|------|------|
| **discoveryTitle** | Used for rich tooltip and modal titles |
| **discoveryBackground** | Used for simple tooltip background |
| **discoveryLightBackground** | Used for rich tooltip background |
| **discoveryHighlight** | Used for highlighting elements that contain a tooltip |

See **Colors**.

---

# Simple Custom Tooltip

Used for lightweight discovery messaging.

Example label:

**New!**

### Example

```jsx
<DiscoveryTooltip
  title="New!"
>
  <Button>Show code</Button>
</DiscoveryTooltip>
```

---

# Rich Custom Tooltip

Used when additional context or explanation is needed.

Example:

**New! Remove filler words**

> Clouds is focused on the realtime granularization of incoming audio signals, and their transformation into amorphous textures.

### Example

```jsx
<DiscoveryTooltip
  title="New! Remove filler words"
  description="Clouds is focused on the realtime granularization of incoming audio signals, and their transformation into amorphous textures."
>
  <Button>Show code</Button>
</DiscoveryTooltip>
```

---

# With Loom

Example content:

**New! Remove filler words**

> Clouds is focused on the realtime granularization of incoming audio signals, and their transformation into amorphous textures.

### Example

```jsx
<DiscoveryTooltip
  title="New! Remove filler words"
  description="Clouds is focused on the realtime granularization of incoming audio signals, and their transformation into amorphous textures."
>
  <Button>Show code</Button>
</DiscoveryTooltip>
```

---

# Modal

Discovery elements can also appear inside a **modal** for larger feature announcements.

See all **Modal** options.

### Example

```jsx
<Button onClick={() => openModal()}>
  Open Modal
</Button>
```

---

# Trigger

Discovery tooltips can be triggered by combining them with the **Popover** component.

---

# Trigger on Hover

### Example

```jsx
<Popover trigger="hover">
  <DiscoveryTooltip
    title="New!"
    description="Feature introduction."
  >
    <Button>Show code</Button>
  </DiscoveryTooltip>
</Popover>
```

---

# Open by Default

Tooltips can also be visible when the page loads.

Example message:

**New! Remove filler words**

> Grains are seeded randomly, periodically, or whenever the module receives a trigger.

### Example

```jsx
<DiscoveryTooltip
  defaultOpen
  title="New! Remove filler words"
  description="Grains are seeded randomly, periodically, or whenever the module receives a trigger."
>
  <Button>Show code</Button>
</DiscoveryTooltip>
```

---

# Highlighted Elements

Wrap an element with the **discoveryHighlight** color to indicate it contains a tooltip.

Example element:

**Record a replay**

### Example

```jsx
<Box background="discoveryHighlight">
  <Button>Record a replay</Button>
</Box>
```