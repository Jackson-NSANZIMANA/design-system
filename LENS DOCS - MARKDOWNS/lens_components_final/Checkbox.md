# 3.Checkbox

## Usage

```tsx
import { Checkbox } from '@loomhq/lens'
;<Checkbox />
```

## States

- Use **isChecked** to check the checkbox.
- Use **isDisabled** to disable the checkbox.
- Use **isIndeterminate** for indeterminate checkbox.

## Example

```jsx
<Arrange gap="medium">
  <Checkbox />
  <Checkbox isChecked onChange={() => console.log()} />
  <Checkbox isIndeterminate onChange={() => console.log()} />
  <Checkbox isDisabled />
  <Checkbox isDisabled isChecked />
  <Checkbox isDisabled isIndeterminate />
</Arrange>
```

## With label

```jsx
<FormField direction="row" label="Choose me" labelFor="exampleCheckboxId">
  <Checkbox id="exampleCheckboxId" />
</FormField>
```

## Forwarding refs

Use the **ref** prop to access the DOM node.

```jsx
;() => {
  const ref = useRef(null)
  const onClick = () => (ref.current.checked = true)
  return (
    <>
      <Spacer bottom="small">
        <Button onClick={onClick}>Toggle</Button>
      </Spacer>
      <Checkbox ref={ref} />
    </>
  )
}
```

## Props

| Name            | Type                        | Default |
| --------------- | --------------------------- | ------- |
| isChecked       | `'boolean'`                 |         |
| isIndeterminate | `'boolean'`                 |         |
| isDisabled      | `'boolean'`                 |         |
| onFocus         | `'React.ReactEventHandler'` |         |
| onChange        | `'React.ReactEventHandler'` |         |
| onBlur          | `'React.ReactEventHandler'` |         |

