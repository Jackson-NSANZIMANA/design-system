# 37.Container

`Container` is a versatile layout component that provides padding, borders, colors, radius, and responsive sizing for content blocks.

---

## Usage

```javascript
import { Container } from '@loomhq/lens'
;<Container>Content</Container>
```

---

## Border

Use the `borderSide` prop to specify which side(s) the border should appear on, and `borderColor` to override the default color.

```javascript
<Arrange gap="medium">
  <Container padding="small" borderSide="all">
    with default border
  </Container>
  <Container padding="small" borderSide="all" borderColor="primary">
    with custom border color
  </Container>
  <Container
    padding="small"
    borderSide="all"
    borderColor="primary"
    borderWidth="2px"
  >
    with custom border color and width
  </Container>
</Arrange>
```

---

## Radius

Use the `radius` prop to adjust the border radius.

```javascript
<Split gap="medium">
  {availableRadii.map((radius) => (
    <Container
      key={radius}
      radius={radius}
      borderSide="all"
      borderWidth="2px"
      padding="large"
    >
      with radius {radius}
    </Container>
  ))}
</Split>
```

---

## Color

Set `borderColor`, `backgroundColor`, and `contentColor` using palette colors.

```javascript
<Container
  borderColor="primary"
  contentColor="primary"
  backgroundColor="highlight"
  borderSide="all"
  padding="medium"
>
  Color
</Container>
```

---

## Position

You can use `position`, `top`, `right`, `bottom`, `left`, and `overflow` to control layout and stacking.

```javascript
<Container
  position="relative"
  paddingY="xlarge"
  paddingX="medium"
  borderSide="all"
  borderWidth="2px"
  radius="medium"
  maxWidth={36}
>
  <Container position="absolute" top="xsmall" right="xsmall">
    <IconButton icon={<SvgClose />} />
  </Container>
  Content
</Container>
```

---

## Spacing and Dimensions

Supports `padding`, `margin`, `minHeight`, `maxWidth`, etc.

**Semantic spacing values:**

| Name    | Rem  | Px  |
| ------- | ---- | --- |
| xsmall  | 0.25 | 4   |
| small   | 0.5  | 8   |
| medium  | 1    | 16  |
| large   | 1.5  | 24  |
| xlarge  | 2.5  | 40  |
| xxlarge | 4    | 64  |

**Number values** are multiplied by 8 and converted to `rem`.  
**String values** accept any valid CSS measurement (`auto`, `50%`, `10vw`, etc.).

```javascript
<Container padding="1rem" maxWidth="50%">Content</Container>
<Container padding="large" maxWidth={20}>Content</Container>
```

---

## Semantic HTML

Use `htmlTag` prop to render a semantic HTML element (`div`, `section`, `header`, `footer`, `main`, `span`, `form`, `table`, etc.).

---

## Responsive Props

Pass an object keyed by breakpoints:

```javascript
padding={{
  default: 'xsmall',
  xsmall: 'small',
  small: 'medium',
  medium: 'large',
  large: 'xlarge',
}}
```

Available breakpoints:

| Breakpoint | Min Width     |
| ---------- | ------------- |
| xsmall     | 31em (496px)  |
| small      | 48em (768px)  |
| medium     | 64em (1024px) |
| large      | 75em (1200px) |

---

## Refs

Use `refHandler` to access the DOM element from a parent component.

```javascript
const ref = useRef()

const refHandler = (newRef) => {
  ref.current = newRef
}

;<Container refHandler={refHandler}>
  <Text>I have a ref value</Text>
</Container>
```

---

## Props

| Name                                                                                    | Type                                              | Default    | Notes                                        |
| --------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------- | -------------------------------------------- |
| borderWidth                                                                             | string \| number                                  | `'1px'`    | Border thickness                             |
| htmlTag                                                                                 | string                                            | `'div'`    | Semantic HTML element                        |
| backgroundColor                                                                         | string                                            |            | Container background color                   |
| backgroundImage                                                                         | string                                            |            | CSS background image                         |
| contentColor                                                                            | string                                            |            | Text/content color                           |
| borderColor                                                                             | string                                            |            | Border color                                 |
| radius                                                                                  | string                                            | `'medium'` | Border radius                                |
| borderSide                                                                              | `'all' \| 'left' \| 'right' \| 'top' \| 'bottom'` |            | Border side(s)                               |
| shadow                                                                                  | `'small' \| 'medium' \| 'large'`                  |            | Box shadow                                   |
| padding / paddingX / paddingY / paddingLeft / paddingRight / paddingTop / paddingBottom | ResponsiveType<string \| number>                  |            | Padding values                               |
| margin / marginX / marginY / marginLeft / marginRight / marginTop / marginBottom        | ResponsiveType<string \| number>                  |            | Margin values                                |
| width / height / minWidth / minHeight / maxWidth / maxHeight                            | ResponsiveType<string \| number>                  |            | Sizing values                                |
| children                                                                                | React.ReactNode                                   | required   | Content inside container                     |
| position                                                                                | string                                            |            | CSS position                                 |
| overflow                                                                                | string                                            |            | Overflow behavior                            |
| top / bottom / left / right                                                             | ResponsiveType<string \| number>                  |            | Position offsets                             |
| zIndex                                                                                  | number \| string                                  |            | Stacking order                               |
| refHandler                                                                              | function                                          |            | Pass a function to receive the container ref |

