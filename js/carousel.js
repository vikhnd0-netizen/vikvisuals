/* ============================================================
   VikVisuals — carousel.js
   Arrow scroll for work carousel
   ============================================================ */

(function () {
  'use strict';

  var track = document.querySelector('.carousel-track');
  var prev  = document.querySelector('.carousel-arrow--prev');
  var next  = document.querySelector('.carousel-arrow--next');

  if (!track) return;

  if (prev) {
    prev.addEventListener('click', function () {
      track.scrollBy({ left: -328, behavior: 'smooth' });
    });
  }

  if (next) {
    next.addEventListener('click', function () {
      track.scrollBy({ left: 328, behavior: 'smooth' });
    });
  }

})();
