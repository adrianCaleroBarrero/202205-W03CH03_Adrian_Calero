import { iComponent, iSerie } from '../interface/interface.js';
import { Component } from './Component.js';

export class Series extends Component implements iComponent {
  template: string;
  constructor(selector: string, public serie: iSerie) {
    super();
    this.template = this.createTemplate();
    this.addRender(selector);
  }

  createTemplate(): string {
    let html: string;

    html = ` <li class="serie">
                <img
                  class="serie__poster"
                  src="${this.serie.poster}"
                  alt="6 feet under poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
                <ul class="score">
                  `;

    for (let i = 0; i < 5; i++) {
      if (this.serie.watched) {
        html += `<li class="score__star">
                    <i class="icon--score fas fa-star" title="${i + 1}/5"></i>
                  </li>`;
      } else {
        html += `<li class="score__star">
                    <i class="icon--score far fa-star" title="${i + 1}/5"></i>
                  </li>`;
      }
    }
    return html;
  }
}
