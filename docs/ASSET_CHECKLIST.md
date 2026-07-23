# Asset Checklist

No portfolio-specific public assets are currently present. `public/documents/` and `public/images/projects/` are intentionally empty placeholder directories; the existing SVG files are Next.js starter assets and should not be used in the final portfolio.

| Asset | Required before launch | Expected location / format | Status |
| --- | --- | --- | --- |
| Resume PDF | Yes | `public/documents/resume.pdf`; accessible, text-selectable PDF | Present: copied unchanged from verified `~/Career/resume/current.pdf` |
| GitHub profile URL | Yes | Verified `https://github.com/...` destination | Present: verified in resume source and repository remotes |
| LinkedIn URL | Recommended | Verified `https://www.linkedin.com/in/...` destination | Present: verified in resume source |
| Contact email | Yes | Public address or deliberately chosen contact alias | Present: verified in resume source |
| Project repository URLs | Per published project where shareable | Exact repository links | Present for all published projects |
| Live demo URLs | When a public demo exists | Exact HTTPS links | Missing/unverified |
| Documentation URLs | When separate from repository | Exact URLs | Missing/unverified |
| Featured project visual | Optional for version one | `public/images/projects/<slug>.webp` or `.png`, 16:9, 1600px wide target; SVG preferred for diagrams | Omitted cleanly; no approved assets available |
| Additional architecture diagrams | Only when they clarify the build beyond the featured visual | SVG preferred; otherwise high-resolution PNG/WebP | Missing/unverified |
| Charts/evaluation figures | Only when they add verified evidence | Export with readable labels and documented data context | Missing/unverified |
| Profile image decision | Yes—choose intentionally | Use a professional photo or intentionally omit; do not add a placeholder portrait | Undecided |
| Open Graph image | Recommended | `public/og.png` or Next metadata-generated image; 1200×630px | Deferred: no verified production domain for stable social-image URLs |
| Favicon | Yes | Replace starter `src/app/favicon.ico` with approved mark, or retain a simple generated monogram | Present: generated AK monogram in `src/app/icon.tsx` |

## Per-image requirements

- Use descriptive filenames tied to project slugs.
- Provide accurate alt text and a caption that says what the image demonstrates.
- Remove sensitive data, private endpoints, credentials, and unreadable tiny UI before export.
- Use visuals created by Akshaj or assets with clear rights; do not use generic stock imagery.
- Optimize raster files and keep the original editable source outside public delivery assets when possible.

## Pre-launch verification

- Open every resume, repository, demo, documentation, social, and email link.
- Verify project claims against their repository, report, notebook, or evaluation artifact.
- Check screenshot readability on a 375px-wide screen and desktop.
- Confirm metadata title, description, Open Graph preview, and favicon after final identity details are supplied.
