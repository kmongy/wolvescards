import '/scss/main.scss';
import logoURL from '/assets/imgs/timberwolvesLogo.png';

import { stats } from './stats.js';

const cardsContainer = document.querySelector('.cards-container');
const playerInfo = stats;

function addPlayerCardDOM() {
  playerInfo.forEach((player) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
    <div class="front">
      <div class="front-img-container">
        <img class="front-player-img" src="${player.thumbnail}" alt="${player.playerName}">
      </div>
      <div class="front-inner">
        <div class="front-player-info">
          <h3 class="player-name">${player.playerName}</h3>
          <p class="player-position">${player.position} - ${player.number}</p>
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
          <p>2019-2020 Season</p>
          <ul>
            <p>Stats</p>
            <div class="stats-row">
              <li class="pts">Pts: ${player.avgPts}</li>
              <li class="pts">Rbds: ${player.avgRbds}</li>
              <li class="pts">Ast: ${player.avgAst}</li>
            </div>
            <div class="stats-row">
              <li class="pts">FG%: ${player.fgPercentage}</li>
              <li class="pts">3P%: ${player.threeP}</li>
              <li class="pts">FT%: ${player.ft}</li>
            </div>
            <div class="stats-row">
              <li class="pts">Stl: ${player.stl}</li>
              <li class="pts">Blk: ${player.blk}</li>
              <li class="pts">GP: ${player.gp}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    `;

    cardsContainer.appendChild(cardDiv);
  });
  addBackgroundImg();
}
addPlayerCardDOM();

function addBackgroundImg() {
  const cardDOMSelection = document.querySelectorAll('.front-player-img');
  const cardSelection = [...cardDOMSelection];
  console.log(cardSelection);
}

const cards = document.querySelectorAll('.card');

function cardFlip() {
  const cardClick = event.currentTarget;
  cardClick.classList.toggle('card-flip');
}

cards.forEach((card) => card.addEventListener('click', cardFlip));
