---
title: Overview
toc: true
---

# Tree view

A tree is a hierarchical component that gives users access to a hierarchical set of objects dispalyed in a the parent-child relationship.

## Usage

Use a tree view to visually display hierarchical information. The user can expand, collapse, and select a tree node within a tree view.

## Types

### Basic Tree

<ClrRow>
<ClrCol>
<p>
A basic tree provides a tree structure with named nodes and an arrow to expand and collapse child nodes.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Basic Tree" src="/images/components/tree-view/basic-tree.png" />
</DocInset>
</ClrCol>
</ClrRow>

### Basic Tree With Icons

<ClrRow>
<ClrCol>
<p>
A tree can include icons to represent the type of nodes within that group. Icons appear between the collapse/expand arrow and the parent node title.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Basic Tree" src="/images/components/tree-view/icon-tree.png" />
</DocInset>
</ClrCol>
</ClrRow>

### Checkbox Tree

<ClrRow>
<ClrCol>
<p>
A checkbox tree features checkboxes between the collapse/expand arrow and the name to indicate whether a node is selected. A parent node with children that are both selected and not selected is shown with an “indeterminate” state.
</p>
<p>
Checkbox trees should not be used together with icons for the nodes. As with icon trees, make sure to put checkboxes on all nodes of a checkbox tree. Do not alternate between types of trees in a checkbox tree.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Basic Tree" src="/images/components/tree-view/checkbox-tree.png" />
</DocInset>
</ClrCol>
</ClrRow>

## Anatomy

The styling of each piece of a tree node is consistent across the different types of trees.

### Touch Targets

<ClrRow>
<ClrCol>
<div>
The dimensions of the expand/collapse arrow and the node title allow for a comfortable touch target allowing use with a mouse or a touch screen.
</div>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Tree view touch targets" src="/images/components/tree-view/touch-tree.svg" />
</DocInset>
</ClrCol>
</ClrRow>

<cds-alert status="warning" closable="false">
<cds-alert-content>
<div>Touch Targets are relevant even outside of a mobile form factor. Many new desktop environments, especially those running Windows, allow for the use of a touch screen and should be considered when designing your applications.</div>
</cds-alert-content>
</cds-alert>

## Behavior

Common terminology that explains tree behavior.

<ClrRow>
<ClrCol>
<div class="custom-block">
<strong>Highlight</strong>
<p>Click on a node in the tree to either “highlight” it or navigate to its relative content.</p>
</div>
</ClrCol>
<ClrCol>
<div class="custom-block">
<strong>Select</strong>
<p>Choose items to apply an action. For example, selecting a checkbox in the tree.</p>
</div>
</ClrCol>
<ClrCol>
<div class="custom-block">
<strong>Expand / Collapse</strong>
<p>Use the arrow to the left of a node to expand or collapse a node in the tree.</p>
</div>
</ClrCol>
</ClrRow>

### Interacting With Nodes

#### Expanding / Collapsing Nodes

<ClrRow>
<ClrCol>
<p>
To expand or collapse a parent node, the user clicks on the expand/collapse arrow. Clicking on the node item itself does not expand or collapse a node. It serves as a highlighting mechanism.
</p>
<p>
In read-only trees where highlighting is not an option, this pattern remains true for consistency.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Expand and collapse tree node" src="/images/components/tree-view/expand-collapse-node.png" />
</DocInset>
</ClrCol>
</ClrRow>

#### Highlighting Tree Nodes

<ClrRow>
<ClrCol>
<p>
To navigate to a content area based on a tree node or to highlight a tree node in order to take a subsequent action based on the selection, a user clicks on the node title itself.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Expand and collapse tree node" src="/images/components/tree-view/highlight-node.png" />
</DocInset>
</ClrCol>
</ClrRow>

