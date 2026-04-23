# Lens CSS Utility Classes Documentation

---

## ⚠️ Agent Read-This-First Warnings

### 1. Typography class deprecation
The following typography utility classes exist but are DEPRECATED.
Do not use them in new code:

| ❌ Deprecated | ✅ Use Instead |
|---|---|
| `text:small` | `text:body-sm` |
| `text:medium` | `text:body-md` |
| `text:large` | `text:body-lg` |
| `text:xlarge` | `text:heading-sm` |
| `text:xxlarge` | `text:heading-md` |
| `text:xxxlarge` | `text:heading-lg` |

Both columns appear in the tables below because the old classes
still function. Always write the new name.

### 2. className placement rules
These classes are for use on raw wrapper elements (`<div>`, `<span>`).
On Lens components, only external spacing classes are permitted:
`m:*`, `mt:*`, `mb:*`, `ml:*`, `mr:*`, `mx:*`, `my:*`, `grow:*`, `shrink:*`, `self:*`

Never apply appearance classes (color, background, shadow, radius,
typography) directly to Lens components. Use their props instead.

### 3. "With components" example context
The example at the bottom of this file shows:
  <Button className="mr:small">Cancel</Button>
  <TextButton className="ml:auto">Options</TextButton>

This is the ONLY valid pattern for className on Lens components:
external margin utilities that create spacing between siblings.
It is NOT a license to add other classes to Lens components.

---
---

## 🎨 Text Color Utilities

Class Declaration

---

## 🎨 Text Color Utilities

| Class Name                   | Description                                         |
| ---------------------------- | --------------------------------------------------- |
| `c:red`                      | `color: var(--lns-color-red);`                      |
| `c:redDark`                  | `color: var(--lns-color-redDark);`                  |
| `c:blurpleLight`             | `color: var(--lns-color-blurpleLight);`             |
| `c:blurpleMedium`            | `color: var(--lns-color-blurpleMedium);`            |
| `c:blurple`                  | `color: var(--lns-color-blurple);`                  |
| `c:blurpleDark`              | `color: var(--lns-color-blurpleDark);`              |
| `c:blurpleStrong`            | `color: var(--lns-color-blurpleStrong);`            |
| `c:offWhite`                 | `color: var(--lns-color-offWhite);`                 |
| `c:blueLight`                | `color: var(--lns-color-blueLight);`                |
| `c:blue`                     | `color: var(--lns-color-blue);`                     |
| `c:blueDark`                 | `color: var(--lns-color-blueDark);`                 |
| `c:magentaLight`             | `color: var(--lns-color-magentaLight);`             |
| `c:magenta`                  | `color: var(--lns-color-magenta);`                  |
| `c:magentaDark`              | `color: var(--lns-color-magentaDark);`              |
| `c:orangeLight`              | `color: var(--lns-color-orangeLight);`              |
| `c:orange`                   | `color: var(--lns-color-orange);`                   |
| `c:orangeDark`               | `color: var(--lns-color-orangeDark);`               |
| `c:tealLight`                | `color: var(--lns-color-tealLight);`                |
| `c:teal`                     | `color: var(--lns-color-teal);`                     |
| `c:tealDark`                 | `color: var(--lns-color-tealDark);`                 |
| `c:yellowLight`              | `color: var(--lns-color-yellowLight);`              |
| `c:yellow`                   | `color: var(--lns-color-yellow);`                   |
| `c:yellowDark`               | `color: var(--lns-color-yellowDark);`               |
| `c:grey1`                    | `color: var(--lns-color-grey1);`                    |
| `c:grey2`                    | `color: var(--lns-color-grey2);`                    |
| `c:grey3`                    | `color: var(--lns-color-grey3);`                    |
| `c:grey4`                    | `color: var(--lns-color-grey4);`                    |
| `c:grey5`                    | `color: var(--lns-color-grey5);`                    |
| `c:grey6`                    | `color: var(--lns-color-grey6);`                    |
| `c:grey7`                    | `color: var(--lns-color-grey7);`                    |
| `c:grey8`                    | `color: var(--lns-color-grey8);`                    |
| `c:white`                    | `color: var(--lns-color-white);`                    |
| `c:primary`                  | `color: var(--lns-color-primary);`                  |
| `c:primaryHover`             | `color: var(--lns-color-primaryHover);`             |
| `c:primaryActive`            | `color: var(--lns-color-primaryActive);`            |
| `c:danger`                   | `color: var(--lns-color-danger);`                   |
| `c:success`                  | `color: var(--lns-color-success);`                  |
| `c:warning`                  | `color: var(--lns-color-warning);`                  |
| `c:info`                     | `color: var(--lns-color-info);`                     |
| `c:body`                     | `color: var(--lns-color-body);`                     |
| `c:bodyDimmed`               | `color: var(--lns-color-bodyDimmed);`               |
| `c:bodyInverse`              | `color: var(--lns-color-bodyInverse);`              |
| `c:background`               | `color: var(--lns-color-background);`               |
| `c:backgroundHover`          | `color: var(--lns-color-backgroundHover);`          |
| `c:backgroundActive`         | `color: var(--lns-color-backgroundActive);`         |
| `c:backgroundSecondary`      | `color: var(--lns-color-backgroundSecondary);`      |
| `c:backgroundSecondary2`     | `color: var(--lns-color-backgroundSecondary2);`     |
| `c:backgroundNeutral`        | `color: var(--lns-color-backgroundNeutral);`        |
| `c:backgroundNeutralHover`   | `color: var(--lns-color-backgroundNeutralHover);`   |
| `c:backgroundNeutralActive`  | `color: var(--lns-color-backgroundNeutralActive);`  |
| `c:backgroundInverse`        | `color: var(--lns-color-backgroundInverse);`        |
| `c:focusRing`                | `color: var(--lns-color-focusRing);`                |
| `c:overlay`                  | `color: var(--lns-color-overlay);`                  |
| `c:overlayHover`             | `color: var(--lns-color-overlayHover);`             |
| `c:overlayActive`            | `color: var(--lns-color-overlayActive);`            |
| `c:backdrop`                 | `color: var(--lns-color-backdrop);`                 |
| `c:border`                   | `color: var(--lns-color-border);`                   |
| `c:record`                   | `color: var(--lns-color-record);`                   |
| `c:recordHover`              | `color: var(--lns-color-recordHover);`              |
| `c:recordActive`             | `color: var(--lns-color-recordActive);`             |
| `c:backdropDark`             | `color: var(--lns-color-backdropDark);`             |
| `c:backdropTwilight`         | `color: var(--lns-color-backdropTwilight);`         |
| `c:highlight`                | `color: var(--lns-color-highlight);`                |
| `c:highlightHover`           | `color: var(--lns-color-highlightHover);`           |
| `c:highlightActive`          | `color: var(--lns-color-highlightActive);`          |
| `c:dangerHover`              | `color: var(--lns-color-dangerHover);`              |
| `c:dangerActive`             | `color: var(--lns-color-dangerActive);`             |
| `c:disabledContent`          | `color: var(--lns-color-disabledContent);`          |
| `c:disabledBackground`       | `color: var(--lns-color-disabledBackground);`       |
| `c:formFieldBorder`          | `color: var(--lns-color-formFieldBorder);`          |
| `c:formFieldBackground`      | `color: var(--lns-color-formFieldBackground);`      |
| `c:buttonBorder`             | `color: var(--lns-color-buttonBorder);`             |
| `c:tabBackground`            | `color: var(--lns-color-tabBackground);`            |
| `c:upgrade`                  | `color: var(--lns-color-upgrade);`                  |
| `c:upgradeHover`             | `color: var(--lns-color-upgradeHover);`             |
| `c:upgradeActive`            | `color: var(--lns-color-upgradeActive);`            |
| `c:discoveryBackground`      | `color: var(--lns-color-discoveryBackground);`      |
| `c:discoveryLightBackground` | `color: var(--lns-color-discoveryLightBackground);` |
| `c:discoveryTitle`           | `color: var(--lns-color-discoveryTitle);`           |
| `c:discoveryHighlight`       | `color: var(--lns-color-discoveryHighlight);`       |

