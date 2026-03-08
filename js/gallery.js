/* ============================================================
   VikVisuals — gallery.js
   Filter functionality + lightbox
   ============================================================ */

(function () {
  'use strict';

  /* ── Gallery Filter ── */
  var filterBtns  = document.querySelectorAll('.gallery-filter__btn');
  var galleryItems = document.querySelectorAll('.gallery-masonry__item');

  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Update active button
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.getAttribute('data-filter');

        galleryItems.forEach(function (item) {
          if (filter === 'all') {
            item.classList.remove('hidden');
          } else {
            if (item.getAttribute('data-category') === filter) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          }
        });
      });
    });
  }

  /* ── Lightbox ── */
  var lightbox     = document.querySelector('.lightbox');
  var lightboxImg  = document.querySelector('.lightbox__img');
  var lightboxClose = document.querySelector('.lightbox__close');
  var lightboxPrev = document.querySelector('.lightbox__prev');
  var lightboxNext = document.querySelector('.lightbox__next');

  if (!lightbox) return;

  var currentIndex = 0;
  var visibleItems = [];

  function getVisibleItems() {
    return Array.from(galleryItems).filter(function (item) {
      return !item.classList.contains('hidden');
    });
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    if (!visibleItems.length) return;
    currentIndex = index;
    var item = visibleItems[currentIndex];
    var img  = item.querySelector('.gallery-masonry__img');
    if (img) {
      lightboxImg.src = img.src || '';
      lightboxImg.alt = img.alt || '';
      // Use background-color as fallback
      lightboxImg.style.backgroundColor = '#2a2a2a';
    }
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  function showPrev() {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    var item = visibleItems[currentIndex];
    var img  = item.querySelector('.gallery-masonry__img');
    if (img) {
      lightboxImg.src = img.src || '';
      lightboxImg.alt = img.alt || '';
    }
  }

  function showNext() {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex + 1) % visibleItems.length;
    var item = visibleItems[currentIndex];
    var img  = item.querySelector('.gallery-masonry__img');
    if (img) {
      lightboxImg.src = img.src || '';
      lightboxImg.alt = img.alt || '';
    }
  }

  // Attach open handlers to gallery items
  galleryItems.forEach(function (item, idx) {
    item.addEventListener('click', function () {
      visibleItems = getVisibleItems();
      var visibleIdx = visibleItems.indexOf(item);
      if (visibleIdx !== -1) {
        openLightbox(visibleIdx);
      }
    });

    // Keyboard accessibility
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'Open image in lightbox');

    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        visibleItems = getVisibleItems();
        var visibleIdx = visibleItems.indexOf(item);
        if (visibleIdx !== -1) {
          openLightbox(visibleIdx);
        }
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrev);
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', showNext);
  }

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     { closeLightbox(); }
    if (e.key === 'ArrowLeft')  { showPrev(); }
    if (e.key === 'ArrowRight') { showNext(); }
  });

  // Click outside image to close
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) { closeLightbox(); }
  });

})();
