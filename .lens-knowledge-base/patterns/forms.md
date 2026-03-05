# Forms

---

# Elements

A form is composed of the following elements:

- **Label**
- **Form element**
- **Error message**

---

# Spacing

## Vertically Aligned Form Elements

Spacing rules:

- Use **space xsmall** (`0.25rem | 4px`) between the **label and the form element**.
- Use **space medium** (`1rem | 16px`) between each **fieldset**.
- Use **space large** (`1.5rem | 24px`) between the **last fieldset and the form actions**.

### Example

```jsx
<Container maxWidth={40}>
  <FormField label="Some label" labelFor="first">
    <TextInput placeholder="Type something" id="first" />
  </FormField>

  <Spacer bottom="medium"/>

  <FormField label="Some label" labelFor="second">
    <TextInput placeholder="Type something" id="second" />
  </FormField>

  <Spacer bottom="medium"/>

  <FormField label="Some label" labelFor="third">
    <TextInput placeholder="Type something" id="third" />
  </FormField>

  <Spacer bottom="large"/>

  <Button variant="primary">Button</Button>
</Container>

<Container maxWidth={40}>
  <FormField label="Some label" labelFor="first">
    <TextInput placeholder="Type something" id="first" />
  </FormField>

  <Spacer bottom="medium"/>

  <FormField label="Some label" labelFor="second">
    <TextInput placeholder="Type something" id="second" />
  </FormField>

  <Spacer bottom="medium"/>

  <FormField label="Some label" labelFor="third">
    <TextInput placeholder="Type something" id="third" />
  </FormField>

  <Spacer bottom="large"/>

  <Button variant="primary">Button</Button>
</Container>
```

---

# Horizontally Aligned Form Elements

Spacing rules:

- Use **space small** (`0.5rem | 8px`) between the **form element and the label**.
- Use **space large** (`1.5rem | 24px`) between the **last fieldset and the form actions**.

### Example

```jsx
<>
  <FormField label="Some label" direction="row" labelFor="forth">
    <Checkbox id="forth"/>
  </FormField>

  <Spacer bottom="medium" />

  <FormField label="Some label" direction="row" labelFor="sixth">
    <Radio id="sixth"/>
  </FormField>

  <Spacer bottom="medium" />

  <FormField label="Some label" direction="row" labelFor="fifth">
    <Switch id="fifth"/>
  </FormField>

  <Spacer bottom="large" />

  <Button variant="primary">Button</Button>
</>

<>
  <FormField label="Some label" direction="row" labelFor="forth">
    <Checkbox id="forth"/>
  </FormField>

  <Spacer bottom="medium" />

  <FormField label="Some label" direction="row" labelFor="sixth">
    <Radio id="sixth"/>
  </FormField>

  <Spacer bottom="medium" />

  <FormField label="Some label" direction="row" labelFor="fifth">
    <Switch id="fifth"/>
  </FormField>

  <Spacer bottom="large" />

  <Button variant="primary">Button</Button>
</>
```

---

# Error States

---

# Inline Error

Guidelines:

- Place the **error message under the form element**.
- Use **medium text size** with the **red color** from the palette.
- Use **space xsmall (`0.25rem | 4px`)** between the form element and the error text.

### Example

```jsx
<Container maxWidth={40}>
  <FormField
    label="Some label"
    errorMessage="Some error message"
    labelFor="sixth"
  >
    <TextInput
      placeholder="Type something"
      id="sixth"
      hasError
    />
  </FormField>

  <Spacer bottom="medium" />

  <FormField
    direction="row"
    label="Some label"
    labelFor="seventh"
  >
    <Checkbox id="seventh"/>
  </FormField>
</Container>

<Container maxWidth={40}>
  <FormField
    label="Some label"
    errorMessage="Some error message"
    labelFor="sixth"
  >
    <TextInput
      placeholder="Type something"
      id="sixth"
      hasError
    />
  </FormField>

  <Spacer bottom="medium" />

  <FormField
    direction="row"
    label="Some label"
    labelFor="seventh"
  >
    <Checkbox id="seventh"/>
  </FormField>
</Container>
```

---

# Form Error

Guidelines:

- Place the **error message under the form actions**.
- Use **space medium (`1rem | 16px`)** between the **form actions and the error message**.

### Example

```jsx
<Container maxWidth={40}>
  <FormField label="Some label" labelFor="eighth">
    <TextInput placeholder="Type something" id="eighth" hasError />
  </FormField>

  <Spacer bottom="medium"/>

  <FormField label="Some label" labelFor="ninth">
    <TextInput placeholder="Type something" id="ninth"/>
  </FormField>

  <Spacer bottom="medium"/>

  <FormField
    direction="row"
    label="Some label"
    labelFor="tenth"
  >
    <Checkbox id="tenth"/>
  </FormField>

  <Spacer bottom="large"/>

  <Button variant="primary">Button</Button>

  <Spacer bottom="medium"/>

  <Text color="red">This form has an error</Text>
</Container>

<Container maxWidth={40}>
  <FormField label="Some label" labelFor="eighth">
    <TextInput placeholder="Type something" id="eighth" hasError />
  </FormField>

  <Spacer bottom="medium"/>

  <FormField label="Some label" labelFor="ninth">
    <TextInput placeholder="Type something" id="ninth"/>
  </FormField>

  <Spacer bottom="medium"/>

  <FormField
    direction="row"
    label="Some label"
    labelFor="tenth"
  >
    <Checkbox id="tenth"/>
  </FormField>

  <Spacer bottom="large"/>

  <Button variant="primary">Button</Button>

  <Spacer bottom="medium"/>

  <Text color="red">This form has an error</Text>
</Container>
```

---

# Interaction

- After saving, the user will see a **notification component with a success message**.
- Once the **form element value changes**, the error should **disappear**.

---

# Related Components

- FormField  
- TextInput  
- Button