---

## 🎨 Background Color Utilities

## Classes

| Class Name                     | Description                                                    |
| ------------------------------ | -------------------------------------------------------------- |
| `bgc:red`                      | `background-color: var(--lns-color-red);`                      |
| `bgc:redDark`                  | `background-color: var(--lns-color-redDark);`                  |
| `bgc:blurpleLight`             | `background-color: var(--lns-color-blurpleLight);`             |
| `bgc:blurpleMedium`            | `background-color: var(--lns-color-blurpleMedium);`            |
| `bgc:blurple`                  | `background-color: var(--lns-color-blurple);`                  |
| `bgc:blurpleDark`              | `background-color: var(--lns-color-blurpleDark);`              |
| `bgc:blurpleStrong`            | `background-color: var(--lns-color-blurpleStrong);`            |
| `bgc:offWhite`                 | `background-color: var(--lns-color-offWhite);`                 |
| `bgc:blueLight`                | `background-color: var(--lns-color-blueLight);`                |
| `bgc:blue`                     | `background-color: var(--lns-color-blue);`                     |
| `bgc:blueDark`                 | `background-color: var(--lns-color-blueDark);`                 |
| `bgc:magentaLight`             | `background-color: var(--lns-color-magentaLight);`             |
| `bgc:magenta`                  | `background-color: var(--lns-color-magenta);`                  |
| `bgc:magentaDark`              | `background-color: var(--lns-color-magentaDark);`              |
| `bgc:orangeLight`              | `background-color: var(--lns-color-orangeLight);`              |
| `bgc:orange`                   | `background-color: var(--lns-color-orange);`                   |
| `bgc:orangeDark`               | `background-color: var(--lns-color-orangeDark);`               |
| `bgc:tealLight`                | `background-color: var(--lns-color-tealLight);`                |
| `bgc:teal`                     | `background-color: var(--lns-color-teal);`                     |
| `bgc:tealDark`                 | `background-color: var(--lns-color-tealDark);`                 |
| `bgc:yellowLight`              | `background-color: var(--lns-color-yellowLight);`              |
| `bgc:yellow`                   | `background-color: var(--lns-color-yellow);`                   |
| `bgc:yellowDark`               | `background-color: var(--lns-color-yellowDark);`               |
| `bgc:grey8`                    | `background-color: var(--lns-color-grey8);`                    |
| `bgc:grey7`                    | `background-color: var(--lns-color-grey7);`                    |
| `bgc:grey6`                    | `background-color: var(--lns-color-grey6);`                    |
| `bgc:grey5`                    | `background-color: var(--lns-color-grey5);`                    |
| `bgc:grey4`                    | `background-color: var(--lns-color-grey4);`                    |
| `bgc:grey3`                    | `background-color: var(--lns-color-grey3);`                    |
| `bgc:grey2`                    | `background-color: var(--lns-color-grey2);`                    |
| `bgc:grey1`                    | `background-color: var(--lns-color-grey1);`                    |
| `bgc:white`                    | `background-color: var(--lns-color-white);`                    |
| `bgc:primary`                  | `background-color: var(--lns-color-primary);`                  |
| `bgc:primaryHover`             | `background-color: var(--lns-color-primaryHover);`             |
| `bgc:primaryActive`            | `background-color: var(--lns-color-primaryActive);`            |
| `bgc:body`                     | `background-color: var(--lns-color-body);`                     |
| `bgc:bodyDimmed`               | `background-color: var(--lns-color-bodyDimmed);`               |
| `bgc:bodyInverse`              | `background-color: var(--lns-color-bodyInverse);`              |
| `bgc:background`               | `background-color: var(--lns-color-background);`               |
| `bgc:backgroundHover`          | `background-color: var(--lns-color-backgroundHover);`          |
| `bgc:backgroundActive`         | `background-color: var(--lns-color-backgroundActive);`         |
| `bgc:backgroundSecondary`      | `background-color: var(--lns-color-backgroundSecondary);`      |
| `bgc:backgroundSecondary2`     | `background-color: var(--lns-color-backgroundSecondary2);`     |
| `bgc:backgroundNeutral`        | `background-color: var(--lns-color-backgroundNeutral);`        |
| `bgc:backgroundNeutralHover`   | `background-color: var(--lns-color-backgroundNeutralHover);`   |
| `bgc:backgroundNeutralActive`  | `background-color: var(--lns-color-backgroundNeutralActive);`  |
| `bgc:backgroundInverse`        | `background-color: var(--lns-color-backgroundInverse);`        |
| `bgc:focusRing`                | `background-color: var(--lns-color-focusRing);`                |
| `bgc:overlay`                  | `background-color: var(--lns-color-overlay);`                  |
| `bgc:overlayHover`             | `background-color: var(--lns-color-overlayHover);`             |
| `bgc:overlayActive`            | `background-color: var(--lns-color-overlayActive);`            |
| `bgc:backdrop`                 | `background-color: var(--lns-color-backdrop);`                 |
| `bgc:border`                   | `background-color: var(--lns-color-border);`                   |
| `bgc:record`                   | `background-color: var(--lns-color-record);`                   |
| `bgc:recordHover`              | `background-color: var(--lns-color-recordHover);`              |
| `bgc:recordActive`             | `background-color: var(--lns-color-recordActive);`             |
| `bgc:backdropDark`             | `background-color: var(--lns-color-backdropDark);`             |
| `bgc:backdropTwilight`         | `background-color: var(--lns-color-backdropTwilight);`         |
| `bgc:highlight`                | `background-color: var(--lns-color-highlight);`                |
| `bgc:highlightHover`           | `background-color: var(--lns-color-highlightHover);`           |
| `bgc:highlightActive`          | `background-color: var(--lns-color-highlightActive);`          |
| `bgc:warning`                  | `background-color: var(--lns-color-warning);`                  |
| `bgc:info`                     | `background-color: var(--lns-color-info);`                     |
| `bgc:success`                  | `background-color: var(--lns-color-success);`                  |
| `bgc:danger`                   | `background-color: var(--lns-color-danger);`                   |
| `bgc:dangerHover`              | `background-color: var(--lns-color-dangerHover);`              |
| `bgc:dangerActive`             | `background-color: var(--lns-color-dangerActive);`             |
| `bgc:disabledContent`          | `background-color: var(--lns-color-disabledContent);`          |
| `bgc:disabledBackground`       | `background-color: var(--lns-color-disabledBackground);`       |
| `bgc:formFieldBorder`          | `background-color: var(--lns-color-formFieldBorder);`          |
| `bgc:formFieldBackground`      | `background-color: var(--lns-color-formFieldBackground);`      |
| `bgc:buttonBorder`             | `background-color: var(--lns-color-buttonBorder);`             |
| `bgc:tabBackground`            | `background-color: var(--lns-color-tabBackground);`            |
| `bgc:upgrade`                  | `background-color: var(--lns-color-upgrade);`                  |
| `bgc:upgradeHover`             | `background-color: var(--lns-color-upgradeHover);`             |
| `bgc:upgradeActive`            | `background-color: var(--lns-color-upgradeActive);`            |
| `bgc:discoveryBackground`      | `background-color: var(--lns-color-discoveryBackground);`      |
| `bgc:discoveryLightBackground` | `background-color: var(--lns-color-discoveryLightBackground);` |
| `bgc:discoveryTitle`           | `background-color: var(--lns-color-discoveryTitle);`           |
| `bgc:discoveryHighlight`       | `background-color: var(--lns-color-discoveryHighlight);`       |

