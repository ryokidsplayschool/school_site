# DECISIONS.md — Architecture Decision Records

## ADR-001: Static HTML/CSS/JS (No Framework)

- **Date**: 2026-03-07
- **Decision**: Use plain HTML/CSS/JS instead of a framework (React, Next.js, etc.)
- **Rationale**: PRD specifies a static site for simplicity, performance (<2s load), and easy developer updates. No dynamic content or CMS needed.
- **Consequences**: Fast load times, minimal hosting cost, but content updates require developer intervention.

## ADR-002: Combined Playschool & Daycare Page

- **Date**: 2026-03-07
- **Decision**: Merge playschool and daycare into a single page for clarity.
- **Rationale**: Per PRD, these programs serve the same age group (1.5–5) and operate during the same hours (9am–5pm). A combined page avoids redundancy.
- **Consequences**: Simpler navigation; parents see all relevant info in one place.

## ADR-003: Generated Images for Program Pages

- **Date**: 2026-03-07
- **Decision**: Use AI-generated images as placeholders following PRD photo suggestions, to be replaced with real photos when available.
- **Rationale**: No real photos provided yet. Generated images allow full development without blocking on content delivery.
- **Consequences**: Site launches with high-quality visuals immediately; real photos can be swapped in later.

## Phase Discussion Decisions (2026-03-07)

### ADR-004: Homepage — Compact Grid Linking to Program Pages

- **Date**: 2026-03-07
- **Decision**: Homepage features a compact card/grid of programs linking to a single programs page with anchored sections.
- **Rationale**: User prefers a clean, scannable homepage rather than a long scrolling page.
- **Consequences**: Homepage remains fast and focused; all program detail lives on a single `programs.html` page with anchor links.

### ADR-005: Single Programs Page with Anchor Sections

- **Date**: 2026-03-07
- **Decision**: All 9 programs on one page (`programs.html`) with alternating layouts and anchor-linked sections, rather than 9 separate HTML files.
- **Rationale**: User preference for single-page program listing. Reduces page count while maintaining SEO through anchors and structured content.
- **Consequences**: Simpler navigation; one page to maintain; anchor links from homepage grid.

### ADR-006: Brand Colors Extracted from Logo

- **Date**: 2026-03-07
- **Decision**: Extract primary and accent colors from the Ryo Kids logo. Use modern, playful fonts (e.g., Nunito, Poppins, Outfit).
- **Rationale**: Ensures visual consistency with existing brand identity.
- **Consequences**: Design system depends on receiving the logo file.

### ADR-007: Fees & Timings — Contact Us

- **Date**: 2026-03-07
- **Decision**: Display "Contact us for fees" and "Contact us for schedule" instead of listing specific prices or timings on the site.
- **Rationale**: Fees/timings change periodically; directing inquiries via contact captures leads.
- **Consequences**: Drives more contact form usage; requires clear CTAs on each program section.

### ADR-008: Placeholder Testimonials

- **Date**: 2026-03-07
- **Decision**: Use realistic placeholder testimonials in a grid layout, to be replaced with real quotes later.
- **Rationale**: No real testimonials available yet. Grid layout (not carousel) chosen by user for easy scanning.

### ADR-009: Form Backend — User-Managed

- **Date**: 2026-03-07
- **Decision**: Build the Contact Us form UI with validation and reCAPTCHA, but the backend/email delivery will be handled by the user separately.
- **Rationale**: User selected "other" for form backend and will manage hosting. We provide a ready-to-connect form.
- **Consequences**: Form action URL will need to be configured by the user post-build.

### ADR-010: Google Maps Free Embed

- **Date**: 2026-03-07
- **Decision**: Use Google Maps free iframe embed (no API key required).
- **Rationale**: Simpler setup, no billing; sufficient for displaying a static location.

### ADR-011: Google reCAPTCHA for Spam Protection

- **Date**: 2026-03-07
- **Decision**: Integrate Google reCAPTCHA on the Contact Us form.
- **Rationale**: User-preferred method for spam protection; widely recognized and trusted.
- **Consequences**: Requires a reCAPTCHA site key from the user.

### ADR-012: Google Analytics Integration

- **Date**: 2026-03-07
- **Decision**: Integrate Google Analytics tracking. Domain: `ryokidsplayschool.com`.
- **Rationale**: User confirmed analytics is required. Domain already decided.
- **Consequences**: GA tracking code placeholder will be included; user provides GA measurement ID.
