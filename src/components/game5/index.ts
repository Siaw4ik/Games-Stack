import { sendScore } from "../results/sendScore";
import "./index.css";
import background from "../../assets/starwars/background.jpg";
import ship from "../../assets/starwars/ship.jpg";
import ship2 from "../../assets/starwars/ship2.jpg";
import ship3 from "../../assets/starwars/ship3.jpg";
import joda from "../../assets/starwars/joda.jpg";
import joda2 from "../../assets/starwars/joda2.jpg";
import chukaba from "../../assets/starwars/chukaba.jpg";
import kenobi from "../../assets/starwars/kenobi.jpg";
import kenobi2 from "../../assets/starwars/kenobi2.jpg";
import kenobi3 from "../../assets/starwars/kenobi3.jpg";
import mandalorec from "../../assets/starwars/mandalorec.jpg";
import mandalorec2 from "../../assets/starwars/mandalorec2.jpg";
import mandalorec3 from "../../assets/starwars/mandalorec3.jpg";
import robot from "../../assets/starwars/robot.jpg";
import stormtrooper from "../../assets/starwars/stormtrooper.jpg";
import stormtrooper2 from "../../assets/starwars/stormtrooper2.jpg";
import weid from "../../assets/starwars/weid.jpg";
import weid2 from "../../assets/starwars/weid2.jpg";
import weid3 from "../../assets/starwars/weid3.jpg";

import backAudio from "../../assets/sounds/back-game5-starwars.mp3";
import winAudio from "../../assets/sounds/final-game5-starwars.mp3";
import cardAudio from "../../assets/sounds/game5-one-card.mp3";
import { returnLocalStorage } from "../module/localStorage";
import { gamesData } from "../gamesInfo/gamesData";

const arrImage = [
  { name: "ship", src: ship },
  { name: "ship2", src: ship2 },
  { name: "ship3", src: ship3 },
  { name: "joda", src: joda },
  { name: "joda2", src: joda2 },
  { name: "chukaba", src: chukaba },
  { name: "kenobi", src: kenobi },
  { name: "kenobi2", src: kenobi2 },
  { name: "kenobi3", src: kenobi3 },
  { name: "mandalorec", src: mandalorec },
  { name: "mandalorec2", src: mandalorec2 },
  { name: "mandalorec3", src: mandalorec3 },
  { name: "robot", src: robot },
  { name: "stormtrooper", src: stormtrooper },
  { name: "stormtrooper2", src: stormtrooper2 },
  { name: "weid", src: weid },
  { name: "weid2", src: weid2 },
  { name: "weid3", src: weid3 },
];

const settings = returnLocalStorage();

const game5BackAudio = new Audio(backAudio);
const game5FinalAudio = new Audio(winAudio);
const game5OneCard = new Audio(cardAudio);
game5OneCard.volume = 0.5;
game5BackAudio.volume = 0.7;
game5FinalAudio.volume = 0.7;

export function changeGame5AudioVolume(mode: boolean) {
  if (mode === true) {
    game5BackAudio.volume = 0.7;
    game5FinalAudio.volume = 0.7;
    game5OneCard.volume = 0.5;
  } else if (mode === false) {
    game5BackAudio.volume = 0;
    game5FinalAudio.volume = 0;
    game5OneCard.volume = 0;
  }
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard: HTMLElement | null;
let secondCard: HTMLElement | null;
let result18: number = 0;
let score: number = 1000;
let move: number = 0;

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

const flipCardHandler = (event: Event) => {
  const target = (event.target as HTMLElement).closest(
    ".game5-wrapper_div-card"
  ) as HTMLElement;
  if (!target) return;

  if (lockBoard) return;
  if (target === firstCard) return;

  target.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    if (target.dataset.name) {
      firstCard = target;
      game5OneCard.play();
    }
    return;
  }

  if (target.dataset.name) {
    secondCard = target;
    game5OneCard.play();
    move += 1;
    (document.querySelector(
      ".game5-wrapper_header .game5-move-span-count"
    ) as HTMLElement).innerHTML = String(move);
    if (move > 18) {
      score = score > 0 ? score - 20 : 0;
      (document.querySelector(
        ".game5-wrapper_header .game5-score-span-count"
      ) as HTMLElement).innerHTML = String(score);
    }
  }

  if (firstCard !== null && secondCard !== null) {
    if (firstCard.dataset.name === secondCard.dataset.name) {
      firstCard.removeEventListener("click", flipCardHandler);
      secondCard.removeEventListener("click", flipCardHandler);
      result18 += 1;
      console.log(result18);
      if (result18 === 18) {
        sendScore("Jedi's Memory", score);
        (document.querySelector(
          ".game5-container_shadow"
        ) as HTMLElement).style.display = "flex";
        (document.querySelector(
          ".game5-container_shadow p .game5-win-count"
        ) as HTMLElement).innerHTML = String(score);
        game5BackAudio.pause();
        game5FinalAudio.play();
        game5FinalAudio.currentTime = 0;
      }
      resetBoard();
      return;
    }
  }
  lockBoard = true;

  setTimeout(() => {
    if (firstCard !== null && secondCard !== null) {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
    }
    resetBoard();
  }, 1000);
};

function playGame() {
  const cards = document.querySelectorAll(
    ".game5-wrapper_div-card"
  ) as NodeListOf<HTMLElement>;

  cards.forEach((card) => {
    card.addEventListener("click", flipCardHandler);
  });
}

