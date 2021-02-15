import { cards } from '../../data/cards';
import showModal from './modal';

const check = document.querySelector('.checkbox');

document.querySelector('.main').addEventListener('click', () => { document.querySelector('.cards_list').setAttribute('data-category', 'main'); }, true);
document.querySelectorAll('.animals').forEach(div => div.addEventListener('click', () => { document.querySelector('.cards_list').setAttribute('data-category', 'animals'); }), true);
document.querySelectorAll('.clothes').forEach(div => div.addEventListener('click', () => { document.querySelector('.cards_list').setAttribute('data-category', 'clothes'); }), true);
document.querySelectorAll('.colors').forEach(div => div.addEventListener('click', () => { document.querySelector('.cards_list').setAttribute('data-category', 'colors'); }), true);
document.querySelectorAll('.fruits').forEach(div => div.addEventListener('click', () => { document.querySelector('.cards_list').setAttribute('data-category', 'fruits'); }), true);
document.querySelectorAll('.places').forEach(div => div.addEventListener('click', () => { document.querySelector('.cards_list').setAttribute('data-category', 'places'); }), true);
document.querySelectorAll('.sports').forEach(div => div.addEventListener('click', () => { document.querySelector('.cards_list').setAttribute('data-category', 'sports'); }), true);
document.querySelectorAll('.transport').forEach(div => div.addEventListener('click', () => { document.querySelector('.cards_list').setAttribute('data-category', 'transport'); }), true);
document.querySelectorAll('.weather').forEach(div => div.addEventListener('click', () => { document.querySelector('.cards_list').setAttribute('data-category', 'weather'); }), true);

let counter = 0;
let wordsArr = [];
let wordList;
let answers = 0;
let rightAnswers = 0;
let wrongAnswers = 0;

function sayWord() {
  wordList = new Audio(`./assets/cards-audio/${wordsArr[counter]}.mp3`);
  setTimeout(() => {
    wordList.play();
  }, 750);
}

function rightOrNot(e) {
  if (counter === wordsArr.length - 1) {
    document.querySelectorAll('.card.word_card').forEach(card => card.classList.remove('disable'));
    showModal(answers, rightAnswers, wrongAnswers);
    document.body.setAttribute('style', 'overflow: hidden;');
    setTimeout(() => {
      document.body.removeAttribute('style', 'overflow: hidden;');
      document.querySelector('.menu_item.main').click();
      document.querySelector('.menu_item.main').click();
      document.getElementById('modal-wrapper').remove();
      wordsArr = [];
      counter = 0;
      answers = 0;
      rightAnswers = 0;
      wrongAnswers = 0;
    }, 4000);
  } else {
    console.log(`${wordsArr[counter]}`);
    if (e.target.getAttribute('alt') === `${wordsArr[counter]}`) {
      e.target.closest('.card.word_card').classList.add('disable');
      document.querySelector('.result_container').innerHTML += '★';
      const right = new Audio('./assets/cards-audio/right.mp3');
      right.play();
      answers += 1;
      rightAnswers += 1;
      counter++;
      sayWord();
    } else {
      document.querySelector('.result_container').innerHTML += '☆';
      const wrong = new Audio('./assets/cards-audio/wrong.mp3');
      wrong.play();
      answers += 1;
      wrongAnswers += 1;
    }
  }
}

function startGame() {
  document.querySelectorAll('.card.word_card').forEach(card => card.addEventListener('click', rightOrNot));
  document.querySelector('.start_btn').classList.add('started');
  sayWord();
  document.querySelector('.repeat_btn').addEventListener('click', sayWord);
}

function changeMode() {
  if (check.checked === true) {
    wordsArr = [];
    counter = 0;
    document.querySelectorAll('.card.word_card').forEach(card => card.classList.add('gameOn'));
    document.querySelectorAll('.card-body.words').forEach(card => card.classList.add('gameOn'));
    document.querySelectorAll('.card-img').forEach(card => card.classList.add('gameOn'));
    document.querySelectorAll('.card.word_card')[document.querySelectorAll('.card.word_card').length - 1].insertAdjacentHTML('afterEnd',
      `<div class="game">
            <button class="start_btn">
            Start Game<i class="fas fa-play"></i>
            </button>

            <button class="repeat_btn">
            <i class="fas fa-redo"></i>
            </button>
        
            <div class="result_container">
            </div>
        </div>`);
  } else {
    wordsArr = [];
    counter = 0;
    document.querySelectorAll('.card.word_card').forEach(card => card.removeEventListener('click', rightOrNot));
    document.querySelectorAll('.card.word_card').forEach(card => card.classList.remove('gameOn'));
    document.querySelectorAll('.card.word_card').forEach(card => card.classList.remove('disable'));
    document.querySelectorAll('.card-body.words').forEach(card => card.classList.remove('gameOn'));
    document.querySelectorAll('.card-img').forEach(card => card.classList.remove('gameOn'));
    document.querySelector('.game').remove();
    document.querySelector('.start_btn').classList.remove('started');
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

check.addEventListener('click', () => {
  changeMode();
  document.querySelector('.start_btn').addEventListener('click', () => {
    const source = document.querySelector('.cards_list').getAttribute('data-category');
    cards[source].forEach(item => wordsArr.push(item.word));
    shuffle(wordsArr);
  });
  document.querySelector('.start_btn').addEventListener('click', startGame);
});
