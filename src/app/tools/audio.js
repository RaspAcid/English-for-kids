const refreshDiv = document.querySelectorAll('.menu_item');
const refreshDivByCategory = document.querySelectorAll('.card.category');

function playAudio(e) {
  const audio = new Audio();
  audio.src = `./assets/cards-audio/${e.target.closest('.back-face').getAttribute('data-card')}.mp3`;
  if (document.querySelector('.checkbox').checked !== true && e.target.className !== 'fas fa-undo') {
    audio.play();
  }
}

refreshDivByCategory.forEach(div => {
  div.addEventListener('click', () => {
    document.querySelectorAll('.back-face').forEach(card => card.addEventListener('click', playAudio));
  }, false);
});

refreshDiv.forEach(div => {
  div.addEventListener('click', () => {
    document.querySelectorAll('.back-face').forEach(card => card.addEventListener('click', playAudio));
  }, false);
});
