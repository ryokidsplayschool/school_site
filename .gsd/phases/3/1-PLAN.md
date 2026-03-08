---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Testimonials Page

## Objective
Build the testimonials page with a responsive grid of 6 placeholder testimonial cards featuring parent names, quotes, star ratings, and program associations.

## Context
- .gsd/SPEC.md
- .gsd/DECISIONS.md (ADR-008: placeholder testimonials, grid layout)
- d:\antigravity Project\ryo_site\index.css
- d:\antigravity Project\ryo_site\index.html (for consistent header/footer)

## Tasks

<task type="auto">
  <name>Create testimonials.html with 6 testimonial cards</name>
  <files>d:\antigravity Project\ryo_site\testimonials.html</files>
  <action>
    Create testimonials.html with:
    
    1. Same <head> with:
       - <title>Parent Testimonials | Ryo Kids International Play School</title>
       - <meta name="description" content="Read what parents say about Ryo Kids International Play School. Trusted by families across Thiruvottiyur, Chennai.">
    
    2. Same header/nav (Testimonials link active)
    
    3. Page hero:
       - <h1>What Parents Say About Us</h1>
       - <p>Trusted by families across Thiruvottiyur and beyond</p>
    
    4. Testimonials grid <div class="testimonials-grid">:
       6 cards, each <div class="testimonial-card card">:
       
       Card 1:
         - Stars: ⭐⭐⭐⭐⭐
         - Quote: "My daughter absolutely loves going to Ryo Kids every day. The teachers are so caring and the activities keep her engaged and happy. I've seen tremendous growth in her social skills!"
         - Name: Anitha R.
         - Context: Parent — Playschool
         - Avatar: Placeholder circle with initials "AR"
       
       Card 2:
         - Stars: ⭐⭐⭐⭐⭐
         - Quote: "The tuition program has helped my son improve his grades significantly. The tutors explain concepts so clearly that he now enjoys studying!"
         - Name: Karthik M.
         - Context: Parent — Tuition (Grade 7)
         - Avatar: initials "KM"
       
       Card 3:
         - Stars: ⭐⭐⭐⭐⭐
         - Quote: "We enrolled our child in karate and drawing classes. The instructors are professional, patient, and the kids love every session. Highly recommended!"
         - Name: Priya S.
         - Context: Parent — Karate & Drawing
         - Avatar: initials "PS"
       
       Card 4:
         - Stars: ⭐⭐⭐⭐⭐
         - Quote: "The dance classes brought so much joy and confidence to my shy daughter. She now performs on stage without any hesitation!"
         - Name: Deepa V.
         - Context: Parent — Dance
         - Avatar: initials "DV"
       
       Card 5:
         - Stars: ⭐⭐⭐⭐⭐
         - Quote: "Ryo Kids' daycare is our family's lifesaver. The staff treats every child like their own. Safe, clean, and full of love."
         - Name: Rajesh K.
         - Context: Parent — Daycare
         - Avatar: initials "RK"
       
       Card 6:
         - Stars: ⭐⭐⭐⭐⭐
         - Quote: "The 10th grade coaching program was exactly what my son needed. The focused approach and exam strategies made a real difference in his board results."
         - Name: Lakshmi N.
         - Context: Parent — 10th Grade Special
         - Avatar: initials "LN"
    
    5. CTA section:
       - "Want to share your experience?"
       - <a href="contact.html" class="btn-primary">Get in Touch</a>
    
    6. Same footer, back-to-top, script.js
    
    Style testimonial cards with:
    - Large quote marks (decorative)
    - Subtle gradient or colored left border per card
    - Avatar circle with initials (CSS-only, background color based on initials)
    - Hover lift animation
    - Grid: 3-col desktop, 2-col tablet, 1-col mobile
  </action>
  <verify>Open testimonials.html in browser and verify: 6 testimonial cards displayed in grid, each with quote, name, stars, and avatar placeholder</verify>
  <done>testimonials.html displays 6 testimonial cards in responsive grid with quotes, ratings, names, and avatar initials</done>
</task>

## Success Criteria
- [ ] testimonials.html renders with 6 testimonial cards
- [ ] Grid layout: 3-col desktop, 2-col tablet, 1-col mobile
- [ ] Each card shows star rating, quote, parent name, program context
- [ ] Avatar initials display correctly
- [ ] Hover animations work
