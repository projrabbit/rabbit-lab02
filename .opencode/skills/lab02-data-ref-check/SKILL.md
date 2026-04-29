---
name: lab02-data-ref-check
description: Validate Lab02 data references, ArcGIS layer paths, decoration files, media refs, JSON parsing, and stale folder references.
compatibility: opencode
metadata:
  project: rabbit-lab02
  area: data-validation
---

## Purpose

Use this skill after changing files in `data/`, `src/scripts/settings/app-config.js`, `index.html`, or any decoration/media paths.

## What To Validate

- All `window.assetPaths.decorativeGraphics` files exist.
- All `window.layerDefinitions` GeoJSON files exist under `window.assetPaths.geojsonBasePath`.
- Every `.json` and `.geojson` file under `data/main_data` and `data/decorations` parses successfully.
- `index.html` local `src` and `href` refs exist.
- No stale source refs remain for removed folders or files.

## Stale Ref Patterns

Check for these unless the user intentionally restored them:

- `data/geojson`
- `data/json`
- `./js/`
- `./assets/`
- `./utils/`
- `styles.css`
- `flagpole`
- `le-duan`
- `hcm-portrait`

## Validation Script Shape

Use Node from the project root to load `src/scripts/settings/app-config.js` with `global.window = global`, then test `fs.existsSync` for configured paths.

## Output

- Report pass/fail for JSON parsing.
- Report pass/fail for configured data refs.
- Report any stale refs with filenames.
- Keep the summary short unless failures need details.
