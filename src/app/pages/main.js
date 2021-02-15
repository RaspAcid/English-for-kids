import { cards } from '../../data/cards';

document.querySelector('.checkbox').disabled = true;
document.querySelector('.menu_item.main').classList.add('active');
document.querySelector('.switch').addEventListener('click', () => {
  if (document.querySelector('.checkbox').disabled === true) {
    // eslint-disable-next-line no-alert
    alert('Для начала игры выберите категорию');
  }
});

document.querySelector('#menu_toggle').addEventListener('click', () => {
  if (document.querySelector('#menu_toggle').checked === true) {
    document.body.setAttribute('style', 'overflow: hidden;');
  } else {
    document.body.removeAttribute('style', 'overflow: hidden;');
  }
});

const blackout = document.querySelector('.blackout');
blackout.addEventListener('click', () => { document.querySelector('#menu_toggle').click(); });

const categoriesList = document.querySelector('.cards_list');
const addCategories = (element) => categoriesList.insertAdjacentHTML('beforeend',
  `<div class="card category ${element.name.toLowerCase()}" data-categories="${element.name.toLowerCase()}">

    <img class="card-img" src="${element.src}" alt="${element.name}">

    <div class="card-body">
        <h3>${element.name}</h3>
    </div>

</div>`);

cards.categories.forEach(addCategories);

const addCards = (element) => categoriesList.insertAdjacentHTML('beforeend',
  `<div class="card word_card">

    <div class="front-face">
        <img class="card-img" src="${element.image}" alt="${element.word}">

        <div class="card-body words">
            <h3>${element.translation}</h3>
        </div>
    </div>

    <div class="back-face" data-card="${element.word}">
        <img class="card-img" src="${element.image}" alt="${element.word}">

        <div class="card-body words">
            <h3>${element.word}</h3>
            <div class="reverse-btn"><i class="fas fa-undo"></i></div>
        </div>
    </div>

</div>`);

const cardDiv = document.querySelector('.cards_list');
const refreshDiv = document.querySelectorAll('.menu_item');

function deletePrev() {
  while (cardDiv.firstChild) {
    cardDiv.removeChild(cardDiv.firstChild);
  }
  document.querySelector('.checkbox').checked = false;
  document.querySelector('.checkbox').disabled = false;
  document.querySelector('.cards_list').removeAttribute('style');
}

function activeItem() {
  refreshDiv.forEach(div => div.classList.remove('active'));
  this.classList.add('active');
}

refreshDiv.forEach(div => {
  div.addEventListener('click', deletePrev, false);
  div.addEventListener('click', activeItem, true);
});

refreshDiv.forEach(div => {
  div.addEventListener('click', () => {
    document.querySelector('#menu_toggle').click();
    document.querySelector('.checkbox').disabled = false;
  }, false);
});

document.querySelector('.main').addEventListener('click', () => {
  cards.categories.forEach(addCategories);
  document.querySelector('.checkbox').checked = false;
  document.querySelector('.checkbox').disabled = true;
}, true);

document.querySelector('.main').addEventListener('click', () => {
  document.querySelectorAll('.card.category').forEach(div => {
    div.addEventListener('click', (e) => {
      document.querySelector(`.menu_item.${e.target.closest('.card.category').getAttribute('data-categories').toLowerCase()}`).click();
      document.querySelector(`.menu_item.${e.target.closest('.card.category').getAttribute('data-categories').toLowerCase()}`).click();
    }, true);
  });
}, true);

document.querySelectorAll('.card.category').forEach(div => {
  div.addEventListener('click', (e) => {
    refreshDiv.forEach(item => item.classList.remove('active'));
    document.querySelector(`.menu_item.${e.target.closest('.card.category').getAttribute('data-categories').toLowerCase()}`).classList.add('active');
  }, true);
});

document.querySelectorAll('.animals').forEach(div => div.removeEventListener('click', () => { cards.animals.forEach(addCards); }, true));
document.querySelectorAll('.animals').forEach(div => div.addEventListener('click', () => { deletePrev(); cards.animals.forEach(addCards); }, true));

document.querySelectorAll('.clothes').forEach(div => div.removeEventListener('click', () => { deletePrev(); cards.clothes.forEach(addCards); }, true));
document.querySelectorAll('.clothes').forEach(div => div.addEventListener('click', () => { deletePrev(); cards.clothes.forEach(addCards); }, true));

document.querySelectorAll('.colors').forEach(div => div.removeEventListener('click', () => { deletePrev(); cards.colors.forEach(addCards); }, true));
document.querySelectorAll('.colors').forEach(div => div.addEventListener('click', () => { deletePrev(); cards.colors.forEach(addCards); }, true));

document.querySelectorAll('.fruits').forEach(div => div.removeEventListener('click', () => { deletePrev(); cards.fruits.forEach(addCards); }, true));
document.querySelectorAll('.fruits').forEach(div => div.addEventListener('click', () => { deletePrev(); cards.fruits.forEach(addCards); }, true));

document.querySelectorAll('.places').forEach(div => div.removeEventListener('click', () => { deletePrev(); cards.places.forEach(addCards); }, true));
document.querySelectorAll('.places').forEach(div => div.addEventListener('click', () => { deletePrev(); cards.places.forEach(addCards); }, true));

document.querySelectorAll('.sports').forEach(div => div.removeEventListener('click', () => { deletePrev(); cards.sports.forEach(addCards); }, true));
document.querySelectorAll('.sports').forEach(div => div.addEventListener('click', () => { deletePrev(); cards.sports.forEach(addCards); }, true));

document.querySelectorAll('.transport').forEach(div => div.removeEventListener('click', () => { deletePrev(); cards.transport.forEach(addCards); }, true));
document.querySelectorAll('.transport').forEach(div => div.addEventListener('click', () => { deletePrev(); cards.transport.forEach(addCards); }, true));

document.querySelectorAll('.weather').forEach(div => div.removeEventListener('click', () => { deletePrev(); cards.weather.forEach(addCards); }, true));
document.querySelectorAll('.weather').forEach(div => div.addEventListener('click', () => { deletePrev(); cards.weather.forEach(addCards); }, true));
