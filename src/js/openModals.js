const btns = document.querySelectorAll('button[data-modal]');
const modals = document.querySelectorAll('.modal');

const openModal = () => {
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      modals.forEach(modal => {
        console.log(modal.id);

        if (modal.id === btn.dataset.modal) {
          modal.classList.add('modal__visible');
        } else {
          modal.classList.remove('modal__visible');
        }
      });
    });
  });
};

const closeModalByBackdrop = e => {
  modals.forEach(modal => {
    modal.addEventListener('click', e => {
      //   console.log(modal.classList);
      if (e.target === e.currentTarget) {
        modal.classList.remove('modal__visible');
      } else {
        console.log('hey');
      }
    });
  });
};

const closeModalByKeyDown = () => {
  modals.forEach(modal => {
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        modal.classList.remove('modal__visible');
      } else {
        return;
      }
    });
  });
};

openModal();
closeModalByBackdrop();
closeModalByKeyDown();
