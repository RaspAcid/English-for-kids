export default function showModal(answers, rightAnswers, wrongAnswers) {
  const modal = document.createElement('div');
  const content = document.createElement('div');
  const congrats = document.createElement('div');

  modal.id = 'modal-wrapper';
  congrats.classList = 'congrats';

  document.body.append(modal);
  document.getElementById('modal-wrapper').append(content);

  if (answers - rightAnswers === 0) {
    content.classList = 'winner';
    document.querySelector('.winner').append(congrats);
    const win = new Audio('./assets/cards-audio/win.mp3');
    win.play();
    congrats.innerHTML = 'Ура! Все ответы правильные!';
  } else {
    content.classList = 'loser';
    document.querySelector('.loser').append(congrats);
    const lose = new Audio('./assets/cards-audio/lose.mp3');
    lose.play();
    congrats.innerHTML = `Нужно ещё немного потренироваться!
        Всего ошибок: ${wrongAnswers}.`;
  }
}
