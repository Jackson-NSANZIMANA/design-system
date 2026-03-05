# 6.FormField

Usage  
 Guidelines  
 Example label

---

## Usage

```tsx
import { FormField, TextInput } from '@loomhq/lens'
;<FormField label="Name" labelFor="name" errorMessage="Some error message">
  <TextInput id="name" />
</FormField>
```

---

## Direction

Use `direction="row"` for Checkbox, Radio, and Switch.

For a full-width pattern where the label comes first, use `direction="row-reverse"`. Common pattern for toggling settings.

```tsx
<form>
  <FormField
    direction="column"
    label="Column example"
    labelFor="columnExampleTextInput"
  >
    <TextInput id="columnExampleTextInput" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleCheckbox">
    <Checkbox id="rowExampleCheckbox" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleRadio">
    <Radio id="rowExampleRadio" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleSwitch">
    <Switch id="rowExampleSwitch" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField
    direction="row-reverse"
    label="Full-width row example"
    labelFor="rowExampleSwitchReverse"
  >
    <Switch id="rowExampleSwitchReverse" />
  </FormField>
</form>
```

```tsx
<form>
  <FormField
    direction="column"
    label="Column example"
    labelFor="columnExampleTextInput"
  >
    <TextInput id="columnExampleTextInput" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleCheckbox">
    <Checkbox id="rowExampleCheckbox" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleRadio">
    <Radio id="rowExampleRadio" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleSwitch">
    <Switch id="rowExampleSwitch" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField
    direction="row-reverse"
    label="Full-width row example"
    labelFor="rowExampleSwitchReverse"
  >
    <Switch id="rowExampleSwitchReverse" />
  </FormField>
</form>
```

---

## With error

```tsx
<form>
  <FormField
    label="Error example"
    labelFor="errorExample"
    errorMessage="Some error message"
  >
    <TextInput id="errorExample" hasError />
  </FormField>
</form>
```

```tsx
<form>
  <FormField
    label="Error example"
    labelFor="errorExample"
    errorMessage="Some error message"
  >
    <TextInput id="errorExample" hasError />
  </FormField>
</form>
```

---

## Examples

Form elements

Name

Country

Choose an option

Comment

Accept terms

```tsx
<form>
  <FormField label="Name" labelFor="name">
    <TextInput id="name" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField label="Country" labelFor="country">
    <Select
      placeholder="Choose an option"
      options={[
        { value: 'australia', title: 'Australia' },
        { value: 'austria', title: 'Austria' },
      ]}
    />
  </FormField>
  <Spacer bottom="medium" />
  <FormField label="Comment" labelFor="comment">
    <Textarea id="comment" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Accept terms" labelFor="terms">
    <Checkbox id="terms" />
  </FormField>
</form>
```

```tsx
<form>
  <FormField label="Name" labelFor="name">
    <TextInput id="name" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField label="Country" labelFor="country">
    <Select
      placeholder="Choose an option"
      options={[
        { value: 'australia', title: 'Australia' },
        { value: 'austria', title: 'Austria' },
      ]}
    />
  </FormField>
  <Spacer bottom="medium" />
  <FormField label="Comment" labelFor="comment">
    <Textarea id="comment" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Accept terms" labelFor="terms">
    <Checkbox id="terms" />
  </FormField>
</form>
```

---

## Props

| name             | type                                 | default    |
| ---------------- | ------------------------------------ | ---------- |
| direction        | `'row' \| 'column' \| 'row-reverse'` | `'column'` |
| label            | `ReactNode`                          |            |
| errorMessage     | `string \| null`                     |            |
| labelFor         | `string`                             |            |
| children         | `React.ReactNode`                    |            |
| isLabelClickable | `boolean`                            |            |

