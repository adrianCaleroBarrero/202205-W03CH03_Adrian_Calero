import { iComponent } from '../interface/interface.js';
import { Film } from './film.js';

export class List extends Film implements iComponent {
  template: string;
  noWatchedTemplate: string;
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public watched: boolean,
    public score: number,
    public emmies: number
  ) {
    super();
    this.template = this.createTemplate();
    this.noWatchedTemplate = this.createNoWatchedTemplate();
  }

  createTemplate() {
    let html = ``;
    if (this.watched === false) {
      html += `<li class="serie">
                <img
                  class="serie__poster"
                  src="${this.poster}"
                  alt="${this.name} poster"
                />
                <h4 class="serie__title">${this.name}</h4>
                <p class="serie__info">${this.creator} (${this.year})</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>`;
    }
    return html;
  }

  createNoWatchedTemplate() {
    let html = ``;
    if (this.watched === true) {
      html += `<li class="serie">
                <img
                  class="serie__poster"
                  src="${this.poster}"
                  alt="${this.name} poster"
                />
                <h4 class="serie__title">${this.name}</h4>
                <p class="serie__info">${this.creator} (${this.year})</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>`;
    }
    return html;
  }
}
