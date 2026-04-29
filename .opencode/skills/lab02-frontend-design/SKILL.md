---
name: lab02-frontend-design
description: Improve the Lab02 ArcGIS 3D viewer UI while preserving the light, compact interface and Independence Palace visual language.
compatibility: opencode
metadata:
  project: rabbit-lab02
  area: frontend
---

## Purpose

Use this skill when changing `index.html`, `src/styles/*.css`, or UI wiring under `src/scripts/controls` for the Lab02 3D GIS viewer.

## Project Context

- The app is a static ArcGIS API for JavaScript 4.16 page.
- The default interface is light mode.
- UI should stay compact and not cover the 3D scene.
- The current controls are the basemap selector, reset view button, and camera info panel.
- The visual language should stay close to Independence Palace: warm limestone, muted olive, aged bronze, and soft shadows.

## Design Rules

- Keep `gray-vector` as the default basemap unless the user explicitly asks otherwise.
- Keep basemap options short: usually 2-3 choices only.
- Do not re-add location info, image modals, or large static info cards unless explicitly requested.
- Preserve mobile usability with `max-width: 700px` CSS behavior.
- Prefer small, readable controls with enough contrast over decorative UI.
- Avoid dark theme unless explicitly requested.

## Files To Check

- `index.html`
- `src/styles/theme.css`
- `src/styles/layout.css`
- `src/styles/components.css`
- `src/scripts/controls/map-controls.js`

## Verification

- Check local HTML refs still exist.
- Run JS syntax checks for `src/scripts/**/*.js`.
- Confirm there are no stale refs to removed folders such as `assets/` or `utils/`.
