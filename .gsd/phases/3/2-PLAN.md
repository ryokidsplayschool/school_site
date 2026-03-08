---
phase: 3
plan: 2
wave: 1
---

# Plan 3.2: Contact Page with Map

## Objective
Build the Contact Us page with a validated form, Google reCAPTCHA placeholder, Google Maps free embed, clickable phone/email, address display, and office hours.

## Context
- .gsd/SPEC.md (contact info, address)
- .gsd/DECISIONS.md (ADR-009: user-managed backend, ADR-010: free embed, ADR-011: reCAPTCHA)
- d:\antigravity Project\ryo_site\index.css

## Tasks

<task type="auto">
  <name>Create contact.html with form, map, and contact details</name>
  <files>d:\antigravity Project\ryo_site\contact.html</files>
  <action>
    Create contact.html with:
    
    1. Same <head> with:
       - <title>Contact Us | Ryo Kids International Play School</title>
       - <meta name="description" content="Contact Ryo Kids International Play School for enrollments, fees, and schedules. Visit us in Thiruvottiyur, Chennai.">
       - Google reCAPTCHA script: <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    
    2. Same header/nav (Contact link active)
    
    3. Page hero:
       - <h1>Get in Touch</h1>
       - <p>We'd love to hear from you! Reach out for enrollments, schedules, or any questions.</p>
    
    4. Two-column layout on desktop (form left, info right):
       
       LEFT — Contact Form <form id="contact-form" class="contact-form">:
         - <label for="name">Your Name *</label>
           <input type="text" id="name" name="name" required placeholder="Enter your full name">
         
         - <label for="email">Email Address *</label>
           <input type="email" id="email" name="email" required placeholder="your@email.com">
         
         - <label for="phone">Phone Number</label>
           <input type="tel" id="phone" name="phone" placeholder="Your phone number">
         
         - <label for="program">Program of Interest</label>
           <select id="program" name="program">
             <option value="">Select a program</option>
             <option value="playschool">Playschool & Daycare</option>
             <option value="tuition">Tuition (Grades 1–10)</option>
             <option value="drawing">Drawing</option>
             <option value="karate">Karate</option>
             <option value="dance">Dance</option>
             <option value="keyboard">Keyboard Music</option>
             <option value="handwriting">Handwriting</option>
             <option value="yoga">Yoga</option>
             <option value="tenth-grade">10th Grade Special</option>
           </select>
         
         - <label for="message">Your Message *</label>
           <textarea id="message" name="message" rows="5" required placeholder="How can we help you?"></textarea>
         
         - Google reCAPTCHA widget:
           <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
           <!-- Replace YOUR_RECAPTCHA_SITE_KEY with your actual reCAPTCHA key -->
         
         - <button type="submit" class="btn-primary" id="submit-btn">Send Message</button>
         
         - Success message <div id="form-success" class="form-message success" style="display:none">Thank you! We'll get back to you shortly.</div>
         - Error message <div id="form-error" class="form-message error" style="display:none">Something went wrong. Please call us at 8220001433 or email ryokidsplayschool@gmail.com</div>
       
       RIGHT — Contact Info <div class="contact-info">:
         - <h3>Contact Information</h3>
         - Phone: <a href="tel:8220001433">📞 8220001433</a>
         - Email: <a href="mailto:ryokidsplayschool@gmail.com">✉ ryokidsplayschool@gmail.com</a>
         - Address: Old No: 3b/2, New No:25, Seshachala Gramani St, Tolgate, Sathuma Nagar, Sathangadu, Thiruvottiyur, Chennai, Tamil Nadu 600019
         - Office Hours:
           Playschool: Mon–Sat, 9:00 AM – 5:00 PM
           Tuition: Mon–Sat, 6:00 PM – 8:30 PM
    
    5. Google Maps section:
       - <h3>Find Us</h3>
       - Google Maps free iframe embed pointing to the address
       - Use URL: https://www.google.com/maps/embed?pb=!1m18!... (embedded for the address "Seshachala Gramani St, Tolgate, Sathangadu, Thiruvottiyur, Chennai, 600019")
       - Fallback: <a href="https://maps.google.com/?q=..." target="_blank">Open in Google Maps</a>
       - iframe: width="100%" height="400" style="border:0;" allowfullscreen loading="lazy"
    
    6. Same footer, back-to-top, script.js
    
    7. Add form validation logic to script.js or inline:
       - Validate required fields (name, email, message)
       - Validate email format
       - Show validation errors inline
       - On submit: preventDefault, validate, show success message
       - Form action placeholder: action="#" method="POST" (user will configure)
       - Comment in HTML: <!-- Configure form action URL to your backend endpoint -->
  </action>
  <verify>Open contact.html in browser and verify: form renders with all fields, reCAPTCHA placeholder visible, map iframe loads, phone/email are clickable links</verify>
  <done>contact.html displays contact form with validation, reCAPTCHA placeholder, Google Maps embed, clickable phone/email, and address</done>
</task>

## Success Criteria
- [ ] contact.html renders with form (name, email, phone, program dropdown, message)
- [ ] Client-side validation works (empty fields, invalid email show errors)
- [ ] reCAPTCHA widget placeholder is present
- [ ] Google Maps iframe loads and shows location
- [ ] Phone and email are clickable (tel: and mailto: links)
- [ ] Success/error messages toggle visibility correctly
- [ ] Two-column layout on desktop, stacked on mobile
