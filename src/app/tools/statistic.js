const { statistics } = require('../../data/stats');

const categoriesList = document.querySelector('.cards_list');
const cardDiv = document.querySelector('.cards_list');
const refreshDiv = document.querySelectorAll('.menu_item');

function deletePrev() {
  while (cardDiv.firstChild) {
    cardDiv.removeChild(cardDiv.firstChild);
  }
  document.querySelector('.checkbox').checked = false;
  document.querySelector('.checkbox').disabled = true;
}

function setStatisticsTable() {
  categoriesList.append(document.createElement('table'));
  document.querySelector('table').insertAdjacentHTML('beforeend',
    `<thead>
        <tr>
          <th>Category</th>
          <th>Word</th>
          <th>Translation</th>
          <th>Train</th>
          <th>Right</th>
          <th>Wrong</th>
          <th>%</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  `);
}

function showStatistics(element) {
  document.querySelector('tbody').insertAdjacentHTML('beforeend',
    `
    <tr class="word-line">
      <td>${element.category}</td>
      <td>${element.word}</td>
      <td>${element.translation}</td>
      <td>${element.train}</td>
      <td>${element.right}</td>
      <td>${element.wrong}</td>
      <td>${element.percent}</td>
    </tr>
  `);
}

document.querySelector('.statistics').addEventListener('click', () => {
  deletePrev();
  refreshDiv.forEach(div => div.classList.remove('active'));
  document.querySelector('.cards_list').setAttribute('style', 'overflow: auto');
  setStatisticsTable();
  statistics.forEach(showStatistics);
});
