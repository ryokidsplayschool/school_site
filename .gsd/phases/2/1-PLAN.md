---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Generate Program Images

## Objective
Generate 9 high-quality AI images for each program section following the PRD's photo suggestions. These images are needed before building the programs page.

## Context
- .gsd/SPEC.md (Programs Offered table)
- .gsd/DECISIONS.md (ADR-003: generated images)
- PRD photo suggestions for each program

## Tasks

<task type="auto">
  <name>Create images directory and generate all 9 program images</name>
  <files>
    d:\antigravity Project\ryo_site\images\playschool.webp
    d:\antigravity Project\ryo_site\images\tuition.webp
    d:\antigravity Project\ryo_site\images\drawing.webp
    d:\antigravity Project\ryo_site\images\karate.webp
    d:\antigravity Project\ryo_site\images\dance.webp
    d:\antigravity Project\ryo_site\images\keyboard.webp
    d:\antigravity Project\ryo_site\images\handwriting.webp
    d:\antigravity Project\ryo_site\images\yoga.webp
    d:\antigravity Project\ryo_site\images\tenth_grade.webp
  </files>
  <action>
    Use the generate_image tool to create 9 images. Prompts:
    
    1. playschool: "Warm, bright photo of smiling toddlers (ages 2-4) playing with colorful building blocks and a caring teacher in a safe, sunlit classroom with cheerful wall art, safety mats on floor, child-friendly furniture, professional photography style"
    
    2. tuition: "Small group of school students (ages 8-14) receiving attentive guidance from a friendly tutor at bright desks, colorful stationery, focused learning environment, warm classroom lighting, professional education photography"
    
    3. drawing: "Happy children engaged in drawing and painting at art tables, colorful artwork pinned on walls in background, teacher offering gentle artistic tips, bright creative studio atmosphere, professional photography"
    
    4. karate: "Children (ages 5-10) in white karate uniforms practicing martial arts moves on training mats, professional instructor leading group drill, disciplined and energetic atmosphere, dojo setting, professional sports photography"
    
    5. dance: "Young children in vibrant colorful dance costumes performing group dance steps, dance studio with mirrors, joyful expressions and movement energy, professional dance school photography"
    
    6. keyboard: "Children playing keyboard/piano instruments in a brightly lit music room, teacher guiding hands-on instruction, musical notes decor, warm inviting atmosphere, professional music education photography"
    
    7. handwriting: "Close-up of a young child carefully practicing handwriting letters in a notebook, teacher providing encouraging feedback, quiet organized classroom, warm lighting, professional education photography"
    
    8. yoga: "Children (ages 4-8) in simple yoga poses on colorful yoga mats, gentle natural light, calm peaceful studio setting, caring teacher guiding movements, serene atmosphere, professional wellness photography"
    
    9. tenth_grade: "Teenagers collaborating over textbooks and notes, whiteboard with exam preparation content in background, supportive tutor overseeing progress, modern study room, professional academic photography"
    
    Save each image to the images/ directory. Copy generated images from artifacts to project images/ folder.
  </action>
  <verify>List files in images/ directory to confirm all 9 images exist</verify>
  <done>9 program images generated and saved to images/ directory</done>
</task>

## Success Criteria
- [ ] images/ directory contains 9 image files (playschool, tuition, drawing, karate, dance, keyboard, handwriting, yoga, tenth_grade)
- [ ] Each image matches its program's theme
