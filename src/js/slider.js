// console.log('slider');

export default new Swiper('.swiper', {
  //   direction: 'vertical',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
    // dynamicBullets: 'true',
  },
});
