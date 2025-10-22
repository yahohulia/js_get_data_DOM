'use strict';

let sum = 0;
let length = 0;

const populations = document.querySelectorAll('span');

for (let i = 0; i < populations.length; i++) {
  const chunck = populations[i].innerText.split(',');
  const number = chunck.join('');

  if (typeof +number === 'number' && !Number.isNaN(+number)) {
    sum += +number;
    length++;
  }
}

const avarage = Math.round(sum / length);

document.querySelectorAll('span.total-population')[0].innerText =
  sum.toLocaleString('en-US');

document.querySelectorAll('span.average-population')[0].innerText =
  avarage.toLocaleString('en-US');
