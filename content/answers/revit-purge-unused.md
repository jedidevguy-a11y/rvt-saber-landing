---
title: "How to purge unused families and types in Revit"
description: "Use Purge Unused to remove families, types, and other items nothing in the model uses, and what to check before you purge."
reviewed: true
updated: 2026-11-27
---

Purge Unused removes loaded families, types, and similar items that nothing in the model is using. It can reduce file size and clutter in the Project Browser. It doesn't delete anything placed in the model.

## Before you start

Purged items aren't available until you load them again. To purge only certain items, click **Check None** in the dialog, then check just the items you want to remove. Purge can't be undone after you save.

## 1. Open Purge Unused

Go to the **Manage** tab and click **Purge Unused** in the **Settings** panel.

## 2. Review the list

The dialog lists unused items by category. Expand a category to see its items.

- Uncheck anything you want to keep, such as a title block or a family you're about to place.
- Leave checked anything you don't need.

## 3. Purge and repeat

1. Click **OK**.
2. Run **Purge Unused** again. Removing one item may leave another one unused, so continue until the dialog is empty or shows only items you want to keep.

## 4. Save

Save the model. Compare the file size to your backup.

## Things that can block it

- **Items used in views, sheets, or schedules** count as used, so they won't be purged.
- **Linked models** aren't purged from the host model.
- **Worksharing:** in a workshared model, you may need the right workset permissions. Check with your BIM manager before purging.
