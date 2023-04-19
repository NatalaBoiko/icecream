const burgerBtn = document.querySelector('.burger__button');
const mobileMenu = document.querySelector('.mobile__menu');
// const closeBtn = document.querySelector('.mobile__menu-cross');
const headerBtn = document.querySelector('.header__btn');
const mobileMenuItems = document.querySelectorAll('.mobile__menu-nav li');
const section = document.querySelector('.hero__section');

const closeMenu = () => {
  if (!mobileMenu.classList.contains('mobile__menu-visible')) {
    return;
  } else {
    mobileMenu.classList.remove('mobile__menu-visible');
    headerBtn.classList.remove('is-hidden');
    burgerBtn.classList.remove('is-hidden');
  }
};

const closeMenuByClick = () => {
  section.addEventListener('click', e => {
    if (e.target !== mobileMenu) {
      closeMenu();
    }
  });
};

burgerBtn.addEventListener('click', e => {
  mobileMenu.classList.add('mobile__menu-visible');

  if (mobileMenu.classList.contains('mobile__menu-visible')) {
    headerBtn.classList.toggle('is-hidden');
    burgerBtn.classList.toggle('is-hidden');
    closeMenuByClick();
  } else {
    headerBtn.classList.toggle('is-hidden');
    burgerBtn.classList.toggle('is-hidden');
    console.log('else');
  }
});

mobileMenuItems.forEach(item => {
  item.addEventListener('click', closeMenu());
});

// document.addEventListener('keydown', e => {
//   if (e.code === 'Escape') {
//     closeMenu();
//   } else {
//     return;
//   }
// });
