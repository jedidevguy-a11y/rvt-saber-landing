---
title: "How to link another Revit model into your project"
description: "Insert a Revit model as a link with Insert > Link Revit, choose positioning, and reload or unload it later."
reviewed: true
updated: 2026-11-27
---

A linked model is a separate Revit file that appears in your project for coordination. You can view and check it, but you can't edit its elements from your model.

## 1. Start the link

1. Go to the **Insert** tab.
2. In the **Link** panel, click **Link Revit**.

The **Link Revit** button is greyed out in sheet, schedule, drafting, and legend views. Switch to a plan, section, or 3D view first. You can also add a link from the Manage Links dialog.

## 2. Choose the file and positioning

1. Browse to the `.rvt` file and select it.
2. Under **Positioning**, choose one of these:
   - **Auto - Origin to Origin:** aligns the linked model's origin with your model's origin.
   - **Auto - Center to Center:** aligns the centers of the two models, useful when both are centered on the same spot.
   - **Auto - By Shared Coordinates:** uses the shared coordinate system of both models.
   - **Manual - Origin**, **Manual - Base Point**, or **Manual - Center:** lets you place the linked model by hand.
3. Click **Open**.

## 3. Check the link

1. Go to the **Manage** tab and click **Manage Links** in the **Manage Project** panel.
2. Confirm the link shows as **Loaded** and check its path.

## 4. Update or remove the link later

- **Reload:** in **Manage Links**, click **Reload** to pull in the latest saved version of the linked file.
- **Unload:** click **Unload** to hide the link without deleting it. Reload brings it back.
- **Remove:** click **Remove** only if you no longer need the link.

## Things to know

- **File path:** the linked file must stay in the path Revit saved. If it moves, use **Reload From** to point to the new location.
- **Coordination:** positioning only places the model. Check that levels and grids line up after linking.
- **Read-only:** you can't edit linked elements from the host model. Make changes in the linked file.
- **Workset:** many workshared projects place links on a specific workset. Check your standards before you link. If you change the workset later, check both the instance and type workset of the link.
