/* ============================================
   RYO KIDS INTERNATIONAL PLAY SCHOOL
   JavaScript — Navigation, Scroll, Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Mobile Navigation ----------
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      navToggle.textContent = isOpen ? '✕' : '☰';
      navToggle.setAttribute('aria-expanded', isOpen);
      if (navOverlay) navOverlay.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav on link click
    navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.textContent = '☰';
        navToggle.setAttribute('aria-expanded', 'false');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close nav on overlay click
    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.textContent = '☰';
        navToggle.setAttribute('aria-expanded', 'false');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }

  // ---------- Sticky Header Scroll ----------
  const header = document.querySelector('.header');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- Scroll Reveal Animations ----------
  const animateElements = document.querySelectorAll('.animate-in');

  if (animateElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => observer.observe(el));
  }

  // ---------- Back to Top Button ----------
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Active Nav Link ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---------- Contact Form Validation ----------
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const clearErrors = () => {
      contactForm.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    };

    const showError = (input) => {
      input.classList.add('error');
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();
      if (successMsg) successMsg.style.display = 'none';
      if (errorMsg) errorMsg.style.display = 'none';

      let valid = true;

      if (!nameInput.value.trim()) {
        showError(nameInput);
        valid = false;
      }

      if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
        showError(emailInput);
        valid = false;
      }

      if (!messageInput.value.trim()) {
        showError(messageInput);
        valid = false;
      }

      if (valid) {
        // Form is valid — show success
        // Backend submission will be handled by the form action URL
        if (successMsg) successMsg.style.display = 'block';
        contactForm.reset();

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          if (successMsg) successMsg.style.display = 'none';
        }, 5000);
      }
    });

    // Clear error on input
    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.classList.remove('error');
        });
      }
    });
  }

  // ---------- Quick Nav Active State (Programs Page) ----------
  const quickNavLinks = document.querySelectorAll('.quick-nav-links a');
  const programSections = document.querySelectorAll('.program-section[id]');

  if (quickNavLinks.length > 0 && programSections.length > 0) {
    const onScrollQuickNav = () => {
      let current = '';
      programSections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      quickNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScrollQuickNav, { passive: true });
  }

});
