# 21.Switch

---

## Purpose

The `Switch` component is used to **toggle between two states** (on/off) and is commonly used for settings or preferences.

---

## Usage

```jsx
import { Switch } from '@loomhq/lens'
;<Switch />
```

---

## Sizes

```jsx
<Arrange gap="small">
  <Switch size="medium" />
  <Switch size="large" />
</Arrange>
```

---

## States

Use `isActive` to enable the switch (ON).  
Use `isDisabled` to disable interaction.

```jsx
<Arrange gap="small">
  <Switch />
  <Switch isActive />
  <Switch isDisabled />
  <Switch isActive isDisabled />
</Arrange>
```

---

## With Label

You can wrap a `Switch` in a `FormField` to provide a label:

```jsx
<FormField direction="row" label="Turn ON" labelFor="exampleSwitch">
  <Switch id="exampleSwitch" />
</FormField>
```

---

## Props

| name            | type                    | default  | description                                               |
| --------------- | ----------------------- | -------- | --------------------------------------------------------- |
| size            | 'medium' \| 'large'     | 'medium' | Sets the size of the switch                               |
| isActive        | boolean                 | false    | Determines if the switch is ON                            |
| isDisabled      | boolean                 | false    | Disables user interaction                                 |
| onChange        | React.ReactEventHandler | —        | Callback fired when the switch changes state              |
| ariaLabel       | string                  | —        | Provides an accessible label for screen readers           |
| ariaLabelledby  | string                  | —        | ID of element that labels the switch for accessibility    |
| ariaDescribedby | string                  | —        | ID of element that describes the switch for accessibility |

