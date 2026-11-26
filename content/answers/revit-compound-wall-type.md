---
title: "How to create a layered wall type in Revit (stud, drywall, and exterior insulation)"
description: "Build a multi-layer wall type in Revit with a stud core, interior drywall, and exterior insulation, then check the layer order in a section view."
reviewed: true
updated: 2026-11-26
---

This walks through building a wall type with three layers: exterior insulation, a 3.5 inch stud core, and 5/8 inch interior drywall. It's written for Revit's standard wall types. Work on a duplicate so the original type stays unchanged.

## 1. Duplicate a wall type

1. Select any wall in a plan or 3D view.
2. In the **Properties** panel, click **Edit Type**.
3. Click **Duplicate**, name the new type (for example, `Ext Wall - Stud 3.5 - Insul 1`), and click **OK**.

## 2. Open the layer structure

1. In the Type Properties dialog, under **Construction**, click **Edit** next to **Structure**.
2. The layers are listed from the exterior side at the top to the interior side at the bottom.

## 3. Build the layers

Use the **Insert**, **Delete**, **Move Up**, and **Move Down** buttons to get the layers in this order:

| Order (exterior to interior) | Function | Material | Thickness |
|---|---|---|---|
| 1 | Finish 1 [Exterior] | Insulation | 1" |
| 2 | Structure [Core Boundary] | Wood framing (or your framing material) | 3-1/2" |
| 3 | Finish 2 [Interior] | Gypsum wallboard | 5/8" |

To set a layer's function, click its **Function** cell and choose from the list. To set its material, click the **Material** cell and pick one from the Materials list, or create a new one.

## 4. Check the wrapping settings

The **Wrapping** section at the bottom of the dialog controls how layers wrap at openings and at the ends of the wall. It doesn't control exterior corners. Leave these at the defaults unless you have a specific detailing need.

## 5. Check the result in a section

1. Click **OK** to close the dialogs.
2. Open a section through the wall, or create one from a plan.
3. Confirm the insulation is on the exterior side and the drywall is on the interior side.

## What this model does and doesn't show

Revit treats each layer as a full, continuous layer across the wall. It doesn't place individual studs. That's fine for documentation and quantity takeoffs, but it doesn't show stud spacing. If you need stud-by-stud framing in the model, use a detailed framing family or an add-in made for that purpose.