---

## 📝 Typography

# Font Size Declarations

| Class             | Declarations                                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `text:small`      | font-size: var(--lns-fontSize-small);<br>line-height: var(--lns-lineHeight-small);<br>letter-spacing: var(--lns-letterSpacing-small);<br>font-weight: var(--lns-fontWeight-regular);             |
| `text:body-sm`    | font-size: var(--lns-fontSize-body-sm);<br>line-height: var(--lns-lineHeight-body-sm);<br>letter-spacing: var(--lns-letterSpacing-body-sm);<br>font-weight: var(--lns-fontWeight-regular);       |
| `text:medium`     | font-size: var(--lns-fontSize-medium);<br>line-height: var(--lns-lineHeight-medium);<br>letter-spacing: var(--lns-letterSpacing-medium);<br>font-weight: var(--lns-fontWeight-regular);          |
| `text:body-md`    | font-size: var(--lns-fontSize-body-md);<br>line-height: var(--lns-lineHeight-body-md);<br>letter-spacing: var(--lns-letterSpacing-body-md);<br>font-weight: var(--lns-fontWeight-regular);       |
| `text:large`      | font-size: var(--lns-fontSize-large);<br>line-height: var(--lns-lineHeight-large);<br>letter-spacing: var(--lns-letterSpacing-large);<br>font-weight: var(--lns-fontWeight-regular);             |
| `text:body-lg`    | font-size: var(--lns-fontSize-body-lg);<br>line-height: var(--lns-lineHeight-body-lg);<br>letter-spacing: var(--lns-letterSpacing-body-lg);<br>font-weight: var(--lns-fontWeight-regular);       |
| `text:xlarge`     | font-size: var(--lns-fontSize-xlarge);<br>line-height: var(--lns-lineHeight-xlarge);<br>letter-spacing: var(--lns-letterSpacing-xlarge);<br>font-weight: var(--lns-fontWeight-bold);             |
| `text:heading-sm` | font-size: var(--lns-fontSize-heading-sm);<br>line-height: var(--lns-lineHeight-heading-sm);<br>letter-spacing: var(--lns-letterSpacing-heading-sm);<br>font-weight: var(--lns-fontWeight-bold); |
| `text:xxlarge`    | font-size: var(--lns-fontSize-xxlarge);<br>line-height: var(--lns-lineHeight-xxlarge);<br>letter-spacing: var(--lns-letterSpacing-xxlarge);<br>font-weight: var(--lns-fontWeight-bold);          |
| `text:heading-md` | font-size: var(--lns-fontSize-heading-md);<br>line-height: var(--lns-lineHeight-heading-md);<br>letter-spacing: var(--lns-letterSpacing-heading-md);<br>font-weight: var(--lns-fontWeight-bold); |
| `text:xxxlarge`   | font-size: var(--lns-fontSize-xxxlarge);<br>line-height: var(--lns-lineHeight-xxxlarge);<br>letter-spacing: var(--lns-letterSpacing-xxxlarge);<br>font-weight: var(--lns-fontWeight-bold);       |
| `text:heading-lg` | font-size: var(--lns-fontSize-heading-lg);<br>line-height: var(--lns-lineHeight-heading-lg);<br>letter-spacing: var(--lns-letterSpacing-heading-lg);<br>font-weight: var(--lns-fontWeight-bold); |

