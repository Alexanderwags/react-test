/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

// import domReady from 'domready';
import EventSelector from './modules/EventSelector';
import TestimonialCarousel from './modules/TestimonialCarousel';
import Reveal from './modules/reveal';

export default initReveral = callback => callback();

initReveral(() => {
  let eventSelector;
  let testimonialCarousel;
  let typewriterMessageBubble;

  // iOS Address Bar bug
  window.onresize = function () {
    document.body.height = window.innerHeight;
  };
  window.onresize(); // called to initially set the height.

  Reveal.initialize({
    controls: false,
    progress: false,
    history: true,
    previewLinks: true,
    center: false,
    width: 1920,
    height: 1080,
    margin: 0,
    mouseWheel: false,
    transition: 'fade', // none/fade/slide/convex/concave/zoom
  });

  Reveal.addEventListener('ready', (e) => {
    document.body.classList.remove('loading');
    checkForSpecialSlides(e);

    loadBackgrounds();
  });

  Reveal.addEventListener('slidechanged', (e) => {
    checkForSpecialSlides(e);
  });

  document.querySelector('.navigate-to-start').addEventListener('click', (e) => {
    e.preventDefault();

    const scrollPosition = document.body.scrollTop;

    window.location.href = e.currentTarget.getAttribute('href');

    document.body.scrollTop = scrollPosition;
  });

  // document.querySelector('.language-switch').addEventListener('click', function (e) {
  //     e.preventDefault();
  //
  //     window.location.href = UpdateQueryString("lang", e.currentTarget.dataset.language, window.location.href);
  // });

  function loadBackgrounds() {
    const allBgs = document.querySelectorAll('[data-image-bg]');

    for (let i = 0; i < allBgs.length; i++) {
      const currentElem = allBgs[i];
      const bgSrc = currentElem.getAttribute('data-image-bg');
      const bgImg = new Image();

      currentElem.classList.add('bg-img-loading');

      bgImg.onload = () => {
        currentElem.style.backgroundImage = `url(${bgSrc})`;
        currentElem.classList.remove('bg-img-loading');
      };

      bgImg.src = bgSrc;
    }
  }

  function checkForSpecialSlides(e) {
    const isHigherEd = e.currentSlide.querySelector('.slide-higher-ed');

    if (e.currentSlide.getAttribute('id') === 'event-selector') {
      eventSelector = eventSelector || new EventSelector();
    }

    if (e.currentSlide.getAttribute('id') === 'testimonial-carousel') {
      testimonialCarousel = new TestimonialCarousel();
    }

    if (e.currentSlide.getAttribute('id') === 'additional-touchpoints' ||
      isHigherEd && isHigherEd.classList.contains('has-message-bubble')) {
      messageBubbleAnim(e.currentSlide.querySelector('[data-message]'));
    }
  }

  function messageBubbleAnim(messageBubble) {
    if (messageBubble === null) return;

    const text = messageBubble.getAttribute('data-message');

    clearInterval(typewriterMessageBubble);
    messageBubble.innerHTML = '';

    setTimeout(() => {
      let i = 0;
      typewriterMessageBubble = setInterval(() => {
        messageBubble.innerHTML += text[i++];

        if (i > text.length - 1) clearInterval(typewriterMessageBubble);
      }, 50);
    }, 500);
  }
});
