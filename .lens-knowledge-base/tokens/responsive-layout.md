# Responsive

## Prefer algorithmic layouts

Lens encourages building responsive layouts with less code following the algorithmic layout approach. What does this mean? Let's look at the traditional method and how we can improve it.

---

## The problem with media queries

The traditional approach for building responsive layouts is to write imperative / case-specific rules with media queries. This method requires us to specify the layout behavior manually for specific screen sizes, which results in a design that covers only specific screen sizes while ignoring everything in-between. It also forces us to write more code with multiple adjustments per screen size.

---

## Algorithmic layouts — the browser doing the job for us

## We can give some guidelines to the browser and let it arrange the elements depending on the available space. CSS flexbox and grid accept this type of guidelines. For example, we can tell flexbox to wrap its children when there is not enough horizontal space, or we can tell Grid to fit as many columns as possible in a container.

## Algorithmic layouts with Lens layout components

This approach can be used with Lens layout components, specifically:

- **Arrange** (based on grid)
- **Split** (based on flexbox)

---

## Examples

### Arrange Example

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

### Split Example

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

# Responsive Props

Some layout component props accept responsive values. These values are mapped to `min-width` breakpoints.

This method is preferred when more fine-tuning is needed than the algorithmic layout approach can offer. Check the component's Props section to see which props allow responsive values.

---

## Example: Change `gap` and `columns` based on screen size

```jsx
<DemoBox>
  <Arrange
    gap={{
      default: 'xsmall',
      xsmall: 'small',
      small: 'medium',
      medium: 'large',
      large: 'xlarge',
    }}
    columns={{
      default: '1fr',
      medium: ['2fr', '1fr', '1fr'],
    }}
  >
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## Custom Breakpoints

The responsive prop can be used with custom breakpoints:

```jsx
<DemoBox>
  <Arrange
    gap={{
      default: 'xsmall',
      '50em': 'medium', // output: @media(min-width: 50em) {...}
    }}
  >
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

# Responsive Text

Use the Text `sizeMinMax` prop for responsive text sizes.

The size grows from the minimum to maximum value while resizing the browser between the minimum and maximum breakpoints.

## Example

```jsx
<>
  <Text sizeMinMax={['medium', 'xlarge']} fontWeight="bold">
    Resize the window
  </Text>

  <Text sizeMinMax={['small', 'large']}>{demoText.short}</Text>
</>
```

---

# Additional Tools

These tools are useful when modifying props that are not responsive.

⚠️ Keep in mind:

- These tools use JavaScript.
- They re-render nested components.
- In some cases, this might compromise performance.
- Use them when performance is not a concern.

---

## useMedia Hook

```jsx
;() => {
  const buttonSize = useMedia(
    ['(min-width: 1200px)', '(min-width: 1000px)', '(min-width: 800px)'],
    ['large', 'medium', 'small'],
    'small',
  )

  return (
    <Button
      size={buttonSize}
      icon={buttonSize === 'large' && <SvgArrowForward />}
    >
      {buttonSize}
    </Button>
  )
}
```

---

## Media Component

```jsx
<Media
  queries={['(min-width: 1200px)', '(min-width: 1000px)', '(min-width: 800px)']}
  values={['large', 'medium', 'small']}
  defaultValue="small"
>
  {(buttonSize) => (
    <Button
      size={buttonSize}
      icon={buttonSize === 'large' && <SvgArrowForward />}
    >
      {buttonSize}
    </Button>
  )}
</Media>
```
