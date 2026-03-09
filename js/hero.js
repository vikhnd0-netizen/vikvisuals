/* ============================================================
   VikVisuals — hero.js
   5-slide cross-fade slideshow, dots, counter, pause on hover
   ============================================================ */

(function () {
  'use strict';

  var slides  = document.querySelectorAll('.hero__slide');
  var dots    = document.querySelectorAll('.hero__dot');
  var counter = document.querySelector('.hero__counter');
  var hero    = document.querySelector('.hero');

  if (!slides.length) return;

  var current  = 0;
  var total    = slides.length;
  var interval = null;

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function goTo(index) {
    slides[current].classList.remove('is-active');
    if (dots[current]) dots[current].classList.remove('is-active');

    current = (index + total) % total;

    slides[current].classList.add('is-active');
    if (dots[current]) dots[current].classList.add('is-active');
    if (counter) counter.textContent = pad(current + 1) + ' / ' + pad(total);
  }

  function advance() {
    goTo(current + 1);
  }

  function startTimer() {
    interval = setInterval(advance, 5500);
  }

  function stopTimer() {
    clearInterval(interval);
    interval = null;
  }

  /* Initialise */
  goTo(0);
  startTimer();

  /* Dot clicks */
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      stopTimer();
      goTo(i);
      startTimer();
    });
  });

  /* Pause on hover */
  if (hero) {
    hero.addEventListener('mouseenter', stopTimer);
    hero.addEventListener('mouseleave', startTimer);
  }

})();
