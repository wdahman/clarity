---
title: Overview
toc: true
---

# Combobox

A combobox is a complex element, which can be considered as a combination of two elements - a dropdown list and a text input. The text input is used for quick search and filtering of the predefined options from the dropdown list.

## Usage

Use a combobox when you need to have a list of options with search and filtering capabilities. This is a common pattern in web UI and is similar to the native datalist. In contrast to the datalist, a combobox features multiple selection and possibility to build richer UI for each option in the list, with images and styling. Adding free text input that is not part of the predefined list is not supported in the combobox.

## Types

The combobox can be configured in several different ways, depending on how the options are loaded, whether a single value or multiple values can be selected.

### List of simple static options.

This simple type of combobox features declarative list of options. It's suitable for smaller, static lists.

### Single selection list of data-driven options.

This type is dynamic and is generated from an array of data. The user supplies a template which tells how any option will be displayed in the list. When an option is selected, its display name gets populated in the search box.

### Multi selection list of data-driven options.

The multi select combobox is similar to the single select one, as it is data driven and allows for detailed configuration of the option display. After selection is made, a pill is created that corresponds to the selected item. Multi selection is achieved by subsequent selection from the drop down list, adding pills to the pills list.

### Asynchronous list of options, either single or multi selectable.

The asynchronous scenario allows for lazy loading of the preselected options. There is a "loading" spinner and message that's displayed before the options load is complete.

## Anatomy

As part of the forms elements collection, the Combobox has a label, that can be vertically or horizontally aligned to it. It also has a condensed mode, that occupies less space.
It has helper text and error/success message area. The component itself has a text input where the users enter the search text and a dropdown area, with a list of predefined options which can be styled by the user. The multi select version of the combobox has a list of pills that is situated before the text input. These pills all feature a delete button, and can also be styled, similarly to the options.
