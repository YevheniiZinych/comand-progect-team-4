(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-about]"),
    closeModalBtn: document.querySelector("[data-modal-close-about]"),
    modal: document.querySelector("[data-modal-about]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal); 
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open-about")
    refs.modal.classList.toggle("is-hidden");  
  }
})();    


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-ice]"),
    closeModalBtn: document.querySelector("[data-modal-close-ice]"),
    modal: document.querySelector("[data-modal-ice]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal); 
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open-ice")
    refs.modal.classList.toggle("is-hidden");  
  }
})();    


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-coffe]"),
    closeModalBtn: document.querySelector("[data-modal-close-coffe]"),
    modal: document.querySelector("[data-modal-coffe]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal); 
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open-coffe")
    refs.modal.classList.toggle("is-hidden");  
  }
})();    


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-shakes]"),
    closeModalBtn: document.querySelector("[data-modal-close-shakes]"),
    modal: document.querySelector("[data-modal-shakes]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal); 
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open-shakes")
    refs.modal.classList.toggle("is-hidden");  
  }
})();     



(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

