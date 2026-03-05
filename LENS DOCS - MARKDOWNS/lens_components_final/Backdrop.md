# 36.Backdrop

Backdrop provides a full-screen overlay that can be used to focus attention on a specific piece of content.

---

## Usage

### Empty Backdrop

```javascript
import { Backdrop, Button, Container } from '@loomhq/lens'
import React from 'react'

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)} variant="primary">
        Open Backdrop
      </Button>
      <Backdrop isOpen={isOpen}>
        <Container padding="large">
          <Button onClick={() => setIsOpen(!isOpen)} variant="primary">
            Close Backdrop
          </Button>
        </Container>
      </Backdrop>
    </div>
  )
}
```

---

### Backdrop with Custom Card

```javascript
import { Backdrop, Button, Container } from '@loomhq/lens'
import React from 'react'

const ExampleCustom = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)} variant="primary">
        Open Backdrop
      </Button>

      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Container height="100%" paddingTop="12vw">
          <Container
            onClick={(e) => e.stopPropagation()}
            maxWidth={80}
            width="100%"
            margin="0 auto"
            padding="large"
            backgroundColor="white"
            radius="medium"
            shadow="large"
          >
            <div>Backdrop content</div>
            <Button onClick={() => setIsOpen(!isOpen)}>Close Backdrop</Button>
          </Container>
        </Container>
      </Backdrop>
    </div>
  )
}
```

> **Note:** Clicking outside the inner card container will trigger the `Backdrop` `onClick` handler, closing the backdrop.

---

## Props

| Name            | Type   | Default          | Notes                              |
| --------------- | ------ | ---------------- | ---------------------------------- |
| zIndex          | number | `1000`           | Stacking order of the backdrop     |
| backgroundColor | string | `'backdropDark'` | Sets the backdrop background color |