# Font Weight Declarations

| Class            | Declarations                                |
| ---------------- | ------------------------------------------- |
| `weight:book`    | font-weight: var(--lns-fontWeight-book);    |
| `weight:regular` | font-weight: var(--lns-fontWeight-regular); |
| `weight:medium`  | font-weight: var(--lns-fontWeight-medium);  |
| `weight:bold`    | font-weight: var(--lns-fontWeight-bold);    |

## Variant Class Declarations

| Class          | Declarations                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| text:body      | font-size: var(--lns-fontSize-body-md);<br>line-height: var(--lns-lineHeight-body-md);<br>font-weight: var(--lns-fontWeight-regular);    |
| text:title     | font-size: var(--lns-fontSize-body-lg);<br>line-height: var(--lns-lineHeight-body-lg);<br>font-weight: var(--lns-fontWeight-bold);       |
| text:mainTitle | font-size: var(--lns-fontSize-heading-md);<br>line-height: var(--lns-lineHeight-heading-md);<br>font-weight: var(--lns-fontWeight-bold); |

## Alignment Class Declarations

| Class       | Declarations        |
| ----------- | ------------------- |
| text:left   | text-align: left;   |
| text:right  | text-align: right;  |
| text:center | text-align: center; |

## Shadow Class Declarations

| Class         | Declarations                          |
| ------------- | ------------------------------------- |
| shadow:small  | box-shadow: var(--lns-shadow-small);  |
| shadow:medium | box-shadow: var(--lns-shadow-medium); |
| shadow:large  | box-shadow: var(--lns-shadow-large);  |

## Radius Class Declarations

| Class         | Declarations                             |
| ------------- | ---------------------------------------- |
| radius:50     | border-radius: var(--lns-radius-50);     |
| radius:100    | border-radius: var(--lns-radius-100);    |
| radius:150    | border-radius: var(--lns-radius-150);    |
| radius:175    | border-radius: var(--lns-radius-175);    |
| radius:200    | border-radius: var(--lns-radius-200);    |
| radius:250    | border-radius: var(--lns-radius-250);    |
| radius:300    | border-radius: var(--lns-radius-300);    |
| radius:none   | border-radius: var(--lns-radius-none);   |
| radius:medium | border-radius: var(--lns-radius-medium); |
| radius:large  | border-radius: var(--lns-radius-large);  |
| radius:xlarge | border-radius: var(--lns-radius-xlarge); |
| radius:round  | border-radius: var(--lns-radius-round);  |
| radius:full   | border-radius: var(--lns-radius-full);   |

## Margin Class Declarations

