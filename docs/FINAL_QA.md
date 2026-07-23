# Final QA

## Pages and content inspected

- `/`: masthead, editorial hero, four featured projects, additional-project archive, experience, About, skills, contact, and footer.
- `/projects`: route introduction, four featured projects in an archive-specific hierarchy, all additional projects, and return link.
- `/documents/resume.pdf`: verified as a nonempty PDF copied unchanged from the verified resume source.
- Structured project, experience, skills, profile, metric, link, and resume data remain unchanged by the visual redesign.

## Visual-system checks

- Warm-paper canvas and British racing green replace the previous dark navy palette.
- The masthead uses the full name, a strong green rule, and a separate navigation row.
- Serif headlines, sans-serif body text, mono metadata, square corners, thin rules, and restrained pale-green evidence insets establish the editorial hierarchy.
- Featured work uses one lead story, one major story, and two lower stories rather than a uniform card grid.
- Additional projects, experience, and skills use ruled lists instead of dashboard-style cards or tag clouds.
- No fake newspaper date, issue number, stock image, invented project image, decorative metric, or unsupported claim is present.

## Responsive checks

Source-level review covers the requested 320px, 375px, 768px, 1024px, 1440px, and 1720px targets. The implementation uses 20px mobile gutters, a capped 1240px container, single-column narrow layouts, an 8/4-column desktop lead row, wrapping controls, and at least 44px primary interactive targets. The masthead collapses to an accessible compact menu before its links become crowded.

No browser-based visual-regression tooling is installed, so the responsive audit is source-level plus production-build verification. No package was added for QA.

## Accessibility checks

- One H1 per route and ordered section headings.
- Semantic header, navigation, main, section, article, and footer landmarks.
- Skip link targets `#main-content`.
- Global visible `:focus-visible` treatment and reduced-motion styling.
- Mobile menu exposes its label, expanded state, controlled region, and Escape behavior.
- External links disclose new-tab behavior; resume links have descriptive labels.
- Text and controls use high-contrast ink or racing green on light paper.
- Essential project evidence is text, never image-, color-, motion-, or hover-dependent.
- Optional visual frames are omitted when no real project image is available.

## Link and resume checks

- Resume path remains `/documents/resume.pdf`; the asset is nonempty.
- Resume, GitHub, LinkedIn, and email destinations remain sourced from verified local profile data.
- Project repository and documentation destinations remain sourced from the audited project data.
- No demo link is rendered because no usable public demo was verified.

## Metadata and sharing

- Root and projects titles and descriptions use verified, grounded language.
- Robots metadata permits indexing without declaring an unverified production sitemap or domain.
- Open Graph and Twitter images remain deferred because no verified production domain or approved social asset exists.
- `src/app/icon.tsx` provides the AK monogram in the current green-and-paper palette.

## Deferred optional assets and limitations

- Project screenshots and architecture diagrams remain optional and are cleanly omitted.
- No profile image, social image, custom domain, analytics, CMS, contact backend, dark mode, or animation library is configured.
- Individual project case-study pages remain outside version one.

## Deployment readiness

The content and implementation have no known blockers for a static deployment. Before deployment, configure the hosting project and, if desired, provide a verified canonical production domain. A custom sitemap and social-sharing image remain intentionally deferred until their required inputs exist.
