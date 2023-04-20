const btns = document.querySelectorAll('button[data-modal]');
const modals = document.querySelectorAll('.modal');
const modalContent = document.querySelector('.modal__content');
const body = document.body;
const closeBtn = document.querySelectorAll('.modal__cross');

const form = document.querySelector('.modal__form');

const closeModal = modal => {
  modal.classList.remove('modal__visible');
  body.classList.remove('stop__scroll');
};

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    console.log(body.classList);
    modals.forEach(modal => {
      if (modal.id === btn.dataset.modal) {
        console.log(modal.id);
        modal.classList.add('modal__visible');
        body.classList.add('stop__scroll');
      } else {
        return;
      }
    });
  });
});

modals.forEach(modal => {
  modal.addEventListener('click', e => {
    e.preventDefault();

    form.addEventListener('click', e => {
      e.preventDefault();
    });

    if (
      e.target === modalContent ||
      e.target.nodeName === 'INPUT' ||
      e.target.nodeName === 'TEXTAREA'
    ) {
      e.preventDefault();
    } else if (e.target === e.currentTarget || closeBtn) {
      closeModal(modal);
    } else {
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
