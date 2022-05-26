import { iComponent, iSerie } from '../interface/interface.js';
import { series } from '../models/series.js';
import { Component } from './Component.js';

export class Score extends Component implements iComponent {
  template: string;
  series: Array<iSerie>;
  constructor(selector: string) {
    super();
    this.series = series;
    this.template = this.createTemplate();
    this.addRender(selector);
  }
  createTemplate() {
    let html = ``;

    this.series.forEach((item) => {
      let i: number;
      for (i = 0; i < item.score; i++) {
        html += `<li class="score__star">
                    <i class="icon--score fas fa-star" title="${i + 1}/5"></i>
                  </li>`;
      }
    });
    return html;
  }
}
