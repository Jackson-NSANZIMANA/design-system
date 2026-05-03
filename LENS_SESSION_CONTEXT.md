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

---
file: QUICK-REFERENCE.md
layer: quick-syntax
answers: "Common syntax patterns at a glance"
load-when:
  - Recalling API patterns quickly
do-not-load-when:
  - Needing full component API (use components/[Name].md)
last-validated: 2026-04-29
---

# Lens Quick Reference — @loomhq/lens@12.18.0

## Setup (REQUIRED in main.tsx)
```tsx
import { getThemeStylesString, getAllCssVarsString } from '@loomhq/lens'
const style = document.createElement('style');
style.innerHTML = getThemeStylesString() + getAllCssVarsString();
document.head.appendChild(style);
```
## Layout Components
| Component | Purpose | Replaces |
| --------- | ------- | -------- |
| `<Container>` | Container with padding/border/color/radius | `<div>` |
| `<Split>` | Flexbox layout | display:flex divs |
| `<SplitSection>` | Flex item with grow/shrink/basis | flex children |
| `<Arrange>` | CSS Grid layout | display:grid| divs |
| `<Align>` | Position content within container | positioning CSS |
| `<Spacer>` | Spacing between elements | margin hacks |
| `<Backdrop>` | Full-screen overlay | overlay divs |
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

| Token | px | Use |
| ----- | -- | --- |
| xsmall | 4 | Tight gaps |
| small | 8 | Default gaps |
| medium | 16 | Section padding |
| large | 24 | Card padding |
| xlarge | 40 | Page spacing |
| xxlarge | 64 | Major divisions |

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
## Responsive
```tsx
<Arrange gap={{ default: 'small', medium: 'large' }} />
```
**Breakpoints:** `xsmall=496px` `small=768px` `medium=1024px` `large=1200px`


---

## COMPONENT INDEX

---
file: COMPONENT-INDEX.md
layer: inventory
answers: "Does Lens have a component for X? What is it called?"
load-when:
  - Finding a component for a UI need
do-not-load-when:
  - You already know the component name (go to components/[Name].md)
last-validated: 2026-04-29
---

# Lens Component Index

## Foundation

- [BaseStyles](components/BaseStyles.md) — Global base styles / baseline

## Layout

- [Align](components/Align.md) — Position content within a container
- [Arrange](components/Arrange.md) — CSS Grid layout
- [Backdrop](components/Backdrop.md) — Full-screen overlay
- [Container](components/Container.md) — Generic container
- [Distribute](components/Distribute.md) — Distribution layout
- [Layout](components/Layout.md) — Page layout composition
- [Spacer](components/Spacer.md) — Spacing between elements
- [Split](components/Split.md) — Flexbox layout
- [SplitSection](components/SplitSection.md) — Flex item section

## Typography

- [Text](components/Text.md) — ALL text (headings, body, inline)

## Interactive

- [Button](components/Button.md) — Action button
- [Checkbox](components/Checkbox.md) — Checkbox input
- [ColorPicker](components/ColorPicker.md) — Color selection
- [Dropdown](components/Dropdown.md) — Dropdown menu
- [IconButton](components/IconButton.md) — Icon-only button
- [IconButtonBox](components/IconButtonBox.md) — Icon button variant
- [Link](components/Link.md) — Navigation link
- [Menu](components/Menu.md) — Menu container
- [MenuItem](components/MenuItem.md) — Menu item
- [Modal](components/Modal.md) — Dialog overlay
- [ModalCard](components/ModalCard.md) — Modal card layout
- [Radio](components/Radio.md) — Radio input
- [Select](components/Select.md) — Dropdown selection
- [Switch](components/Switch.md) — Toggle switch
- [Tabs](components/Tabs.md) — Tab navigation
- [Tab](components/Tab.md) — Individual tab item (legacy export)
- [TextButton](components/TextButton.md) — Text-styled button
- [TextInput](components/TextInput.md) — Text input
- [Textarea](components/Textarea.md) — Multi-line input
- [Typeahead](components/Typeahead.md) — Autocomplete

## Data Display

- [Avatar](components/Avatar.md) — User avatar
- [Icon](components/Icon.md) — Icon wrapper
- [Illustration](components/Illustration.md) — Pre-built illustrations
- [Media](components/Media.md) — Media wrapper (image/video)
- [Indicator](components/Indicator.md) — Status dot
- [List](components/List.md) — List container
- [ListRow](components/ListRow.md) — List row item
- [Logo](components/Logo.md) — Loom logo
- [Pill](components/Pill.md) — Badge/tag
- [SkeletonContainer](components/SkeletonContainer.md) — Skeleton wrapper
- [SkeletonText](components/SkeletonText.md) — Skeleton text line


## Feedback

- [ErrorContainer](components/ErrorContainer.md) — Inline error wrapper
- [NotificationBar](components/NotificationBar.md) — Banner
- [Popover](components/Popover.md) — Floating content
- [Toast](components/Toast.md) — Temporary notification
- [Tooltip](components/Tooltip.md) — Hover info
- [TooltipBox](components/TooltipBox.md) — Tooltip container

## Form

- [FormField](components/FormField.md) — Field wrapper with label/error

## Loading

- [Loader](components/Loader.md) — Spinner
- [LogoLoader](components/LogoLoader.md) — Logo animation
- [EllipsesLoader](components/EllipsesLoader.md) — Dots animation
- [WaveformLoader](components/WaveformLoader.md) — Waveform animation

