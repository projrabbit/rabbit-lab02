---
name: lab02-pr-checklist
description: Prepare a concise PR summary and verification checklist for Lab02 changes involving ArcGIS viewer code, LoD3 data, UI, and README updates.
compatibility: opencode
metadata:
  project: rabbit-lab02
  area: pull-request
---

## Purpose

Use this skill when preparing a pull request summary, PR body, change checklist, or release-style summary for Lab02.

## PR Summary Template

```markdown
## Summary
- <main change 1>
- <main change 2>
- <main change 3>

## LoD3/Data Changes
- <data files added/renamed/split>
- <component or renderer changes>

## UI Changes
- <index/styles/control changes>

## Verification
- [ ] JS syntax checks passed
- [ ] JSON/GeoJSON parse checks passed
- [ ] Configured data refs exist
- [ ] Renderer component IDs match data component IDs
- [ ] No stale refs to removed folders/files
```

## Lab02-Specific Notes

- Mention if `data/main_data` structure changes because this affects layer loading.
- Mention if `src/scripts/settings/app-config.js` changes because it controls paths, renderers, and layer names.
- Mention if `README.md` changes because project metadata and run instructions are graded deliverables.
- Keep wording concise and focused on why the changes matter for Lab02.

## Commands To Consider

- `git status --short`
- `git diff --stat`
- JS syntax checks with `node --check`
- JSON parse and data ref validation scripts

## Do Not

- Do not create commits or PRs unless explicitly asked.
- Do not include unrelated dirty worktree changes in the PR summary without flagging them.
