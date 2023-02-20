const burgerBtn = document.querySelector('.burger__button');
const mobileMenu = document.querySelector('.mobile__menu');
const hederBtn = document.querySelector('.header__btn');
const burgerButton = document.querySelector('.burger__button');
const mobileMenuItems = document.querySelectorAll('.mobile__menu-nav li');

burgerBtn.addEventListener('click', e => {
  mobileMenu.classList.add('mobile__menu-visible');

  if (mobileMenu.className.includes('mobile__menu-visible')) {
    hederBtn.classList.toggle('is-hidden');
    burgerButton.classList.toggle('is-hidden');

    // window.addEventListener('scroll', () => {
    //   window.scrollTo(0, 0);
    // });

    window.addEventListener('click', e => {
      if (e.target.className.includes('mobile__menu-visible')) {
        console.log('includes');
        return;
      } else {
        mobileMenu.classList.toggle('mobile__menu-visible');
        hederBtn.classList.toggle('is-hidden');
        burgerButton.classList.toggle('is-hidden');
        console.log(e.target);
      }
    });
  } else {
    hederBtn.classList.toggle('is-hidden');
    burgerButton.classList.toggle('is-hidden');
    console.log('else');
  }
});

mobileMenuItems.forEach(item => {
  item.addEventListener('click', e => {
    if (!mobileMenu.className.includes('mobile__menu-visible')) {
      return;
    } else {
      mobileMenu.classList.toggle('mobile__menu-visible');
      hederBtn.classList.toggle('is-hidden');
      burgerButton.classList.toggle('is-hidden');
    }
  });
});
