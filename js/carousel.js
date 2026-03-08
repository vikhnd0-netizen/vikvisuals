/* ============================================================
   VikVisuals — carousel.js
   Work carousel: arrow button scroll, scroll-snap support
   ============================================================ */

(function () {
  'use strict';

  var track = document.querySelector('.carousel-track');
  if (!track) return;

  var btnPrev = document.querySelector('.carousel-btn--prev');
  var btnNext = document.querySelector('.carousel-btn--next');

  function getItemWidth() {
    var item = track.querySelector('.carousel-item');
    if (!item) return 400;
    var gap = parseInt(getComputedStyle(track).gap, 10) || 16;
    return item.offsetWidth + gap;
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', function () {
      track.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', function () {
      track.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
    });
  }

})();
