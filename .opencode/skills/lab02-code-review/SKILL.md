---
name: lab02-code-review
description: Review Lab02 ArcGIS, GeoJSON, CSS, and static app changes for broken refs, rendering regressions, LoD3 data issues, and stale files.
compatibility: opencode
metadata:
  project: rabbit-lab02
  area: review
---

## Purpose

Use this skill when the user asks for review, QA, validation, or risk assessment of Lab02 changes.

## Review Priorities

1. Broken data references in `src/scripts/settings/app-config.js`.
2. GeoJSON or JSON parse errors under `data/main_data` and `data/decorations`.
3. Missing renderer styles for any `componentId` in `data/main_data`.
4. Regressions in LoD3 evidence metadata: `lodLevel`, `lod3Category`, `lod3Evidence`.
5. Stale refs to deleted paths: `assets/`, `utils/`, `data/geojson`, `data/json`, `js/`, `styles.css`.
6. ArcGIS symbol compatibility issues, especially `polygon-3d`, `point-3d`, `extrude`, and `object` symbol layers.
7. UI regressions in `index.html` and `src/styles`.

## Expected Findings Format

- Lead with findings first.
- Order by severity.
- Include file and line references when possible.
- If there are no findings, say that explicitly and list residual risks.

## Suggested Checks

Use commands equivalent to:

```powershell
node --check "src/scripts/settings/app-config.js"
node --check "src/scripts/map/scene.js"
node --check "src/scripts/controls/map-controls.js"
node --check "src/scripts/scene-bootstrap.js"
```

Then parse all data files and verify configured paths exist.

## Do Not

- Do not rewrite large sections during review unless the user asks for fixes.
- Do not ignore untracked/dirty files; mention relevant risk if review scope is unclear.
