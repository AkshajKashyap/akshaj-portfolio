# Design System

## Direction

Dark-first, editorial-technical, and restrained. Deep navy surfaces, off-white type, thin structural borders, and precise spacing create hierarchy without relying on screenshots. A subtle blue/violet hero glow and faint CSS grid add depth; neither carries essential information. Avoid cyberpunk styling, neon text, terminal motifs, glass cards, heavy shadows, large animated gradients, oversized rounded rectangles, or animation libraries.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#080C16` | Primary page background |
| Secondary surface | `#0D1422` | Alternating sections and footer |
| Card surface | `#111B2C` | Featured cards and compact panels |
| Elevated surface | `#172238` | Evidence blocks, tags, mobile menu |
| Text strong | `#F4F7FC` | Headings and primary labels |
| Text | `#A5B0C3` | Body text |
| Text muted | `#718096` | Metadata and supporting labels |
| Border | `#25334A` | Dividers and component borders |
| Primary accent | `#7C9CFF` | Primary controls and focus |
| Accent hover | `#9EB4FF` | Primary hover state |
| Secondary accent | `#65E6C4` | Controlled project/timeline details |
| Violet accent | `#A78BFA` | Controlled project details |

## Typography

- Primary: Geist Sans; fallbacks: `ui-sans-serif, system-ui, sans-serif`.
- Mono: Geist Mono only for section numbers, project numbers, categories, and metadata.
- Hero name: 48px mobile, 60px small screens, 72px desktop; controlled line height and tight tracking.
- H2: 28px mobile, 32px tablet, 36px desktop.
- H3: 18–24px depending on card hierarchy.
- Body: 15–18px with 1.55–1.75 line height.
- Metadata: 10–11px with deliberate uppercase tracking.

## Layout and spacing

- Maximum content width: 1240px.
- Page gutters: 20px mobile, 24px small screens, 32px tablet/desktop.
- Section spacing: 64px mobile, 80px tablet, 96px large desktop.
- Spacing scale remains based on 4, 8, 12, 16, 24, 32, 48, 64, 80, and 96px.
- Radius: 6px controls; 8px cards and panels.
- Shadows: none by default; one restrained menu shadow is permitted.

## Components

| Component | Specification |
| --- | --- |
| Primary button | Blue accent background, canvas text, 44px minimum height; no physical lift. |
| Secondary button | Transparent background, thin border, strong text; quiet surface hover. |
| Text link | Underline or clear arrow affordance; primary and secondary link hierarchy. |
| Featured card | Two-column editorial grid at desktop, surface background, thin border, 2px accent edge, numbered metadata, evidence panel, and concise links. |
| Additional project | Compact bordered list item with title, purpose, result, and source link; visually quieter than featured work. |
| Experience item | Vertical timeline entry with explicit work-type label, dates, organization, and concise details. |
| Tag | Elevated surface or plain mono text; supplemental rather than dominant. |

## Interaction

- Use 150–200ms color, border, background, and 2px arrow transitions only.
- Hover must not reflow or physically lift cards.
- Keyboard focus: 2px solid primary accent with 3px offset.
- Hero textures are static and decorative.
- `prefers-reduced-motion` removes nonessential transition duration and smooth scrolling.

## Breakpoints

- Mobile: `< 640px`; accessible menu and single-column content.
- Small/tablet: `640px–1023px`; desktop navigation and stacked major sections.
- Desktop: `≥ 1024px`; asymmetric hero, 12-column composition, and two-column project grids.
- Wide desktop: layouts remain capped at 1240px through 1720px viewports.

## Accessibility requirements

- Semantic landmarks and one H1 per route.
- Ordered heading levels and descriptive section labels.
- WCAG AA text contrast.
- Every interactive target is at least 44px tall where applicable.
- Visible focus, keyboard-complete navigation, and accessible mobile-menu state.
- External links announce new-tab behavior.
- Decorative glow/grid layers are ignored by assistive technology.
- Essential information never depends on color, hover, motion, or imagery.
