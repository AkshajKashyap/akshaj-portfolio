# Design System

## Direction

Light-first, editorial-technical, and quiet. Use strong typography, hairline boundaries, and generous whitespace to organize information. The page should feel closer to an engineering case-study index than a marketing landing page. No gradients, glass effects, animated backgrounds, typing effects, skill bars, excessive icons, large shadows, oversized rounded rectangles, neon colors, or animation libraries.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards, header/menu surface |
| Surface subtle | `#F1F5F9` | Code/tag and quiet areas |
| Text strong | `#0F172A` | Headings and primary text |
| Text | `#334155` | Body text |
| Text muted | `#64748B` | Eyebrows, metadata |
| Accent | `#2563EB` | Links, primary controls, focus reinforcement |
| Accent hover | `#1D4ED8` | Interactive hover |
| Accent subtle | `#DBEAFE` | Selected/quiet accent backgrounds |
| Border | `#CBD5E1` | Card and divider borders |
| Focus ring | `#1D4ED8` | Keyboard focus outline |
| Error | `#B91C1C` | Validation/error only |

## Typography

- Primary: Geist Sans (already present through `next/font`); fallbacks: `ui-sans-serif, system-ui, sans-serif`.
- Mono: Geist Mono for small technical labels only.
- H1: 48px / 1.08 / 650 desktop; 36px / 1.12 mobile.
- H2: 30px / 1.2 / 650 desktop; 26px / 1.25 mobile.
- H3: 20px / 1.3 / 600.
- Body: 16px / 1.65 / 400; lead: 18px / 1.6 / 400.
- Metadata/tag: 13px / 1.4 / 500; use slight tracking only for uppercase eyebrows.

## Layout and spacing

- Maximum content width: 1120px.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px.
- Page gutters: 32px desktop, 20px mobile.
- Section spacing: 96px desktop, 64px mobile.
- Radius: 6px for buttons/inputs; 8px for cards; never pill-shaped except small tags if needed.
- Shadows: none by default. At most `0 1px 2px rgb(15 23 42 / 0.06)` for an open mobile menu; borders do the structural work.

## Components

| Component | Specification |
| --- | --- |
| Primary button | Accent background, white text, 44px minimum height, 16px horizontal padding; hover uses accent-hover; active slightly darker. |
| Secondary button | Surface background, strong text, 1px border; hover surface-subtle. |
| Text link | Accent text with visible underline offset; hover accent-hover. External-link indicator only if it improves clarity, not as decoration. |
| Featured card | Surface, 1px border, 8px radius, no large shadow; visual frame, then well-spaced content. |
| Additional card | Border-top or full thin border, compact padding, no image required. |
| Tag | Surface-subtle background, text-muted, 4px radius, 13px type; tags are supplementary, never the main content. |

## Interaction

- Use short 120–160ms color/border transitions only; respect `prefers-reduced-motion` by removing nonessential transitions.
- Hover must not move layout or reveal required information.
- Keyboard focus: 2px solid `#1D4ED8`, 2px offset, clearly visible on every control.
- Maintain visible focus after mobile-menu interactions.

## Breakpoints

- Mobile: `< 768px`.
- Tablet: `768px–1023px` (two-column additional-project grid; featured card can remain one column if text/visual need it).
- Desktop: `≥ 1024px` (full nav, 12-column layout, three-column compact grid).

## Accessibility requirements

- Semantic landmarks: header, nav, main, sections with headings, footer.
- One H1 per route; headings must not skip levels.
- Text contrast meets WCAG AA (4.5:1 for normal text); controls retain clear noncolor affordances.
- All visuals have meaningful alt text or empty alt text if purely decorative.
- Buttons/links have descriptive accessible names; menu exposes expanded/collapsed state.
- Touch targets are at least 44×44px. Layout functions at 200% zoom and with keyboard alone.
- Do not rely on color, hover, motion, or an image to communicate essential information.