| Class      | Declarations                             |
| ---------- | ---------------------------------------- |
| m:0        | margin: 0;                               |
| m:auto     | margin: auto;                            |
| m:xsmall   | margin: var(--lns-space-xsmall);         |
| m:small    | margin: var(--lns-space-small);          |
| m:medium   | margin: var(--lns-space-medium);         |
| m:large    | margin: var(--lns-space-large);          |
| m:xlarge   | margin: var(--lns-space-xlarge);         |
| m:xxlarge  | margin: var(--lns-space-xxlarge);        |
| mt:0       | margin-top: 0;                           |
| mt:auto    | margin-top: auto;                        |
| mt:xsmall  | margin-top: var(--lns-space-xsmall);     |
| mt:small   | margin-top: var(--lns-space-small);      |
| mt:medium  | margin-top: var(--lns-space-medium);     |
| mt:large   | margin-top: var(--lns-space-large);      |
| mt:xlarge  | margin-top: var(--lns-space-xlarge);     |
| mt:xxlarge | margin-top: var(--lns-space-xxlarge);    |
| mb:0       | margin-bottom: 0;                        |
| mb:auto    | margin-bottom: auto;                     |
| mb:xsmall  | margin-bottom: var(--lns-space-xsmall);  |
| mb:small   | margin-bottom: var(--lns-space-small);   |
| mb:medium  | margin-bottom: var(--lns-space-medium);  |
| mb:large   | margin-bottom: var(--lns-space-large);   |
| mb:xlarge  | margin-bottom: var(--lns-space-xlarge);  |
| mb:xxlarge | margin-bottom: var(--lns-space-xxlarge); |
| ml:0       | margin-left: 0;                          |
| ml:auto    | margin-left: auto;                       |
| ml:xsmall  | margin-left: var(--lns-space-xsmall);    |
| ml:small   | margin-left: var(--lns-space-small);     |
| ml:medium  | margin-left: var(--lns-space-medium);    |
| ml:large   | margin-left: var(--lns-space-large);     |
| ml:xlarge  | margin-left: var(--lns-space-xlarge);    |
| ml:xxlarge | margin-left: var(--lns-space-xxlarge);   |
| mr:0       | margin-right: 0;                         |
| mr:auto    | margin-right: auto;                      |
| mr:xsmall  | margin-right: var(--lns-space-xsmall);   |
| mr:small   | margin-right: var(--lns-space-small);    |
| mr:medium  | margin-right: var(--lns-space-medium);   |
| mr:large   | margin-right: var(--lns-space-large);    |
| mr:xlarge  | margin-right: var(--lns-space-xlarge);   |
| mr:xxlarge | margin-right: var(--lns-space-xxlarge);  |

## Horizontal and Vertical Margin Class Declarations

| Class      | Declarations                                                                   |
| ---------- | ------------------------------------------------------------------------------ |
| mx:0       | margin-left: 0; margin-right: 0;                                               |
| mx:auto    | margin-left: auto; margin-right: auto;                                         |
| mx:xsmall  | margin-left: var(--lns-space-xsmall); margin-right: var(--lns-space-xsmall);   |
| mx:small   | margin-left: var(--lns-space-small); margin-right: var(--lns-space-small);     |
| mx:medium  | margin-left: var(--lns-space-medium); margin-right: var(--lns-space-medium);   |
| mx:large   | margin-left: var(--lns-space-large); margin-right: var(--lns-space-large);     |
| mx:xlarge  | margin-left: var(--lns-space-xlarge); margin-right: var(--lns-space-xlarge);   |
| mx:xxlarge | margin-left: var(--lns-space-xxlarge); margin-right: var(--lns-space-xxlarge); |
| my:0       | margin-top: 0; margin-bottom: 0;                                               |
| my:auto    | margin-top: auto; margin-bottom: auto;                                         |
| my:xsmall  | margin-top: var(--lns-space-xsmall); margin-bottom: var(--lns-space-xsmall);   |
| my:small   | margin-top: var(--lns-space-small); margin-bottom: var(--lns-space-small);     |
| my:medium  | margin-top: var(--lns-space-medium); margin-bottom: var(--lns-space-medium);   |
| my:large   | margin-top: var(--lns-space-large); margin-bottom: var(--lns-space-large);     |
| my:xlarge  | margin-top: var(--lns-space-xlarge); margin-bottom: var(--lns-space-xlarge);   |
| my:xxlarge | margin-top: var(--lns-space-xxlarge); margin-bottom: var(--lns-space-xxlarge); |

## Padding Class Declarations

| Class      | Declarations                              |
| ---------- | ----------------------------------------- |
| p:0        | padding: 0;                               |
| p:xsmall   | padding: var(--lns-space-xsmall);         |
| p:small    | padding: var(--lns-space-small);          |
| p:medium   | padding: var(--lns-space-medium);         |
| p:large    | padding: var(--lns-space-large);          |
| p:xlarge   | padding: var(--lns-space-xlarge);         |
| p:xxlarge  | padding: var(--lns-space-xxlarge);        |
| pt:0       | padding-top: 0;                           |
| pt:xsmall  | padding-top: var(--lns-space-xsmall);     |
| pt:small   | padding-top: var(--lns-space-small);      |
| pt:medium  | padding-top: var(--lns-space-medium);     |
| pt:large   | padding-top: var(--lns-space-large);      |
| pt:xlarge  | padding-top: var(--lns-space-xlarge);     |
| pt:xxlarge | padding-top: var(--lns-space-xxlarge);    |
| pb:0       | padding-bottom: 0;                        |
| pb:xsmall  | padding-bottom: var(--lns-space-xsmall);  |
| pb:small   | padding-bottom: var(--lns-space-small);   |
| pb:medium  | padding-bottom: var(--lns-space-medium);  |
| pb:large   | padding-bottom: var(--lns-space-large);   |
| pb:xlarge  | padding-bottom: var(--lns-space-xlarge);  |
| pb:xxlarge | padding-bottom: var(--lns-space-xxlarge); |
| pl:0       | padding-left: 0;                          |
| pl:xsmall  | padding-left: var(--lns-space-xsmall);    |
| pl:small   | padding-left: var(--lns-space-small);     |
| pl:medium  | padding-left: var(--lns-space-medium);    |
| pl:large   | padding-left: var(--lns-space-large);     |
| pl:xlarge  | padding-left: var(--lns-space-xlarge);    |
| pl:xxlarge | padding-left: var(--lns-space-xxlarge);   |
| pr:0       | padding-right: 0;                         |
| pr:xsmall  | padding-right: var(--lns-space-xsmall);   |
| pr:small   | padding-right: var(--lns-space-small);    |
| pr:medium  | padding-right: var(--lns-space-medium);   |
| pr:large   | padding-right: var(--lns-space-large);    |
| pr:xlarge  | padding-right: var(--lns-space-xlarge);   |
| pr:xxlarge | padding-right: var(--lns-space-xxlarge);  |

