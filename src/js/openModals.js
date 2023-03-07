const btns = document.querySelectorAll('button[data-modal]');
const modals = document.querySelectorAll('.modal');

const stopScroll = () => {
  window.scrollTo(0, 0);
};
const closeModal = modal => {
  modal.classList.remove('modal__visible');
  window.removeEventListener('scroll', stopScroll);
};

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    modals.forEach(modal => {
      if (modal.id === btn.dataset.modal) {
        modal.classList.add('modal__visible');

        window.addEventListener('scroll', stopScroll);
      } else {
        closeModal(modal);
      }
    });
  });
});

modals.forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      closeModal(modal);
    } else {
      console.log('hey');
    }
  });
});

modals.forEach(modal => {
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModal(modal);
    } else {
      return;
    }
  });
});
