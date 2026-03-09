/* ============================================================
   VikVisuals — nav.js
   Nav stays white always. Hamburger, services dropdown.
   ============================================================ */

(function () {
  'use strict';

  const hamburger        = document.querySelector('.nav__hamburger');
  const mobileNav        = document.querySelector('.nav__mobile');
  const dropdownTrigger  = document.querySelector('.nav__dropdown-trigger');
  const dropdownParent   = document.querySelector('.nav__dropdown');
  const mobileDropBtn    = document.querySelector('.nav__mobile-dropdown-trigger');
  const mobileSub        = document.querySelector('.nav__mobile-sub');

  /* ── Hamburger ── */
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  /* ── Services dropdown (desktop) ── */
  if (dropdownTrigger && dropdownParent) {
    dropdownTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdownParent.classList.toggle('is-open');
      dropdownTrigger.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!dropdownParent.contains(e.target)) {
        dropdownParent.classList.remove('is-open');
        dropdownTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdownParent.classList.remove('is-open');
        dropdownTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Mobile sub-menu ── */
  if (mobileDropBtn && mobileSub) {
    mobileDropBtn.addEventListener('click', function () {
      const isOpen = mobileSub.classList.toggle('is-open');
      mobileDropBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ── Close mobile nav on link click ── */
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        if (hamburger) hamburger.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

})();
