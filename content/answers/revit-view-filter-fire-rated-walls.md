---
title: "How to color fire-rated walls with a view filter in Revit"
description: "Create a view filter that colors every wall with a 2 HR fire rating in a plan view, without changing the model."
reviewed: true
updated: 2026-11-26
---

A view filter colors or hides elements in one view based on their parameters. This example colors walls whose Fire Rating is 2 HR.

## 1. Open the view

Open the floor plan where you want the coloring.

## 2. Create the filter

1. Go to the **View** tab and click **Filters** in the **Graphics** panel.
2. Click **New**, name the filter (for example `Fire Rated 2 HR`), and click **OK**.
3. Under **Categories**, check **Walls**.
4. Under **Filter Rules**, set **Filter by** to **Fire Rating**, **Equals**, and enter **2 HR**.
5. Click **OK**.

The rule value has to match how the walls store the rating. If your walls use a different format, such as `2HR`, enter it exactly as the walls show it.

## 3. Apply the filter to the view

1. Go to the **View** tab and click **Visibility/Graphics** (or type `VG`).
2. Open the **Filters** tab, click **Add**, select `Fire Rated 2 HR`, and click **OK**.
3. Click the **Override** button for the filter and set a **Projection/Surface** color, then click **OK**.

## 4. Check the result

Matching walls show the color in the view. Walls with other ratings, or with no rating, keep their normal look.

## Things that can block it

- **Blank Fire Rating:** a wall with no value won't match the rule. Fill in the rating on the walls you expect to match.
- **Per view:** the filter applies only to views where you added it. To use it in many views, add it to a view template.
