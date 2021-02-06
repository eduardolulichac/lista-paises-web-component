import './components/countryCard/index.js';
import modal from './modal.js';
import { countryApi } from './utils/fetchApi.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    this.mainContent = document.querySelector('.main-content');
    this.initData();
  }

  async initData() {
    let callApi = await new countryApi();
    let result = await callApi.data;
    result.forEach((item) => this.renderWebComponentCountryCard(item));
    this.listenEventCountryCard();
  }

  renderWebComponentCountryCard(info) {
    this.mainContent.insertAdjacentHTML(
      'beforeend',
      `<country-card country="${info.nativeName}" capital="${info.capital}" population="${info.population}" subregion="${info.subregion}"></country-card`
    );
  }

  listenEventCountryCard() {
    const countryCard = document.querySelectorAll('country-card');
    countryCard.forEach((item) =>
      item.addEventListener('dataForModalEvent', (event) => {
        modal.openModal(event.detail);
      })
    );
  }
}

new Main();
