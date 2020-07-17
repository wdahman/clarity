---
title: Overview
toc: true
---

A dropdown menu is a contextual list that allows the user to choose an option that take an immediate action or navigate the user to another view. The source of the dropdown is usually a button.

<ClrImage src="/images/components/dropdown/order_details.png" />

## Usage
Use a dropdown to show a list of options that take an immediate action or navigate the user to another view. The menu should be ordered by usage, except for destructive actions, which should be at the bottom. The button that trigger the dropdown menu can contain either text or an icon.

Disable a menu item if:
- The user doesn’t have permissions for the action
- An applicable object is not currently selected


[//] # DEMO - dropdown vs select

<ClrRow>
<ClrCol>
<ClrImage src="/images/components/dropdown/basic-dropdown.png" />
<p>Dropdown menus present a list of options that take an immediate action or navigate the user outside of the current context.</p>
</ClrCol>
<ClrCol>
<select id="selects_3">
    <option>New York</option>
    <option>San Francisco</option>
    <option>Austin</option>
    <option>Paris</option>
    <option>Seattle</option>
</select>

<p>Select boxes present a list of options that the user can choose from and apply to an input field.</p>
</ClrCol>
</ClrRow>



## Behavior
Clicking on the toggle opens the dropdown
By default, selecting a menu item or clicking outside the menu dismisses the menu. You can change this behavior to keep the menu open on item selection

[//]: ## Anatomy - Default line height is 30 px; 36 px for x-small breakpoint (<544px) touch targets. Headers and or dividers may be used to organize a longer list of items. Menu width: Minimum 168 px; Maximum 336 px. Items in the list have hover and click states.

### Nested Menu
Nested menus are an extension of dropdown menus. Use a nested dropdown menu to save screen space by organizing a long list of items into categories that the user can click to reveal deeper levels. Nested menu should be no more than three levels, root menu plus up to two levels of nested menus.

[//]: ### Anatomy - Same visual style as standard dropdown menu with the exception of a darker border (#9A9A9A); Slight overlap (4px) over root menu to emphasize stack order; Width: Minimum 168 px; Maximum 336 px; Default line height is 30 px; 36 px for x-small breakpoint (<544px)

### Behavior
- With mouse: Click group name to reveal nested menus. Group name stays in selected state to serve as a breadcrumb
- Clicking outside of the menu dismisses all menus

[//] # IMAGE - 3 level nested menus (animals)



## Placement

By default, a dropdown opens from the bottom of the toggle, along the left side. You can change the placement by using one of the eight direction classes.

[//] # IMAGE - 8 directions

Default placement and stack order
By default a nested menu pops up on the right side of its root menu.

[//] # IMAGE - 3 level nested menus left to right

### Dropdown nested menu
Small screen / responsive placement and stack order (<544px)
If screen space isn’t available to the right of the root menu, the nested menu appears on the left side. If there is a second nested menu, it appears to the right of the first nested menu, creating a zig-zag pattern.

[//] # IMAGE - 3 level nested zig-zag

[//]: # Content
[//]: - Keep the text short and concise. Long menu items are truncated from the end and an ellipsis added
