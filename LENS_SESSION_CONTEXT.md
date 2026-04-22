# Lens Session Context (KB-FIRST)

This file is generated to preload the AI with the correct Lens workflow.

## KB-FIRST LOOKUP ORDER (MANDATORY)

1. .lens-knowledge-base/QUICK-REFERENCE.md
2. .lens-knowledge-base/COMPONENT-INDEX.md
3. .lens-knowledge-base/components/<Component>.md
4. .lens-knowledge-base/tokens/_tokens-index.md → then the correct token file
5. .lens-knowledge-base/exports-verified.json
6. Only then: https://lens.loom.dev

---

## QUICK REFERENCE

# Lens Quick Reference — @loomhq/lens@12.14.0

## Setup (REQUIRED in main.tsx)
```tsx
import { getThemeStylesString, getAllCssVarsString } from '@loomhq/lens'
const style = document.createElement('style');
style.innerHTML = getThemeStylesString() + getAllCssVarsString();
document.head.appendChild(style);
```
## Layout Components
|Component |	Purpose |	Replaces |
|----------|--------------|------------|
|<Container>|	Container with padding/border/color/radius|	<div>|
|<Split>|	Flexbox layout|	display:flex divs|
|<SplitSection>|	Flex item with grow/shrink/basis|	flex children|
|<Arrange>|	CSS Grid layout|	display:grid| divs|
|<Align>|	Position content within container|	positioning CSS|
|<Spacer>|	Spacing between elements|	margin hacks|
|<Backdrop>|	Full-screen overlay|	overlay divs|
## Typography — ONE component: Text
```tsx
<Text size="heading-lg" htmlTag="h1" variant="mainTitle">Page Title</Text>
<Text size="heading-md" htmlTag="h2" variant="title">Section</Text>
<Text size="body-md" htmlTag="p" variant="body">Paragraph</Text>
<Text size="body-sm" color="bodyDimmed">Secondary</Text>
<Text isInline>Inline span</Text>
<Text fontWeight="bold">Bold</Text>
<Text fontFamily="mono">Code</Text>
```
Sizes: `body-sm` | `body-md` | `body-lg` | `heading-sm` | `heading-md` | `heading-lg`

## Spacing Tokens

|Token|	px|	Use|
|-----|-------|------|
|xsmall|	4|	Tight gaps|
small|	8|	Default gaps|
|medium|	16|	Section padding|
|large|	24|	Card padding|
|xlarge|	40|	Page spacing|
|xxlarge|	64|	Major divisions|

Numbers multiply by 8: `padding={3}` = 24px

## Button
Variants: `neutral` | `neutralSecondary` | `primary` | `secondary` | `record` | `upgrade` | `danger` | `ai`
Sizes: `small` | `medium` | `large`

```tsx

<Button variant="primary" iconBefore={<SvgAdd />}>Add</Button>
<Button isDisabled>Disabled</Button>
<Button hasLoader>Loading</Button>

```
*Icons (683)*
```tsx

import { Icon } from '@loomhq/lens'
import SvgBell from '@loomhq/lens/icons/bell'
<Icon icon={<SvgBell />} />
```
## Key API Patterns
- **Booleans:** isDisabled, hasLoader (NOT disabled, loading)
- **Element:** htmlTag="a" (NOT as="a")
- **Refs:** refHandler={(r) => ref.current = r} (NOT ref={ref})
- **Icons:** iconBefore / iconAfter (NOT leftIcon / rightIcon)
``
## Responsive
```tsx
<Arrange gap={{ default: 'small', medium: 'large' }} />
```
**Breakpoints:** `xsmall=496px` `small=768px` `medium=1024px` `large=1200px`


---

## COMPONENT INDEX

# Lens Component Index

## Layout
- [Align](components/Align.md) — Position content within a container
- [Arrange](components/Arrange.md) — CSS Grid layout
- [Backdrop](components/Backdrop.md) — Full-screen overlay
- [Container](components/Container.md) — Generic container
- [ErrorContainer](components/ErrorContainer.md) — Inline error wrapper
- [Popover](components/Popover.md) — Floating content
- [Spacer](components/Spacer.md) — Spacing between elements
- [Split](components/Split.md) — Flexbox layout

## Typography
- [Text](components/Text.md) — ALL text (headings, body, inline)