## Horizontal and Vertical Padding Class Declarations

| Class      | Declarations                                                                     |
| ---------- | -------------------------------------------------------------------------------- |
| px:0       | padding-left: 0; padding-right: 0;                                               |
| px:xsmall  | padding-left: var(--lns-space-xsmall); padding-right: var(--lns-space-xsmall);   |
| px:small   | padding-left: var(--lns-space-small); padding-right: var(--lns-space-small);     |
| px:medium  | padding-left: var(--lns-space-medium); padding-right: var(--lns-space-medium);   |
| px:large   | padding-left: var(--lns-space-large); padding-right: var(--lns-space-large);     |
| px:xlarge  | padding-left: var(--lns-space-xlarge); padding-right: var(--lns-space-xlarge);   |
| px:xxlarge | padding-left: var(--lns-space-xxlarge); padding-right: var(--lns-space-xxlarge); |
| py:0       | padding-top: 0; padding-bottom: 0;                                               |
| py:xsmall  | padding-top: var(--lns-space-xsmall); padding-bottom: var(--lns-space-xsmall);   |
| py:small   | padding-top: var(--lns-space-small); padding-bottom: var(--lns-space-small);     |
| py:medium  | padding-top: var(--lns-space-medium); padding-bottom: var(--lns-space-medium);   |
| py:large   | padding-top: var(--lns-space-large); padding-bottom: var(--lns-space-large);     |
| py:xlarge  | padding-top: var(--lns-space-xlarge); padding-bottom: var(--lns-space-xlarge);   |
| py:xxlarge | padding-top: var(--lns-space-xxlarge); padding-bottom: var(--lns-space-xxlarge); |

## Width Class Declarations

| Class      | Declarations |
| ---------- | ------------ |
| width:auto | width: auto; |
| width:full | width: 100%; |
| width:0    | width: 0;    |

## Min Width Class Declarations

| Class      | Declarations  |
| ---------- | ------------- |
| minWidth:0 | min-width: 0; |

## Height Class Declarations

| Class       | Declarations  |
| ----------- | ------------- |
| height:auto | height: auto; |
| height:full | height: 100%; |
| height:0    | height: 0;    |

## Border Class Declarations

| Class        | Declarations                                      |
| ------------ | ------------------------------------------------- |
| border       | border: 1px solid var(--lns-color-border);        |
| borderTop    | border-top: 1px solid var(--lns-color-border);    |
| borderBottom | border-bottom: 1px solid var(--lns-color-border); |
| borderLeft   | border-left: 1px solid var(--lns-color-border);   |
| borderRight  | border-right: 1px solid var(--lns-color-border);  |

## Display Class Declarations

| Class       | Declarations           |
| ----------- | ---------------------- |
| inline      | display: inline;       |
| block       | display: block;        |
| flex        | display: flex;         |
| inlineBlock | display: inline-block; |
| inlineFlex  | display: inline-flex;  |
| none        | display: none;         |

## Flex

## Flex Wrap Class Declarations

| Class    | Declarations     |
| -------- | ---------------- |
| flexWrap | flex-wrap: wrap; |

## Flex Direction Class Declarations

| Class                | Declarations            |
| -------------------- | ----------------------- |
| flexDirection:column | flex-direction: column; |
| flexDirection:row    | flex-direction: row;    |

## Flex Item Alignment

| Class           | Declarations             |
| --------------- | ------------------------ |
| items:stretch   | align-items: stretch;    |
| items:center    | align-items: center;     |
| items:baseline  | align-items: baseline;   |
| items:flexStart | align-items: flex-start; |
| items:flexEnd   | align-items: flex-end;   |
| items:selfStart | align-items: self-start; |
| items:selfEnd   | align-items: self-end;   |

## Justify Content Classes

| Class                | Declarations                    |
| -------------------- | ------------------------------- |
| justify:flexStart    | justify-content: flex-start;    |
| justify:flexEnd      | justify-content: flex-end;      |
| justify:center       | justify-content: center;        |
| justify:spaceBetween | justify-content: space-between; |
| justify:spaceAround  | justify-content: space-around;  |
| justify:spaceEvenly  | justify-content: space-evenly;  |

## Flex Grow and Shrink Classes

| Class    | Declarations    |
| -------- | --------------- |
| grow:0   | flex-grow: 0;   |
| grow:1   | flex-grow: 1;   |
| shrink:0 | flex-shrink: 0; |
| shrink:1 | flex-shrink: 1; |

