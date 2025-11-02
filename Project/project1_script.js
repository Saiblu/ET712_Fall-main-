document.addEventListener('DOMContentLoaded', function () {
  // --- Modal (About) ---
  (function () {
    var openBtn = document.getElementById('openAbout');
    var modal = document.getElementById('modal');
    var close = document.getElementById('modalClose');
    if (!modal) return;
    function open() { modal.style.display = 'flex'; modal.setAttribute('aria-hidden','false'); }
    function closeModal() { modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }
    if (openBtn) openBtn.addEventListener('click', open);
    if (close) close.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  })();

  // --- Slideshow (auto rotate) ---
  (function () {
    var slides = document.querySelectorAll('#slideshow .slide');
    var descEl = document.getElementById('slideshowDesc');
    if (!slides || slides.length === 0) return;

    var idx = 0;
    function showSlide(i) {
      slides.forEach(function (s, n) {
        s.classList.toggle('active', n === i);
      });
      // update description from data-desc attribute (fallback to empty)
      if (descEl) descEl.textContent = slides[i].getAttribute('data-desc') || '';
    }

    // initialize
    showSlide(idx);

    // auto-advance (optional)
    setInterval(function () {
      idx = (idx + 1) % slides.length;
      showSlide(idx);
    }, 3000);

    // optional: click slideshow to advance manually
    var slideshow = document.getElementById('slideshow');
    if (slideshow) {
      slideshow.addEventListener('click', function () {
        idx = (idx + 1) % slides.length;
        showSlide(idx);
      });
    }
  })();

  // --- Circle counter ---
  (function () {
    var circle = document.getElementById('clickCircle');
    var reset = document.getElementById('resetCircle');
    var count = 0;
    if (!circle) return;
    circle.textContent = count;
    circle.addEventListener('click', function () { count++; circle.textContent = count; });
    if (reset) reset.addEventListener('click', function () { count = 0; circle.textContent = count; });
  })();

  // --- Flashcards (alphabet) ---
  (function () {
    var cards = document.querySelectorAll('.flashcard');
    if (!cards) return;
    cards.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var flipped = btn.classList.toggle('flipped');
        btn.setAttribute('aria-pressed', flipped ? 'true' : 'false');
      });
    });
  })();

  // --- Go to Top ---
  (function () {
    var toTop = document.getElementById('toTop');
    if (!toTop) return;

    // Smooth scroll to top on click
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // move focus for keyboard users (optional)
      document.body.focus({ preventScroll: true });
    });

    // Show the button when user scrolls down a bit
    function updateToTopVisibility() {
      if (window.scrollY > 200) {
        toTop.classList.add('visible');
      } else {
        toTop.classList.remove('visible');
      }
    }

    // initial state and listeners
    updateToTopVisibility();
    window.addEventListener('scroll', updateToTopVisibility, { passive: true });
  })();

  // --- Simple accessible enhancements ---
  (function () {
    // reveal header background on scroll
    var header = document.getElementById('siteHeader');
    if (!header) return;
    var orig = header.style.background;
    window.addEventListener('scroll', function () {
      header.style.background = window.scrollY > 30 ? 'rgba(255,250,240,0.98)' : orig || '';
    });
  })();

  // --- Color, Number, Animal, Shape, Transport, Clothing Interactions ---
  (function () {
    // Colors: show swatch name and change background briefly
    var swatches = document.querySelectorAll('.swatch');
    var swatchFeedback = document.querySelector('.swatch-feedback');
    swatches && swatches.forEach(function (s) {
      s.addEventListener('click', function () {
        var name = s.getAttribute('data-name') || '';
        if (swatchFeedback) swatchFeedback.textContent = name;
        var col = window.getComputedStyle(s).backgroundColor;
        var body = document.body;
        var orig = body.style.backgroundColor || '';
        body.style.backgroundColor = col;
        setTimeout(function () { body.style.backgroundColor = orig; }, 400);
      });
    });

    // Numbers: show selection / announce number
    var numBtns = document.querySelectorAll('.num-btn');
    var numDisplay = document.querySelector('.number-display');
    numBtns && numBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var val = b.getAttribute('data-value');
        if (numDisplay) numDisplay.textContent = 'You tapped: ' + val;
        // optional: incremental counting animation could be added
      });
    });

    // Animals: show name and optionally play audio (media files required)
    var animals = document.querySelectorAll('.animal');
    var animalFeedback = document.querySelector('.animal-feedback');
    animals && animals.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var name = btn.getAttribute('data-name');
        if (animalFeedback) animalFeedback.textContent = name;
        var audioSrc = btn.getAttribute('data-audio');
        if (audioSrc) {
          var a = new Audio(audioSrc);
          a.play().catch(function () {});
        }
      });
    });

    // Shapes: highlight name
    var shapes = document.querySelectorAll('.shape');
    var shapeFeedback = document.querySelector('.shape-feedback');
    shapes && shapes.forEach(function (sh) {
      sh.addEventListener('click', function () {
        var name = sh.getAttribute('data-name');
        if (shapeFeedback) shapeFeedback.textContent = name;
        // small highlight
        sh.classList.add('active-shape');
        setTimeout(function () { sh.classList.remove('active-shape'); }, 600);
      });
    });

    // Transport: simple slider left/right (two buttons with class .trans-btn)
    var transportCards = document.querySelector('.transport-cards');
    var transBtns = document.querySelectorAll('.trans-btn');
    if (transportCards && transBtns.length) {
      var index = 0;
      var pages = transportCards.children.length; // one per card width
      function updateTrans() {
        var w = transportCards.children[0] ? transportCards.children[0].clientWidth : 280;
        transportCards.style.transform = 'translateX(-' + (index * w) + 'px)';
      }
      transBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var dir = btn.getAttribute('data-index') === '0' ? -1 : 1;
          index = (index + dir + pages) % pages;
          updateTrans();
        });
      });
      window.addEventListener('resize', updateTrans);
    }

    // Clothing: click thumbnail to change preview
    var outfits = document.querySelectorAll('.outfit');
    var preview = document.getElementById('outfitPreview');
    outfits && outfits.forEach(function (o) {
      o.addEventListener('click', function () {
        var img = o.getAttribute('data-img');
        if (preview && img) preview.src = img;
      });
    });
  })();

  // Transportation slider: use viewport width so each card fills the viewport
  (function () {
    var transportViewport = document.querySelector('.transport-viewport');
    var transportCards = document.querySelector('.transport-cards');
    var btnPrev = document.querySelector('.trans-btn[data-index="0"]');
    var btnNext = document.querySelector('.trans-btn[data-index="1"]');
    if (!transportViewport || !transportCards) return;

    var currentIndex = 0;
    var pages = transportCards.children.length;

    function updateTransport() {
      var pageWidth = transportViewport.clientWidth; // width of visible area
      transportCards.style.transform = 'translateX(-' + (currentIndex * pageWidth) + 'px)';
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + pages) % pages;
        updateTransport();
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % pages;
        updateTransport();
      });
    }

    // adjust on resize so transform remains correct
    window.addEventListener('resize', function () {
      // small timeout to allow layout to settle
      setTimeout(updateTransport, 50);
    });

    // init
    updateTransport();
  })();

  // Inline "Go to Top" button behavior
  (function () {
    var inlineBtn = document.getElementById('inlineTopBtn');
    if (!inlineBtn) return;

    inlineBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // optionally move focus to topmost heading for keyboard users
      var firstHeading = document.querySelector('main h2, main h1');
      if (firstHeading) firstHeading.focus({ preventScroll: true });
    });
  })();

  // --- Additional Animal Feedback Behavior ---
  (function () {
    var animals = document.querySelectorAll('.animal');
    var animalFeedback = document.querySelector('.animal-feedback');
    if (!animals || animals.length === 0 || !animalFeedback) return;

    animals.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var name = btn.getAttribute('data-name') || btn.querySelector('.label')?.textContent || '';
        // show text centered and medium size
        animalFeedback.textContent = name;
        animalFeedback.classList.add('visible');

        // remove 'visible' after 2.2s so it fades out (adjust duration as you like)
        clearTimeout(animalFeedback._hideTimeout);
        animalFeedback._hideTimeout = setTimeout(function () {
          animalFeedback.classList.remove('visible');
        }, 2200);
      });
    });
  })();

  // --- Number Feedback Enhancement ---
  (function () {
    var numBtns = document.querySelectorAll('.num-btn');
    var numDisplay = document.querySelector('.number-display');
    if (!numBtns || numBtns.length === 0 || !numDisplay) return;

    // ensure default text is present and hidden initially
    if (!numDisplay.textContent.trim()) numDisplay.textContent = 'Tap a number';

    numBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var val = btn.getAttribute('data-value') || btn.textContent.trim();
        numDisplay.textContent = 'You tapped: ' + val;
        numDisplay.classList.add('visible');

        // optional small highlight on the clicked button
        btn.classList.add('active-num');
        clearTimeout(btn._resetTimeout);
        btn._resetTimeout = setTimeout(function () {
          btn.classList.remove('active-num');
        }, 350);

        // hide feedback after 2 seconds
        clearTimeout(numDisplay._hideTimeout);
        numDisplay._hideTimeout = setTimeout(function () {
          numDisplay.classList.remove('visible');
        }, 2000);
      });

      // optional keyboard accessibility: allow Enter/Space to activate
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  })();
});

// CSS code has been moved to a separate file named 'project1_style.css'.