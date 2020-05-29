---
title: Accessibility
---

<cds-alert status="warning" closable="false">Actionable controls inside dynamically genrated alerts are not accessible to screen reader users! For this reason Clarity does not recommend using dropdowns, buttons, links inside alerts that appear as dynamic notifications.</cds-alert>

There are accessibility problems related to using actionable controls inside dynamically generated alerts:

- They are announced as part of the alert message, which is out of context and may be confusing. For example, the following alert will be announced as "success acknowledge"

- There is no way for the user to directly interact with the announced action controls.

It is acceptable to use actions in static alerts. The following guidlines are recommended:

- Controls can be `dropdown`, `button` or `link` elements.
- Buttons should be used for actions, links for navigation.
- The text for these controls should be as descriptive as possible.
