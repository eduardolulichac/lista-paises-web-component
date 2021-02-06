const template = document.createElement('template');

template.innerHTML = `
<style>
    @import "/css/components/card.css";
  </style>
<div class="card">
                <div class="card__side">
                    <div class="card__picture">
                        &nbsp;
                    </div>
                    <h4 class="card__heading">
                        <span class="card__heading-span show-modal-country-card"></span>
                    </h4>
                    <div class="card__details">
                        <ul>
                            <li><strong> Capital:</strong> <span class="capital"></span></li>
                            <li><strong>Población:</strong> <span class="population"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
`;

export default template;
