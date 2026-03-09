/* ============================================================
   VikVisuals — nav.js
   Hamburger toggle, services dropdown, click-outside close
   ============================================================ */

(function () {
  'use strict';

  const hamburger        = document.querySelector('.nav__hamburger');
  const mobileNav        = document.querySelector('.nav__mobile');
  const servicesToggle   = document.querySelector('.services-toggle');
  const dropdown         = document.querySelector('.nav__dropdown');
  const mobileServTrig   = document.querySelector('.nav__mobile-services-trigger');
  const mobileSub        = document.querySelector('.nav__mobile-sub');

  /* ── Hamburger ── */
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  /* ── Desktop services dropdown ── */
  if (servicesToggle && dropdown) {
    servicesToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('is-open');
      const isOpen = dropdown.classList.contains('is-open');
      servicesToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-open');
        servicesToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('is-open');
        servicesToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Mobile services sub-menu ── */
  if (mobileServTrig && mobileSub) {
    mobileServTrig.addEventListener('click', function () {
      const isOpen = mobileSub.classList.toggle('is-open');
      mobileServTrig.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ── Close mobile nav on link click ── */
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('nav-open');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

})();
