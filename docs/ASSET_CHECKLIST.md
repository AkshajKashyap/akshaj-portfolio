# Asset Checklist

The portfolio ships the verified résumé plus one purposeful rendered project visual. No stock imagery or generic AI artwork is used.

| Asset | Required before launch | Expected location / format | Status |
| --- | --- | --- | --- |
| Resume PDF | Yes | `public/documents/resume.pdf`; accessible, text-selectable PDF | Present: copied unchanged from verified `~/Career/resume/current.pdf` |
| GitHub profile URL | Yes | Verified `https://github.com/...` destination | Present: verified in resume source and repository remotes |
| LinkedIn URL | Recommended | Verified `https://www.linkedin.com/in/...` destination | Present: verified in resume source |
| Contact email | Yes | Public address or deliberately chosen contact alias | Present: verified in resume source |
| Project repository URLs | Per published project where shareable | Exact repository links | Present for all published projects |
| Live demo URLs | When a public demo exists | Exact HTTPS links | Missing/unverified |
| Documentation URLs | When separate from repository | Exact URLs | Present where verified; absent links are omitted |
| CUDA architecture visual | Required for this update | `public/images/projects/cuda-transformer-runtime-architecture.svg`, 16:9 | Present |
| MatchStream dashboard crop | Retained but not rendered | `public/images/projects/matchstream-dashboard.png`, approximately 16:9 | Present; MatchStream is now an archive row and the file is left unchanged |
| Charts/evaluation figures | Only when they add verified evidence | Export with readable labels and documented data context | Missing/unverified |
| Profile image decision | No | Intentionally omit; do not add a placeholder portrait | Omitted |
| Open Graph image | Recommended | `public/og.png` or Next metadata-generated image; 1200×630px | Deferred: no verified production domain for stable social-image URLs |
| Favicon | Yes | Replace starter `src/app/favicon.ico` with approved mark, or retain a simple generated monogram | Present: generated AK monogram in `src/app/icon.tsx` |

## Per-image requirements

- Use descriptive filenames tied to project slugs.
- Provide accurate alt text; keep the visible project summary and evidence adjacent so the image never carries the claim alone.
- Remove sensitive data, private endpoints, credentials, and unreadable tiny UI before export.
- Use visuals created by Akshaj or assets with clear rights; do not use generic stock imagery.
- Optimize raster files and keep the original editable source outside public delivery assets when possible.

## Pre-launch verification

- Open every resume, repository, demo, documentation, social, and email link.
- Verify project claims against their repository, report, notebook, or evaluation artifact.
- Check screenshot readability on a 375px-wide screen and desktop.
- Confirm metadata title, description, Open Graph preview, and favicon after final identity details are supplied.
