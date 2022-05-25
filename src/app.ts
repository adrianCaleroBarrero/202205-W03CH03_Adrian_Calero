import { Film } from './component/film.js';
import { List } from './component/list.js';
import { series } from './component/series.js';

(() => {
  document.addEventListener('DOMContentLoaded', app);
})();

function app() {
  const copy = document.querySelector('section.series');

  let html = '';
  let listed = '';
  let noListed = ';';

  html += new Film().template;
  (<Element>copy).innerHTML = html;
  series.forEach((item) => {
    listed += new List(
      item.id,
      item.name,
      item.creator,
      item.year,
      item.poster,
      item.watched,
      item.score,
      item.emmies
    ).template;
  });
  const watched = document.querySelector('.series-list');
  (<Element>watched).innerHTML = listed;
  series.forEach((item) => {
    noListed += new List(
      item.id,
      item.name,
      item.creator,
      item.year,
      item.poster,
      item.watched,
      item.score,
      item.emmies
    ).noWatchedTemplate;
  });

  const toWatch = document.querySelector('.series-list .series-list--watched');
  (<Element>toWatch).innerHTML = noListed;
}