## Align Self Classes

| Class          | Declarations            |
| -------------- | ----------------------- |
| self:auto      | align-self: auto;       |
| self:flexStart | align-self: flex-start; |
| self:flexEnd   | align-self: flex-end;   |
| self:center    | align-self: center;     |
| self:baseline  | align-self: baseline;   |
| self:stretch   | align-self: stretch;    |

## Overflow Classes

| Class           | Declarations      |
| --------------- | ----------------- |
| overflow:hidden | overflow: hidden; |
| overflow:auto   | overflow: auto;   |

## Position Classes

| Class    | Declarations        |
| -------- | ------------------- |
| relative | position: relative; |
| absolute | position: absolute; |
| sticky   | position: sticky;   |
| fixed    | position: fixed;    |

## Sides Classes

| Class          | Declarations                      |
| -------------- | --------------------------------- |
| top:0          | top: 0;                           |
| top:auto       | top: auto;                        |
| top:xsmall     | top: var(--lns-space-xsmall);     |
| top:small      | top: var(--lns-space-small);      |
| top:medium     | top: var(--lns-space-medium);     |
| top:large      | top: var(--lns-space-large);      |
| top:xlarge     | top: var(--lns-space-xlarge);     |
| top:xxlarge    | top: var(--lns-space-xxlarge);    |
| bottom:0       | bottom: 0;                        |
| bottom:auto    | bottom: auto;                     |
| bottom:xsmall  | bottom: var(--lns-space-xsmall);  |
| bottom:small   | bottom: var(--lns-space-small);   |
| bottom:medium  | bottom: var(--lns-space-medium);  |
| bottom:large   | bottom: var(--lns-space-large);   |
| bottom:xlarge  | bottom: var(--lns-space-xlarge);  |
| bottom:xxlarge | bottom: var(--lns-space-xxlarge); |
| left:0         | left: 0;                          |
| left:auto      | left: auto;                       |
| left:xsmall    | left: var(--lns-space-xsmall);    |
| left:small     | left: var(--lns-space-small);     |
| left:medium    | left: var(--lns-space-medium);    |
| left:large     | left: var(--lns-space-large);     |
| left:xlarge    | left: var(--lns-space-xlarge);    |
| left:xxlarge   | left: var(--lns-space-xxlarge);   |
| right:0        | right: 0;                         |
| right:auto     | right: auto;                      |
| right:xsmall   | right: var(--lns-space-xsmall);   |
| right:small    | right: var(--lns-space-small);    |
| right:medium   | right: var(--lns-space-medium);   |
| right:large    | right: var(--lns-space-large);    |
| right:xlarge   | right: var(--lns-space-xlarge);   |
| right:xxlarge  | right: var(--lns-space-xxlarge);  |

## Ellipsis Class

| Class    | Declarations                                                          |
| -------- | --------------------------------------------------------------------- |
| ellipsis | overflow: hidden;<br>text-overflow: ellipsis;<br>white-space: nowrap; |

## Accessibility Class

| Class  | Declarations                                                                                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| srOnly | position: absolute;<br>width: 1px;<br>height: 1px;<br>padding: 0;<br>margin: -1px;<br>overflow: hidden;<br>clip: rect(0, 0, 0, 0);<br>white-space: nowrap;<br>border-width: 0; |

# Responsive CSS Utility Classes

Use any of the CSS utility classes with a breakpoint prefix for responsive design.

---

## Structure

`PREFIX-CLASS`

**Examples:**

- `md-c:red`
- `lg-c:primary`
- `sm-mr:medium`
- `md-mr:large`
- `xs-block`
- `sm-flex`

---

## Prefixes and Min Widths

| Prefix | Min Width                  | Description         |
| ------ | -------------------------- | ------------------- |
| `xs-`  | `@media (min-width: 31em)` | Extra small screens |
| `sm-`  | `@media (min-width: 48em)` | Small screens       |
| `md-`  | `@media (min-width: 64em)` | Medium screens      |
| `lg-`  | `@media (min-width: 75em)` | Large screens       |

---

## Usage Example

```html
<div className="mr:medium md-mr:large lg-mr:xlarge">demo</div>
```

## Demo

```tsx
<>
  <div className="mb:medium">
    <div className="block xsm-block sm-none">show on xsmall and smaller</div>
    <div className="none sm-block md-none">show only on small</div>
    <div className="none sm-none md-block lg-none">show only on medium</div>
    <div className="none sm-none md-none lg-block">show on large and up</div>
  </div>

  <div className="c:red xsm-c:red sm-c:grey5 px:xsmall border">
    red on xsmall and smaller
  </div>
  <div className="c:grey5 sm-c:red md-c:grey5 px:xsmall border">
    red only on small
  </div>
  <div className="c:grey5 sm-c:grey5 md-c:red lg-c:grey5 px:xsmall border">
    red only on medium
  </div>
  <div className="c:grey5 sm-c:grey5 md-c:grey5 lg-c:red px:xsmall border">
    red on large and larger
  </div>
</>
```

---

## Examples:

### Layer style

```tsx
<div className="flex">
  <div className="p:medium grow:1 mr:medium shadow:medium radius:medium text:center">
    A
  </div>
  <div className="border p:medium grow:1 c:bodyDimmed radius:medium bgc:backgroundHover text:center">
    B
  </div>
</div>
```

### Typography

