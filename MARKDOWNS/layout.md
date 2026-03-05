# Layout Recipes

## Basic Layouts

### Elements Inline

**Code**

```jsx
<DemoBox>
  <Arrange gap="medium">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

### Fixed Width Column + Remaining Width Column

**Code**

```jsx
<DemoBox>
  <Arrange gap="medium" columns={[20, '1fr']}>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

### Auto Width Column + Remaining Width Column

**Code**

```jsx
<DemoBox>
  <Arrange gap="medium" columns={['auto', '1fr']}>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

### Stacked

**Code**

```jsx
<DemoBox>
  <Arrange gap="small" autoFlow="row">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

### Stacked and Stretched

**Code**

```jsx
<DemoBox>
  <Arrange gap="small" autoFlow="row" justifyContent="stretch">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

# Algorithmic Responsive Layouts

Using **Arrange** and **Split** components we can build responsive layouts **without CSS media queries**.

---

## Fixed Width Column + Remaining Width Column

**Code**

```jsx
<DemoBox>
  <Split gap="medium">
    <SplitSection grow={1} basis={20} minWidth={20}>
      <DemoBox padding="xsmall">Column</DemoBox>
    </SplitSection>

    <SplitSection grow={100} basis={40}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```

---

## Nested Columns that Wrap at Different Screen Sizes

**Code**

```jsx
<DemoBox>
  <Split gap="medium">
    <SplitSection grow={1} basis={18}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>

    <SplitSection grow={1000} basis={40}>
      <DemoBox padding="xsmall">
        <Split gap="medium">
          <SplitSection grow={1} basis={30}>
            <DemoBox padding="xsmall">Content</DemoBox>
          </SplitSection>

          <SplitSection grow={1} basis={30}>
            <DemoBox padding="xsmall">Content</DemoBox>
          </SplitSection>
        </Split>
      </DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```

---

## Equal Flex Columns (2)

**Code**

```jsx
<DemoBox>
  <Split gap="medium">
    <SplitSection grow={1} basis={30}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>

    <SplitSection grow={1} basis={30}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```

---

## Equal Flex Columns (Multiple)

**Code**

```jsx
<DemoBox>
  <Split gap="medium">
    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>

    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>

    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>

    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>

    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>

    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```

---

## Equal Grid Columns

**Code**

```jsx
<DemoBox>
  <Arrange gap="medium" columns="repeat(auto-fit, minmax(10rem, 1fr))">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## Columns with Space Between

**Code**

```jsx
<DemoBox>
  <Split gap="medium" justifyContent="space-between">
    <SplitSection basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>

    <SplitSection basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```

---

## Inline Wrapping Elements

**Code**

```jsx
<DemoBox>
  <Split gap="medium">
    <SplitSection>
      <DemoBox padding="xsmall" width={30}>
        Content
      </DemoBox>
    </SplitSection>

    <SplitSection>
      <DemoBox padding="xsmall" width={20}>
        Content
      </DemoBox>
    </SplitSection>

    <SplitSection>
      <DemoBox padding="xsmall" width={12}>
        Content
      </DemoBox>
    </SplitSection>

    <SplitSection>
      <DemoBox padding="xsmall" width={24}>
        Content
      </DemoBox>
    </SplitSection>

    <SplitSection>
      <DemoBox padding="xsmall" width={8}>
        Content
      </DemoBox>
    </SplitSection>

    <SplitSection>
      <DemoBox padding="xsmall" width={28}>
        Content
      </DemoBox>
    </SplitSection>

    <SplitSection>
      <DemoBox padding="xsmall" width={18}>
        Content
      </DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```

---

# Layout Use Cases

## Icon With Text

**Code**

```jsx
<>
  <Arrange gap="small" alignItems="stretch" columns={['auto', '1fr']}>
    <Icon icon={<SvgArrowRight />} />

    <div>
      <Text>{demoText.long}</Text>

      <Spacer top="small">
        <Button>Button</Button>
      </Spacer>
    </div>
  </Arrange>

  <br />

  <Arrange gap="small" alignItems="stretch" columns={['auto', '1fr']}>
    <Icon icon={<SvgArrowRight />} />
    <Text hasEllipsis>{demoText.long}</Text>
  </Arrange>
</>
```

---

## Actions

**Code**

```jsx
<Arrange gap="small">
  <Button>New Folder</Button>
  <Button>Filter</Button>

  <IconButton icon={<SvgMoreHoriz />} altText="Options" />
</Arrange>
```

---

## Full Width Buttons (Responsive)

**Code**

```jsx
<Arrange gap="small" columns="repeat(auto-fit, minmax(12rem, 1fr))">
  <Button>Secondary Option</Button>
  <Button>Primary Option</Button>
</Arrange>
```

---

## Media Element (Responsive)

**Code**

```jsx
<Container radius="medium" borderSide="all" maxWidth={60} padding="medium">
  <Split gap="xsmall" alignItems="flex-start">
    <SplitSection>
      <Icon icon={<SvgRecord />} size={6} />
    </SplitSection>

    <SplitSection>
      <Text fontWeight="bold" size="large">
        Integration
      </Text>

      <Text>Connect your engagement insights</Text>

      <Spacer top="small">
        <Button>Connect</Button>
      </Spacer>
    </SplitSection>
  </Split>
</Container>
```
