# 28.Toast

## Usage Guidelines

### Purpose

Toasts are used to show confirmations of user action.

### Dos

- Keep messaging clear and short.

### Don’ts

- Show more than one toast at a time.
- Do **not** use toasts for warning or error alerts.  
  Instead, use **NotificationBar**.

---

## Variants

Toasts should behave and appear consistently within a platform while also respecting the unique context and needs of each platform.

Each platform has its own Toast variant.

- **Chrome Extension Toasts**  
  Appear from the **top of the screen** so they stay close to the recorder.

- **Web App Toasts**  
  Appear from the **bottom center of the screen**, which interferes the least with other web-app features and follows common industry practice.

---

## Usage

```javascript
import { Toast } from '@loomhq/lens'
;<Toast>Content</Toast>
```

---

## Examples

## Simple Toast

```javascript
;() => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Trigger Toast
      </Button>

      <Toast isOpen={isOpen} onCloseClick={() => setIsOpen(false)}>
        Message sent!
      </Toast>
    </>
  )
}
```

---

## Toast with Custom Content

```javascript
;() => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Trigger Toast
      </Button>

      <Toast isOpen={isOpen} onCloseClick={() => setIsOpen(false)}>
        <Arrange alignItems="start" gap="small">
          <Icon icon={<SvgLink />} color="bodyInverse" />
          <Text>
            You successfully changed Mira Baptista’s role from Viewer to
            Creator. Please review the email we sent you.
          </Text>
        </Arrange>
      </Toast>
    </>
  )
}
```

---

## Toast with Longer Timeout

```javascript
;() => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Trigger Toast
      </Button>

      <Toast
        isOpen={isOpen}
        onCloseClick={() => setIsOpen(false)}
        duration="long"
      >
        <Text>
          You have successfully learnt that the short timeout is 3s and long is
          8s.
        </Text>
      </Toast>
    </>
  )
}
```

---

## Toast in Chrome Extension

```javascript
;() => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Trigger Toast
      </Button>

      <Toast
        isOpen={isOpen}
        onCloseClick={() => setIsOpen(false)}
        duration="short"
        platform="chrome-extension"
      >
        <Text>
          This is a toast in the chrome extension. It shows up at the top!
        </Text>
      </Toast>
    </>
  )
}
```

---

## Props

| Name         | Type                              | Default     |
| ------------ | --------------------------------- | ----------- |
| zIndex       | number                            | 1100        |
| duration     | `'short' \| 'medium' \| 'long'`   | `'short'`   |
| platform     | `'web-app' \| 'chrome-extension'` | `'web-app'` |
| children     | `React.ReactNode`                 | —           |
| isOpen       | `boolean`                         | —           |
| onCloseClick | `() => void`                      | —           |

