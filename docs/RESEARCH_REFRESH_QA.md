# Research refresh validation — November 6, 2026

PR: https://github.com/AkshajKashyap/akshaj-portfolio/pull/1

## Changes completed

- Retained the PR's Plaxco/Sherwood updates, profile metadata, Accel-Sim skill,
  and MatchStream homepage placement.
- Fixed the unescaped apostrophe in the About JSX that failed lint.
- Scoped V100/H200 trace analysis to work begun with quantitative evaluation
  ongoing. Removed the extra benchmark-source boundary-effects assertion.
  The 28,717-cycle Pathfinder result is explicitly simulated V100 execution;
  cache investigations remain proposed experiments.
- Gave MatchStream a full-width image/text row on the homepage from the tablet
  breakpoint and on the project archive at wide desktop sizes. The archive
  retains paired cards on tablets and all cards stack on mobile. This removes
  the orphan MatchStream row without changing the existing featured cards.
- Copied the newly compiled canonical SWE resume to both portfolio PDF paths.

The original checkout's nine modified documentation files and untracked audit
were left out of this PR. Before integration, all 63 original non-Git,
non-dependency/build files were backed up and verified unchanged. The existing
PR branch already contains the current `main`; no force push or reset was needed.

## Validation

```sh
npm ci --no-audit --no-fund
npm run lint
npx --no-install tsc --noEmit --incremental false
npm run build
```

All commands passed on the final source, using Next.js 16.2.11. The production
build generated all six static pages successfully. No dependencies or lockfile
were changed. The dependency install was not a security audit.

Ran headless Chromium against the local production server for `/` and `/projects`
at 1440, 768, 390, and 320 px: eight successful route/viewport scenarios.

- HTTP 200 for both routes, all images loaded, and no horizontal overflow.
- No browser console errors or uncaught page errors.
- Inspected rendered desktop/mobile homepage, MatchStream, research, About, and
  project archive screenshots. No clipping or overlapping text was observed.
- Confirmed MatchStream is visible with its screenshot, 3,549-event result,
  repository link, system-design link, and qualified local measurements.
- Existing four featured projects retained their positions and dimensions
  within one pixel in all eight scenarios compared with the initial PR build.
- Verified desktop/mobile navigation to Projects; mobile menu opens, closes
  with Escape, and returns keyboard focus. Existing anchor targets and contact
  links remain present.
- Both resume URLs returned HTTP 200 and `application/pdf`, with exact canonical
  SWE bytes. `robots.txt` and the generated icon also returned HTTP 200.
- Verified the research section includes seven exploratory fits, ongoing SACMES
  work, the simulated V100 baseline, and ongoing trace evaluation.
- `git diff --check` passed; only intended source, PDF, and this QA record were
  staged.

## Canonical resume identity

All three files are one-page PDFs and have SHA-256:

```text
ee945b34d87acb0484142c77fecb50fa340d0a9ef92e0d9785f5a8e71af3cb30
```

- Resume repository: `swe.pdf`
- Portfolio: `public/documents/swe.pdf`
- Portfolio legacy path: `public/documents/resume.pdf`

The resume repository separately verified four LaTeX variants and the ML
`current.pdf` alias. Its `RESEARCH_REFRESH_QA.md` records every PDF hash.

## Release boundary

Local validation is complete. This record does not claim review of the final
Vercel preview or a production deployment. Keep preview availability and review
separate from the completed local checks. No production deployment or PR merge
was performed.