```tsx
<>
  <div className="text:mainTitle mb:small">{demoText.title}</div>
  <div className="text:title mb:small">{demoText.medium}</div>
  <div className="text:body">{demoText.long}</div>
</>
```

### Layout

```tsx
<div className="flex items:center">
  <div className="border p:medium">A</div>
  <div className="border p:xlarge ml:small">B</div>
  <div className="border p:medium self:flexEnd mr:small ml:small">C</div>
  <div className="border p:small self:flexStart mr:small ml:small">D</div>
  <div className="border p:medium mr:small ml:small">E</div>
</div>
```

### Positioning

```tsx
<div className="flex">
  <div className="text:center relative width:full border p:large">
    Relative
    <div className="absolute right:0 top:0 border">
      <div className="p:small">Absolute</div>
    </div>
  </div>
</div>
```

### Ellipsis

```tsx
<>
  <div className="flex mb:medium">
    <div className="minWidth:0">
      <div className="p:small grow:1 border ellipsis">{demoText.long}</div>
    </div>
  </div>
  <div className="flex">
    <div className="p:small grow:1 border ellipsis">{demoText.long}</div>
  </div>
</>
```

### With components

```tsx
<div className="p:large shadow:medium radius:large">
  <div className="text:title mb:small">{demoText.medium}</div>
  <div className="text:body mb:large">{demoText.long}</div>
  <div className="flex flexWrap items:center">
    <Button className="mr:small">Cancel</Button>
    <Button variant="primary">Save</Button>
    <TextButton className="ml:auto">Options</TextButton>
  </div>
</div>
```

## 📦 Spacing

### Margin

Supports: `m:*`, `mt:*`, `mb:*`, `ml:*`, `mr:*`, `mx:*`, `my:*`  
Sizes: `0`, `auto`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `xxlarge`

| Class Name  | Description                       |
| ----------- | --------------------------------- |
| `m:0`       | `margin: 0;`                      |
| `m:auto`    | `margin: auto;`                   |
| `m:xsmall`  | `margin: var(--spacing-xsmall);`  |
| `m:small`   | `margin: var(--spacing-small);`   |
| `m:medium`  | `margin: var(--spacing-medium);`  |
| `m:large`   | `margin: var(--spacing-large);`   |
| `m:xlarge`  | `margin: var(--spacing-xlarge);`  |
| `m:xxlarge` | `margin: var(--spacing-xxlarge);` |

And for directional margins:

| Class Name  | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `mt:small`  | `margin-top: var(--spacing-small);`                                      |
| `mb:large`  | `margin-bottom: var(--spacing-large);`                                   |
| `ml:medium` | `margin-left: var(--spacing-medium);`                                    |
| `mr:xlarge` | `margin-right: var(--spacing-xlarge);`                                   |
| `mx:small`  | `margin-left: var(--spacing-small); margin-right: var(--spacing-small);` |
| `my:large`  | `margin-top: var(--spacing-large); margin-bottom: var(--spacing-large);` |

---

### Padding

Supports: `p:*`, `pt:*`, `pb:*`, `pl:*`, `pr:*`, `px:*`, `py:*`  
Sizes: `0`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `xxlarge`

| Class Name  | Description                        |
| ----------- | ---------------------------------- |
| `p:0`       | `padding: 0;`                      |
| `p:xsmall`  | `padding: var(--spacing-xsmall);`  |
| `p:small`   | `padding: var(--spacing-small);`   |
| `p:medium`  | `padding: var(--spacing-medium);`  |
| `p:large`   | `padding: var(--spacing-large);`   |
| `p:xlarge`  | `padding: var(--spacing-xlarge);`  |
| `p:xxlarge` | `padding: var(--spacing-xxlarge);` |

And for directional paddings:

| Class Name  | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `pt:small`  | `padding-top: var(--spacing-small);`                                       |
| `pb:large`  | `padding-bottom: var(--spacing-large);`                                    |
| `pl:medium` | `padding-left: var(--spacing-medium);`                                     |
| `pr:xlarge` | `padding-right: var(--spacing-xlarge);`                                    |
| `px:small`  | `padding-left: var(--spacing-small); padding-right: var(--spacing-small);` |
| `py:large`  | `padding-top: var(--spacing-large); padding-bottom: var(--spacing-large);` |

---

## 📐 Layout

### Display

| Class Name   | Description             |
| ------------ | ----------------------- |
| `block`      | `display: block;`       |
| `inline`     | `display: inline;`      |
| `flex`       | `display: flex;`        |
| `inlineFlex` | `display: inline-flex;` |
| `none`       | `display: none;`        |

---

## 📍 Position

| Class Name | Description           |
| ---------- | --------------------- |
| `relative` | `position: relative;` |
| `absolute` | `position: absolute;` |
| `sticky`   | `position: sticky;`   |
| `fixed`    | `position: fixed;`    |

---

## 📱 Responsive Breakpoints

| Prefix | Min Width                 | Description              |
| ------ | ------------------------- | ------------------------ |
| `xs-`  | `@media(min-width: 31em)` | Styles at 31em and above |
| `sm-`  | `@media(min-width: 48em)` | Styles at 48em and above |
| `md-`  | `@media(min-width: 64em)` | Styles at 64em and above |
| `lg-`  | `@media(min-width: 75em)` | Styles at 75em and above |

### Usage Example

```html
<div className="mr:medium md-mr:large lg-mr:xlarge">demo</div>
```

Structure:

    PREFIX-CLASS

Example:

    md-c:red
    lg-c:primary
    sm-mr:medium
