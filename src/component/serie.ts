import { iComponent, iSerie } from '../interface/interface.js';
import { Component } from './Component.js';

export class Series extends Component implements iComponent {
  template: string;
  constructor(selector: string, public serie: iSerie) {
    super();
    this.template = this.createTemplate();
    this.addRender(selector);
    this.addScore();
    this.addDelete();
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
      html += ` <i id="${this.serie.id}" class="fas fa-times-circle icon--delete"></i>`;
    }
    return html;
  }

  private handlerStar(ev: Event) {
    const starId = (<HTMLElement>ev.target).title;
    console.log('click', [...starId]);
  }

  private addScore() {
    let star = document.querySelectorAll('.score__star i');
    star.forEach((item) => {
      item.addEventListener('click', this.handlerStar.bind(this));
    });
  }

  private addDelete() {
    let cross = document.querySelectorAll('i.icon--delete');
    cross.forEach((item) => {
      item.addEventListener('click', this.handlerCross.bind(this));
    });
  }
  private handlerCross(ev: Event) {
    const starId = <HTMLElement>ev.target;
    console.log('click', starId.id);
  }
}
