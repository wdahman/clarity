---
title: Overview
toc: true
---

# Accordion

An accordion is a collection of vertically stacked sections with multiple content areas which may be expanded or minimized by the user to reveal their content.

## Usage

An accordion delivers large amounts of content in a small space through progressive disclosure. The header title give the user a high level overview of the content allowing the user to decide which sections to read. This is useful when the set of information is large or you want to enable users to reveal more complex or less frequently used data as necessary.

Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content. If a user is likely to read all of the content then don’t use an accordion as it adds the burden of an extra click; instead use a full scrolling page with normal headers.

## Anatomy

Accordions are a collection of panels that encapsulate a title and content. You can read more about [ClrAccordionTitle](/components/accordion/api.html#clraccordiontitle) and [ClrAccordionContent](/components/accordion/api.html#clraccordioncontent) in the API section.

Accordion titles use **13px Clarity City Medium** font. The default content font is **14px Clarity city Regular**.

When the selected panel is open the panel header has a highlight.

## Behavior

Accordions expand and collapse showing / hiding the data in a section when the user clicks on the panel header. Accordions by default only allow one panel to be open at a time. Multiple open panels are an available implementation option.

## Placement

Accordions are designed for use in the main content area.

## Content

Keep text as brief as possible especially in header sections which should convey the nature of the content without overflow

## Code & Examples

Accordions by default only allow one panel to be open at a time. To enable multiple panels set `clrAccordionMultiPanel="true"` on the [clr-accordion component]().

Leverage our optional \*clrIfExpanded structural directive on the clr-accordion-panel to only instantiate children when they are displayed.

### Basic Accordion

![Basic Accordion](/images/components/accordion/basic-accordion.gif)
<doc-demo src="/demos/accordion/basic.html" />
