(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn1: document.querySelector('[data-modal-open-1]'),
    openModalBtn2: document.querySelector('[data-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modalMenu: document.querySelector('[data-modal-menu]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
    bodyMenu: document.querySelector('[data-page-menu]'),
  };

  refs.openModalBtn.addEventListener('click', openModalMenu);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
  }

  function openModalMenu() {
    refs.modalMenu.classList.toggle('is-hidden-menu');
    refs.bodyMenu.classList.toggle('modal-open-menu');
  }
})();