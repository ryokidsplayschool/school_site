---
phase: 1
plan: 2
wave: 2
---

# Plan 1.2: Homepage & Navigation

## Objective
Build the homepage (index.html) with hero section, program card grid, quick testimonial teaser, contact CTA strip, sticky header with responsive nav, and footer. Also create script.js for mobile hamburger menu and smooth scroll.

## Context
- .gsd/SPEC.md
- .gsd/DECISIONS.md (ADR-004: compact grid, ADR-005: single programs page)
- d:\antigravity Project\ryo_site\index.css (created in Plan 1.1)

## Tasks

<task type="auto">
  <name>Create script.js with navigation and interactions</name>
  <files>d:\antigravity Project\ryo_site\script.js</files>
  <action>
    Create script.js with:
    
    1. Mobile hamburger menu toggle:
       - querySelector .nav-toggle and .nav-links
       - Toggle .active class on click
       - Close menu when a nav link is clicked
       - Close menu on outside click
    
    2. Sticky header scroll effect:
       - Add .scrolled class to header when scrollY > 50
       - Slight background change on scroll
    
    3. Smooth scroll for anchor links:
       - querySelectorAll('a[href^="#"]')
       - Prevent default, scrollIntoView smooth
    
    4. Scroll-reveal animation:
       - IntersectionObserver for .animate-in elements
       - Add .visible class when element enters viewport
       - threshold: 0.1, rootMargin: '0px 0px -50px 0px'
    
    5. Back-to-top button:
       - Show when scrollY > 500
       - Smooth scroll to top on click
    
    Do NOT use jQuery or any library. Pure vanilla JS.
    Use DOMContentLoaded event listener.
  </action>
  <verify>Verify script.js exists and contains addEventListener for nav-toggle, IntersectionObserver, and scroll handlers</verify>
  <done>script.js with mobile nav toggle, sticky header, smooth scroll, scroll-reveal, and back-to-top button</done>
</task>

<task type="auto">
  <name>Create index.html homepage</name>
  <files>d:\antigravity Project\ryo_site\index.html</files>
  <action>
    Create index.html with:
    
    1. DOCTYPE and <head>:
       - <meta charset="UTF-8">, viewport, description, keywords
       - <title>Ryo Kids International Play School | Playschool & Enrichment Center Chennai</title>
       - <meta name="description" content="Ryo Kids International Play School offers nurturing playschool, daycare, tuition, and extracurricular programs for children aged 1.5–10 in Thiruvottiyur, Chennai.">
       - Google Fonts: <link href Nunito weights 400,600,700,800>
       - <link rel="stylesheet" href="index.css">
       - Google Analytics 4 placeholder: <!-- Replace G-XXXXXXXXXX with your GA4 measurement ID -->
    
    2. <header class="header">:
       - <nav class="nav container">
       - Logo area: <a class="nav-logo" href="index.html">Ryo Kids International Play School</a> (text-based for now, can swap for img later)
       - <ul class="nav-links">: Home, Programs (href="programs.html"), Testimonials (href="testimonials.html"), Contact (href="contact.html")
       - <button class="nav-toggle" aria-label="Toggle navigation">☰</button>
    
    3. <main>:
       a) Hero section <section class="hero">:
          - Full-width gradient background (orange to yellow)
          - <h1>Where Little Minds Bloom & Grow 🌱</h1>
          - <p>Nurturing playschool, enrichment, and academic excellence for children aged 1.5 to 15 in Thiruvottiyur, Chennai</p>
          - <a class="btn-primary" href="programs.html">Explore Our Programs</a>
          - <a class="btn-secondary" href="contact.html">Get in Touch</a>
       
       b) Programs grid <section class="programs-overview section">:
          - <h2 class="section-title">Our Programs</h2>
          - <div class="programs-grid"> containing 9 cards:
            Each card <a class="program-card card" href="programs.html#anchor">:
              - Thumbnail image placeholder <img src="images/playschool.webp" alt="descriptive alt text">
              - <h3>Program Name</h3>
              - <p>Brief one-line tagline</p>
              - <span class="card-link">Learn More →</span>
          
          Cards (with anchors and taglines):
          1. Playschool & Daycare (#playschool) — "A joyful play-based foundation for toddlers"
          2. Tuition (#tuition) — "Personalized academic support for grades 1–10"
          3. Drawing (#drawing) — "Unleash creativity through art"
          4. Karate (#karate) — "Build discipline, fitness, and confidence"
          5. Dance (#dance) — "Discover rhythm, expression, and teamwork"
          6. Keyboard Music (#keyboard) — "Hands-on musical discovery"
          7. Handwriting (#handwriting) — "Master the art of beautiful writing"
          8. Yoga (#yoga) — "Mindfulness and flexibility for young minds"
          9. 10th Grade Special (#tenth-grade) — "Exam-focused coaching and mentorship"
       
       c) Testimonial teaser <section class="testimonial-teaser section">:
          - <h2 class="section-title">What Parents Say</h2>
          - 2-3 highlight quote cards
          - <a class="btn-secondary" href="testimonials.html">Read All Testimonials →</a>
       
       d) Contact CTA strip <section class="contact-cta section">:
          - Gradient background strip
          - <h2>Ready to Give Your Child the Best Start?</h2>
          - <p>Contact us today for enrollments, schedule, and fees.</p>
          - Phone: <a href="tel:8220001433">📞 8220001433</a>
          - Email: <a href="mailto:ryokidsplayschool@gmail.com">✉ ryokidsplayschool@gmail.com</a>
          - <a class="btn-primary" href="contact.html">Contact Us</a>
    
    4. <footer class="footer">:
       - 3-column grid (About, Quick Links, Contact)
       - About: Brief intro text
       - Quick Links: Home, Programs, Testimonials, Contact
       - Contact: Address, Phone, Email
       - Copyright: © 2026 Ryo Kids International Play School. All rights reserved.
    
    5. Back-to-top button: <button class="back-to-top" aria-label="Back to top">↑</button>
    6. <script src="script.js"></script>
    
    Every element must have a unique ID where appropriate.
    All images must have descriptive alt text.
    Use semantic HTML5 elements: header, nav, main, section, footer, article.
  </action>
  <verify>Open index.html in browser and verify: header with nav links visible, hero section with CTAs, 9 program cards in grid, testimonial teaser, contact CTA strip, footer with 3 columns</verify>
  <done>index.html loads with hero, 9 program cards, testimonial teaser, contact strip, sticky nav, and responsive footer</done>
</task>

## Success Criteria
- [ ] index.html renders with hero section, program grid (9 cards), testimonial teaser, contact CTA, header, and footer
- [ ] script.js handles mobile nav toggle, scroll effects, smooth scroll, and back-to-top
- [ ] All nav links point to correct pages (programs.html, testimonials.html, contact.html)
- [ ] Responsive layout works on mobile and desktop
