/* ============================================================
   VikVisuals — nav.js
   Sticky nav, scroll behaviour, hamburger, services dropdown
   ============================================================ */

(function () {
  'use strict';

  const nav        = document.querySelector('.nav');
  const hamburger  = document.querySelector('.nav__hamburger');
  const mobileNav  = document.querySelector('.nav__mobile');
  const dropdownTrigger   = document.querySelector('.nav__dropdown-trigger');
  const mobileDropTrigger = document.querySelector('.nav__mobile-dropdown-trigger');
  const mobileSub  = document.querySelector('.nav__mobile-sub');

  /* ── Scroll: add .scrolled class ── */
  function handleScroll() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load

  /* ── Hamburger ── */
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  /* ── Mobile sub-menu ── */
  if (mobileDropTrigger && mobileSub) {
    mobileDropTrigger.addEventListener('click', function () {
      mobileSub.classList.toggle('open');
      const isOpen = mobileSub.classList.contains('open');
      mobileDropTrigger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ── Close mobile nav on link click ── */
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        if (hamburger) hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Desktop dropdown keyboard accessibility ── */
  if (dropdownTrigger) {
    const dropdownParent = dropdownTrigger.closest('.nav__dropdown');
    dropdownTrigger.addEventListener('click', function () {
      if (dropdownParent) {
        dropdownParent.classList.toggle('open');
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (dropdownParent && !dropdownParent.contains(e.target)) {
        dropdownParent.classList.remove('open');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdownParent) {
        dropdownParent.classList.remove('open');
      }
    });
  }

  /* ── Scroll-reveal via IntersectionObserver ── */
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();
