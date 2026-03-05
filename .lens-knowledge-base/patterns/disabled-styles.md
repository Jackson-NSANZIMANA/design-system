# Disabled styles

## Purpose

Disabled styles are applied to form elements to indicate that the user can't interact with these.

## Colors

Disabled components use **disabledContent** and **disabledBackground** colors.

### disabledContent

Used for text and icon color.

### disabledBackground

Used for background color.

See **Colors**

---

# Disabled Components

## Button

### Example

```jsx
<Arrange gap="medium">
  <Button isDisabled>Button</Button>
  <Button isDisabled icon={<SvgAdd />}>Button</Button>
</Arrange>

<Arrange gap="medium">
  <Button isDisabled>Button</Button>
  <Button isDisabled icon={<SvgAdd />}>Button</Button>
</Arrange>
```

---

## Link

### Example

```jsx
<Link isDisabled>Link</Link>
<Link isDisabled>Link</Link>
```

---

## TextButton

### Example

```jsx
<Arrange gap="medium">
  <TextButton isDisabled>TextButton</TextButton>
  <TextButton isDisabled icon={<SvgAdd />}>TextButton</TextButton>
</Arrange>

<Arrange gap="medium">
  <TextButton isDisabled>TextButton</TextButton>
  <TextButton isDisabled icon={<SvgAdd />}>TextButton</TextButton>
</Arrange>
```

---

## IconButton

### Example

```jsx
<IconButton isDisabled icon={<SvgAdd />} altText="Disabled button" />
<IconButton isDisabled icon={<SvgAdd />} altText="Disabled button" />
```

---

## TextInput

### Example

```jsx
<>
  <FormField
    direction="column"
    label="Search"
    labelFor="searchInput"
  >
    <TextInput
      id="searchInput"
      isDisabled
      icon={<SvgSearch />}
      placeholder="Start typing"
    />
  </FormField>

  <Spacer top="medium">
    <FormField
      direction="column"
      label="Email"
      labelFor="emailInput"
    >
      <TextInput
        id="emailInput"
        type="email"
        name="email"
        isDisabled
        value="me@loom.com"
      />
    </FormField>
  </Spacer>
</>

<>
  <FormField
    direction="column"
    label="Search"
    labelFor="searchInput"
  >
    <TextInput
      id="searchInput"
      isDisabled
      icon={<SvgSearch />}
      placeholder="Start typing"
    />
  </FormField>

  <Spacer top="medium">
    <FormField
      direction="column"
      label="Email"
      labelFor="emailInput"
    >
      <TextInput
        id="emailInput"
        type="email"
        name="email"
        isDisabled
        value="me@loom.com"
      />
    </FormField>
  </Spacer>
</>
```

---

## Textarea

### Example

```jsx
<FormField
  direction="column"
  label="Comment"
  labelFor="commentTextarea"
>
  <Textarea
    id="commentTextarea"
    isDisabled
    rows={2}
    value={demoText.long}
    onChange={() => console.log()}
  />
</FormField>

<FormField
  direction="column"
  label="Comment"
  labelFor="commentTextarea"
>
  <Textarea
    id="commentTextarea"
    isDisabled
    rows={2}
    value={demoText.long}
    onChange={() => console.log()}
  />
</FormField>
```

---

## Select

### Example

```jsx
<FormField
  direction="column"
  label="Country"
>
  <Select
    isDisabled
    selectedOptionValue="bahamas"
    options={[{ value: 'bahamas', title: 'Bahamas' }]}
  />
</FormField>

<FormField
  direction="column"
  label="Country"
>
  <Select
    isDisabled
    selectedOptionValue="bahamas"
    options={[{ value: 'bahamas', title: 'Bahamas' }]}
  />
</FormField>
```

---

## Checkbox

### Example

```jsx
<Arrange gap="small" columns="1fr">
  <FormField
    direction="row"
    label="Option one"
    labelFor="checkboxOptionOne"
  >
    <Checkbox isDisabled id="checkboxOptionOne" />
  </FormField>

  <FormField
    direction="row"
    label="Option two"
    labelFor="checkboxOptionTwo"
  >
    <Checkbox isChecked isDisabled id="checkboxOptionTwo" />
  </FormField>
</Arrange>

<Arrange gap="small" columns="1fr">
  <FormField
    direction="row"
    label="Option one"
    labelFor="checkboxOptionOne"
  >
    <Checkbox isDisabled id="checkboxOptionOne" />
  </FormField>

  <FormField
    direction="row"
    label="Option two"
    labelFor="checkboxOptionTwo"
  >
    <Checkbox isChecked isDisabled id="checkboxOptionTwo" />
  </FormField>
</Arrange>
```

---

## Radio

### Example

```jsx
<Arrange gap="small" columns="1fr">
  <FormField
    direction="row"
    label="Option one"
    labelFor="radioOptionOne"
  >
    <Radio isDisabled id="radioOptionOne" />
  </FormField>

  <FormField
    direction="row"
    label="Option two"
    labelFor="radioOptionTwo"
  >
    <Radio isChecked isDisabled id="radioOptionTwo" />
  </FormField>
</Arrange>

<Arrange gap="small" columns="1fr">
  <FormField
    direction="row"
    label="Option one"
    labelFor="radioOptionOne"
  >
    <Radio isDisabled id="radioOptionOne" />
  </FormField>

  <FormField
    direction="row"
    label="Option two"
    labelFor="radioOptionTwo"
  >
    <Radio isChecked isDisabled id="radioOptionTwo" />
  </FormField>
</Arrange>
```

---

## Switch

### Example

```jsx
<Arrange gap="small" columns="1fr">
  <FormField
    direction="row"
    label="Option one"
    labelFor="switchOptionOne"
  >
    <Switch isDisabled id="switchOptionOne" />
  </FormField>

  <FormField
    direction="row"
    label="Option two"
    labelFor="switchOptionTwo"
  >
    <Switch isActive isDisabled id="switchOptionTwo" />
  </FormField>
</Arrange>

<Arrange gap="small" columns="1fr">
  <FormField
    direction="row"
    label="Option one"
    labelFor="switchOptionOne"
  >
    <Switch isDisabled id="switchOptionOne" />
  </FormField>

  <FormField
    direction="row"
    label="Option two"
    labelFor="switchOptionTwo"
  >
    <Switch isActive isDisabled id="switchOptionTwo" />
  </FormField>
</Arrange>
```
