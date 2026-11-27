---
title: "How to tag all rooms in a view in Revit"
description: "Place room tags on every placed room in a plan view at once using Tag All, and only tag rooms that don't have a tag yet."
reviewed: true
updated: 2026-11-27
---

Use this when a plan has many rooms and you want a room tag on each one without placing them one at a time. Rooms must already be placed in the view.

## 1. Open the plan

Open a floor plan view that shows the rooms you want to tag.

## 2. Start Tag All

1. Go to the **Annotate** tab.
2. In the **Tag** panel, click **Tag All**.

## 3. Choose the category and tag

1. In the dialog, check **Rooms** in the category list.
2. In the loaded tags list, choose your room tag (for example **Room Tag with Area**).
3. Check **Leader** only if you want leader lines.
4. Click **OK**.

Revit places a tag on each room in the view that doesn't have one yet.

## 4. Check the result

Look over the plan for tags that overlap. Drag a tag to move it. Tags follow their room if the room moves.

## Things that can block it

- **Unplaced rooms:** a room has to be placed inside an enclosed area to get a tag. Unplaced rooms are not tagged.
- **Missing tag:** if the room tag isn't in the list, go to the **Insert** tab, click **Load Family** in the **Load from Library** panel, load the tag, and run Tag All again.
- **Tags on other views:** each view has its own tags. Tag each plan separately.