## Interactive
- [Button](components/Button.md) — Action button
- [Checkbox](components/Checkbox.md) — Checkbox input
- [ColorPicker](components/ColorPicker.md) — Color selection
- [Dropdown](components/Dropdown.md) — Dropdown menu
- [IconButton](components/IconButton.md) — Icon-only button
- [Link](components/Link.md) — Navigation link
- [Menu](components/Menu.md) — Menu container
- [Modal](components/Modal.md) — Dialog overlay
- [Radio](components/Radio.md) — Radio input
- [Select](components/Select.md) — Dropdown selection
- [Switch](components/Switch.md) — Toggle switch
- [Tabs](components/Tabs.md) — Tab navigation
- [TextButton](components/TextButton.md) — Text-styled button
- [TextInput](components/TextInput.md) — Text input
- [Textarea](components/Textarea.md) — Multi-line input
- [Typeahead](components/Typeahead.md) — Autocomplete

## Data Display
- [Avatar](components/Avatar.md) — User avatar
- [Icon](components/Icon.md) — Icon wrapper
- [Illustration](components/Illustration.md) — Pre-built illustrations
- [Indicator](components/Indicator.md) — Status dot
- [List](components/List.md) — List container
- [Logo](components/Logo.md) — Loom logo
- [Pill](components/Pill.md) — Badge/tag
- [Skeleton](components/Skeleton.md) — Loading placeholder

## Feedback
- [NotificationBar](components/NotificationBar.md) — Banner
- [Toast](components/Toast.md) — Temporary notification
- [Tooltip](components/Tooltip.md) — Hover info

## Form
- [FormField](components/FormField.md) — Field wrapper with label/error

## Loading
- [Loader](components/Loader.md) — Spinner
- [LogoLoader](components/LogoLoader.md) — Logo animation
- [EllipsesLoader](components/EllipsesLoader.md) — Dots animation
- [WaveformLoader](components/WaveformLoader.md) — Waveform animation

## Other Documentation
- [Styles & Tokens](tokens/styles-full.md) — Colors, Typography, Spacing, Shadows, Radii
- [Icons (683)](../icons-inventory.md) — Full icon list
- [Forms Pattern](patterns/forms.md) — Form design patterns
- [Error Pattern](patterns/errors.md) — Error handling patterns
- [Disabled Pattern](patterns/disabled-styles.md) — Disabled state patterns


---

## TOKENS INDEX

# Design System Tokens Index

**Agent Instructions:** Do not guess token values. Use this index to find the exact file containing the design system tokens you need.

* **Need colors?** Read `colors.md` for Light/Dark Theme, Greyscale, Base, and Semantic colors.
* **Need text styling?** Read `typography.md` for Atlassian Sans configurations, sizes, and weights.
* **Need spacing/gaps?** Read `spacing.md` for the 8px base unit scale (xsmall to xxlarge).
* **Need borders, corners, or depth?** Read `shape-and-elevation.md` for radius and shadow tokens.
* **Need to apply styles?** Read `css-utilities.md` for all pre-defined Lens CSS utility classes (e.g., `c:red`, `p:medium`, `flex`).
* **Need raw CSS variables?** Read `css-variables.md`.
* **Need responsive behavior?** Read `responsive-layout.md` for breakpoint prefixes, Split/Arrange layouts, and hooks.


---

## VERIFIED EXPORTS (JSON)

