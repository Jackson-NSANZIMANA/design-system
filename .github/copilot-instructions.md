# GitHub Copilot Instructions

## Design System: @loomhq/lens@12.14.0

When generating code:
- Import UI components from `@loomhq/lens` only
- Use `<Container>` instead of `<div>` (there is no Box component)
- Use `<Split>` instead of flex divs (there is no Flex component)
- Use `<Arrange>` for grids (there is no Grid component)
- Use `<Text>` for ALL typography including headings (no Heading component)
- Use `<Text size="heading-lg" htmlTag="h1">` for page titles
- Boolean props: `isDisabled` not `disabled`, `hasLoader` not `loading`
- Element override: `htmlTag="a"` not `as="a"`
- Button icons: `iconBefore`/`iconAfter` not `leftIcon`/`rightIcon`
- Sizes: `"small"/"medium"/"large"` not `"sm"/"md"/"lg"`
- Spacing: `"xsmall"/"small"/"medium"/"large"/"xlarge"/"xxlarge"` tokens
- Icons: `<Icon icon={<SvgName />} />` with Svg prefix
- Never suggest CSS files, styled-components, Tailwind, or other UI libs
