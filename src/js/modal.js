(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn1: document.querySelector('[data-modal-open-1]'),
    openModalBtn2: document.querySelector('[data-modal-open-2]'),
    openSecondModalBtn: document.querySelector('[data-second-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeSecondModalBtn: document.querySelector('[data-second-modal-close]'),
    modalMenu: document.querySelector('[data-modal-menu]'),
    modal: document.querySelector('[data-modal]'),
    secondModal: document.querySelector('[data-second-modal]'),
    body: document.querySelector('[data-page]'),
    formSubmitBtn: document.querySelector('[data-submit-btn]'),
    paymentCashBtn: document.querySelector('[data-payment-cash]'),
    paymentVisaBtn: document.querySelector('[data-payment-visa]'),
  };

  refs.openModalBtn.addEventListener('click', openModalMenu);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openSecondModalBtn.addEventListener('click', openSecondModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeSecondModalBtn.addEventListener('click', closeSecondModal);
  refs.paymentCashBtn.addEventListener('click', toggleDisabled);
  refs.paymentVisaBtn.addEventListener('click', toggleDisabled);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    refs.body.classList.toggle('no-scroll');
  }
  function openSecondModal() {
    refs.secondModal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('is-hidden');
  }
  function closeSecondModal() {
    refs.secondModal.classList.toggle('is-hidden');
  }

  function toggleDisabled() {
    refs.formSubmitBtn.removeAttribute('disabled');
  }

  function openModalMenu() {
    refs.modalMenu.classList.toggle('is-hidden-menu');
  }
})();


// function closeModalEscape(event) {
//   if (event.code === 'ESC') {
//     toggleModal();
//   }
// }

// function closeModalBackdrop(event) {
//   if (event.target === refs.modalBackdrop) {
//   }
//   toggleModal();
// }
