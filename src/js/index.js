import "../scss/main.scss";

import { registerSW } from "./pwa.js";
registerSW();

const plus = document.querySelector(".button__add--js");
const minus = document.querySelector(".button__remove--js");
const number = document.querySelector(".number--js");
const historyButton = document.querySelector(".button__history--js");
const history = document.querySelector(".history--js");
const closeIcon = document.querySelector(".history__icon");
const table = document.querySelector(".tbody--js");

const key = new Date().toLocaleString().slice(0, 10);

let count = 0;
const localStorageVaule = localStorage.getItem(key);

if (localStorageVaule) {
  count = localStorageVaule;
} else {
  localStorage.setItem(key, 0);
}
number.innerHTML = count;

plus.addEventListener("click", () => {
  if (count <= 98) {
    count++; //count = parseInt(count);   zamiana string na liczbę!!!
  }
  number.innerHTML = count;
  localStorage.setItem(key, count);
  location.reload(); //for history
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  number.innerHTML = count;
  localStorage.setItem(key, count);
  location.reload();
});

historyButton.addEventListener("click", () => {
  history.classList.add("history--visible");
});

closeIcon.addEventListener("click", () => {
  history.classList.remove("history--visible");
});

if (table) {
  for (let i = 0; i < localStorage.length; i++) {
    let value = localStorage.getItem(localStorage.key(i));
    const myTable = `<tr class="body__row">
                            <td class="body__data">${localStorage.key(i)}</td>
                            <td class="body__data">${value}</td>
                          </tr>`;
    table.innerHTML += myTable;
  }
}
