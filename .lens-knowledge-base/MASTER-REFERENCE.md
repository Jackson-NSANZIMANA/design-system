---
file: MASTER-REFERENCE.md
layer: verified-inventory
answers: "Complete export list and Forward Ref support"
load-when:
  - Checking if a component accepts a ref
do-not-load-when:
  - Implementing a feature (use QUICK-REFERENCE.md + components/[Name].md)
last-validated: 2026-04-29
---
# Lens Design System — Master Reference

## Package: @loomhq/lens@12.14.0

## Available Components (103)

| Component | Sub-Components | Forward Ref |
|-----------|---------------|-------------|
| `Align` | — | — |
| `Arrange` | — | — |
| `Avatar` | — | — |
| `Backdrop` | — | ✓ |
| `BaseStyles` | — | — |
| `Button` | — | — |
| `Checkbox` | — | ✓ |
| `ColorPicker` | — | — |
| `Container` | — | — |
| `Distribute` | — | — |
| `Dropdown` | — | — |
| `EllipsesLoader` | — | — |
| `ErrorContainer` | — | — |
| `FormField` | — | — |
| `Icon` | — | — |
| `IconButton` | — | ✓ |
| `IconButtonBox` | — | — |
| `Illustration` | — | — |
| `IllustrationAccountsAndBilling` | — | — |
| `IllustrationArchived` | — | — |
| `IllustrationAskForMore` | — | — |
| `IllustrationBusinessPlan` | — | — |
| `IllustrationChromeNotificationsEmptyState` | — | — |
| `IllustrationCollaborateWithTeammates` | — | — |
| `IllustrationComments` | — | — |
| `IllustrationCommunity` | — | — |
| `IllustrationCommunityAlt` | — | — |
| `IllustrationContentLimit` | — | — |
| `IllustrationCustomBranding` | — | — |
| `IllustrationDesktopAppAndChromeExtension` | — | — |
| `IllustrationDeviceCompatibility` | — | — |
| `IllustrationDowngrade` | — | — |
| `IllustrationEmbraceTheWeird` | — | — |
| `IllustrationEnterprisePlan` | — | — |
| `IllustrationFaqAndSecurity` | — | — |
| `IllustrationFiveMinuteLimit` | — | — |
| `IllustrationGettingStarted` | — | — |
| `IllustrationGrowthThroughEmpathy` | — | — |
| `IllustrationHealthPlans` | — | — |
| `IllustrationHelpIos` | — | — |
| `IllustrationHowToUseLoom` | — | — |
| `IllustrationInvite` | — | — |
| `IllustrationInviteMembers` | — | — |
| `IllustrationLeadWithTransparency` | — | — |
| `IllustrationLearningAndDevelopment` | — | — |
| `IllustrationLoomPlans` | — | — |
| `IllustrationMyVideosEmptyStateMobile` | — | — |
| `IllustrationOptionGrants` | — | — |
| `IllustrationParentalLeave` | — | — |
| `IllustrationPto` | — | — |
| `IllustrationRecentsEmptyStateMobile` | — | — |
| `IllustrationRecord` | — | — |
| `IllustrationRemoteFirst` | — | — |
| `IllustrationRoadmap` | — | — |
| `IllustrationScreenshot` | — | — |
| `IllustrationShare` | — | — |
| `IllustrationShareWithYourTeam` | — | — |
| `IllustrationStarred` | — | — |
| `IllustrationStarterPlusPlan` | — | — |
| `IllustrationStrongUploadSpeed` | — | — |
| `IllustrationTroubleshooting` | — | — |
| `IllustrationUpgrade` | — | — |
| `IllustrationUploadDragAndDrop` | — | — |
| `IllustrationUseCases` | — | — |
| `IllustrationUser` | — | — |
| `IllustrationWellness` | — | — |
| `IllutrationFoldersEmptyStateMobile` | — | — |
| `Indicator` | — | — |
| `JustifyContentRules` | — | — |
| `Layout` | Section | — |
| `Link` | — | — |
| `List` | — | — |
| `ListRow` | — | — |
| `Loader` | — | — |
| `Logo` | — | — |
| `LogoLoader` | — | — |
| `Media` | — | — |
| `Menu` | — | — |
| `MenuItem` | — | — |
| `Modal` | — | ✓ |
| `ModalCard` | — | — |
| `NotificationBar` | — | — |
| `Pill` | — | — |
| `Popover` | — | — |
| `Radio` | — | ✓ |
| `Select` | — | — |
| `SkeletonContainer` | — | — |
| `SkeletonText` | — | — |
| `Spacer` | — | — |
| `Split` | — | — |
| `SplitSection` | — | — |
| `Switch` | — | — |
| `Tab` | — | — |
| `Tabs` | — | — |
| `Text` | — | — |
| `TextButton` | — | ✓ |
| `TextInput` | — | ✓ |
| `Textarea` | — | ✓ |
| `Toast` | — | — |
| `Tooltip` | — | — |
| `TooltipBox` | — | — |
| `Typeahead` | — | ✓ |
| `WaveformLoader` | — | — |

