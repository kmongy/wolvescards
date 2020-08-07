import '/scss/main.scss';
import { stats } from './stats.js';

const card = document.querySelectorAll('.card');

function cardFlip() {
  const cardClick = event.currentTarget;

  cardClick.classList.toggle('card-flip');
}

card.forEach((element) => element.addEventListener('click', cardFlip));
