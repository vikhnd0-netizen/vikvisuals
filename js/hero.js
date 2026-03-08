/* ============================================================
   VikVisuals — hero.js
   Homepage hero slideshow: Ken Burns, cross-fade, dots, counter
   ============================================================ */

(function () {
  'use strict';

  var slides    = document.querySelectorAll('.hero-slide');
  var dots      = document.querySelectorAll('.hero-slideshow__dot');
  var counter   = document.querySelector('.hero-slideshow__counter');
  var slideshow = document.querySelector('.hero-slideshow');

  if (!slides.length) return;

  var current = 0;
  var timer   = null;

  function padTwo(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function activateSlide(index) {
    var slide = slides[index];
    /* Reset Ken Burns animation so it restarts on each activation */
    slide.style.animationName = 'none';
    void slide.offsetWidth; /* force reflow */
    slide.style.animationName = '';
    slide.classList.add('is-active');
  }

  function goTo(index) {
    /* Deactivate current */
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    dots[current].setAttribute('aria-selected', 'false');

    /* Advance index */
    current = (index + slides.length) % slides.length;

    /* Activate next */
    activateSlide(current);
    dots[current].classList.add('is-active');
    dots[current].setAttribute('aria-selected', 'true');

    /* Update counter */
    if (counter) {
      counter.textContent = padTwo(current + 1) + ' / ' + padTwo(slides.length);
    }
  }

  function next() {
    goTo(current + 1);
  }

  function startTimer() {
    if (timer) return;
    timer = setInterval(next, 5000);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  /* Dot click handlers */
  dots.forEach(function (dot, idx) {
    dot.addEventListener('click', function () {
      stopTimer();
      goTo(idx);
      startTimer();
    });
  });

  /* Pause on hover, resume on leave */
  if (slideshow) {
    slideshow.addEventListener('mouseenter', stopTimer);
    slideshow.addEventListener('mouseleave', startTimer);
  }

  /* Kick off — ensure initial slide's Ken Burns animation starts cleanly */
  activateSlide(0);
  startTimer();

})();
