---
title: "How to add a shared parameter to walls in Revit"
description: "Create a shared parameter file, then add the parameter to the Walls category so every wall can store the value."
reviewed: true
updated: 2026-11-27
---

A shared parameter is a field you define once in a text file, so you can reuse it in other projects and schedules. Revit has three kinds of parameters:

- **Project parameters** exist only in the current project.
- **Shared parameters** are defined in a shared parameter file and can be used across projects.
- **Family parameters** belong to a family and are set when the family is built or edited.

This walks through adding a shared parameter to walls, but the steps work for any category. For more detail, search Revit Help (press F1) for project and shared parameters.

## 1. Set up the shared parameter file

1. Go to the **Manage** tab and click **Shared Parameters** in the **Settings** panel.
2. If no file is set, click **Create**, name the file (for example `Project Parameters.txt`), and save it where your team can reach it.

   Many projects already have a shared parameter file set up. Ask your BIM manager before you create a new one.

## 2. Create a group and a parameter

1. In the Shared Parameters dialog, click **New** under **Groups** and name the group (for example `Custom`).
2. Click **New** under **Parameters**.
3. Enter a name (for example `Fire Rated Assembly`), choose a data type (for example **Text**), and click **OK**.

## 3. Add it to the project

1. Go to the **Manage** tab and click **Project Parameters** in the **Settings** panel.
2. Click **Add**, select **Shared parameter**, and click **Select**.
3. Choose the group and the parameter you created, and click **OK**.

## 4. Set the category and scope

1. In the Parameter Properties dialog, check **Walls** under **Categories**.
2. Choose **Instance** if each wall needs its own value, or **Type** if all walls of a wall type share the same value.
3. Choose a group under **Group parameter under**, then click **OK**.

## 5. Check the result

Select a wall. The parameter appears in the **Properties** palette under the group you chose. Enter a test value to confirm it saves.

## Things to watch for

- The shared parameter file must stay available. If it moves, Revit can't add or edit shared parameters until you point to its new location in the Shared Parameters dialog.
- Once a parameter is in the project, you can edit its categories or scope from Project Parameters, but changing it later can affect existing values.
