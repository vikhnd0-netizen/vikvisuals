/* ============================================================
   VikVisuals — carousel.js
   Left / right arrow scroll for the featured work carousel.
   ============================================================ */

(function () {
  'use strict';

  const track    = document.querySelector('.carousel__track');
  const btnLeft  = document.querySelector('.carousel__btn--left');
  const btnRight = document.querySelector('.carousel__btn--right');

  if (!track) return;

  if (btnRight) {
    btnRight.addEventListener('click', function () {
      track.scrollBy({ left: 352, behavior: 'smooth' });
    });
  }

  if (btnLeft) {
    btnLeft.addEventListener('click', function () {
      track.scrollBy({ left: -352, behavior: 'smooth' });
    });
  }

})();
