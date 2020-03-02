import Swiper from 'swiper';

export default class TestimonialCarousel {
  constructor() {
    this.init();
  }

  init() {
    if (!document.querySelectorAll('.js-testimonial-carousel').length) return;

    this._swiperInstance = new Swiper('.js-testimonial-carousel', {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
}
