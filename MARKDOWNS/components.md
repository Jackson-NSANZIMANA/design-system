  # Component definition

  Before adding a new component to the design system consider the definition of the component.

  - **Components are widely used.** When adding a new component make sure it's used across designs or it will be in the future.

  - **A component should solve as few problems as possible.** The simplicity of a component makes it reusable and easy to maintain. Each component owns a specific problem and because of that we can easily test and find issues.

  - **Components should be constructed with the system variables.** The system variables (or styles) contain rules about variables like typography and color that result in a specific visual language. System variables tie components together visually and make them feel like part of the same family.

  - **Components are layout agnostic.** A component can't predict where it will be used so it should be flexible to adapt to different layouts.

  - **Components are content agnostic.** Some components contain text and it can be different depending on the context. These components also can be translated into other languages.

  # Designing custom elements

  Sometimes components don't fit a specific use case and a custom element is needed. You can design custom UI elements that are not in the components library but still follow the Lens design language.

  ## How to design a custom UI element

  - Use Lens styles to define typography, color and layer styles like border radii and shadows.

  - Use Lens spacing rules to space out elements. If possible, use one of the predefined spacing values, if not, use a value divisible by 8px.

  ### Example case

  In this example, we need to design an integration card. We can use Lens text sizes and colors to define the typography. For the card, we can use Lens border-radius and shadow styles. In this case, all spacing can be solved with Lens predefined spacing rules.

  The result is a one-off element for a specific use case but it feels like part of Lens design language.

  # Components list :

  # 1.Avatar

  ## Usage

  ```js
  import { Avatar } from '@loomhq/lens'
  ;<Avatar letter="A" />
  ```

  ## Sizes

  ```tsx
  <Arrange gap="small">
    <Avatar imageSrc={exampleAvatarLogo.src} size={4} />
    <Avatar imageSrc={exampleAvatarLogo.src} size={7} />
    <Avatar letter="A" size={4} />
    <Avatar letter="A" size={7} />
  </Arrange>
  ```

  ### With an image

  ```js
  <Arrange gap="small">
    <Avatar imageSrc={exampleAvatarLogo.src} />
    <Avatar imageSrc={exampleAvatarLogoAlt.src} />
    <Avatar imageSrc={exampleAvatarPerson.src} />
  </Arrange>
  ```

  ### With letter

  ```js
  <Arrange gap="small">
    <Avatar letter="A" />
    <Avatar letter="B" />
    <Avatar letter="C" />
  </Arrange>
  ```

  ### With children

  ```js
  <Avatar>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" fill="white" />
      <rect width="128" height="128" fill="black" />
      <rect x="12" y="12" width="104" height="104" fill="white" />
      <rect x="40" y="40" width="48" height="48" rx="24" fill="black" />
    </svg>
  </Avatar>
  ```

  ### With alternative text

  If the avatar is not purely decorative, add an image text alternative for accessibility reasons.

  ```jsx
  <Arrange gap="small">
    <Avatar altText={demoText.name} imageSrc={exampleAvatarPerson.src} />
    <Avatar altText={demoText.name} letter="S" />
  </Arrange>
  ```

  ### Theme Color

  Add a color combination for your Avatar

  ```jsx
  <Arrange gap="small">
    <Avatar letter="A" />
    <Avatar themeColor="orange" letter="B" />
  </Arrange>
  ```

  ## Props

  | Props              | Type                                  | Default |
  | ------------------ | ------------------------------------- | ------- |
  | altText            | string                                | ''      |
  | size               | string / number                       | 4       |
  | themeColor         | 'orange' / 'blue' / 'yellow' / 'teal' | 'blue'  |
  | letter             | string                                |         |
  | imageSrc           | string                                |         |
  | children           | React.ReactNode                       |         |
  | height             | number                                |         |
  | width              | number                                |         |
  | hasBackgroundColor | boolean                               |         |
  | backgroundColor    | string                                |         |

  # 2.Button

  ## Usage

  ```jsx
  import { Button } from '@loomhq/lens'
  ;<Button>Button</Button>
  ```

  ## Sizes

  - **Medium** is the default size and should cover most cases.
  - Use **large** size in special cases to highlight the button.
  - Use **small** in tight spaces.

  ## Variants

  - **neutral** is the default variant and should cover most cases.
  - Use **neutralSecondary** for approved uses only [pending].
  - Use **primary** to highlight the most important action.
  - Use **record** to indicate a recording action.
  - Use **upgrade** to indicate a plan upgrade.
  - Use **danger** for destructive actions.
  - Use **ai** for actions related to AI.

  ```jsx
  <Split gap="small">
    <Button variant="neutral">Neutral</Button>
    <Button variant="neutralSecondary">Neutral Secondary</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="record">Record</Button>
    <Button variant="upgrade">Upgrade</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="ai">Loom AI</Button>
  </Split>
  ```

  ## 1. With Icon

  ### One Icon

  ```jsx
  <Arrange gap="small" columns="1fr">
    <Arrange gap="small">
      <Button iconBefore={<SvgRecord />} size="small">
        Small
      </Button>
      <Button iconAfter={<SvgRecord />} size="small">
        Small
      </Button>
    </Arrange>
    <Arrange gap="small">
      <Button iconBefore={<SvgRecord />}>Medium</Button>
      <Button iconAfter={<SvgRecord />}>Medium</Button>
    </Arrange>
    <Arrange gap="small">
      <Button iconBefore={<SvgRecord />} size="large">
        Large
      </Button>
      <Button iconAfter={<SvgRecord />} size="large">
        Large
      </Button>
    </Arrange>
  </Arrange>
  ```

  ### Two Icons

  When using two icons, reserve **iconAfter** for icons that provide a clear affordance (like arrows or chevrons).

  ```jsx
  <Arrange gap="medium" rows={['auto']} justifyItems="start">
    <Button
      variant="primary"
      iconBefore={<SvgConfluenceNeutral />}
      iconAfter={<SvgExternalLink />}
      size="small"
    >
      Open in Confluence
    </Button>
    <Button iconBefore={<SvgWaveform />} iconAfter={<SvgCollapseReplies />}>
      Hide Waveform
    </Button>
    <Button
      variant="record"
      iconBefore={<SvgRecord />}
      iconAfter={<SvgArrowRight />}
      size="large"
    >
      Record and save
    </Button>
  </Arrange>
  ```

  ## 2. With Logo

  Use the **neutral** variant for buttons with logos.

  ```jsx
  <Arrange gap="small">
    <Button logoSrc={exampleLogo.src}>Button</Button>
    <Button logoSrc={exampleLogo.src} />
  </Arrange>
  ```

  ## 3. Floating

  For buttons floating over content, use **isFloating**. The neutral variant uses solid backgrounds.

  ```jsx
  <Arrange gap="small">
    <Button isFloating>Jump to Latest</Button>
    <Button variant="primary" isFloating>
      Jump to Latest
    </Button>
  </Arrange>
  ```

  ## 4. With Loader

  ```jsx
  <Button hasLoader>Button</Button>
  ```

  ## 5.Width Options

  - **auto** (default): inline-flex properties.
  - **full**: expands to 100% of parent container.
  - **maxContent**: expands to fit content, preventing word wrap and overflow (additional styling may be needed).

  ## 6.Disabled

  ```jsx
  <Button isDisabled>Can't touch this</Button>
  ```

  ### 6.1 Aria Disabled

  Use **ariaDisabled** for assistive technologies when the disabled state should be conveyed.

  ```jsx
  <Tooltip content="Upgrade to premium to access this feature" tabIndex={-1}>
    <Button isDisabled ariaDisabled>
      Premium button
    </Button>
  </Tooltip>
  ```

  ## 7.RefHandler

  Pass a function to **refHandler** to access the button's ref.

  ```jsx
  const ref = useRef()

  const refHandler = (newRef) => {
    ref.current = newRef
    console.log('Assigned ref to button', { newRef })
  }

  return (
    <>
      <Button refHandler={refHandler}>A button with ref value</Button>
    </>
  )
  ```

  ## 8.HTML Tag

  Change the wrapper HTML tag with **htmlTag**. Use **download** to specify resources for download.

  ```jsx
  <Arrange gap="small">
    <Button>Rendering {'<button>'} tag</Button>
    <Button htmlTag="a">Rendering {'<a>'} tag</Button>
    <Button
      htmlTag="a"
      download="thumbnail.png"
      aria-label="Download thumbnail (PNG, 200kb)"
    >
      Download thumbnail
    </Button>
  </Arrange>
  ```

  ## 9.UFO Press Tracing

  Use **interactionName** to trace press events within UFO.

  ```jsx
  <Button interactionName="press-tracing-button">I'm using Press Tracing!</Button>
  ```

  ## Props

  | Name            | Type                                                                                                       | Default     | Description                            |
  | --------------- | ---------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
  | size            | `'small' \| 'medium' \| 'large'`                                                                           | `'medium'`  | Size of the button                     |
  | variant         | `'neutral' \| 'neutralSecondary' \| 'primary' \| 'secondary' \| 'record' \| 'upgrade' \| 'danger' \| 'ai'` | `'neutral'` | Variant style of the button            |
  | width           | `'auto' \| 'full' \| 'maxContent'`                                                                         | `'auto'`    | Width of the button                    |
  | iconPosition    | `'left' \| 'right'`                                                                                        | `'left'`    | Position of icons                      |
  | htmlTag         | `'button' \| 'a'`                                                                                          | `'button'`  | HTML element to render as              |
  | children        | `React.ReactNode`                                                                                          | —           | Child nodes or content                 |
  | isDisabled      | `boolean`                                                                                                  | —           | Disabled state                         |
  | ariaDisabled    | `boolean`                                                                                                  | —           | ARIA disabled state for assistive tech |
  | hasFullWidth    | `boolean`                                                                                                  | —           | Whether button takes full width        |
  | icon            | `React.ReactNode`                                                                                          | —           | Icon element                           |
  | iconBefore      | `React.ReactNode`                                                                                          | —           | Icon before text                       |
  | iconAfter       | `React.ReactNode`                                                                                          | —           | Icon after text                        |
  | logoSrc         | `string`                                                                                                   | —           | Logo image source                      |
  | onClick         | `React.MouseEventHandler<HTMLButtonElement>`                                                               | —           | Click event handler                    |
  | hasLoader       | `boolean`                                                                                                  | —           | Show loader on button                  |
  | isFloating      | `boolean`                                                                                                  | —           | Floating over content                  |
  | href            | `string`                                                                                                   | —           | URL for link                           |
  | download        | `string`                                                                                                   | —           | Download file name or URL              |
  | target          | `string`                                                                                                   | —           | Target attribute for links             |
  | type            | `string`                                                                                                   | —           | Button type (e.g., submit, button)     |
  | refHandler      | `(ref: HTMLButtonElement) => void`                                                                         | —           | Function to handle ref assignment      |
  | interactionName | `string`                                                                                                   | —           | Name for press tracing                 |
  | className       | `string`                                                                                                   | —           | Additional CSS classes                 |
  | style           | `any`                                                                                                      | —           | Inline styles                          |

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

  # 4.ColorPicker

  ## Usage

  ```jsx
  import { ColorPicker } from '@loomhq/lens'
  ;<ColorPicker onChange={func} />
  ```

  ## Using onChange

  ```jsx
  ;() => {
    const [color, setColor] = React.useState('#ffffff')
    return (
      <>
        {color}
        <ColorPicker onChange={(color) => setColor(color)} />
      </>
    )
  }
  ```

  ## With default color

  ```jsx
  ;() => {
    const [color, setColor] = React.useState('#c7c6f9')
    return (
      <ColorPicker onChange={(color) => setColor(color)} defaultColor={color} />
    )
  }
  ```

  ## With confirm button

  ```jsx
  ;() => {
    const [tempColor, setTempColor] = React.useState('#ffffff')
    const [finalColor, setFinalColor] = React.useState('#ffffff')
    return (
      <>
        Temp color: {tempColor}
        <br />
        Final color: {finalColor}
        <ColorPicker
          onChange={(color) => setTempColor(color)}
          confirmButton={
            <Button
              variant="primary"
              size="small"
              width="full"
              onClick={() => setFinalColor(tempColor)}
            >
              Use this color
            </Button>
          }
        />
      </>
    )
  }
  ```

  ## With swatches

  ```jsx
  ;() => {
    const [color, setColor] = React.useState('#ffffff')
    const swatchesArray = [
      'var(--lns-color-orange)',
      'var(--lns-color-teal)',
      'var(--lns-color-yellow)',
      'var(--lns-color-blue)',
      'var(--lns-color-offWhite)',
      'var(--lns-color-grey6)',
      'var(--lns-color-white)',
    ]
    return (
      <ColorPicker
        onChange={(color) => setColor(color)}
        swatches={swatchesArray}
      />
    )
  }
  ```

  ## With popover

  Combine with **Popover** component to position ColorPicker as an overlay.

  ```jsx
  ;() => {
    const [isOpen, setOpen] = React.useState(false)
    return (
      <Container width="max-content">
        <Popover
          isOpen={isOpen}
          placement="bottomCenter"
          content={<ColorPicker onChange={(color) => color} />}
        >
          <Button onClick={() => setOpen(!isOpen)}>Trigger</Button>
        </Popover>
      </Container>
    )
  }
  ```

  ## Props

  | Name          | Type                                | Default     |
  | ------------- | ----------------------------------- | ----------- |
  | defaultColor  | `'string'`                          | `'#ffffff'` |
  | confirmButton | `'React.ReactNode'`                 |             |
  | swatches      | `'string[]' `                       |             |
  | onChange      | `'(selectedColor: string) => void'` |             |

  # 5.Dropdown

  ## Import

  ```tsx
  import { Dropdown } from '@loomhq/lens'
  ```

  ---

  ## Usage

  ```tsx
  <Dropdown
    triggerCallback={(buttonProps) => (
      <div tabIndex="0" {...buttonProps}>
        Simple trigger
      </div>
    )}
    options={[
      {
        title: 'Share',
        icon: <SvgShare />,
        onClick: () => {},
        disabled: false,
      },
    ]}
  />
  ```

  ---

  ## ARIA Menu Name

  Screen readers should accurately 'read' the text contents of the custom node you return from the callback you pass to `trigger` as the label for the Dropdown element. However, you can explicitly pass a label string to `ariaMenuName` to explicitly label the element in case screen readers are not behaving as expected.

  ```tsx
  <Dropdown
    ariaMenuName="Button with label override"
    triggerCallback={(buttonProps) => (
      <Arrange tabIndex="0" {...buttonProps}>
        <Text fontWeight="bold">This label is invisible to screen readers</Text>
        <Icon icon={<SvgChevronDown />} />
      </Arrange>
    )}
    options={[
      { title: 'Share' },
      { title: 'Archive' },
      { title: 'Disabled', disabled: true },
    ]}
  />
  ```

  ---

  ## Trigger

  ### triggerCallback

  AA callback function that returns a custom node. The Dropdown component will pass the necessary ARIA attributes to allow screen readers to properly 'read' the custom node returned by your callback.

  Providing this prop will override any custom node passed to `trigger`.

  ### trigger (deprecated - use triggerCallback instead)

  Trigger can be any custom node. If the `trigger` is not a button make sure to add a tabindex attribute to it.

  Note on deprecation: This approach is not a11y compliant, as screen readers cannot properly 'read' the dropdown options. Using a screen reader, you can test the buttons below. Only the first should have its menu items read.

  ```tsx
  <Arrange gap="large">
    <Dropdown
      triggerCallback={(buttonProps) => {
        return (
          <Arrange tabIndex="0" {...buttonProps}>
            <Text fontWeight="bold">ARIA compliant trigger</Text>
            <Icon icon={<SvgChevronDown />} />
          </Arrange>
        )
      }}
      options={[
        { title: 'Share' },
        { title: 'Archive' },
        { title: 'Disabled', disabled: true },
      ]}
    />
    <Dropdown
      trigger={<div tabIndex="0">Simple trigger</div>}
      options={[
        { title: 'Share', onClick: () => alert('hi') },
        { title: 'Archive' },
        { title: 'Disabled', disabled: true },
      ]}
    />
    <Dropdown
      trigger={
        <Arrange tabIndex="0">
          <Text fontWeight="bold">Trigger with icon</Text>
          <Icon icon={<SvgChevronDown />} />
        </Arrange>
      }
      options={[
        { title: 'Share' },
        { title: 'Archive' },
        { title: 'Disabled', disabled: true },
      ]}
    />
    <Dropdown
      trigger={<Button>Button trigger</Button>}
      options={[
        { title: 'Share' },
        { title: 'Archive' },
        { title: 'Disabled', disabled: true },
      ]}
    />
    <Dropdown
      trigger={<IconButton altText="dropdown" icon={<SvgChevronDown />} />}
      options={[
        { title: 'Share' },
        { title: 'Archive' },
        { title: 'Disabled', disabled: true },
      ]}
    />
  </Arrange>
  ```

  ---

  ## Menu Position

  Menu can be positoned on the left or right side relative to the trigger.

  ```tsx
  <Arrange gap="medium" columns={['1fr', '1fr']}>
    <Dropdown
      triggerCallback={(buttonProps) => (
        <Button {...buttonProps}>Trigger on left</Button>
      )}
      menuPosition="left"
      options={[{ title: 'Share' }, { title: 'Archive' }]}
    />
    <Dropdown
      triggerCallback={(buttonProps) => (
        <Button {...buttonProps}>Trigger on right</Button>
      )}
      menuPosition="right"
      options={[{ title: 'Share' }, { title: 'Archive' }]}
    />
    <Dropdown
      triggerCallback={(buttonProps) => (
        <Button {...buttonProps}>Trigger on top left</Button>
      )}
      menuPosition="topLeft"
      options={[{ title: 'Share' }, { title: 'Archive' }]}
    />
    <Dropdown
      triggerCallback={(buttonProps) => (
        <Button {...buttonProps}>Trigger on top right</Button>
      )}
      menuPosition="topRight"
      options={[{ title: 'Share' }, { title: 'Archive' }]}
    />
    <Dropdown
      triggerCallback={(buttonProps) => (
        <Button {...buttonProps}>Trigger on left side</Button>
      )}
      triggerOffset={8}
      menuPosition="leftSide"
      options={[{ title: 'Share' }, { title: 'Archive' }]}
    />
    <Dropdown
      triggerCallback={(buttonProps) => (
        <Button {...buttonProps}>Trigger on right side</Button>
      )}
      triggerOffset={-78}
      menuPosition="rightSide"
      options={[{ title: 'Share' }, { title: 'Archive' }]}
    />
  </Arrange>
  ```

  ---

  ### With Icons

  ```tsx
  <Dropdown
    triggerCallback={(buttonProps) => <Button {...buttonProps}>Trigger</Button>}
    options={[
      { title: 'Share', icon: <SvgShare /> },
      { title: 'Archive', icon: <SvgArchive /> },
      { title: 'Disabled', icon: <SvgTrash />, disabled: true },
    ]}
  />
  ```

  ---

  ### With Divider

  ```tsx
  <Dropdown
    triggerCallback={(buttonProps) => <Button {...buttonProps}>Trigger</Button>}
    options={[
      { title: 'Share' },
      { title: 'Archive' },
      { title: 'Download', hasDivider: true },
    ]}
  />
  ```

  ---

  ## Menu Size

  ### Min / Max Width

  ```tsx
  <Dropdown
    triggerCallback={buttonProps => <Button {...buttonProps}>With min width</Button>}
    menuMinWidth={10}
    options={[
      { title: 'A' },
      { title: 'B' },
      { title: 'C' },
    ]}
  />

  <Dropdown
    triggerCallback={buttonProps => <Button {...buttonProps}>With max width</Button>}
    menuMaxWidth={56}
    options={[
      { title: 'Long option text' },
      { title: 'Short' },
    ]}
  />
  ```

  ---

  ### Max Height

  ```tsx
  <Dropdown
    menuMaxHeight={24}
    triggerCallback={(buttonProps) => <Button {...buttonProps}>Trigger</Button>}
    options={[{ title: 'First' }, { title: 'Second' }]}
  />
  ```

  ---

  ## Container

  Specify where the dropdown renders in the DOM. this is especially useful when working with Shadow DOM.

  ```tsx
  <Dropdown
    container={() => document.querySelector('#renderContainer')}
    triggerCallback={(buttonProps) => <Button {...buttonProps}>Trigger</Button>}
    options={[{ title: 'A' }, { title: 'B' }, { title: 'C' }]}
  />
  ```

  ---

  ## Search

  For dropdowns with many options that make it difficult to find the intended value, a search input can be added. By default, the option values are filtered on the inputted value using a loose `includes` pattern.

  ### With string options

  ```tsx
  <Arrange gap="large">
    <Dropdown
      triggerCallback={(buttonProps) => (
        <Button {...buttonProps}>Contains Search</Button>
      )}
      menuMaxHeight={42}
      options={[
        { title: 'A' },
        { title: 'B' },
        { title: 'AB' },
        { title: 'BA' },
        { title: 'Aa' },
        { title: 'AA' },
        { title: 'Bb' },
        { title: 'BB' },
        { title: 'ABC' },
        { title: 'ACB' },
        { title: 'BAC' },
        { title: 'BCA' },
        { title: 'CAB' },
        { title: 'CBA' },
        { title: 'a' },
        { title: 'b' },
      ]}
      search={{
        searchPlaceholder: 'Search with includes...',
        searchType: 'contains',
      }}
    />
    <Dropdown
      triggerCallback={(buttonProps) => (
        <Button {...buttonProps}>Starts With Search</Button>
      )}
      menuMaxHeight={42}
      options={[
        { title: 'A' },
        { title: 'B' },
        { title: 'AB' },
        { title: 'BA' },
        { title: 'Aa' },
        { title: 'AA' },
        { title: 'Bb' },
        { title: 'BB' },
        { title: 'ABC' },
        { title: 'ACB' },
        { title: 'BAC' },
        { title: 'BCA' },
        { title: 'CAB' },
        { title: 'CBA' },
        { title: 'a' },
        { title: 'b' },
      ]}
      search={{
        searchPlaceholder: 'Search with starts with...',
        searchType: 'startsWith',
      }}
    />
  </Arrange>
  ```

  ### With ReactElement options

  For options that implement a `ReactElement` as the `title` of the `options` property, the element properties must be joined with `React.PropsWithChildren` or have the `children` property. Furthermore, the searchable value of the element **must** be included as a child of the element to ensure its value can be parsed.

  ```tsx
  <Arrange gap="large">
    <Dropdown
      triggerCallback={(buttonProps) => (
        <Button {...buttonProps}>Element Search</Button>
      )}
      menuMaxHeight={42}
      options={[
        { title: <div>A</div> },
        { title: <div>B</div> },
        { title: <div>AB</div> },
        { title: <div>BA</div> },
        { title: <div>Aa</div> },
        { title: <div>AA</div> },
        { title: <div>Bb</div> },
        { title: <div>BB</div> },
        { title: <div>ABC</div> },
        { title: <div>ACB</div> },
        { title: <div>BAC</div> },
        { title: <div>BCA</div> },
        { title: <div>CAB</div> },
        { title: <div>CBA</div> },
        { title: <div>a</div> },
        { title: <div>b</div> },
      ]}
      search={{
        searchPlaceholder: 'Search with element options...',
      }}
    />
  </Arrange>
  ```

  ---

  ## onOuterClick callback

  ```tsx
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>console.log on change</Button>
    )}
    onOuterClick={() => console.log('onOuterClick')}
    options={[{ title: 'A' }, { title: 'B' }]}
  />
  ```

  ---

  ---

  ## onOpenChange callback

  Callback that provides the `isOpen` value when dropdown opens or closes

  ```tsx
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>console.log on change</Button>
    )}
    onOpenChange={(newState) => console.log(newState)}
    options={[{ title: 'A' }, { title: 'B' }]}
  />
  ```

  ---

  ## Props

  | Name          | Type                                                                        | Default  |
  | ------------- | --------------------------------------------------------------------------- | -------- |
  | menuPosition  | `'left' \| 'right' \| 'topRight' \| 'topLeft' \| 'leftSide' \| 'rightSide'` | `'left'` |
  | menuZIndex    | `number`                                                                    | `1100`   |
  | menuMinWidth  | `number \| string`                                                          | `24`     |
  | menuMaxWidth  | `number \| string`                                                          | `48`     |
  | triggerOffset | `number`                                                                    | `0`      |
  | ariaMenuName  | `string`                                                                    | —        |
  | options       | `OptionsObject[]`                                                           | —        |
  | isOpen        | `boolean`                                                                   | —        |
  | menuMaxHeight | `number \| string`                                                          | —        |
  | container     | `HTMLElement \| (() => HTMLElement) \| string`                              | —        |
  | onOuterClick  | `() => void`                                                                | —        |
  | onOpenChange  | `(isOpen: boolean) => void`                                                 | —        |
  | search        | `{ searchPlaceholder: string; searchType?: 'contains' \| 'startsWith' }`    | —        |
  | role          | `React.AriaRole`                                                            | —        |
  | menuItemRole  | `React.AriaRole`                                                            | —        |

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

  # 7.Icon

  ## Import

  ```tsx
  import { Icon, SvgSmile } from '@loomhq/lens'
  ```

  ---

  ## Usage

  ```tsx
  <Icon icon={<SvgSmile />} />
  ```

  See the Icon set for all available SVG icons.

  ---

  ## Color

  Use one of the palette colors.

  ```tsx
  <Icon color="orange" icon={<SvgLink />} />
  ```

  ---

  ## Size

  The default size is **3 × 3 units** (`1.5rem × 1.5rem`).

  To change the size, use the `size` prop. The value can be specified in units, pixels, or any valid CSS unit.

  ```tsx
  <Arrange>
    <Icon size={12} icon={<SvgArrowForward />} />
    <Icon size="3rem" icon={<SvgArrowForward />} />
    <Icon icon={<SvgArrowForward />} />
  </Arrange>
  ```

  ---

  ## Accessibility

  ### With Alternative Text

  If the icon is not purely decorative, add an `altText` for accessibility.

  ```tsx
  <Icon altText="Favorite" icon={<SvgSmile />} />
  ```

  If the icon is purely decorative, you may omit `altText`.

  ---

  ## Props

  | Name    | Type              | Default  |
  | ------- | ----------------- | -------- |
  | color   | `string`          | `'body'` |
  | size    | `SizeProp`        | `3`      |
  | altText | `string`          | —        |
  | icon    | `React.ReactNode` | —        |

  ---

  # 8.IconButton

  ## Import

  ```tsx
  import { IconButton } from '@loomhq/lens/icons'
  import { SvgFolder } from '@loomhq/lens/icons'
  ```

  ---

  ## Usage

  Add an image text alternative to convey the component’s purpose.

  ```tsx
  <IconButton altText="Move to Folder" icon={<SvgFolder />} />
  ```

  ---

  ## HTML Tag

  Change the HTML wrapper tag with the `htmlTag` prop.

  The default tag is `<button>`.  
  Use `href` when using `htmlTag="a"`.

  ```tsx
  <Arrange gap="small">
    <IconButton icon={<SvgArrowForward />} />
    <IconButton htmlTag="a" href="#" icon={<SvgArrowForward />} />
  </Arrange>
  ```

  ---

  ## Sizes

  ```tsx
  <Arrange gap="medium">
    <IconButton altText="Add Collaborator" size="small" icon={<SvgAdd />} />
    <IconButton altText="Add Collaborator" size="medium" icon={<SvgAdd />} />
    <IconButton altText="Add Collaborator" size="large" icon={<SvgAdd />} />
  </Arrange>
  ```

  ---

  ## Icons

  ```tsx
  <Arrange gap="small">
    <IconButton altText="Play" icon={<SvgPlay />} />
    <IconButton altText="Add Collaborator" icon={<SvgAdd />} />
    <IconButton altText="Back" icon={<SvgArrowBack />} />
  </Arrange>
  ```

  See the Icon set for available icons.

  ---

  ## States

  ### Active

  ```tsx
  <IconButton altText="Next" isActive icon={<SvgGrid />} />
  ```

  ### Disabled

  ```tsx
  <IconButton altText="Next" isDisabled icon={<SvgArrowForward />} />
  ```

  ---

  ## Color

  Use one of the palette colors via `iconColor`.

  ```tsx
  <IconButton altText="Close" icon={<SvgClose />} iconColor="red" />
  ```

  ---

  ## Forwarding Refs

  Use the `ref` prop to access the DOM node.

  ```tsx
  ;() => {
    const ref = useRef(null)

    const onClick = () => ref.current.focus()

    return (
      <>
        <Spacer bottom="small">
          <IconButton
            ref={ref}
            altText="Add Collaborator"
            size="small"
            icon={<SvgAdd />}
          />
        </Spacer>

        <TextButton onClick={onClick}>Click to focus</TextButton>
      </>
    )
  }
  ```

  ---

  ## Accessibility Guidelines

  - Always provide `altText` to describe the button’s purpose.
  - Do not rely on icon visuals alone to convey meaning.
  - If decorative only, reconsider whether `IconButton` is appropriate.

  ---

  ## Props

  | Name            | Type                                        | Default      |
  | --------------- | ------------------------------------------- | ------------ |
  | iconColor       | `string`                                    | `'body'`     |
  | size            | `'small' \| 'medium' \| 'large'`            | `'medium'`   |
  | htmlTag         | `'button' \| 'a'`                           | `'button'`   |
  | altText         | `string`                                    | **required** |
  | icon            | `React.ReactNode`                           | —            |
  | onClick         | `React.MouseEventHandler<HTMLInputElement>` | —            |
  | backgroundColor | `string`                                    | —            |
  | isActive        | `boolean`                                   | `false`      |
  | isDisabled      | `boolean`                                   | `false`      |
  | href            | `string`                                    | —            |
  | target          | `string`                                    | —            |

  ---

  # 9.Illustration

  ## Import

  ```tsx
  import { Illustration, SvgSmile } from '@loomhq/lens'
  ```

  ---

  ## Usage

  ```tsx
  <Illustration illustration={<SvgSmile />} />
  ```

  See the Illustration set for all available illustrations.

  ---

  ## Illustration Set

  ```tsx
  <Arrange gap="medium">
    <Illustration illustration={<IllustrationStarred />} />
    <Illustration illustration={<IllustrationShare />} />
    <Illustration illustration={<IllustrationInviteMembers />} />
  </Arrange>
  ```

  ---

  ## Color

  Use one of the palette colors.

  ```tsx
  <Illustration color="body" illustration={<IllustrationShare />} />
  ```

  ---

  ## Size

  The default size is **12 × 12 units** (`6rem × 6rem`).

  To change the size, use the `size` prop. The value can be specified in units, pixels, or any valid CSS unit.

  ```tsx
  <Arrange gap="medium">
    <Illustration illustration={<IllustrationPto />} />
    <Illustration size={9} illustration={<IllustrationPto />} />
    <Illustration size="3rem" illustration={<IllustrationPto />} />
  </Arrange>
  ```

  ---

  ## Accessibility

  ### With Alternative Text

  If the illustration is not purely decorative, add an `altText` for accessibility.

  ```tsx
  <Illustration
    altText="Invite team members"
    illustration={<IllustrationInvite />}
  />
  ```

  If the illustration is purely decorative, `altText` may be omitted.

  ---

  ## Props

  | Name         | Type               | Default    |
  | ------------ | ------------------ | ---------- |
  | color        | `string`           | `'orange'` |
  | size         | `number \| string` | `12`       |
  | altText      | `string`           | —          |
  | illustration | `React.ReactNode`  | —          |

  ---

  # 10. Indicator

  ## Basic Usage

  A wrapper that adds a pulsing dot indicator to any component.

  Perfect for showing notifications, unread counts, or status indicators on icons, buttons, or other UI elements.

  Simply wrap your component with `Indicator` and it automatically positions itself as a badge.

  ```tsx
  <Arrange gap="large" alignItems="center">
    <Indicator>
      <Icon icon={<SvgCalendar />} size={3} color="grey6" />
    </Indicator>
  </Arrange>
  ```

  ---

  ## Pulse Effect

  By default, the indicator includes a subtle pulsing ring effect that radiates outward from the dot.

  This pulse effect can be disabled when a simpler, static indicator is preferred (e.g. low bandwidth or reduced motion contexts).

  ### With Pulse (default)

  ```tsx
  <Indicator color="blue">
    <Icon icon={<SvgCalendar />} size={3} color="grey6" />
  </Indicator>
  ```

  ### Without Pulse

  ```tsx
  <Indicator color="blue" withPulse={false}>
    <Icon icon={<SvgCalendar />} size={3} color="grey6" />
  </Indicator>
  ```

  ---

  ## Color

  The indicator supports two color variants to communicate different types of information:

  - **Orange** — Notifications and alerts
  - **Blue** — Onboarding and informational indicators

  ```tsx
  <Arrange gap="large" alignItems="center">
    <Container>
      <Text size="small" color="grey6">
        Orange (Notifications)
      </Text>
      <Spacer top="small">
        <Indicator color="orange">
          <Icon icon={<SvgBell />} size={3} color="grey6" />
        </Indicator>
      </Spacer>
    </Container>

    <Container>
      <Text size="small" color="grey6">
        Blue (Onboarding)
      </Text>
      <Spacer top="small">
        <Indicator color="blue">
          <Icon icon={<SvgCalendar />} size={3} color="grey6" />
        </Indicator>
      </Spacer>
    </Container>
  </Arrange>
  ```

  ---

  ## Accessibility Guidelines

  - Indicators should supplement — not replace — accessible labels.
  - Do not rely solely on color to communicate meaning.
  - Pair with proper `aria-label`, `altText`, or descriptive text where necessary.

  ---

  ## Props

  | Name      | Type                 | Default      |
  | --------- | -------------------- | ------------ |
  | withPulse | `boolean`            | `true`       |
  | color     | `'blue' \| 'orange'` | `'blue'`     |
  | children  | `React.ReactNode`    | **required** |

  ---

  # 11.Link

  ## Import

  ```tsx
  import { Link } from '@loomhq/lens'
  ```

  ---

  ## Usage

  ```tsx
  <Link>Content</Link>
  ```

  ---

  ## Variants

  Use `subtle` when you do not want an underline and the surrounding context clearly communicates interactivity.

  By default, links should have an underline, as it is a strong accessibility affordance.

  - **Primary** (default)
  - **Neutral**
  - **Subtle**

  ```tsx
  <Arrange gap="small">
    <Link href="#">Primary</Link>
    <Link variant="neutral" href="#">
      Neutral
    </Link>
    <Link variant="subtle" href="#">
      Subtle
    </Link>
  </Arrange>
  ```

  ---

  ## Href

  Use `href` to navigate to another location.

  ```tsx
  <Link href="#">Take me somewhere</Link>
  ```

  ---

  ## HTML Tag

  Change the HTML wrapper tag using the `htmlTag` prop.

  ### Rendering `<a>` (default)

  ```tsx
  <Link>Rendering {'<a>'} tag</Link>
  ```

  ### Rendering `<button>`

  ```tsx
  <Link htmlTag="button">Rendering {'<button>'} tag</Link>
  ```

  ---

  ## Disabled

  ```tsx
  <Link isDisabled>Can't touch this</Link>
  ```

  ---

  ## Wrapping

  Use `noWrap` to prevent the link from wrapping or truncating.

  > ⚠️ This does not work if `hasEllipsis` is enabled on a parent `Text` component.

  ```tsx
  <Link noWrap>{demoText.medium}</Link>
  ```

  ---

  ## Examples

  ### Link in a Paragraph

  ```tsx
  <Text>
    <span>{demoText.medium} </span>
    <Link href="#">clouds.com</Link>
    <span> {demoText.medium}</span>
  </Text>
  ```

  ---

  ### With Ellipsis

  ```tsx
  <Text hasEllipsis>
    <Link href="#">{demoText.medium}</Link>
  </Text>
  ```

  ---

  ### Size

  The `Link` component inherits its size from the surrounding `Text` component.

  ```tsx
  <Text size="xxlarge">
    <Link href="#">Big link</Link>
  </Text>
  ```

  ---

  ## Accessibility Guidelines

  - Prefer underlined links for clarity and accessibility.
  - Do not rely solely on color to indicate interactivity.
  - Use `button` only when the action does not navigate.
  - Always provide meaningful link text (avoid “Click here”).

  ---

  ## Props

  | Name       | Type                                         | Default     |
  | ---------- | -------------------------------------------- | ----------- |
  | variant    | `'neutral' \| 'primary' \| 'subtle'`         | `'primary'` |
  | htmlTag    | `'button' \| 'a'`                            | `'a'`       |
  | children   | `React.ReactNode`                            | —           |
  | href       | `string`                                     | —           |
  | isDisabled | `boolean`                                    | `false`     |
  | noWrap     | `boolean`                                    | `false`     |
  | onClick    | `React.MouseEventHandler<HTMLAnchorElement>` | —           |
  | target     | `string`                                     | —           |

  ---

  # 12.List

  ## Import

  ```tsx
  import { List, ListRow } from '@loomhq/lens'
  ```

  ---

  ## Usage

  ```tsx
  <List columns={['4fr', '1fr']} gap="large">
    <ListRow paddingX="medium" paddingY="small">
      <div>Content</div>
      <div>Content</div>
    </ListRow>

    <ListRow paddingX="medium" paddingY="small">
      <div>Content</div>
      <div>Content</div>
    </ListRow>
  </List>
  ```

  ---

  ## Padding and Height

  ### With Padding

  ```tsx
  <List>
    <ListRow padding="large">
      <Container borderSide="all">With padding</Container>
    </ListRow>
  </List>
  ```

  ### With Padding and Fixed Height

  ```tsx
  <List>
    <ListRow paddingX="large" paddingY="small" height={6}>
      <Container borderSide="all">With padding and height</Container>
    </ListRow>
  </List>
  ```

  ### With Min / Max Height

  ```tsx
  <List>
    <ListRow minHeight={6} maxHeight={8}>
      <Container borderSide="all">With minHeight and maxHeight</Container>
    </ListRow>
  </List>
  ```

  ---

  ## Variant

  The `variant` prop controls list styling.

  - **stripe** (default)
  - **border**
  - **clear**

  ```tsx
  <Arrange columns="repeat(3, 1fr)" gap="medium">
    <List columns={['1fr']} variant="stripe">
      <ListRow padding="small">
        <Text>stripe</Text>
      </ListRow>
      <ListRow padding="small">
        <Text>stripe</Text>
      </ListRow>
      <ListRow padding="small">
        <Text>stripe</Text>
      </ListRow>
    </List>

    <List columns={['1fr']} variant="border">
      <ListRow padding="small">
        <Text>border</Text>
      </ListRow>
      <ListRow padding="small">
        <Text>border</Text>
      </ListRow>
      <ListRow padding="small">
        <Text>border</Text>
      </ListRow>
    </List>

    <List columns={['1fr']} variant="clear">
      <ListRow padding="small">
        <Text>clear</Text>
      </ListRow>
      <ListRow padding="small">
        <Text>clear</Text>
      </ListRow>
      <ListRow padding="small">
        <Text>clear</Text>
      </ListRow>
    </List>
  </Arrange>
  ```

  ---

  ## Background Color

  ```tsx
  <List>
    <ListRow padding="small">Row</ListRow>
    <ListRow padding="small">Row</ListRow>
    <ListRow padding="small" backgroundColor="highlight">
      Row
    </ListRow>
    <ListRow padding="small" backgroundColor="offWhite">
      Row
    </ListRow>
  </List>
  ```

  ---

  ## Clickable List Items

  ### With `onClick`

  ```tsx
  <List columns={['1fr']}>
    <ListRow
      paddingX="medium"
      paddingY="small"
      onClick={() => console.log('clicked')}
    >
      <div>With onClick</div>
    </ListRow>
  </List>
  ```

  ### With `href`

  ```tsx
  <List columns={['1fr']}>
    <ListRow
      paddingX="medium"
      paddingY="small"
      htmlTag="a"
      href="https://www.loom.com"
    >
      <div>With href</div>
    </ListRow>
  </List>
  ```

  ---

  ## Examples

  ### Simple Settings List

  ```tsx
  <List columns={['1fr', 'auto']} gap="medium">
    <ListRow padding="small">
      <Text hasEllipsis>Use system audio</Text>
      <Switch />
    </ListRow>

    <ListRow padding="small">
      <Text hasEllipsis>Highlight mouse clicks {demoText.long}</Text>
      <Switch />
    </ListRow>

    <ListRow padding="small">
      <Text hasEllipsis>Recording countdown</Text>
      <Switch />
    </ListRow>
  </List>
  ```

  ---

  ### Data List

  ```tsx
  ;() => {
    const listItems = [
      { title: 'Ryozo', email: 'ryozo@email.com', role: 'Admin' },
      { title: 'Hikaru', email: 'hikaru@email.com', role: 'Admin' },
      { title: 'Yutsuko', email: 'yutsuko@email.com', role: 'Admin' },
    ]

    return (
      <List columns={['2fr', '1fr', '1fr']} gap="medium">
        {listItems.map((item, index) => (
          <ListRow key={index} paddingX="medium" paddingY="small">
            <Text>{item.title}</Text>
            <Text>{item.email}</Text>
            <Text>{item.role}</Text>
          </ListRow>
        ))}
      </List>
    )
  }
  ```

  ---

  ### With Ellipsis

  ```tsx
  <List columns={['4fr', '1fr']} gap="large">
    <ListRow paddingX="medium" paddingY="small">
      <div className="ellipsis">
        Ellipsis with utility class — {demoText.long}
      </div>
      <div>Content</div>
    </ListRow>

    <ListRow paddingX="medium" paddingY="small">
      <Text hasEllipsis>Ellipsis with Text component — {demoText.long}</Text>
      <div>Content</div>
    </ListRow>
  </List>
  ```

  ---

  # Props

  ## List

  | Name            | Type                               | Default    |
  | --------------- | ---------------------------------- | ---------- |
  | variant         | `'clear' \| 'border' \| 'stripe'`  | `'stripe'` |
  | htmlTag         | `unknown`                          | `'ul'`     |
  | columns         | `(string \| number)[]`             | —          |
  | gap             | `ResponsiveType<string \| number>` | —          |
  | backgroundColor | `string`                           | —          |
  | children        | `React.ReactNode`                  | —          |

  ---

  ## ListRow

  | Name            | Type                               | Default |
  | --------------- | ---------------------------------- | ------- |
  | htmlTag         | `unknown`                          | `'li'`  |
  | padding         | `ResponsiveType<string \| number>` | —       |
  | paddingTop      | `ResponsiveType<string \| number>` | —       |
  | paddingBottom   | `ResponsiveType<string \| number>` | —       |
  | paddingLeft     | `ResponsiveType<string \| number>` | —       |
  | paddingRight    | `ResponsiveType<string \| number>` | —       |
  | paddingY        | `ResponsiveType<string \| number>` | —       |
  | paddingX        | `ResponsiveType<string \| number>` | —       |
  | height          | `ResponsiveType<string \| number>` | —       |
  | minHeight       | `ResponsiveType<string \| number>` | —       |
  | maxHeight       | `ResponsiveType<string \| number>` | —       |
  | backgroundColor | `string`                           | —       |
  | className       | `string`                           | —       |
  | children        | `React.ReactNode`                  | —       |
  | onClick         | `React.ReactEventHandler`          | —       |
  | href            | `string`                           | —       |
  | role            | `string`                           | —       |

  ---

  # 13.Logo

  ## Usage Guidelines

  The `Logo` component displays Loom branding with flexible options for different use cases and contexts.

  ---

  ## Basic Import & Usage

  ```tsx
  import { Logo } from '@loomhq/lens'
  ;<Logo brand="product" maxWidth={13} />
  ```

  ---

  ## Key Props

  ### brand

  Choose the appropriate logo style:

  - `"product"` – Blue logo for in-app UI (recommended)
  - `"marketing"` – For marketing materials, external content, signup and login
  - `"attributed"` – When Atlassian attribution is required
  - `"ai"` – For AI-related features and content
  - `"apptile"` & `"loom"` – Legacy variants (being deprecated)

  ### variant

  Control which part of the logo to show:

  - `"combined"` – Full logo with symbol + wordmark (default)
  - `"symbol"` – Icon only
  - `"wordmark"` – Text only

  ### maxWidth

  Set maximum width in theme units (e.g., `13`, `6`).

  ---

  ## Best Practices

  - Use `brand="product"` for most in-app interfaces
  - Reserve `brand="marketing"` for external-facing content
  - Choose appropriate sizes with `maxWidth` to fit your layout
  - See New Brands for current recommended options

  ---

  # New Brands

  ```tsx
  <Arrange gap="xlarge" alignment="center">
    <Logo brand="product" maxWidth={13} symbolColor="blue" />
    <Logo brand="marketing" maxWidth={13} symbolColor="blue" />
    <Logo brand="attributed" maxWidth={13} symbolColor="blue" />
  </Arrange>
  ```

  > Note: The logos above preview our upcoming blue branding on our new variants. Once this color rollout is complete, or if you are included on the feature flag, you won't need to specify the `symbolColor` prop — simply use:
  >
  > `<Logo brand="product" | "marketing" | "attributed" />`

  ### Post Rollout / Feature Flag Enabled

  ```tsx
  <Arrange gap="xlarge" alignment="center">
    <Logo brand="product" maxWidth={13} />
    <Logo brand="marketing" maxWidth={13} />
    <Logo brand="attributed" maxWidth={13} />
  </Arrange>
  ```

  ---

  # Deprecated Brands

  ```tsx
  <Arrange gap="xlarge" alignment="center">
    <Logo brand="apptile" maxWidth={13} />
    <Logo brand="loom" maxWidth={13} />
    <Logo brand="ai" maxWidth={13} />
  </Arrange>
  ```

  > Note: Blurple Loom logo variants are being deprecated. Avoid building with these components. Coordinate via `#loom-design-cohesion` Slack channel for proper implementation.

  ---

  # New Variants

  ```tsx
  <Arrange gap="xlarge" alignment="center">
    <Logo variant="wordmark" brand="product" maxWidth={13} symbolColor="blue" />
    <Logo variant="symbol" brand="product" maxWidth={6} symbolColor="blue" />
  </Arrange>
  ```

  > After rollout, `symbolColor` will no longer be required.

  ### Post Rollout Implementation

  ```tsx
  <Arrange gap="xlarge" alignment="center">
    <Logo variant="wordmark" brand="product" maxWidth={13} />
    <Logo variant="symbol" brand="product" maxWidth={6} />
  </Arrange>
  ```

  ---

  # Deprecated Variants

  ```tsx
  <Arrange gap="xlarge" alignment="center">
    <Logo variant="symbol" maxWidth={8} brand="apptile" />
    <Logo variant="symbol" maxWidth={8} />
    <Logo variant="symbol" maxWidth={8} brand="ai" />
    <Logo variant="wordmark" brand="product" maxWidth={13} />
    <Logo variant="wordmark" maxWidth={13} brand="ai" />
  </Arrange>
  ```

  ---

  # Size

  ```tsx
  <Arrange gap="medium">
    <Logo variant="symbol" maxWidth={12} />
    <Logo variant="symbol" maxWidth={6} />
    <Logo variant="symbol" maxWidth={3} />
  </Arrange>
  ```

  ---

  # Custom ID

  > Note: This section currently only affects the AI symbol.

  When multiple elements on the same page reference `radialGradient` with the same id, later references may be invalidated. Assign a custom ID to resolve this.

  ```tsx
  <Logo maxWidth={6} variant="symbol" brand="ai" customId="aiPanelLogo" />
  ```

  ---

  # Custom Colors

  Symbol and wordmark colors can be assigned independently using `symbolColor` and `wordmarkColor`.

  ```tsx
  <Arrange gap="xlarge">
    <Logo
      maxWidth={12}
      symbolColor="body"
      wordmarkColor="orange"
      brand="product"
    />
    <Logo
      maxWidth={12}
      symbolColor="body"
      wordmarkColor="orange"
      brand="product"
      variant="wordmark"
    />
    <Logo
      maxWidth={12}
      symbolColor="body"
      wordmarkColor="orange"
      brand="attributed"
    />
  </Arrange>
  ```

  ---

  # Props

  | name          | type                                                                      | default      |
  | ------------- | ------------------------------------------------------------------------- | ------------ |
  | variant       | `'combined' \| 'symbol' \| 'wordmark'`                                    | `'combined'` |
  | wordmarkColor | `string`                                                                  | `'body'`     |
  | brand         | `'loom' \| 'ai' \| 'apptile' \| 'product' \| 'marketing' \| 'attributed'` | `'product'`  |
  | customId      | `string`                                                                  | `''`         |
  | maxWidth      | `number \| string`                                                        | —            |
  | symbolColor   | `string`                                                                  | —            |

  # 14.Menu

  ## Usage Guidelines

  Use `Menu` to build custom action and select menus.

  For common menu use cases, consider using `Dropdown` or `Select`.

  > The `icon` prop accepts a React icon component or an image URL / Data URL.

  ---

  ## Basic Usage

  ```tsx
  import { Menu, MenuItem } from '@loomhq/lens'
  ;<Menu maxWidth={24}>
    <MenuItem icon={<SvgDownload />}>Download</MenuItem>
    <MenuItem icon={<SvgArchive />}>Archive</MenuItem>
    <MenuItem icon={<SvgTrash />}>Delete</MenuItem>
  </Menu>
  ```

  ---

  # Actions Menu

  ```tsx
  <Menu maxWidth={24}>
    <MenuItem onClick={() => console.log('onClick Share')} icon={<SvgShare />}>
      Share
    </MenuItem>

    <MenuItem
      onClick={() => console.log('onClick Archive')}
      icon={<SvgArchive />}
    >
      Archive
    </MenuItem>

    <MenuItem
      onClick={() => console.log('onClick Delete')}
      icon={<SvgTrash />}
      isDisabled
    >
      Delete
    </MenuItem>

    <MenuItem
      onClick={() => console.log('onClick Record')}
      icon="https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png"
      isDisabled
    >
      Record
    </MenuItem>
  </Menu>
  ```

  ---

  # Select Menu

  ```tsx
  <Menu maxWidth={24}>
    <MenuItem isSelected>First</MenuItem>
    <MenuItem>Second</MenuItem>
    <MenuItem>Third</MenuItem>
    <MenuItem>Fourth</MenuItem>
  </Menu>
  ```

  ---

  # With Divider

  ```tsx
  <Menu maxWidth={24}>
    <MenuItem isSelected>First</MenuItem>
    <MenuItem>Second</MenuItem>
    <MenuItem>Third</MenuItem>
    <MenuItem hasDivider>Fourth</MenuItem>
  </Menu>
  ```

  ---

  # Custom Content

  ```tsx
  ;() => {
    const options = [
      { title: 'First', description: demoText.medium, isHighlighted: true },
      { title: 'Second', description: demoText.long, isSelected: true },
      { title: 'Third', description: demoText.short },
    ]

    return (
      <Menu maxWidth={24}>
        {options.map((option, index) => (
          <MenuItem
            key={index}
            isHighlighted={option.isHighlighted}
            isSelected={option.isSelected}
          >
            <Container paddingY="small">
              <Arrange gap="small">
                <Avatar letter={option.title.charAt(0)} />
                <Container minWidth={0}>
                  <Text hasEllipsis>{option.title}</Text>
                  <Text size="small" color="bodyDimmed" hasEllipsis>
                    {option.description}
                  </Text>
                </Container>
              </Arrange>
            </Container>
          </MenuItem>
        ))}
      </Menu>
    )
  }
  ```

  ---

  # With Popover and Downshift

  Combine with `Popover` to position `Menu` as an overlay.  
  Use `Downshift` to manage state, keyboard navigation, and selection.

  ```tsx
  ;() => {
    const items = [
      { value: 'Saturn' },
      { value: 'Neptune' },
      { value: 'Jupiter' },
      { value: 'Earth', isDisabled: true },
      { value: 'Mars' },
      { value: 'Uranus' },
      { value: 'Pluto' },
      { value: 'Venus' },
      { value: 'Mercury' },
    ]

    return (
      <Downshift
        itemToString={(item) => (item ? item.value : '')}
        onChange={(selection) =>
          console.log(selection ? selection.value : 'Selection Cleared')
        }
      >
        {({
          getToggleButtonProps,
          getItemProps,
          getMenuProps,
          isOpen,
          highlightedIndex,
          selectedItem,
          getRootProps,
        }) => (
          <Popover
            isOpen={isOpen}
            placement="bottomCenter"
            content={
              <Menu
                minWidth={20}
                maxWidth={30}
                maxHeight={30}
                downshiftMenuProps={getMenuProps}
              >
                {items.map((item, index) => (
                  <MenuItem
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      disabled: item.isDisabled,
                    })}
                    isHighlighted={highlightedIndex === index}
                    isDisabled={item.isDisabled}
                  >
                    {item.value}
                  </MenuItem>
                ))}
              </Menu>
            }
          >
            <div {...getRootProps({}, { suppressRefError: true })}>
              <TextButton
                iconPosition="right"
                icon={<SvgChevronDown />}
                {...getToggleButtonProps()}
              >
                {selectedItem ? selectedItem.value : 'Select an option'}
              </TextButton>
            </div>
          </Popover>
        )}
      </Downshift>
    )
  }
  ```

  ---

  # Props

  ## Menu

  | name               | type                 | default      |
  | ------------------ | -------------------- | ------------ |
  | downshiftMenuProps | `any`                | `() => null` |
  | isDisabled         | `boolean`            | —            |
  | position           | `string`             | —            |
  | zIndex             | `number`             | —            |
  | minWidth           | `number \| string`   | —            |
  | maxWidth           | `number \| string`   | —            |
  | maxHeight          | `number \| string`   | —            |
  | children           | `React.ReactNode`    | —            |
  | search             | `React.ReactElement` | —            |
  | role               | `React.AriaRole`     | —            |

  ---

  ## MenuItem

  | name             | type                        | default |
  | ---------------- | --------------------------- | ------- |
  | showDeselectIcon | `boolean`                   | `false` |
  | isDisabled       | `boolean`                   | —       |
  | isHighlighted    | `boolean`                   | —       |
  | keyboardMove     | `boolean`                   | —       |
  | isSelected       | `boolean`                   | —       |
  | icon             | `React.ReactNode \| string` | —       |
  | hasDivider       | `boolean`                   | —       |
  | children         | `React.ReactNode`           | —       |
  | columns          | `string`                    | —       |
  | hidden           | `boolean`                   | —       |
  | menuItemRole     | `React.AriaRole`            | —       |

  # 15.Modal

  ## Usage Guidelines

  ---

  ## Basic Usage

  ```tsx
  import { Modal } from '@loomhq/lens'
  ;<Modal title="Title">Content</Modal>
  ```

  ---

  ## Accessibility

  Please verify that your implementation supports the following accessibility features and that no modifications negate them.

  ## Modal Should:

  - Be focusable and togglable (open/close) by every input device (mouse, keyboard, switch, etc.)
  - Have a clear trigger to open (e.g. `<Button type="button" />`)
  - Have a clear trigger to close (X button is provided by default)
  - Prevent background body scroll when open
  - Default `ariaModal` is `true`, limiting navigation to modal content

  > If you set `ariaModal={false}`, understand the accessibility implications.

  ---

  ## Keyboard Navigability

  When Modal is open:

  - **Autofocus** → Focus shifts to first focusable element (usually close button)
  - **Tab / Shift + Tab** → Navigate within modal
  - **Esc** → Close modal
  - **Trap Focus** → Focus loops within modal
  - **Return Focus** → Focus returns to trigger element on close

  ---

  ## Modal with All Elements

  ```tsx
  ;() => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(!isOpen)} variant="primary">
          Open Modal
        </Button>

        <Modal
          mainButton={<Button variant="primary">Confirm</Button>}
          secondaryButton={<Button>Cancel</Button>}
          alternativeButton={<TextButton icon={<SvgAdd />}>Add</TextButton>}
          title={demoText.short}
          isOpen={isOpen}
          onCloseClick={() => setIsOpen(!isOpen)}
        >
          {demoText.medium}
        </Modal>
      </>
    )
  }
  ```

  ---

  ## With Dividers

  ```tsx
  <Modal
    hasDividers
    mainButton={<Button variant="primary">Confirm</Button>}
    secondaryButton={<Button>Cancel</Button>}
    alternativeButton={<TextButton icon={<SvgAdd />}>Add</TextButton>}
    title={demoText.short}
    isOpen={isOpen}
    onCloseClick={() => setIsOpen(!isOpen)}
  >
    {demoText.alphabet.map((letter, index) => (
      <Container
        paddingTop="small"
        paddingBottom="small"
        borderSide="bottom"
        key={index}
      >
        {letter}
      </Container>
    ))}
  </Modal>
  ```

  ---

  ## With Custom Max Height

  ```tsx
  <Modal
    maxHeight="80vh"
    hasDividers
    mainButton={<Button variant="primary">Confirm</Button>}
    secondaryButton={<Button>Cancel</Button>}
    alternativeButton={<TextButton icon={<SvgAdd />}>Add</TextButton>}
    title={demoText.short}
    isOpen={isOpen}
    onCloseClick={() => setIsOpen(!isOpen)}
  >
    {...content}
  </Modal>
  ```

  ---

  ## Bottom Alignment (Best for Mobile)

  ```tsx
  <Modal
    placement="bottom"
    maxWidth="unset"
    isOpen={isOpen}
    onCloseClick={() => setIsOpen(!isOpen)}
  >
    <Container maxWidth={60} width="100%" marginX="auto">
      {...content}
    </Container>
  </Modal>
  ```

  ---

  ## Custom Modal with Bottom Drawer (Scrollable Section)

  ```tsx
  <Backdrop isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
    <ModalCard
      onCloseClick={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
      maxWidth={72}
    >
      <Arrange rows={['1fr', 'auto']}>
        <Container overflow="auto" maxHeight="100%" padding="xlarge">
          <Text size="large">{demoText.veryLong}</Text>
        </Container>

        <Container backgroundColor="highlight" padding="xlarge">
          {demoText.medium}
        </Container>
      </Arrange>
    </ModalCard>
  </Backdrop>
  ```

  ---

  ## Modal with No Close X Button (Use Sparingly)

  ⚠️ Only for mandatory blocking flows.

  ```tsx
  <ModalCard
    onCloseClick={() => setIsOpen(!isOpen)}
    isOpen={isOpen}
    maxWidth={72}
    removeClose={true}
  >
    <Container padding="xlarge">
      <Text size="large">Mandatory blocking flow content.</Text>
    </Container>

    <Container backgroundColor="highlight" padding="xlarge">
      {showLoader && <Loader />}
      {!showLoader && (
        <Button variant="primary" width="full" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      )}
    </Container>
  </ModalCard>
  ```

  > You MUST always provide a way for users to proceed or close the modal.

  ---

  ## Controlling Initial Focus

  By default, focus moves to the first focusable element.

  ## Disable Auto Focus (Use Sparingly)

  ```tsx
  <Modal
    initialFocus={false}
    title="Seasonal Launch"
    isOpen={isOpen}
    onCloseClick={() => setIsOpen(!isOpen)}
  >
    <Text>Modal opens without auto focusing the close button.</Text>
  </Modal>
  ```

  ---

  ## Focus Specific Element

  ```tsx
  const inputRef = React.useRef(null)

  <Modal
    initialFocus={() => inputRef.current}
    title="Enter your information"
    isOpen={isOpen}
    onCloseClick={() => setIsOpen(!isOpen)}
  >
    <TextInput
      ref={inputRef}
      placeholder="Start typing here..."
      label="Name"
    />
  </Modal>
  ```

  ---

  ## Props

  ## Modal

  | Name         | Type                                                                                                                             | Default     |
  | ------------ | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
  | maxHeight    | `string`                                                                                                                         | `'70vh'`    |
  | maxWidth     | `number \| string`                                                                                                               | `60`        |
  | placement    | `string`                                                                                                                         | `'center'`  |
  | zIndex       | `number`                                                                                                                         | `1000`      |
  | ariaModal    | `boolean`                                                                                                                        | `true`      |
  | initialFocus | `HTMLElement \| SVGElement \| string \| (() => HTMLElement \| SVGElement \| string \| false \| undefined) \| false \| undefined` | `undefined` |

  ---

  ## ModalCard

  | Name          | Type                                                                                                                             | Default     |
  | ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
  | maxWidth      | `number \| string`                                                                                                               | `60`        |
  | maxHeight     | `string`                                                                                                                         | `'70vh'`    |
  | placement     | `string`                                                                                                                         | `'center'`  |
  | closeOnEscape | `boolean`                                                                                                                        | `true`      |
  | initialFocus  | `HTMLElement \| SVGElement \| string \| (() => HTMLElement \| SVGElement \| string \| false \| undefined) \| false \| undefined` | `undefined` |

  # NotificationBar

  # Pill

  # Radio

  # Select

  # Skeleton

  # Switch

  # Tabs

  # Text

  # Textarea

  # TextButton

  # TextInput

  # Typeahead

  # Toast

  # Tooltip

  # Loaders

  ## Loader

  # LogoLoader

  # EllipsesLoader

  # WaveformLoader

  ## Layout

  # Align

  # Arrange

  # Backdrop

  # Container

  # ErrorContainer

  # Popover

  # Spacer

  # Split
