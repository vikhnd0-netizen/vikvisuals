/* ============================================================
   VikVisuals — hero.js
   5-slide cross-fade slideshow. No Ken Burns. No scale/zoom.
   ============================================================ */

(function () {
  'use strict';

  const hero    = document.querySelector('.hero');
  const slides  = Array.from(document.querySelectorAll('.hero__slide'));
  const dots    = Array.from(document.querySelectorAll('.hero__dot'));
  const counter = document.querySelector('.hero__counter');

  if (!hero || slides.length === 0) return;

  const TOTAL    = slides.length;
  const INTERVAL = 5000;
  let current    = 0;
  let timer      = null;

  /* ── Format counter text ── */
  function fmt(n) {
    return String(n + 1).padStart(2, '0') + ' / ' + String(TOTAL).padStart(2, '0');
  }

  /* ── Activate a slide ── */
  function goTo(index) {
    slides[current].classList.remove('is-active');
    if (dots[current]) dots[current].classList.remove('is-active');

    current = (index + TOTAL) % TOTAL;

    slides[current].classList.add('is-active');
    if (dots[current]) dots[current].classList.add('is-active');
    if (counter) counter.textContent = fmt(current);
  }

  /* ── Advance to next slide ── */
  function nextSlide() {
    goTo(current + 1);
  }

  /* ── Start / stop timer ── */
  function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(nextSlide, INTERVAL);
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  /* ── Dot click handlers ── */
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goTo(i);
      stopTimer();
      startTimer();
    });
  });

  /* ── Pause on hover ── */
  hero.addEventListener('mouseenter', stopTimer);
  hero.addEventListener('mouseleave', startTimer);

  /* ── Initialise ── */
  startTimer();

})();
