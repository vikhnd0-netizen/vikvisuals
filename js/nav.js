/* ============================================================
   VikVisuals — nav.js
   Sticky nav scroll behaviour, hamburger, services dropdown
   ============================================================ */

(function () {
  'use strict';

  var nav               = document.querySelector('.nav');
  var hamburger         = document.querySelector('.nav__hamburger');
  var mobileNav         = document.querySelector('.nav__mobile');
  var dropdownTrigger   = document.querySelector('.nav__dropdown-trigger');
  var mobileDropTrigger = document.querySelector('.nav__mobile-dropdown-trigger');
  var mobileSub         = document.querySelector('.nav__mobile-sub');

  /* ── Scroll: add .scrolled class at 80px ── */
  function handleScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ── Hamburger: toggle full-screen mobile overlay ── */
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  /* ── Mobile sub-menu ── */
  if (mobileDropTrigger && mobileSub) {
    mobileDropTrigger.addEventListener('click', function () {
      mobileSub.classList.toggle('open');
      var isOpen = mobileSub.classList.contains('open');
      mobileDropTrigger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ── Close mobile nav on link click ── */
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        if (hamburger) {
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Desktop dropdown ── */
  if (dropdownTrigger) {
    var dropdownParent = dropdownTrigger.closest('.nav__dropdown');

    dropdownTrigger.addEventListener('click', function () {
      if (dropdownParent) dropdownParent.classList.toggle('open');
      var isOpen = dropdownParent ? dropdownParent.classList.contains('open') : false;
      dropdownTrigger.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', function (e) {
      if (dropdownParent && !dropdownParent.contains(e.target)) {
        dropdownParent.classList.remove('open');
        dropdownTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdownParent) {
        dropdownParent.classList.remove('open');
        dropdownTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Scroll-reveal via IntersectionObserver ── */
  if ('IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();
