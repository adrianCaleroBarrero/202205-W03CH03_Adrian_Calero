import { iComponent } from '../interface/interface.js';

export class Film implements iComponent {
  template: string;
  constructor() {
    this.template = this.createTemplate();
  }

  createTemplate(): string {
    let html = `<h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <ul class="series-list">`;

    html += `</ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <ul class="series-list series-list--watched">`;

    html += `</ul>
          </section>`;
    return html;
  }
}
