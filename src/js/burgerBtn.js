const burgerBtn = document.querySelector('.burger__button');
const mobileMenu = document.querySelector('.mobile__menu');
const hederBtn = document.querySelector('.header__btn');
const burgerButton = document.querySelector('.burger__button');

burgerBtn.addEventListener('click', e => {
  console.log(e.target);
  mobileMenu.classList.toggle('mobile__menu-visible');
  burgerBtn.classList.toggle('burger__button-hovered');

  if (mobileMenu.className.includes('mobile__menu-visible')) {
    console.log(mobileMenu.className);

    hederBtn.classList.toggle('is-hidden');
    burgerButton.classList.toggle('is-hidden');

    // window.addEventListener('scroll', () => {
    //   window.scrollTo(0, 0);
    // });
  } else {
    hederBtn.classList.toggle('is-hidden');
    burgerButton.classList.toggle('is-hidden');
  }
});
