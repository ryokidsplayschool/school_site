---
phase: 4
plan: 1
wave: 1
---

# Plan 4.1: SEO, Analytics & Performance Polish

## Objective
Add JSON-LD schema markup, complete SEO metadata, Google Analytics tracking snippet, optimize images with lazy loading, and do final cross-page consistency polish.

## Context
- .gsd/SPEC.md
- .gsd/DECISIONS.md (ADR-012: Google Analytics)
- All HTML files: index.html, programs.html, testimonials.html, contact.html
- d:\antigravity Project\ryo_site\index.css

## Tasks

<task type="auto">
  <name>Add JSON-LD schema markup and SEO enhancements to all pages</name>
  <files>
    d:\antigravity Project\ryo_site\index.html
    d:\antigravity Project\ryo_site\programs.html
    d:\antigravity Project\ryo_site\testimonials.html
    d:\antigravity Project\ryo_site\contact.html
  </files>
  <action>
    For each HTML file:
    
    1. Add JSON-LD schema markup in <head> (index.html gets the full schema, others get page-specific):
       
       index.html — LocalBusiness + EducationalOrganization:
       ```json
       {
         "@context": "https://schema.org",
         "@type": ["LocalBusiness", "EducationalOrganization"],
         "name": "Ryo Kids International Play School",
         "description": "Playschool, daycare, tuition, and enrichment center for children in Thiruvottiyur, Chennai",
         "url": "http://ryokidsplayschool.com/",
         "telephone": "+918220001433",
         "email": "ryokidsplayschool@gmail.com",
         "address": {
           "@type": "PostalAddress",
           "streetAddress": "Old No: 3b/2, New No:25, Seshachala Gramani St, Tolgate, Sathuma Nagar, Sathangadu",
           "addressLocality": "Thiruvottiyur",
           "addressRegion": "Tamil Nadu",
           "postalCode": "600019",
           "addressCountry": "IN"
         },
         "openingHours": ["Mo-Sa 09:00-17:00", "Mo-Sa 18:00-20:30"],
         "priceRange": "Contact for pricing",
         "image": "http://ryokidsplayschool.com/images/playschool.webp"
       }
       ```
    
    2. Ensure Google Analytics 4 snippet is in <head> of ALL pages:
       ```html
       <!-- Google Analytics -->
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
       <script>
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-XXXXXXXXXX');
       </script>
       <!-- Replace G-XXXXXXXXXX with your GA4 measurement ID -->
       ```
    
    3. Ensure complete Open Graph and Twitter Card meta tags on all pages
    
    4. Add lazy loading (loading="lazy") to all below-fold images
    
    5. Add favicon reference: <link rel="icon" type="image/x-icon" href="images/favicon.ico">
       (placeholder — user can replace)
    
    6. Verify all images have descriptive alt text
    
    7. Ensure all interactive elements have unique IDs
    
    8. Add canonical URL: <link rel="canonical" href="http://ryokidsplayschool.com/{page}">
  </action>
  <verify>View source of each HTML file and verify: JSON-LD script tag present, GA4 snippet present, all img tags have alt and loading="lazy", meta tags complete</verify>
  <done>All 4 HTML pages have JSON-LD schema, GA4 tracking, Open Graph tags, lazy loading, canonical URLs, and complete alt text</done>
</task>

<task type="auto">
  <name>Final CSS polish and consistency check</name>
  <files>d:\antigravity Project\ryo_site\index.css</files>
  <action>
    Review and polish index.css:
    
    1. Ensure print styles: @media print with clean layout
    2. Add focus-visible styles for keyboard accessibility
    3. Add prefers-reduced-motion media query to disable animations
    4. Check all color contrast ratios meet WCAG AA
    5. Ensure consistent spacing and typography across all component styles
    6. Add smooth transition for back-to-top button visibility
    7. Verify no unused CSS classes
  </action>
  <verify>Open each page in browser, resize to mobile/tablet/desktop, verify consistent styling and no layout breaks</verify>
  <done>CSS is polished with accessibility features, print styles, and consistent cross-page styling</done>
</task>

## Success Criteria
- [ ] JSON-LD LocalBusiness schema present on index.html
- [ ] Google Analytics placeholder on all 4 pages
- [ ] All images have alt text and lazy loading
- [ ] Open Graph tags on all pages
- [ ] Focus-visible and reduced-motion accessibility styles
- [ ] All pages render consistently across mobile/tablet/desktop
