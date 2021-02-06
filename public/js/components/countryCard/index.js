import template from './template.js';

class CountryCard extends HTMLElement {
  constructor() {
    super();
    this.initShadow();
    this.setDataTemplate();
  }

  initShadow() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  setDataTemplate() {
    this.shadowRoot.querySelector(
      '.card__heading-span'
    ).innerText = this.getAttribute('country');
    this.shadowRoot.querySelector('.capital').innerText = this.getAttribute(
      'capital'
    );
    this.shadowRoot.querySelector('.population').innerText = this.getAttribute(
      'population'
    );
  }

  connectedCallback() {
    this.emitEventDataModal();
  }

  emitEventDataModal() {
    this.shadowRoot
      .querySelector('.show-modal-country-card')
      .addEventListener('click', () => {
        let modalInfo = {
          country: this.getAttribute('country'),
          subregion: this.getAttribute('subregion'),
        };
        this.dispatchEvent(
          new CustomEvent('dataForModalEvent', {
            detail: modalInfo,
          })
        );
      });
  }
}

customElements.define('country-card', CountryCard);
