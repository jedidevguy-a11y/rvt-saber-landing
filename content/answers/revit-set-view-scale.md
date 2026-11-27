---
title: "How to change a view's scale in Revit"
description: "Set a view to a drawing scale such as 1/4 inch equals 1 foot, use a custom scale, and see how scale affects annotations."
reviewed: true
updated: 2026-11-27
---

View scale sets how big the model appears on the printed sheet. Model elements keep their real size. Annotations such as text and tags are sized to print at the same height at any scale.

## 1. Open the view

Open the plan, section, or elevation you want to change.

## 2. Set the scale

Use either method:

- **View control bar:** at the bottom of the drawing area, click the current scale, such as `1/8" = 1'-0"`, and pick a scale from the list.
- **Properties palette:** select the view, find **Scale** under **Graphics**, and choose a value.

For a scale that isn't in the list, choose **Custom** and enter the values you need.

## 3. Check the result

Model elements stay the same size. Text and tags keep their printed height. Check the view on a sheet if you're planning the print size.

## Things to know

- **Per view:** each view has its own scale. Set it in each view, or set it in a view template.
- **Sheets:** a view placed on a sheet uses the scale set in the view, so set it before you finish the sheet layout.
- **Check annotations:** after a scale change, check text and tags, since some annotation families only look right at certain scales.
