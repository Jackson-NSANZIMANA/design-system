# 18.Radio

---

## Usage Guidelines

Radios are used to **select a single option from a set**.  
They are best used in **forms or selection groups**.

---

## Usage Example

```jsx
import { Radio } from '@loomhq/lens'
;<Radio />
```

---

## States

- **Checked:** `isChecked` → marks the radio as selected
- **Disabled:** `isDisabled` → makes the radio non-interactive

### Example

```jsx
<Arrange gap="medium">
  <Radio />
  <Radio isChecked onChange={() => console.log()} />
  <Radio isDisabled />
  <Radio isDisabled isChecked />
</Arrange>
```

---

## With Label

Radios are often used with labels inside a form:

```jsx
<form>
  <Arrange gap="small" columns="1fr">
    <FormField label="Mangosteen" direction="row" labelFor="mangosteen">
      <Radio id="mangosteen" name="fruits" />
    </FormField>
    <FormField label="Tamarind" direction="row" labelFor="tamarind">
      <Radio id="tamarind" name="fruits" />
    </FormField>
    <FormField label="Rambutan" direction="row" labelFor="rambutan">
      <Radio id="rambutan" name="fruits" />
    </FormField>
  </Arrange>
</form>
```

---

## Forwarding Refs

You can use the `ref` prop to access the **DOM node** of a radio input:

```jsx
;() => {
  const ref = useRef(null)
  const onClick = () => (ref.current.checked = true)

  return (
    <>
      <Spacer bottom="small">
        <Button onClick={onClick}>Toggle</Button>
      </Spacer>
      <Radio ref={ref} />
    </>
  )
}
```

---

## Props

| name       | type                    | default | description                      |
| ---------- | ----------------------- | ------- | -------------------------------- |
| isChecked  | boolean                 | —       | Marks the radio as selected      |
| isDisabled | boolean                 | —       | Disables the radio input         |
| onFocus    | React.ReactEventHandler | —       | Called when radio receives focus |
| onChange   | React.ReactEventHandler | —       | Called when radio state changes  |
| onBlur     | React.ReactEventHandler | —       | Called when radio loses focus    |

---

