---
name: lab02-lod3-data
description: Work with Lab02 LoD3 GeoJSON layers, semantic component groups, renderer component IDs, and LoD3 evidence metadata.
compatibility: opencode
metadata:
  project: rabbit-lab02
  area: lod3-data
---

## Purpose

Use this skill when changing `data/main_data`, LoD3 layer splitting, `componentId` values, renderers, or popup metadata.

## Current Main Data Files

- `structural-shell.geojson`
- `stairs-and-gates.geojson`
- `facade-trims.geojson`
- `columns.geojson`
- `doors.geojson`
- `windows-and-glass.geojson`
- `balconies.geojson`
- `terraces.geojson`
- `roofs.geojson`
- `skylights.geojson`

## Required Feature Metadata

Every feature in `data/main_data` should include:

- `componentId`
- `componentName`
- `sourceFile`
- `lodLevel` with value `LoD3`
- `lod3Category`
- `lod3Evidence`

## Renderer Rules

- Any `componentId` present in `data/main_data` must have a matching style path in `src/scripts/settings/app-config.js`.
- If adding a new component, add it to `componentStyles` and the appropriate `layerComponents` group.
- Keep layer names semantic and human-readable; avoid numbered or artificial prefixes unless the user requests them.

## LoD3 Evidence Checklist

The model can claim LoD3 when it keeps meaningful architectural details separated, such as:

- doors and windows
- glass panels and crossbars
- columns and beams
- balconies and railings
- roof panels and skylights
- stairs, gates, and facade trims

## Verification

- Parse all GeoJSON files.
- Verify all layer files referenced in `window.layerDefinitions` exist.
- Verify renderer IDs cover all `componentId` values.
- Verify all features have LoD3 metadata.