```json
{
  "_generated": "2026-03-05T11:56:50.117Z",
  "_lensVersion": "12.14.0",
  "_note": "Verified via require(@loomhq/lens) runtime inspection",
  "layoutComponents": [
    "Align",
    "Arrange",
    "Backdrop",
    "Container",
    "Distribute",
    "Layout",
    "Spacer",
    "Split",
    "SplitSection"
  ],
  "typographyComponents": [
    "Text"
  ],
  "interactiveComponents": [
    "Button",
    "Checkbox",
    "ColorPicker",
    "Dropdown",
    "IconButton",
    "IconButtonBox",
    "Link",
    "Menu",
    "MenuItem",
    "Modal",
    "ModalCard",
    "Radio",
    "Select",
    "Switch",
    "Tab",
    "Tabs",
    "TextButton",
    "TextInput",
    "Textarea",
    "Typeahead"
  ],
  "dataDisplayComponents": [
    "Avatar",
    "Icon",
    "Indicator",
    "List",
    "ListRow",
    "Logo",
    "Pill",
    "SkeletonContainer",
    "SkeletonText"
  ],
  "feedbackComponents": [
    "ErrorContainer",
    "NotificationBar",
    "Popover",
    "Toast",
    "Tooltip",
    "TooltipBox"
  ],
  "formComponents": [
    "FormField"
  ],
  "loadingComponents": [
    "EllipsesLoader",
    "Loader",
    "LogoLoader",
    "WaveformLoader"
  ],
  "utilityComponents": [
    "BaseStyles",
    "Media"
  ],
  "illustrations": [
    "Illustration",
    "IllustrationAccountsAndBilling",
    "IllustrationArchived",
    "IllustrationAskForMore",
    "IllustrationBusinessPlan",
    "IllustrationChromeNotificationsEmptyState",
    "IllustrationCollaborateWithTeammates",
    "IllustrationComments",
    "IllustrationCommunity",
    "IllustrationCommunityAlt",
    "IllustrationContentLimit",
    "IllustrationCustomBranding",
    "IllustrationDesktopAppAndChromeExtension",
    "IllustrationDeviceCompatibility",
    "IllustrationDowngrade",
    "IllustrationEmbraceTheWeird",
    "IllustrationEnterprisePlan",
    "IllustrationFaqAndSecurity",
    "IllustrationFiveMinuteLimit",
    "IllustrationGettingStarted",
    "IllustrationGrowthThroughEmpathy",
    "IllustrationHealthPlans",
    "IllustrationHelpIos",
    "IllustrationHowToUseLoom",
    "IllustrationInvite",
    "IllustrationInviteMembers",
    "IllustrationLeadWithTransparency",
    "IllustrationLearningAndDevelopment",
    "IllustrationLoomPlans",
    "IllustrationMyVideosEmptyStateMobile",
    "IllustrationOptionGrants",
    "IllustrationParentalLeave",
    "IllustrationPto",
    "IllustrationRecentsEmptyStateMobile",
    "IllustrationRecord",
    "IllustrationRemoteFirst",
    "IllustrationRoadmap",
    "IllustrationScreenshot",
    "IllustrationShare",
    "IllustrationShareWithYourTeam",
    "IllustrationStarred",
    "IllustrationStarterPlusPlan",
    "IllustrationStrongUploadSpeed",
    "IllustrationTroubleshooting",
    "IllustrationUpgrade",
    "IllustrationUploadDragAndDrop",
    "IllustrationUseCases",
    "IllustrationUser",
    "IllustrationWellness"
  ],
  "hooks": [
    "useFocusedElement",
    "useMedia",
    "useOnClickOutside",
    "usePreventScroll",
    "usePushPageDown"
  ],
  "utilities": [
    "accessibilityRules",
    "alignSelfRules",
    "alphaFunction",
    "arrayToBreakpoints",
    "backgroundColorRules",
    "borderRules",
    "breakpoints",
    "buildGlobalStylesheet",
    "colorRules",
    "colorsNames",
    "cssUtilities",
    "darken",
    "displayRules",
    "ellipsisRules",
    "flexDirectionRules",
    "flexItemRules",
    "flexWrapRules",
    "fontSettingVariables",
    "fontSettings",
    "fontWeightRules",
    "fontWeightVariables",
    "fontWeights",
    "formFieldVariables",
    "getAlignmentStyles",
    "getAllCssVarsString",
    "getColorAlpha",
    "getColorScale",
    "getColorValue",
    "getColorsCssVarsObject",
    "getCssVarsFromObject",
    "getFocusRing",
    "getFontSetting",
    "getFontWeight",
    "getListContainer",
    "getMediaCss",
    "getOffsetFocusRing",
    "getPlacement",
    "getRadius",
    "getResponsiveBoolean",
    "getResponsiveColumns",
    "getResponsiveGridSections",
    "getResponsiveNumber",
    "getResponsiveOneOf",
    "getShadow",
    "getSize",
    "getSizeValue",
    "getSizingCssVarsDeclarations",
    "getSizingVariablesCssVarsObject",
    "getSpacingSelectors",
    "getTextSize",
    "getThemeStyles",
    "getThemeStylesString",
    "getVariablesCssVarsObject",
    "gradientVariables",
    "gradients",
    "growRules",
    "heightRules",
    "hslaBaseColors",
    "hslaColors",
    "hslaGreys",
    "lighten",
    "marginCrossRules",
    "marginRules",
    "minWidthRules",
    "objectToBreakpoints",
    "objectToRuleset",
    "overflowRules",
    "paddingCrossRules",
    "paddingRules",
    "pascalCaseToKebabCase",
    "positionRules",
    "radii",
    "radiiRules",
    "radiusVariables",
    "saturate",
    "shadowRules",
    "shadowVariables",
    "shadows",
    "shortBreakpoints",
    "shrinkRules",
    "sidePositionRules",
    "spaceVariables",
    "spaces",
    "textAlignmentRules",
    "textSizeRules",
    "textSizeVariables",
    "textSizes",
    "textVariantRules",
    "themeColors",
    "u",
    "unit",
    "unitVariables",
    "useFocusedElement",
    "useMedia",
    "useOnClickOutside",
    "usePreventScroll",
    "usePushPageDown",
    "widthRules"
  ],
  "allComponentNames": [
    "Align",
    "Arrange",
    "Avatar",
    "Backdrop",
    "BaseStyles",
    "Button",
    "Checkbox",
    "ColorPicker",
    "Container",
    "Distribute",
    "Dropdown",
    "EllipsesLoader",
    "ErrorContainer",
    "FormField",
    "Icon",
    "IconButton",
    "IconButtonBox",
    "Illustration",
    "IllustrationAccountsAndBilling",
    "IllustrationArchived",
    "IllustrationAskForMore",
    "IllustrationBusinessPlan",
    "IllustrationChromeNotificationsEmptyState",
    "IllustrationCollaborateWithTeammates",
    "IllustrationComments",
    "IllustrationCommunity",
    "IllustrationCommunityAlt",
    "IllustrationContentLimit",
    "IllustrationCustomBranding",
    "IllustrationDesktopAppAndChromeExtension",
    "IllustrationDeviceCompatibility",
    "IllustrationDowngrade",
    "IllustrationEmbraceTheWeird",
    "IllustrationEnterprisePlan",
    "IllustrationFaqAndSecurity",
    "IllustrationFiveMinuteLimit",
    "IllustrationGettingStarted",
    "IllustrationGrowthThroughEmpathy",
    "IllustrationHealthPlans",
    "IllustrationHelpIos",
    "IllustrationHowToUseLoom",
    "IllustrationInvite",
    "IllustrationInviteMembers",
    "IllustrationLeadWithTransparency",
    "IllustrationLearningAndDevelopment",
    "IllustrationLoomPlans",
    "IllustrationMyVideosEmptyStateMobile",
    "IllustrationOptionGrants",
    "IllustrationParentalLeave",
    "IllustrationPto",
    "IllustrationRecentsEmptyStateMobile",
    "IllustrationRecord",
    "IllustrationRemoteFirst",
    "IllustrationRoadmap",
    "IllustrationScreenshot",
    "IllustrationShare",
    "IllustrationShareWithYourTeam",
    "IllustrationStarred",
    "IllustrationStarterPlusPlan",
    "IllustrationStrongUploadSpeed",
    "IllustrationTroubleshooting",
    "IllustrationUpgrade",
    "IllustrationUploadDragAndDrop",
    "IllustrationUseCases",
    "IllustrationUser",
    "IllustrationWellness",
    "IllutrationFoldersEmptyStateMobile",
    "Indicator",
    "JustifyContentRules",
    "Layout",
    "Link",
    "List",
    "ListRow",
    "Loader",
    "Logo",
    "LogoLoader",
    "Media",
    "Menu",
    "MenuItem",
    "Modal",
    "ModalCard",
    "NotificationBar",
    "Pill",
    "Popover",
    "Radio",
    "Select",
    "SkeletonContainer",
    "SkeletonText",
    "Spacer",
    "Split",
    "SplitSection",
    "Switch",
    "Tab",
    "Tabs",
    "Text",
    "TextButton",
    "TextInput",
    "Textarea",
    "Toast",
    "Tooltip",
    "TooltipBox",
    "Typeahead",
    "WaveformLoader"
  ]
}
```
