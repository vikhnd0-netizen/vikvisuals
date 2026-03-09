/* ============================================================
   VikVisuals — hero.js
   Hero slideshow: Ken Burns, cross-fade, dots, counter
   ============================================================ */

(function () {
  'use strict';

  var hero     = document.querySelector('.hero--home');
  var slideEls = document.querySelectorAll('.hero--home .hero__slide');
  var dots     = document.querySelectorAll('.hero--home .hero__dot');
  var counter  = document.querySelector('.hero--home .hero__counter');

  if (!hero || !slideEls.length) return;

  var currentSlide = 0;
  var timer        = null;
  var INTERVAL     = 6000;

  function goToSlide(index) {
    // Deactivate current
    slideEls[currentSlide].classList.remove('is-active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('is-active');

    currentSlide = ((index % slideEls.length) + slideEls.length) % slideEls.length;

    // Activate new slide
    slideEls[currentSlide].classList.add('is-active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('is-active');

    // Restart Ken Burns animation on the active image
    var img = slideEls[currentSlide].querySelector('img');
    if (img) {
      img.style.animationName = 'none';
      // Force reflow to restart animation
      void img.offsetWidth;
      img.style.animationName = '';
    }

    // Update counter text e.g. "02 — 05"
    if (counter) {
      var cur = String(currentSlide + 1).padStart(2, '0');
      var tot = String(slideEls.length).padStart(2, '0');
      counter.textContent = cur + ' \u2014 ' + tot;
    }
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, INTERVAL);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  // Initialise — first slide already marked is-active in HTML
  if (counter) {
    var tot = String(slideEls.length).padStart(2, '0');
    counter.textContent = '01 \u2014 ' + tot;
  }
  startTimer();

  // Dot clicks
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goToSlide(i);
      startTimer(); // reset interval on manual navigation
    });
  });

  // Pause on hover
  hero.addEventListener('mouseenter', stopTimer);
  hero.addEventListener('mouseleave', startTimer);

})();
