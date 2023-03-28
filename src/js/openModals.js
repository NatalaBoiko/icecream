const btns = document.querySelectorAll('button[data-modal]');
const modals = document.querySelectorAll('.modal');
const body = document.body;

const closeModal = modal => {
  modal.classList.remove('modal__visible');
  // body.style.overflow = 'auto';
  body.classList.remove('stop__scroll');
};

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    console.log(body.classList);
    // body.style.overflow = 'hidden';
    modals.forEach(modal => {
      if (modal.id === btn.dataset.modal) {
        console.log(modal.id);
        modal.classList.add('modal__visible');
        // body.style.overflow = 'hidden';
        body.classList.add('stop__scroll');
      } else {
        // closeModal(modal);
        return;
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
