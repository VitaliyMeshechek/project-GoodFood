(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn1: document.querySelector('[data-modal-open-1]'),
    openModalBtn2: document.querySelector('[data-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modalMenu: document.querySelector('[data-modal-menu]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
  };

  refs.openModalBtn.addEventListener('click', openModalMenu);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);




  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    refs.body.classList.toggle('no-scroll');


  }



  function openModalMenu() {
    refs.modalMenu.classList.toggle('is-hidden-menu');
    // document.addEventListener('keydown', event => closeModalEscape(event));
    // refs.bodyMenu.classList.toggle('modal-open-menu');
  }
})();

// function closeModal() {

//   document.body.removeEventListener('keydown', event => closeModalEscape(event));
// }

// function closeModalEscape(event) {
//   if (event.key === 'Escape') {
//     console.log(event.key === 'Escape')
//   return;
//     // console.log(document.body.addEventListener('keydown', event => closeModalEscape(event)))
//   }
//   // document.body.removeEventListener('keydown', event => closeModalEscape(event));
//   toggleModal();
// }



// function closeModalBackdrop(event) {
//   if (event.target.classList.value !== 'modal-overlay') {
//     return;
//   }
//   toggleModal();
// }