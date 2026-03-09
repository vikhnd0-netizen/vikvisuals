/* ============================================================
   VikVisuals — carousel.js
   Horizontal drag/scroll carousel — arrow buttons
   ============================================================ */

(function () {
  'use strict';

  var track   = document.querySelector('.carousel-track');
  var btnPrev = document.querySelector('.carousel-arrow--prev');
  var btnNext = document.querySelector('.carousel-arrow--next');

  if (!track) return;

  if (btnNext) {
    btnNext.addEventListener('click', function () {
      track.scrollBy({ left: 376, behavior: 'smooth' });
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', function () {
      track.scrollBy({ left: -376, behavior: 'smooth' });
    });
  }

})();