## Available Hooks (5)

- `useFocusedElement`
- `useMedia`
- `useOnClickOutside`
- `usePreventScroll`
- `usePushPageDown`

## Available Utilities (93)

- `accessibilityRules`
- `alignSelfRules`
- `alphaFunction`
- `arrayToBreakpoints`
- `backgroundColorRules`
- `borderRules`
- `breakpoints`
- `buildGlobalStylesheet`
- `colorRules`
- `colorsNames`
- `cssUtilities`
- `darken`
- `displayRules`
- `ellipsisRules`
- `flexDirectionRules`
- `flexItemRules`
- `flexWrapRules`
- `fontSettingVariables`
- `fontSettings`
- `fontWeightRules`
- `fontWeightVariables`
- `fontWeights`
- `formFieldVariables`
- `getAlignmentStyles`
- `getAllCssVarsString`
- `getColorAlpha`
- `getColorScale`
- `getColorValue`
- `getColorsCssVarsObject`
- `getCssVarsFromObject`
- `getFocusRing`
- `getFontSetting`
- `getFontWeight`
- `getListContainer`
- `getMediaCss`
- `getOffsetFocusRing`
- `getPlacement`
- `getRadius`
- `getResponsiveBoolean`
- `getResponsiveColumns`
- `getResponsiveGridSections`
- `getResponsiveNumber`
- `getResponsiveOneOf`
- `getShadow`
- `getSize`
- `getSizeValue`
- `getSizingCssVarsDeclarations`
- `getSizingVariablesCssVarsObject`
- `getSpacingSelectors`
- `getTextSize`
- `getThemeStyles`
- `getThemeStylesString`
- `getVariablesCssVarsObject`
- `gradientVariables`
- `gradients`
- `growRules`
- `heightRules`
- `hslaBaseColors`
- `hslaColors`
- `hslaGreys`
- `lighten`
- `marginCrossRules`
- `marginRules`
- `minWidthRules`
- `objectToBreakpoints`
- `objectToRuleset`
- `overflowRules`
- `paddingCrossRules`
- `paddingRules`
- `pascalCaseToKebabCase`
- `positionRules`
- `radii`
- `radiiRules`
- `radiusVariables`
- `saturate`
- `shadowRules`
- `shadowVariables`
- `shadows`
- `shortBreakpoints`
- `shrinkRules`
- `sidePositionRules`
- `spaceVariables`
- `spaces`
- `textAlignmentRules`
- `textSizeRules`
- `textSizeVariables`
- `textSizes`
- `textVariantRules`
- `themeColors`
- `u`
- `unit`
- `unitVariables`
- `widthRules`

---

## Quick Reference

- **Docs:** https://lens.loom.dev
- **Package:** @loomhq/lens
- **Version:** 12.14.0
- **Total exports:** 201
