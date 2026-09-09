# Design System

## Direction

A modern independent technical publication: warm paper, British racing green, strong serif headlines, compact sans-serif supporting text, and visible editorial rules. The newspaper influence comes from hierarchy, columns, bylines, and archive rows—not distressed textures, novelty type, fake dates, or imitation newsprint. The result should feel contemporary, precise, and appropriate for technical work.

The system is light-first. It avoids dark mode, generic dashboard cards, large rounded containers, glass effects, heavy shadows, gradient spectacle, terminal motifs, and animation libraries.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#F3EFE4` | Primary warm-paper background |
| Secondary paper | `#E9E3D5` | Alternating bands and footer |
| Surface | `#F8F5EC` | Navigation and restrained inset areas |
| Pale green | `#DCE6DF` | Evidence callouts and quiet emphasis |
| Ink | `#171A17` | Headlines and primary labels |
| Text | `#343932` | Body copy |
| Muted text | `#66675F` | Metadata and secondary labels |
| Rule | `#B8B2A5` | Hairlines and structural separators |
| Racing green | `#0B3B2E` | Masthead, actions, focus, and major rules |
| Secondary green | `#315E4F` | Hover and secondary accents |

All text and interactive combinations must meet WCAG AA contrast. Green must support hierarchy but cannot be the only carrier of meaning.

## Typography

- Editorial serif: Georgia, Cambria, `"Times New Roman"`, Times, serif. Use for the masthead, route H1s, section headlines, and project titles.
- Sans: Geist Sans with system fallbacks. Use for body copy, navigation, descriptions, and controls.
- Mono: Geist Mono only for restrained metadata such as project numbers, categories, and dates.
- Masthead: 32px mobile, 42px small screens, and 56px desktop; uppercase with controlled tracking.
- Route H1: 44–72px with tight leading.
- Section H2: 32–48px.
- Story H3: 24–40px according to story prominence.
- Body: 15–18px with approximately 1.6 line height.
- Metadata: 10–12px, uppercase, with deliberate letter spacing.

The native serif stack is intentional: it is fast, robust in static builds, and avoids adding a font dependency merely to create an editorial tone.

## Layout and spacing

- Maximum content width: 1240px.
- Gutters: 20px mobile, 24px small screens, and 32px from tablet upward.
- Main section spacing: 64px mobile, 80px tablet, and 96px desktop.
- Use a 12-column desktop grid for the featured-project hierarchy.
- Corners remain square or use a maximum 4px radius.
- Shadows are omitted except for the restrained mobile-menu elevation.
- Rules are functional: 1px for article separation and 3px for masthead or major section emphasis.

## Global masthead

The masthead has two rows:

1. A centered, full-name wordmark, “Akshaj Kashyap,” linked to the homepage.
2. A compact identity line and primary navigation for Projects, Experience, About, Contact, and Résumé.

A 3px racing-green rule separates the rows. The masthead is not sticky. Below the desktop breakpoint, navigation links move into an accessible menu.

## Editorial components

| Component | Specification |
| --- | --- |
| Primary action | Racing-green fill, warm-paper text, square corners, and at least 44px height. |
| Secondary action | Paper background, green border and text, square corners, and at least 44px height. |
| Text link | Visible underline or directional affordance; no hover-only meaning. |
| Lead project story | Approximately two-thirds of the first featured row; largest project headline and evidence treatment. |
| Major project story | Approximately one-third of the first featured row; compact but still detailed. |
| Standard project story | One of two stories in the lower featured row; retains summary, evidence, technology, and links. |
| Evidence inset | Pale-green block with a green edge; contains only verified evidence. |
| Archive row | Ruled data row for category, title, purpose, result, and repository link; never presented as a floating card. |
| Experience entry | Ruled editorial entry with type/date rail and role, organization, details, and technology body. |
| Skills group | Section label plus readable comma-separated skills; avoid tag clouds. |

Exactly two verified project visuals appear in consistent 16:9 frames: the CUDA architecture diagram and the MatchStream dashboard crop. Other projects omit image frames rather than substituting decorative assets.

## Interaction

- Use 150–200ms color, border, background, and small arrow transitions only.
- Hover must not move content or create physical card lift.
- Keyboard focus uses a 2px racing-green outline with a 3px offset.
- `prefers-reduced-motion` removes nonessential transition duration and smooth scrolling.
- External links disclose new-tab behavior to assistive technology.

## Responsive behavior

- Mobile: `< 640px`; single-column stories and archive rows, compact menu, 20px gutters.
- Tablet: `640px–1023px`; masthead navigation expands where space permits, and archive rows become structured grids.
- Desktop: `≥ 1024px`; 12-column lead-story composition and multi-column editorial sections.
- Wide desktop: content stays capped at 1240px through 1720px viewports.

Layouts must work at 320px without horizontal scrolling. No essential text, link, or evidence may depend on a desktop column position.

## Accessibility requirements

- One H1 per route with ordered section headings.
- Semantic header, navigation, main, section, article, and footer landmarks.
- Skip link targeting `#main-content`.
- Keyboard-complete mobile navigation with exposed label, expanded state, controlled region, and Escape behavior.
- Visible focus, 44px interactive targets where applicable, and WCAG AA contrast.
- Essential information never depends on color, imagery, hover, or motion.
- Optional images require useful alternative text; decorative imagery must be hidden from assistive technology.
