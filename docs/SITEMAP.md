# Sitemap

## Routes

| Route | Purpose | Content |
| --- | --- | --- |
| `/` | Fast recruiter scan | Hero, selected projects, concise experience/about/skills, contact |
| `/projects` | Full project inventory and browsing | All publishable featured and additional projects with deeper card detail |
| `/documents/resume.pdf` | Resume open target | **Placeholder:** add verified PDF at `public/documents/resume.pdf` before launch |

## Homepage: exact section order

1. Navigation
2. Hero
3. Featured Projects
4. Additional Projects
5. Experience and Research
6. About
7. Skills
8. Contact
9. Footer

### Homepage content boundaries

- Featured Projects: show up to four complete project cards: Causal Uplift Experimentation Ops, Molecular GNN Property Ops, LLM Posttraining Ops, and Plant Disease VisionOps, only as verified content becomes available.
- Additional Projects: compact list/grid of the remaining publishable projects, each with title, one-line verified summary, category, and project/repository link. Include “View all projects.”
- Experience and Research: only verified entries. If none are available at implementation time, omit this section rather than render an empty state.
- About: short, verified student/technical-focus context; no biographical detail not supplied by Akshaj.
- Skills: grouped, verified technologies; no proficiency scores.

## `/projects` page

- Header and introductory sentence.
- Optional accessible category filters only if the inventory is large enough to benefit (initially 10 named projects makes static grouped sections preferable).
- Featured projects first, with fuller summaries, technical decisions, results/evidence, technologies, and available links.
- Additional projects second, using a lighter card treatment.
- An archive is not shown until there are projects deliberately marked archived.
- Individual project pages do **not** exist in version one. Add them later only when at least several projects have enough verified narrative, diagrams, results, and screenshots to justify a dedicated page; use `/projects/[slug]` then.

## Navigation

- Desktop links: `Projects` → `/projects`; `Experience` → `/#experience`; `About` → `/#about`; `Contact` → `/#contact`.
- Right-side primary CTA: `Resume` (only when the verified PDF exists); otherwise omit it.
- Clicking the name/wordmark returns to `/`.
- Home-section anchors from `/projects` should use absolute paths such as `/#contact`.

## Footer

- Left: `Akshaj Kashyap` and `UCSB Computer Science` (verified by the brief).
- Right: GitHub, LinkedIn, email, and Resume only when exact verified destinations exist.
- Include a compact copyright line using the current year; no fabricated location statement.

## Link behavior

- Internal routes and section anchors open in the same tab.
- External GitHub, LinkedIn, demos, and documentation open in a new tab with `target="_blank"` and `rel="noreferrer"`.
- Email uses `mailto:`.
- A resume link opens the PDF in a new tab; the visible label should state `Resume (PDF)`.
- Never render a disabled-looking link or placeholder URL in production.

## Mobile navigation

- Show name/wordmark, `Projects`, and an accessible menu button at narrow widths.
- The menu opens a small, solid-background panel below the header with the remaining links and Resume when available.
- Trap neither focus nor scrolling; close on Escape, link selection, and outside interaction. Keep focus visible and return it to the trigger on close.
- No full-screen animated overlay is needed.
