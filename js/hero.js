/* ============================================================
   VikVisuals — hero.js
   Homepage hero slideshow: auto-advance, Ken Burns, cross-fade,
   dot indicators, slide counter, pause on hover
   ============================================================ */

(function () {
  'use strict';

  var slides = [
    { bg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80' },
    { bg: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80' },
    { bg: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80' },
    { bg: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80' },
    { bg: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80' }
  ];

  var INTERVAL = 5000;
  var current  = 0;
  var timer    = null;
  var paused   = false;

  var hero = document.querySelector('.hero--home');
  if (!hero) return;

  /* ── Build slide elements ── */
  var slidesContainer = hero.querySelector('.hero__slides');
  var dotsContainer   = hero.querySelector('.hero__dots');
  var counterEl       = hero.querySelector('.hero__counter');

  if (!slidesContainer) return;

  slides.forEach(function (slide, i) {
    /* Slide wrapper */
    var el = document.createElement('div');
    el.className = 'hero__slide' + (i === 0 ? ' is-active' : '');

    var bg = document.createElement('div');
    bg.className = 'hero__slide-bg';
    bg.style.backgroundImage = 'url(' + slide.bg + ')';
    el.appendChild(bg);

    slidesContainer.appendChild(el);

    /* Dot */
    if (dotsContainer) {
      var dot = document.createElement('button');
      dot.className = 'hero__dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.setAttribute('data-index', i);
      dot.addEventListener('click', function () {
        goTo(parseInt(this.getAttribute('data-index'), 10));
      });
      dotsContainer.appendChild(dot);
    }
  });

  var slideEls = slidesContainer.querySelectorAll('.hero__slide');
  var dotEls   = dotsContainer ? dotsContainer.querySelectorAll('.hero__dot') : [];

  function updateCounter() {
    if (!counterEl) return;
    var num = String(current + 1).padStart(2, '0');
    counterEl.textContent = num + ' / 0' + slides.length;
  }

  function goTo(index) {
    slideEls[current].classList.remove('is-active');
    if (dotEls[current]) dotEls[current].classList.remove('is-active');

    current = (index + slides.length) % slides.length;

    /* Re-trigger Ken Burns by cloning the bg element */
    var bg = slideEls[current].querySelector('.hero__slide-bg');
    if (bg) {
      var clone = bg.cloneNode(true);
      bg.parentNode.replaceChild(clone, bg);
    }

    slideEls[current].classList.add('is-active');
    if (dotEls[current]) dotEls[current].classList.add('is-active');
    updateCounter();
  }

  function next() {
    goTo(current + 1);
  }

  function startTimer() {
    timer = setInterval(function () {
      if (!paused) next();
    }, INTERVAL);
  }

  /* ── Pause on hover ── */
  hero.addEventListener('mouseenter', function () { paused = true; });
  hero.addEventListener('mouseleave', function () { paused = false; });

  updateCounter();
  startTimer();

})();
