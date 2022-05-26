import { List } from './component/list.js';
import { Score } from './component/score.js';
import { Series } from './component/serie.js';
import { series } from './models/series.js';

(() => {
  document.addEventListener('DOMContentLoaded', app);
})();

function app() {
  new List('main.main');
}
