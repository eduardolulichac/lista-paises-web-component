class Modal {
  constructor() {
    this.init();
  }

  init() {
    this.modalWrapper = document.querySelector('.modal-wrapper');
    this.modal = document.querySelector('.modal');
    this.btnCloseModal = document.querySelector('.close-modal');
    this.btnsOpenModal = document.querySelectorAll('.show-modal-country-card');
    this.countryTitle = document.querySelector('.modal-country');
    this.subregionTitle = document.querySelector('.modal-subregion');
    this.initialEvents();
  }

  initialEvents() {
    this.btnCloseModal.addEventListener('click', () => this.closeModal());
  }

  addEventOpenModal(btnOpenModal) {
    btnOpenModal.addEventListener('click', (data) => this.openModal(data));
  }

  closeModal() {
    this.modalWrapper.classList.remove('modal-wrapper--open');
    this.modal.classList.add('hidden');
  }

  openModal(data) {
    this.modalWrapper.classList.add('modal-wrapper--open');
    this.modal.classList.remove('hidden');
    this.renderData(data);
  }

  renderData(data) {
    this.countryTitle.innerText = data.country;
    this.subregionTitle.innerText = data.subregion;
  }
}

const MyModal = new Modal();

export default MyModal;
