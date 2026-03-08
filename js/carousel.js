/* ============================================================
   VikVisuals — carousel.js
   Featured work carousel: left/right arrow scroll
   ============================================================ */

(function () {
  'use strict';

  var track      = document.getElementById('carouselTrack');
  var leftArrow  = document.querySelector('.carousel-arrow--left');
  var rightArrow = document.querySelector('.carousel-arrow--right');

  if (!track) return;

  if (rightArrow) {
    rightArrow.addEventListener('click', function () {
      track.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }

  if (leftArrow) {
    leftArrow.addEventListener('click', function () {
      track.scrollBy({ left: -360, behavior: 'smooth' });
    });
  }

})();
