const burgerBtn = document.querySelector('.burger__button');
const mobileMenu = document.querySelector('.mobile__menu');
const hederBtn = document.querySelector('.header__btn');
const burgerButton = document.querySelector('.burger__button');
const mobileMenuItems = document.querySelectorAll('.mobile__menu-nav li');
const section = document.querySelector('.hero__section');

burgerBtn.addEventListener('click', e => {
  mobileMenu.classList.add('mobile__menu-visible');

  if (mobileMenu.classList.contains('mobile__menu-visible')) {
    hederBtn.classList.toggle('is-hidden');
    burgerButton.classList.toggle('is-hidden');

    closeMenuByClick();
  } else {
    hederBtn.classList.toggle('is-hidden');
    burgerButton.classList.toggle('is-hidden');
    console.log('else');
  }
});

mobileMenuItems.forEach(item => {
  item.addEventListener('click', e => {
    if (!mobileMenu.classList.contains('mobile__menu-visible')) {
      return;
    } else {
      mobileMenu.classList.toggle('mobile__menu-visible');
      hederBtn.classList.toggle('is-hidden');
      burgerButton.classList.toggle('is-hidden');
    }
  });
});

function closeMenuByClick(e) {
  section.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      mobileMenu.classList.remove('mobile__menu-visible');
      hederBtn.classList.remove('is-hidden');
      burgerButton.classList.remove('is-hidden');
    }
  });
}
// or
// closeMenuByClick();
