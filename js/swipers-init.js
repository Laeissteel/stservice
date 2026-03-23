export const swipersInit = () => {

  const swiperWorks = new Swiper('.works__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      991: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.works-button-next',
      prevEl: '.works-button-prev',
    },
  });
}