[//]: # 'IMAGE - dashboard'

#### Interacting With Checkbox Trees

<ClrRow>
<ClrCol>
<p>
With a checkbox tree, a user is able to perform one or a combination of three actions by clicking on one of three distinct targets:
</p>
<ol class="custom-block">
<li class="custom-block">Expanding and Collapsing: a user is able to perform this action by clicking on the expand / collapse arrow.</li>
<li class="custom-block">Checking a Checkbox: this would require clicking on the checkbox itself to check or uncheck a treenode. This will also affect the status of the parent node’s checkbox.</li>
<li class="custom-block">Highlighting Tree Node: a user can highlight a tree node by clicking on the name (label) of the tree node. This allows for the possibility of loading content based on selection to provide more information on a tree node.</li>
</ol>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Interacting with checkboxes" src="/images/components/tree-view/checkbox-interaction.png" />
</DocInset>
</ClrCol>
</ClrRow>

[//]: # 'IMAGE - view privileges'

### Loading Data

The way to load data within the tree is based on the scenario in which the tree is being used.

<ClrRow>
<ClrCol>
#### Load Parent Nodes First
<p>With a dynamic tree, make sure to load the parent nodes first and then lazy load child nodes when requested.</p>

<p>A general goal to keep in mind is that you want to minimize the time a user needs to spend before their first interaction with the tree as well as every subsequent interaction afterwards.</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Loading data" src="/images/components/tree-view/loading-node.png" />
</DocInset>
</ClrCol>
</ClrRow>

## Code & Examples

### Basic Tree

A basic tree can be created by simply nesting `clr-tree-node` components at will. To pre-expand a node, you can use the `[clrExpanded]` input.

<cds-alert status="info" closable="false">
<cds-alert-content>
<div>Please note that every tree requires to have root node to work properly, this is done by having clr-tree as root wrapper, please check the example below.</div>
</cds-alert-content>
</cds-alert>

![Basic Tree](/images/components/tree-view/basic-tree-demo.png)
<doc-demo src="/demos/tree-view/basic-ng.html" demo="/demos/tree-view/empty-css.html"/></doc-demo>

### Tracking Expanded Nodes

Use two-way binding `[(clrExpanded)]="expanded"` on the [clrExpanded](/components/tree-view/api.html#properties) property to track when a node is expanded or collapsed.
<doc-demo src="/demos/tree-view/expanded-ng.html" demo="/demos/tree-view/empty-css.html"/></doc-demo>

### Routing With A Tree

Use the `.clr-treenode-link` class to style content inside of a Tree Node as clickable. Indicate an active Tree Node with the `.active` class combined with the `.clr-treenode-link` class.
<doc-demo src="/demos/tree-view/routed-ng.html" demo="/demos/tree-view/empty-css.html"/></doc-demo>

### Checkbox Tree

Use checkbox when nodes of the tree need to be selected or unselected by users. There are three parts that are needed to implement a [ClrTree](/components/tree-view/api.html#clrtree) with checkbox controls.

1. Data structured in a tree hierarchy
1. The correct declaration on the [ClrTreeNode](/components/tree-view/api.html#clrtree)'s that need to be selectable
1. A ClrSelectedState for each node that is selectable

<ClrRow class="custom-block">
<ClrCol>
<ClrImage title="Checkbox Tree" src="/images/components/tree-view/checkbox-tree-demo.png" />
</ClrCol>
<ClrCol>

#### Checkbox JSON

<doc-demo src="/demos/tree-view/checkbox.json" demo="/demos/tree-view/empty-css.html" toggle="false" />
</ClrCol>
</ClrRow>

#### Checkbox Element

<doc-demo src="/demos/tree-view/checkbox-ng.html" demo="/demos/tree-view/empty-css.html" />

#### Checkbox TypeScript

<doc-demo src="/demos/tree-view/checkbox.ts" demo="/demos/tree-view/empty-css.html" />

### Binding To A Selection

### Recursive Tree

### Lazy Loading Child Nodes

### Lazy Loading And Selection

### Lazy Loading Recursive Trees
