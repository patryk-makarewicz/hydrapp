import '../scss/main.scss';

import {registerSW} from './pwa.js';
registerSW();


const plus = document.querySelector('.button__add--js');
const minus = document.querySelector('.button__remove--js');
const number = document.querySelector('.number--js');
const historyButton = document.querySelector('.button__history--js');
const history = document.querySelector('.history--js');
const closeIcon = document.querySelector('.history__icon');
const table = document.querySelector('.tbody--js');

const glass = localStorage.getItem('glass');

const key = new Date().toISOString().slice(0, 10);
let count = 0;


if (glass) {
    number.innerHTML = glass;
    count = parseInt(glass);
} else {
    number.innerHTML = count;
}


plus.addEventListener('click', () => {
    if (count >= 99) {
        count = 99;
    } else {
        count = count + 1;
        number.innerHTML = count;
        localStorage.setItem('glass', count);
        location.reload();
    }
})

minus.addEventListener('click', () => {
    if (count <= 0) {
        count = 0;
    } else {
        count = count - 1;
        number.innerHTML = count;
        localStorage.setItem('glass', count);
        location.reload();
    }
})


historyButton.addEventListener('click', (e) => {
  e.preventDefault();
  history.classList.add('history--visible');
});

closeIcon.addEventListener('click', (e) => {
  e.preventDefault();
  history.classList.remove('history--visible');
});


if (table) {
      let value = localStorage.getItem(key, count);
        table.innerHTML += `<tr class="tbody__row">
                              <td class="tbody__data">${key}</td>
                              <td class="tbody__data">${count}</td>
                            </tr>`;
  }