---
title: "How to apply a view template to a view in Revit"
description: "Assign a view template in the Properties palette so a view takes on its graphics, filters, and detail settings."
reviewed: true
updated: 2026-11-27
---

A view template saves a set of view settings, such as visibility, graphics overrides, filters, and detail level, so you can apply them to many views at once.

## 1. Select the view

Open the view, or select it in the Project Browser.

## 2. Assign the template

1. In the **Properties** palette, find **View Template**. It shows `<None>` or the name of the current template.
2. Click the value to open the **Assign View Template** dialog.
3. Select the template from the list and click **OK**.

## 3. Check the result

Open **Visibility/Graphics** (type `VG`). The settings it controls now show the template's values and are greyed out. To change them, edit the template, not the view.

## Things to know

- **Changing a template updates every view that uses it.** Make a copy before you change a shared template if you want to keep existing views with their previous settings.
- **Overrides in a view are replaced.** Settings you changed directly in the view are replaced when you apply a template.
- **Setting to None:** choose `<None>` in the same dialog to detach the template. The view keeps the settings it got from the template, and you can change them directly.
