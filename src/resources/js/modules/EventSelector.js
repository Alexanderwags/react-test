import Siema from 'siema';
import Reveal from './reveal';

export default class EventSelector {
  constructor() {
    this.initSlideEffect();
    this.initLoadMoreButtons();
  }

  initSlideEffect() {
    const EVENTS_PER_SLIDE = 5;

    const eventsSlider = new Siema({
      selector: '.events-slider',
      perPage: EVENTS_PER_SLIDE,
    });

    document.querySelector('.js__events-nav-prev').addEventListener('click', () => eventsSlider.prev(EVENTS_PER_SLIDE));
    document.querySelector('.js__events-nav-next').addEventListener('click', () => eventsSlider.next(EVENTS_PER_SLIDE));
  }

  initLoadMoreButtons() {
    const slidesLoadTriggers = document.querySelectorAll('.js__load-event-specific-slides');

    for (let i = 0; i < slidesLoadTriggers.length; i++) {
      slidesLoadTriggers[i].addEventListener('click', e => {
        e.preventDefault();

        const dataLoadURI = e.currentTarget.dataset.loadAction;

        this.removeEventSlides();

        fetch(dataLoadURI)
          .then(response => {
            response.text().then(slides => {
              const parsedSlides = document.createRange().createContextualFragment(slides).children;

              this.addEventSlides(parsedSlides);
            });
          }).catch(err => {
            console.error(err);
            alert('Something went wrong when trying to retrieve the event slides.');
          })
      });
    }
  }

  addEventSlides(slides) {
    const outroSlide = document.querySelector('.js__slide-outro');
    const slidesContainer = document.querySelector('.js__slides-container');

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add('js__event-specific', 'future');

      slidesContainer.insertBefore(slides[i].cloneNode(true), outroSlide);
    }

    Reveal.initialize();
    Reveal.next();
  }

  removeEventSlides() {
    const slides = document.querySelectorAll('.js__event-specific');

    for (let i = 0; i < slides.length; i++) {
      slides[i].remove();
    }

    Reveal.initialize();
  }
}
