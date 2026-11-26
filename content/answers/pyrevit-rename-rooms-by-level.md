---
title: "How to rename all Revit rooms with the level name using pyRevit"
description: "A pyRevit script that adds each room's level name to the front of its room name, with a guard against running it twice."
reviewed: true
updated: 2026-11-26
---

This pyRevit script renames every placed room in the active model so each name starts with its level, for example `Level 1 - Office`. It skips unplaced rooms and rooms that already have the prefix, so running it twice won't double the names.

## The script

Save this as `script.py`:

```python
# -*- coding: utf-8 -*-
__title__ = "Rename Rooms\nby Level"
__doc__ = "Prepends the level name to every room name in the active model."

from pyrevit import revit, DB, script
import sys

output = script.get_output()
doc = revit.doc

# Collect room instances (not the Room type definitions)
rooms = DB.FilteredElementCollector(doc)\
          .OfCategory(DB.BuiltInCategory.OST_Rooms)\
          .WhereElementIsNotElementType()\
          .ToElements()

if not rooms:
    output.print_md("**No rooms found in the model.**")
    sys.exit()

renamed = []
skipped = []

with revit.Transaction("Rename Rooms by Level"):
    for room in rooms:
        # Unplaced rooms have no location, so skip them
        if room.Location is None:
            skipped.append("Unplaced room (ID {})".format(room.Id))
            continue

        level = doc.GetElement(room.LevelId)
        name_param = room.get_Parameter(DB.BuiltInParameter.ROOM_NAME)
        current_name = name_param.AsString()

        if level is None:
            skipped.append("'{}' has no level".format(current_name))
            continue

        # Don't add the prefix twice if the script runs again
        if current_name.startswith(level.Name + " - "):
            skipped.append("'{}' already has the prefix".format(current_name))
            continue

        new_name = "{} - {}".format(level.Name, current_name)
        name_param.Set(new_name)
        renamed.append("{} → {}".format(current_name, new_name))

output.print_md("## Renamed ({})".format(len(renamed)))
for entry in renamed:
    output.print_md("- " + entry)

if skipped:
    output.print_md("## Skipped ({})".format(len(skipped)))
    for entry in skipped:
        output.print_md("- " + entry)
```

## Install it as a pyRevit button

pyRevit finds buttons by folder name, so the structure has to match:

```
MyExtension.extension/
└── MyTools.tab/
    └── Rooms.panel/
        └── RenameRooms.pushbutton/
            └── script.py
```

Put the `MyExtension.extension` folder where pyRevit looks for extensions, then use **pyRevit → Reload** to load the new tab.

## How it works

- **Collecting rooms:** `WhereElementIsNotElementType()` keeps room instances and leaves out the Room type definitions.
- **Unplaced rooms:** an unplaced room has no location and no level, so the script skips it. Otherwise reading its level would fail.
- **Running it twice:** the check for the existing prefix means a second run only reports what it skipped.
- **Transaction:** `revit.Transaction` is pyRevit's wrapper around a Revit transaction. It commits the changes when the script finishes, and rolls them back if an error stops it.

## Things that can block it

- **Read-only parameter errors:** rooms in a linked model can't be edited from the host model. Run the script in the model that owns the rooms.
- **Rooms in groups:** group members may not accept parameter changes. Ungroup them first.
- **Worksharing:** in a workshared model, rooms owned by another user can't be changed until that user releases them.
- **Phases:** the collector returns rooms from every phase. If the project uses phases, add a filter for the phase you want before renaming.
