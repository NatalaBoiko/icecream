const toTopBtn = document.querySelector('.to_top');
// console.log(toTopBtn);

const showToTopBtn = () => {
  window.scrollY >= 100
    ? toTopBtn.classList.add('to_top-visible')
    : toTopBtn.classList.remove('to_top-visible');
};

window.addEventListener('scroll', showToTopBtn);
