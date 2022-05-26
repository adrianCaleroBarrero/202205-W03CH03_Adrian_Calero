import { iComponent, iSerie } from '../interface/interface.js';
import { series } from '../models/series.js';
import { Component } from './Component.js';
import { Series } from './serie.js';

export class List extends Component implements iComponent {
  template: string;
  series: Array<iSerie>;
  constructor(selector: string) {
    super();
    this.series = series;
    this.template = this.createTemplate();
    this.render(selector);
    this.series.forEach((item) => {
      item.watched
        ? new Series('slot.watched', item)
        : new Series('slot.pending', item);
    });
  }

  createTemplate() {
    let html = `<section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
             <slot class="pending"></slot>
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            <slot class="watched"></slot>  
            </ul>
          </section>
        </section>`;

    return html;
  }
}
