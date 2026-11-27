---
title: "How to change the detail level of a view in Revit"
description: "Switch a view between Coarse, Medium, and Fine detail, and understand what changes on screen and in the model."
reviewed: true
updated: 2026-11-27
---

Detail level controls how much a view shows, such as cut patterns, edge lines, and some family detail. It applies to one view and doesn't change the model.

## 1. Open the view

Open the view you want to change.

## 2. Set the detail level

Use either method:

- **View control bar:** at the bottom of the drawing area, click the **Detail Level** icon and choose **Coarse**, **Medium**, or **Fine**.
- **Properties palette:** select the view in the Project Browser, find **Detail Level** under **Graphics**, pick a value, and click **Apply**.

## 3. Check the result

Compare the view before and after. Some elements, such as walls, show more layer and pattern detail at Medium and Fine. Some family types show extra detail only at Fine.

## Things to know

- **Family design decides the change:** a family shows different geometry at each detail level only if it was built with those representations. Some families look the same at every level.
- **Per view:** each view keeps its own detail level. Set it in each view, or set it in a view template to apply it everywhere.
- **No model change:** switching detail level doesn't change the elements or their parameters.
