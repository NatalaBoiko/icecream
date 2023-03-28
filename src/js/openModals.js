const btns = document.querySelectorAll('button[data-modal]');
const modals = document.querySelectorAll('.modal');
const body = document.body;

const closeModal = modal => {
  modal.classList.remove('modal__visible');
  body.style.overflow = 'auto';
};

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    modals.forEach(modal => {
      if (modal.id === btn.dataset.modal) {
        console.log(modal.id);
        console.log(btn.dataset.modal);
        modal.classList.add('modal__visible');
        body.style.overflow = 'hidden';
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
      console.log(e.target.nodeName);
      return;
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
