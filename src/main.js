import '/scss/main.scss';
import logoURL from '/assets/imgs/timberwolvesLogo.png';
import katURL from '/assets/imgs/kat1.jpg';
import dRussURL from '/assets/imgs/diangelo1.jpg';

import { stats } from './stats.js';

const cardsContainer = document.querySelector('.cards-container');

function addPlayerCardInfo() {
  const playerInfo = stats;
  playerInfo.forEach((player) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
    <div class="front front-player-img">
          <div class="front-inner">
            <div class="front-player-info">
              <h3 class="player-name">${player.playerName}</h3>
              <p>Timberwolves</p>
            </div>
            <div class="logo">
              <img src="${logoURL}" alt="Timberwolves Logo">
            </div>
          </div>
        </div>
        <div class="back">
          <div class="back-inner">
            <div class="back-player-stats">
              <p>STATS</p>
            </div>
          </div>
        </div>
    `;

    cardsContainer.appendChild(cardDiv);

    const frontPlayerImg = document.querySelectorAll('.front-player-img');
    frontPlayerImg.forEach(
      (img) =>
        (img.style.background = `"url(assets/imgs/kat1.jpg) center no-repeat;"`)
    );
  });
}
addPlayerCardInfo();

const cards = document.querySelectorAll('.card');

function cardFlip() {
  const cardClick = event.currentTarget;
  cardClick.classList.toggle('card-flip');
}

cards.forEach((card) => card.addEventListener('click', cardFlip));