function shuffle() {
  const cards = document.querySelectorAll(
    ".game5-wrapper_div-card"
  ) as NodeListOf<HTMLElement>;
  cards.forEach((card: HTMLElement) => {
    const ramdomPos = Math.floor(Math.random() * 36);
    card.style.order = String(ramdomPos);
  });
}

function startGameMemory() {
  resetBoard();
  score = 1000;
  move = 0;
  result18 = 0;
  game5BackAudio.loop = true;
  game5BackAudio.play();
  game5BackAudio.currentTime = 0;
  game5FinalAudio.pause();
  if (settings.volume === true) {
    changeGame5AudioVolume(true);
  } else if (settings.volume === false) {
    changeGame5AudioVolume(false);
  }

  const wrapper = document.querySelector(".game5-wrapper") as HTMLElement;
  wrapper.innerHTML = "";
  wrapper.classList.add("game5-start");
  wrapper.innerHTML = `<div class="game5-wrapper_header">
      <h2>Jedi's Memory</h2>
      <div class="game5-wrapper_start-again-btn">${
        settings.lang === "en" ? "Start again" : "Начать заново"
      }</div>
      <div class="game5-wrapper_score">
        <p class="game5-move"><span class="game5-move-span">${
          settings.lang === "en" ? "Moves: " : "Ходы: "
        }</span><span class="game5-move-span-count">0</span></p>
        <p class="game5-score"><span class="game5-score-span">${
          settings.lang === "en" ? "Score: " : "Счёт: "
        }</span><span class="game5-score-span-count">1000</span></p>
      </div>
    </div>
    `;

  const divCards = document.createElement("div");
  divCards.classList.add("game5-wrapper_container-cards");
  wrapper.appendChild(divCards);
  const shadow = document.createElement("div");
  shadow.classList.add("game5-container_shadow");
  shadow.innerHTML = `
    <div>
      <h3>${settings.lang === "en" ? "You win!!" : "Вы победили!!"}</h3>
      <p><span class="game5-win-span">${
        settings.lang === "en" ? "Your result: " : "Ваш результат: "
      }</span><span class="game5-win-count">0</span></p>
    </div>
  `;
  divCards.appendChild(shadow);
  function drawCards() {
    arrImage.forEach((image) => {
      const div = document.createElement("div");
      div.classList.add("game5-wrapper_div-card");
      div.dataset.name = image.name;
      div.innerHTML = `
        <img class="game5-card_front-face" src="${image.src}" alt="Face-starwars-card">
        <img class="game5-card_back-face" src="${background}" alt="Back-starwars-card">
      `;
      divCards.appendChild(div);
    });
  }
  drawCards();
  drawCards();
  shuffle();

  playGame();

  window.addEventListener("hashchange", () => {
    if (window.location.href !== "#game5") {
      game5BackAudio.pause();
      game5FinalAudio.pause();
    }
  });

  const startAgain = document.querySelector(
    ".game5-wrapper_start-again-btn"
  ) as HTMLElement;
  if (startAgain) {
    startAgain.addEventListener("click", () => {
      startGameMemory();
    });
  }
}

export function game5() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const divWrapper = document.createElement("div");
  divWrapper.classList.add("game5-wrapper");
  divWrapper.classList.remove("game5-start");
  divWrapper.innerHTML = `
  <h2>Jedi's Memory</h2>
  <p class="game5-wrapper_info">${
    settings.lang === "en"
      ? gamesData.en[4].description
      : gamesData.ru[4].description
  }</p>
  <div class="game5-wrapper_button"><span>${
    settings.lang === "en" ? "Start Game" : "Начать Игру"
  }</span></div>`;
  main.appendChild(divWrapper);

  const startBtn = document.querySelector(
    ".game5-wrapper_button"
  ) as HTMLElement;
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startGameMemory();
    });
  }
}

export function translateGame5(lang: string) {
  const description = document.querySelector(
    ".game5-wrapper_info"
  ) as HTMLElement;
  const startBtn = document.querySelector(
    ".game5-wrapper_button"
  ) as HTMLElement;

  const againBtn = document.querySelector(
    ".game5-wrapper_start-again-btn"
  ) as HTMLElement;
  const movespan = document.querySelector(
    ".game5-wrapper_score .game5-move-span"
  ) as HTMLElement;
  const scorespan = document.querySelector(
    ".game5-wrapper_score .game5-score-span"
  ) as HTMLElement;
  const shadowh3 = document.querySelector(
    ".game5-container_shadow h3"
  ) as HTMLElement;
  const shadowp = document.querySelector(
    ".game5-container_shadow p .game5-win-span"
  ) as HTMLElement;

  if (startBtn && description) {
    startBtn.innerHTML = `${lang === "en" ? "Start Game" : "Начать Игру"}`;
    description.innerHTML = `${
      lang === "en" ? gamesData.en[4].description : gamesData.ru[4].description
    }`;
  }

  if (againBtn && movespan && scorespan && shadowh3 && shadowp) {
    againBtn.innerHTML = `${lang === "en" ? "Start again" : "Начать заново"}`;
    movespan.innerHTML = `${lang === "en" ? "Moves: " : "Ходы: "}`;
    scorespan.innerHTML = `${lang === "en" ? "Score: " : "Счёт: "}`;
    shadowh3.innerHTML = `${lang === "en" ? "You win!!" : "Вы победили!!"}`;
    shadowp.innerHTML = `${
      lang === "en" ? "Your result: " : "Ваш результат: "
    }`;
  }
}