## Other Documentation

- [Styles & Tokens](tokens/_tokens-index.md) — Colors, Typography, Spacing, Shadows, Radii
- [Icons (683)](icons-inventory.md) — Full icon list
- [Forms Pattern](patterns/forms.md) — Form design patterns
- [Error Pattern](patterns/errors.md) — Error handling patterns
- [Disabled Pattern](patterns/disabled-styles.md) — Disabled state patterns
- [Master Reference](MASTER-REFERENCE.md) — Full exports and API inventory


---

## TOKENS INDEX

# Design System Tokens Index

> ## ⚠️ Agent Instructions — Read This First
>
> Use this index to navigate to exactly the file you need.
> Read ONLY the specific file that answers your question.
>
> **⛔ NEVER read these files for implementation:**
> - `../reference/styles-full.md` — 1746-line combined dump, wastes context budget
> - `../reference/components-full.md` — 7000-line combined dump, wastes context budget
>
> **If a code example in any token file conflicts with the agentic rules,
> the agentic rules take precedence.**

---

## Find Your File

**Need colors?** → `colors.md`
- Light/Dark theme semantic colors, Greyscale, Base colors, Gradients
- ⚠️ Read the "How To Apply Colors" section before using any token

**Need text styling?** → `typography.md`
- Font sizes, weights, line heights, semantic variants
- ⚠️ Use NEW names only: `body-sm` | `body-md` | `body-lg` | `heading-sm` | `heading-md` | `heading-lg`
- ⚠️ NEVER use deprecated names: `small` | `medium` | `large` | `xlarge` | `xxlarge` | `xxxlarge`

**Need spacing or gaps?** → `spacing.md`
- 8px base unit scale: xsmall (4px) → xxlarge (64px)
- ⚠️ Code examples use `style={{}}` — demonstration only, never copy this pattern

**Need shadows or radius?** → `shape-and-elevation.md`
- Shadow: small / medium / large
- Radius: numeric (50–300) AND semantic (medium, large, xlarge, round, full, none)
- Both numeric and semantic names are valid

**Need className values?** → `css-utilities.md`
- All Lens CSS utility classes
- ⚠️ Read the deprecation header before use
- ⚠️ Deprecated: `text:small/medium/large/xlarge/xxlarge/xxxlarge`
- ⚠️ Current: `text:body-sm/md/lg` | `text:heading-sm/md/lg`

**Need CSS variables** → `css-variables.md`
- All `--lns-*` custom property names
- ⚠️ Contains a typo: `---lns-fontSize-xxxlarge` (three dashes) — do not copy, use `--lns-fontSize-heading-lg`
- ⚠️ Lists deprecated variable names — always use current names (table in that file)
- ⚠️ Gradient variables exist but have NO utility class — use a Lens prop that accepts raw CSS strings (e.g. `Container backgroundImage="var(--lns-gradient-...)"`)

**Need responsive behavior?** → `responsive-layout.md`
- Breakpoint prefixes: `xs-` | `sm-` | `md-` | `lg-`
- Algorithmic layouts with Arrange and Split
- ⚠️ `<DemoBox>` in examples does NOT exist in `@loomhq/lens` — replace with `<Container>`
- ⚠️ `sizeMinMax` examples use deprecated names — use `['body-md', 'heading-sm']` not `['medium', 'xlarge']`
- ⚠️ `useMedia` / `<Media>` have JS re-render cost — prefer CSS-based responsive

---

## Trap Reference: What NOT To Do

| Trap | Why | Correct alternative |
|---|---|---|
| `style={{ color: 'var(--lns-color-primary)' }}` | Inline styles always forbidden | `<Text color="primary">` |
| `style={{ background: 'var(--lns-gradient-ai-primary)' }}` | Inline styles always forbidden | `<Container backgroundImage="var(--lns-gradient-ai-primary)" />` |
| `<Text size="medium">` | Deprecated name | `<Text size="body-md">` |
| `className="text:xlarge"` | Deprecated class | `className="text:heading-sm"` |
| `var(--lns-fontSize-medium)` in CSS | Deprecated variable | `var(--lns-fontSize-body-md)` |
| `---lns-fontSize-xxxlarge` | Three-dash typo in docs | `var(--lns-fontSize-heading-lg)` |
| `import { DemoBox } from '@loomhq/lens'` | Does not exist | `<Container>` |
| Reading `reference/styles-full.md` | 1746 lines, wastes context | Use targeted files above |
| `<Text sizeMinMax={['medium', 'xlarge']}>` | Deprecated names | `<Text sizeMinMax={['body-md', 'heading-sm']}>` |
| `className={styles.wrapper}` | Dynamic className — linter error | Static string only: `className="flex p:medium"` |

---

## Linter Ground Truth

The ESLint plugin validates every `className` value against:
`eslint-plugin-lens-compliance/lib/mastery-db.json` → `approvedClasses`

This file contains **1935 approved classes** generated directly from
`@loomhq/lens@12.18.0` package source.

To regenerate after a Lens version update:
```bash
npm run generate:mastery-db
css-utilities.md is the human-readable reference.
mastery-db.json is what the linter actually enforces.
Both are now in sync.


---

## VERIFIED EXPORTS (JSON)

```json
{
  "_generated": "2026-03-05T11:56:50.117Z",
  "_lensVersion": "12.18.0",
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
