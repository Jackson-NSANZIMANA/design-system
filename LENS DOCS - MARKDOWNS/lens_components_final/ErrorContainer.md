# 38.ErrorContainer

`ErrorContainer` is used to display inline errors close to the component where the error occurs. This is especially useful for buttons, inputs, or components that trigger actions like GraphQL mutations.

---

## Purpose

ErrorContainers handle displaying inline errors as close to the source of the error (and the action to resolve it) as possible. For example, `ErrorContainer` can be wrapped around a `Button` component that calls a GraphQL mutation. See the Errors page for more information on how to handle general errors.

## Guidance

## Wrap your component with the ErrorContainer to highlight when an error occurs.

## Usage

```javascript
import { ErrorContainer } from '@loomhq/lens'
;<ErrorContainer errorActive={true}>{children}</ErrorContainer>
```

---

## Examples

### Standard

Click a button to toggle an error:

```javascript
;() => {
  const [errorIsActive, setErrorIsActive] = React.useState(false)

  return (
    <ErrorContainer errorActive={errorIsActive}>
      <Arrange autoFlow="row" gap="xsmall">
        <Text>Click this button to trigger an error</Text>
        <Button
          onClick={() => setErrorIsActive(!errorIsActive)}
          variant="primary"
        >
          Trigger error
        </Button>
      </Arrange>
    </ErrorContainer>
  )
}
```

---

### With Custom Error Message

You can override the default error message:

```javascript
;() => {
  const [errorIsActive, setErrorIsActive] = React.useState(false)
  const errorMessage = 'Something went wrong.'

  return (
    <ErrorContainer errorActive={errorIsActive} errorMessage={errorMessage}>
      <Arrange autoFlow="row" gap="xsmall">
        <Text>Click this button to trigger an error</Text>
        <Button
          onClick={() => setErrorIsActive(!errorIsActive)}
          variant="primary"
        >
          Trigger error
        </Button>
      </Arrange>
    </ErrorContainer>
  )
}
```

---

## Props

| Name         | Type              | Default                                | Notes                                                 |
| ------------ | ----------------- | -------------------------------------- | ----------------------------------------------------- |
| errorMessage | string            | `"Oops, that didn't work. Try again."` | Custom error message to display                       |
| children     | `React.ReactNode` | required                               | The component(s) being wrapped by the error container |
| errorActive  | boolean           | required                               | Controls whether the error message is displayed       |

---

## Guidance

- Wrap your interactive component with `ErrorContainer` to show errors inline.
- Keep error messages short and actionable for the best user experience.

