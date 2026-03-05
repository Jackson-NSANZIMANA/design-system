# 16.NotificationBar

---

## Usage Guidelines

### Purpose

Notification bars are used to display **informational, warning, or error alerts**.  
Since they communicate **app-level information**, they are placed **across the top of the screen**.

---

### Dos

- Keep messaging **clear and short**
- Stay within the recommended **100 character limit**
- Add optional **in-line links only at the end** of the message and use sparingly

### Don’ts

- Show **more than one notification bar at a time**
- Use for **low-attention messages** (use Toasts instead)
- Use for **feature- or page-level loading errors**, which may confuse the user

---

## Usage Example

```jsx
import { NotificationBar } from '@loomhq/lens'
;<NotificationBar>Content</NotificationBar>
```

---

## Variants

Variants are determined by **severity level**:

| variant        | description                                         |
| -------------- | --------------------------------------------------- |
| info (default) | General messages                                    |
| warning        | Higher importance, non-blocking messages            |
| error          | Urgent, blocking messages                           |
| internal       | Local warnings for Loom engineers (not user-facing) |

---

## Accessibility

Out-of-the-box, `NotificationBar` supports:

- **Color accessibility** → All variants meet **WCAG AA contrast**
- **Navigability** → Focusable and togglable by all input devices
- **Screen reader support**:
  - `NotificationBar` is rendered as an `<aside>` element
  - Message body uses `role="status"` (info) or `role="alert"` (error/warning)
  - Info: `aria-live="polite"` → announced when user is idle
  - Error/Warning: `aria-live="assertive"` → announced immediately
  - Close button (`X`) has `aria-label="Close notification bar"`

---

## Example: Standard Error

```jsx
;() => {
  const [errorIsOpen, setErrorIsOpen] = React.useState(false)

  return (
    <>
      <Arrange autoFlow={{ default: 'row', small: 'row' }} gap="small">
        <Button onClick={() => setErrorIsOpen(true)} variant="primary">
          Trigger Error
        </Button>
      </Arrange>

      <NotificationBar
        isOpen={errorIsOpen}
        onCloseClick={() => setErrorIsOpen(false)}
        severity="error"
      >
        Oops! Failed to save your default Workspace
      </NotificationBar>
    </>
  )
}
```

---

## Example: Multiple Severities

```jsx
;() => {
  const [errorIsOpen, setErrorIsOpen] = React.useState(false)
  const [infoIsOpen, setInfoIsOpen] = React.useState(false)
  const [warningIsOpen, setWarningIsOpen] = React.useState(false)
  const [internalIsOpen, setInternalIsOpen] = React.useState(false)

  return (
    <>
      <Arrange autoFlow={{ default: 'row', small: 'row' }} gap="small">
        <Button onClick={() => setErrorIsOpen(true)} variant="primary">
          Trigger Error
        </Button>
        <Button onClick={() => setInfoIsOpen(true)} variant="primary">
          Trigger Info
        </Button>
        <Button onClick={() => setWarningIsOpen(true)} variant="primary">
          Trigger Warning
        </Button>
        <Button onClick={() => setInternalIsOpen(true)} variant="primary">
          Trigger Internal Warning
        </Button>
      </Arrange>

      <NotificationBar
        isOpen={errorIsOpen}
        onCloseClick={() => setErrorIsOpen(false)}
        severity="error"
      >
        Oops! Failed to save your default Workspace
      </NotificationBar>

      <NotificationBar
        isOpen={infoIsOpen}
        onCloseClick={() => setInfoIsOpen(false)}
        severity="info"
      >
        You have successfully verified yourdomainname.com for Single Sign On
      </NotificationBar>

      <NotificationBar
        isOpen={warningIsOpen}
        onCloseClick={() => setWarningIsOpen(false)}
        severity="warning"
      >
        <Text fontWeight="regular">
          You may not want to do that or try this at home. We recommend a max
          character count of 100.
        </Text>
      </NotificationBar>

      <NotificationBar
        isOpen={internalIsOpen}
        onCloseClick={() => setInternalIsOpen(false)}
        severity="internal"
      >
        <Arrange autoFlow="row">
          <Text fontWeight="bold">Dev alert</Text>
          Your changes will cause destructive errors in production. Verify your
          work before merging.
        </Arrange>
      </NotificationBar>
    </>
  )
}
```

---

## Optional onCloseClick

`onCloseClick` is optional. Omitting it results in a notification without a close button:

```jsx
<NotificationBar isOpen severity="error">
  Oops! Failed to save your default Workspace
</NotificationBar>
```

---

## Props

| name         | type            | default | description                            |
| ------------ | --------------- | ------- | -------------------------------------- |
| severity     | SeverityLevels  | 'info'  | Determines variant of the notification |
| children     | React.ReactNode | —       | Content inside the bar                 |
| isOpen       | boolean         | —       | Controls visibility                    |
| onCloseClick | () => void      | —       | Callback for close button              |

---

