---
phase: 2
plan: 2
wave: 2
---

# Plan 2.2: Programs Page

## Objective
Build the single programs page (programs.html) with all 9 program sections in strictly alternating image/text layouts, using the generated images and PRD descriptions.

## Context
- .gsd/SPEC.md (program descriptions from PRD)
- .gsd/DECISIONS.md (ADR-005: single page, ADR-007: fees/timings = contact us)
- d:\antigravity Project\ryo_site\index.css
- d:\antigravity Project\ryo_site\images/ (generated images from Plan 2.1)

## Tasks

<task type="auto">
  <name>Create programs.html with all 9 program sections</name>
  <files>d:\antigravity Project\ryo_site\programs.html</files>
  <action>
    Create programs.html with:
    
    1. Same <head> structure as index.html with appropriate title and meta:
       - <title>Our Programs | Ryo Kids International Play School</title>
       - <meta name="description" content="Explore playchool, daycare, tuition, drawing, karate, dance, keyboard music, handwriting, yoga, and 10th grade coaching at Ryo Kids.">
    
    2. Same header/nav as index.html (with "Programs" link active)
    
    3. Page hero banner:
       - <h1>Our Programs</h1>
       - <p>Discover the perfect program for your child's growth and development</p>
    
    4. Quick navigation bar (sticky sub-nav):
       - Horizontal scrollable links to each section anchor
       - Allows quick jumping between programs
    
    5. Nine program sections, each with class="program-section" and unique id:
       CSS handles alternating via :nth-child(odd/even)
       
       Section 1 — id="playschool" (Image LEFT, Text RIGHT):
         Image: images/playschool.webp, alt="Smiling toddlers playing with colorful blocks and teachers in a safe, sunlit classroom"
         Title: Playschool & Daycare
         Ages: 1.5–5 years
         Hours: 9am–5pm
         Description: (from PRD) "Ryo Kids International Play School provides a joyful, play-based foundation for children aged 1.5–5. With structured discovery activities, certified staff, and top safety standards, our nurturing environment fosters creativity, confidence, and early social skills—all while giving parents total peace of mind."
         Schedule CTA: "Contact us for detailed schedule"
         Fees CTA: "Contact us for fees"
         Button: <a class="btn-primary" href="contact.html">Enquire Now</a>
       
       Section 2 — id="tuition" (Image RIGHT, Text LEFT):
         Image: images/tuition.webp, alt="Students receiving attentive guidance from a tutor in a bright classroom"
         Title: Tuition (Grades 1–10)
         Grades: 1–10
         Hours: 6pm–8:30pm (evenings)
         Description: (from PRD) "Our evening tuition program delivers personalized academic support for grades 1–10. Expert teachers and a supportive atmosphere help children thrive through concept-based learning and regular assessments."
         CTA button to contact
       
       Section 3 — id="drawing" (Image LEFT, Text RIGHT):
         Image: images/drawing.webp, alt="Children engaged in drawing at tables with colorful artwork in the background"
         Title: Drawing
         Description: (from PRD) "Unleash your child's imagination! Our drawing classes teach foundational skills through fun, play-focused sessions."
         CTA button to contact
       
       Section 4 — id="karate" (Image RIGHT, Text LEFT):
         Image: images/karate.webp, alt="Kids in karate uniforms practicing moves on mats with instructor"
         Title: Karate
         Description: (from PRD) "Our karate program inspires fitness, discipline, and self-confidence. Professional coaches create a safe, values-centric space."
         CTA button to contact
       
       Section 5 — id="dance" (Image LEFT, Text RIGHT):
         Image: images/dance.webp, alt="Young children in vibrant costumes showing group dance steps"
         Title: Dance
         Description: (from PRD) "Dance at Ryo Kids blends movement, culture, and teamwork. Children discover rhythm and self-expression."
         CTA button to contact
       
       Section 6 — id="keyboard" (Image RIGHT, Text LEFT):
         Image: images/keyboard.webp, alt="Kids playing keyboard instruments in a brightly lit music room"
         Title: Keyboard Music
         Description: (from PRD) "In our keyboard music class, students engage hands-on with real instruments."
         CTA button to contact
       
       Section 7 — id="handwriting" (Image LEFT, Text RIGHT):
         Image: images/handwriting.webp, alt="Child carefully practicing letters with teacher providing feedback"
         Title: Handwriting
         Description: (from PRD) "Our handwriting sessions turn careful practice into a positive routine."
         CTA button to contact
       
       Section 8 — id="yoga" (Image RIGHT, Text LEFT):
         Image: images/yoga.webp, alt="Children in simple yoga poses on bright mats with teacher guiding"
         Title: Yoga
         Description: (from PRD) "Yoga classes teach mindfulness, flexibility, and focus from an early age."
         CTA button to contact
       
       Section 9 — id="tenth-grade" (Image LEFT, Text RIGHT):
         Image: images/tenth_grade.webp, alt="Teens collaborating over textbooks with supportive tutor"
         Title: 10th Grade Special Coaching
         Description: (from PRD) "Our dedicated 10th grade coaching prepares students for academic excellence and wellbeing."
         CTA button to contact
    
    6. Contact CTA strip at bottom (same as homepage)
    7. Same footer as index.html
    8. Back-to-top button
    9. <script src="script.js"></script>
    
    Ensure smooth scroll works from quick nav bar to each section.
    All images must have descriptive alt text.
  </action>
  <verify>Open programs.html in browser and verify: 9 sections visible, alternating layouts on desktop, images load, anchor links work from quick nav</verify>
  <done>programs.html displays all 9 program sections with alternating layouts, anchor navigation, images, descriptions, and contact CTAs</done>
</task>

## Success Criteria
- [ ] programs.html renders with all 9 program sections
- [ ] Odd sections (1,3,5,7,9) show image left / text right on desktop
- [ ] Even sections (2,4,6,8) show image right / text left on desktop
- [ ] Mobile view stacks image on top of text for all sections
- [ ] Quick nav bar allows jumping to any program section
- [ ] All images load with descriptive alt text
- [ ] Each section has "Enquire Now" CTA linking to contact.html
