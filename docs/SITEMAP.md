# Sitemap

## Routes

| Route | Purpose | Content |
| --- | --- | --- |
| `/` | Fast recruiter scan | Hero, selected projects, concise experience/about/skills, contact |
| `/projects` | Full project inventory and browsing | All publishable featured and additional projects with deeper card detail |
| `/documents/resume.pdf` | Resume open target | Verified PDF at `public/documents/resume.pdf` |

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

- Featured Projects: exactly four complete stories in order: CUDA Transformer Runtime, Causal Uplift Experimentation, Molecular Property Prediction with GNNs, and BlockScope.
- Additional Projects: exactly four compact rows in order: C++ Matching Engine, Gridiron Spatial Intelligence, Plant Disease Classification, and LLM Posttraining Ops, with a route to the full archive.
- Experience and Research: only verified entries. If none are available at implementation time, omit this section rather than render an empty state.
- About: short, verified student/technical-focus context; no biographical detail not supplied by Akshaj.
- Skills: grouped, verified technologies; no proficiency scores.

## `/projects` page

- Header and introductory sentence.
- Featured projects appear first, with fuller summaries, technical decisions, results/evidence, technologies, and available links.
- Remaining projects appear once in recruiter-priority order: the four homepage-additional projects, then MatchStream, Multimodal Retrieval, Feed Ranking Ops, Contextual Bandit Decision Ops, and Valorant Quant Research.
- Featured projects are not duplicated in the lower archive list.
- Graph Kernel SVM remains hidden until its public numerical evidence is inspectable. The rendered page therefore contains 13 projects while structured data retains the approved 14-project inventory.
- Individual project pages do **not** exist in version one. Add them later only when at least several projects have enough verified narrative, diagrams, results, and screenshots to justify a dedicated page; use `/projects/[slug]` then.

## Navigation

- Desktop links: `Projects` → `/projects`; `Experience` → `/#experience`; `About` → `/#about`; `Contact` → `/#contact`.
- Right-side primary CTA: `Resume` (only when the verified PDF exists); otherwise omit it.
- Clicking the name/wordmark returns to `/`.
- Home-section anchors from `/projects` should use absolute paths such as `/#contact`.

## Footer

- Left: `Akshaj Kashyap · UC Santa Barbara`.
- Right: Email, LinkedIn, and GitHub using exact verified destinations.

## Link behavior

- Internal routes and section anchors open in the same tab.
- External GitHub, LinkedIn, demos, and documentation open in a new tab with `target="_blank"` and `rel="noreferrer"`.
- Email uses `mailto:`.
- Résumé links open the verified PDF in a new tab and use the approved `Résumé` or `View résumé` wording according to context.
- Never render a disabled-looking link or placeholder URL in production.

## Mobile navigation

- Show the name/wordmark, identity line, and an accessible menu button at narrow widths.
- The menu opens a small, solid-background panel with Projects, Experience, About, Contact, and Résumé.
- Trap neither focus nor scrolling; close on Escape, trigger interaction, and navigation or résumé link selection. Keep focus visible and return it to the trigger when Escape closes the menu.
- No full-screen animated overlay is needed.
