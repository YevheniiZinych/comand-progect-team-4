(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-contacts-franchise-modal-open]"),
      closeModalBtn: document.querySelector("[data-contacts-franchise-modal-close]"),
      modal: document.querySelector("[data-contacts-franchise-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();