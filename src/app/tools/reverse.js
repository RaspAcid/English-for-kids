const refreshDiv = document.querySelectorAll('.menu_item');
const refreshDivByCategory = document.querySelectorAll('.card.category');

function reverseCard() {
  this.closest('.word_card').classList.toggle('reverse');
}

refreshDiv.forEach(div => {
  div.addEventListener('click', () => {
    document.querySelectorAll('.reverse-btn').forEach(card => card.addEventListener('click', reverseCard));
  }, false);
});

refreshDivByCategory.forEach(div => {
  div.addEventListener('click', () => {
    document.querySelectorAll('.reverse-btn').forEach(card => card.addEventListener('click', reverseCard));
  }, false);
});

function dereverseCard() {
  this.closest('.word_card').classList.remove('reverse');
}

refreshDiv.forEach(div => {
  div.addEventListener('click', () => {
    document.querySelectorAll('.word_card').forEach(card => card.addEventListener('mouseleave', dereverseCard));
  }, false);
});

refreshDivByCategory.forEach(div => {
  div.addEventListener('click', () => {
    document.querySelectorAll('.word_card').forEach(card => card.addEventListener('mouseleave', dereverseCard));
  }, false);
});
