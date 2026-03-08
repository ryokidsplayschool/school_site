---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Design System & Global CSS

## Objective
Create the global CSS design system with color palette, typography (Nunito), spacing tokens, responsive breakpoints, and core utility classes. This is the foundation upon which all pages are built.

## Context
- .gsd/SPEC.md
- .gsd/DECISIONS.md (ADR-006: colors from logo or playful defaults)

## Tasks

<task type="auto">
  <name>Create index.css with design system</name>
  <files>d:\antigravity Project\ryo_site\index.css</files>
  <action>
    Create index.css with:
    
    1. CSS Reset (box-sizing, margin/padding reset, smooth scroll)
    2. CSS Custom Properties on :root:
       - Colors: Primary warm orange (#FF6B35), secondary sky blue (#4ECDC4), accent purple (#7B68EE), grass green (#2ECC71), dark text (#2D3436), light bg (#FAFAFA), white (#FFFFFF), warm yellow (#FFD93D)
       - Typography: --font-primary: 'Nunito', sans-serif
       - Font sizes: --fs-xs through --fs-4xl (clamp-based for responsiveness)
       - Spacing: --space-xs (0.25rem) through --space-4xl (4rem)
       - Border radius: --radius-sm, --radius-md, --radius-lg, --radius-full
       - Shadows: --shadow-sm, --shadow-md, --shadow-lg, --shadow-xl
       - Transition: --transition-fast (0.2s), --transition-normal (0.3s)
       - Max width: --max-width: 1200px
    
    3. Base styles:
       - body: font-family, color, background, line-height
       - h1–h6: font weights, margins
       - a: color, transition, hover effects
       - img: max-width 100%, display block
    
    4. Layout utilities:
       - .container: max-width, auto margins, padding
       - .section: padding-block for vertical rhythm
       - .grid: CSS grid with responsive columns
       - .flex-center, .flex-between, .flex-column
    
    5. Component styles:
       - .btn-primary: orange gradient, white text, rounded, hover lift
       - .btn-secondary: outlined style
       - .card: white bg, shadow, radius, hover lift animation
       - .section-title: large, decorative underline accent
    
    6. Alternating layout system:
       - .program-section: 2-column grid
       - .program-section:nth-child(even): reverse order (image right, text left)
       - .program-section:nth-child(odd): normal order (image left, text right)
       - On mobile (max-width: 768px): stack vertically, image always on top
    
    7. Header/Nav styles:
       - .header: sticky, backdrop-blur, z-index 1000
       - .nav: flex between logo and links
       - .nav-links: horizontal on desktop
       - .nav-toggle: hamburger button, hidden on desktop
       - .nav-links.active: mobile slide-in menu
    
    8. Footer styles:
       - .footer: dark background, light text, multi-column grid
       - .footer-links, .footer-contact, .footer-copyright
    
    9. Animations:
       - @keyframes fadeInUp for scroll reveals
       - @keyframes float for subtle element movement
       - .animate-in class with intersection observer trigger
    
    10. Responsive breakpoints:
        - Mobile: max-width 768px
        - Tablet: max-width 1024px
        - Desktop: min-width 1025px
    
    Do NOT use Tailwind or any framework. Pure vanilla CSS.
    Do NOT use @import for fonts — will be in HTML <link> tag.
  </action>
  <verify>Verify index.css file exists and contains :root custom properties, .header, .footer, .program-section, .btn-primary, .card classes</verify>
  <done>index.css exists with complete design system: 10+ CSS variables, responsive classes, header/footer styles, alternating layout system, card grid, button styles, animations</done>
</task>

## Success Criteria
- [ ] index.css created with all design tokens (colors, typography, spacing)
- [ ] Alternating layout classes work for program sections
- [ ] Responsive breakpoints defined for mobile/tablet/desktop
- [ ] Header, footer, card, and button component styles exist
