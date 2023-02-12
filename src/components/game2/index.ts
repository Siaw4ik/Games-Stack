import "./index.css";
import Player from "./types/jedi";
import Ground from "./types/background";

import EnemyController from "./types/enemy-controller";
import Score from "./types/score";

import enemy1 from "../../assets/images/enemy_1.png";
import enemy2 from "../../assets/images/enemy_2.png";
import enemy3 from "../../assets/images/enemy_3.png";
import { sendScore } from "../results/sendScore";
import { gamesData } from "../gamesInfo/gamesData";
import backAudio from "../../assets/sounds/back-game5-starwars.mp3";
import winAudio from "../../assets/sounds/final-game5-starwars.mp3";
import cardAudio from "../../assets/sounds/game5-one-card.mp3";
import { returnLocalStorage } from "../module/localStorage";

const game2BackAudio = new Audio(backAudio);
const game2FinalAudio = new Audio(winAudio);
const game2OneCard = new Audio(cardAudio);
game2OneCard.volume = 0.5;
game2BackAudio.volume = 0.7;
game2FinalAudio.volume = 0.7;
const settings = returnLocalStorage();

export function changeGame2AudioVolume(mode: boolean) {
  if (mode === true) {
    game2BackAudio.volume = 0.7;
    game2FinalAudio.volume = 0.7;
    game2OneCard.volume = 0.5;
  } else if (mode === false) {
    game2BackAudio.volume = 0;
    game2FinalAudio.volume = 0;
    game2OneCard.volume = 0;
  }
}

const gameSpeedStart = 0.55;
const gameSpeedIncrement = 0.00001;
const gameWidth = 800;
const gameHeight = 200;
const playerWidth = 100 / 1.5;
const playerHight = 100 / 1.5;
const maxJumpingHeight = gameHeight;
const minJumpingHeight = 150;
const groundWidth = 1000;
const groundHeight = 200;
const groundAndCactusSpeed = 0.5;

const enemyConfig = [
  {
    width: 62.37 / 1.5,
    height: 110 / 1.5,
    image: enemy1,
  },
  {
    width: 148 / 1.5,
    height: 85 / 1.5,
    image: enemy2,
  },
  {
    width: 90 / 1.5,
    height: 73 / 1.5,
    image: enemy3,
  },
];

let scaleRatio: number;
let previousTime: number;
let player: Player;
let ground: Ground;
let score: Score;
let enemyController: EnemyController;
let gameSpeed = gameSpeedStart;
let gameOver = false;
let hasAddedEventListenersForRestart = false;
let waitingToStart = true;

function createSprites() {
  const canvas = document.getElementById("game_2") as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const playerWidthInGame = playerWidth * scaleRatio;
    const playerHightInGame = playerHight * scaleRatio;
    const minJumpHeightInGame = minJumpingHeight * scaleRatio;
    const maxJumpWidthInGame = maxJumpingHeight * scaleRatio;

    const groundWidthInGame = groundWidth * scaleRatio;
    const groundHeightInGame = groundHeight * scaleRatio;

    player = new Player(
      ctx,
      playerWidthInGame,
      playerHightInGame,
      minJumpHeightInGame,
      maxJumpWidthInGame,
      scaleRatio
    );

    ground = new Ground(
      ctx,
      groundWidthInGame,
      groundHeightInGame,
      groundAndCactusSpeed,
      scaleRatio
    );

    const enemyImages = enemyConfig.map((e) => {
      const image = new Image();
      image.src = e.image;
      return {
        image,
        width: e.width * scaleRatio,
        height: e.height * scaleRatio,
      };
    });

    enemyController = new EnemyController(
      ctx,
      enemyImages,
      scaleRatio,
      groundAndCactusSpeed
    );

    score = new Score(ctx, scaleRatio);
  }
}

function showGameOver() {
  const settingsStart = returnLocalStorage();
  const canvas = document.getElementById("game_2") as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const fontSize = 18 * scaleRatio;
    ctx.font = `${fontSize}px Lato`;
    ctx.fillStyle = "#D713C3";
    const x = canvas.width / 3.5;
    const y = canvas.height / 7;
    ctx.fillText(
      `${
        settingsStart.lang === "en"
          ? "Game Over! Press Space to Start Again"
          : "Конец игры! Нажмите пробел, чтобы начать заново"
      }`,
      x,
      y
    );
  }
}

export function reset() {
  const mainChild = (document.querySelector(".main") as HTMLElement)
    .childNodes[0] as HTMLElement;
  if (mainChild) {
    if (mainChild.classList.value === "game2-wrapper") {
      hasAddedEventListenersForRestart = false;
      gameOver = false;
      waitingToStart = false;
      ground.reset();
      enemyController.reset();
      score.reset();
      gameSpeed = gameSpeedStart;
      const settingsStart = returnLocalStorage();
      game2BackAudio.loop = true;
      game2BackAudio.play();
      game2BackAudio.currentTime = 0;
      game2FinalAudio.pause();
      if (settingsStart.volume === true) {
        changeGame2AudioVolume(true);
      } else if (settingsStart.volume === false) {
        changeGame2AudioVolume(false);
      }
    }
  }
}

function setupGameReset() {
  if (!hasAddedEventListenersForRestart) {
    hasAddedEventListenersForRestart = true;

    setTimeout(() => {
      window.addEventListener(
        "keyup",
        () => {
          reset();
        },
        { once: true }
      );
      window.addEventListener(
        "touchstart",
        () => {
          reset();
        },
        { once: true }
      );
    }, 1000);
  }
}

function showStartGameText() {
  const settingsStart = returnLocalStorage();
  const canvas = document.getElementById("game_2") as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const fontSize = 18 * scaleRatio;
    ctx.font = `${fontSize}px Lato`;
    ctx.fillStyle = "#D713C3";
    const x = canvas.width / 3;
    const y = canvas.height / 7;
    ctx.fillText(
      `${
        settingsStart.lang === "en"
          ? "Press Space to Start"
          : "Для начала нажмите на пробел"
      }`,
      x,
      y
    );
  }
}

function updateGameSpeed(frameTimeDelta: number) {
  gameSpeed += frameTimeDelta * gameSpeedIncrement;
}

function clearScreen() {
  const canvas = document.getElementById("game_2") as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function gameLoop(currentTime: number) {
  const container = document.querySelector(".game2-main__game") as HTMLElement;
  if (container) {
    if (previousTime === null) {
      previousTime = currentTime;
      requestAnimationFrame(gameLoop);
      return;
    }
    const frameTimeDelta = currentTime - previousTime;
    previousTime = currentTime;

    clearScreen();

    if (!gameOver && !waitingToStart) {
      ground.update(gameSpeed, frameTimeDelta);
      enemyController.update(gameSpeed, frameTimeDelta);
      player.update(gameSpeed, frameTimeDelta);
      score.update(frameTimeDelta);
      updateGameSpeed(frameTimeDelta);
    }

    if (!gameOver && enemyController.collideWith(player)) {
      gameOver = true;
      game2BackAudio.pause();
      game2FinalAudio.play();
      game2FinalAudio.currentTime = 0;
      sendScore("Jedi's Agility", Math.trunc(score.score));
      setupGameReset();
    }
    ground.draw();
    enemyController.draw();
    player.draw();
    score.draw();

    if (gameOver) {
      showGameOver();
    }

    if (waitingToStart) {
      showStartGameText();
    }
    if (player.jumpPressed) {
      game2OneCard.play();
    }
    const requestId = requestAnimationFrame(gameLoop);
    if (window.location.hash !== "#game2") {
      cancelAnimationFrame(requestId);
    }
  }
}

export const startGameAgility = () => {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const body = document.createElement("div");
  body.classList.add("game2-wrapper");
  body.innerHTML = `<div class="game2-main__container _game2-container">
      <canvas id="game_2" class="game2-main__game"></canvas>
    </div>`;
  main.appendChild(body);
  const canvas = document.getElementById("game_2") as HTMLCanvasElement;

  function getScaleRatio() {
    const screenHeight = Math.min(
      window.innerHeight,
      document.documentElement.clientHeight
    );
    const screenWidth = Math.min(
      window.innerWidth,
      document.documentElement.clientWidth
    );
    if (screenWidth / screenHeight < gameWidth / gameHeight) {
      return screenWidth / gameWidth;
    }
    return screenHeight / gameHeight;
  }

  function setScreen() {
    scaleRatio = getScaleRatio();
    canvas.width = gameWidth * scaleRatio;
    canvas.height = gameHeight * scaleRatio;
    createSprites();
  }

  setScreen();
  window.addEventListener("resize", () => setTimeout(setScreen, 500));

  if (window.screen) {
    window.addEventListener("resize", setScreen);
  }

  requestAnimationFrame(gameLoop);
};

window.addEventListener("hashchange", () => {
  if (
    window.location.hash === "#game2" &&
    document.querySelector(".game2-main__game")
  ) {
    requestAnimationFrame(gameLoop);
  }

  if (window.location.hash !== "#game2") {
    game2BackAudio.pause();
    game2FinalAudio.pause();
    waitingToStart = true;
    gameOver = false;
    window.removeEventListener("keydown", player.keydown);
    window.removeEventListener("keyup", player.keyup);
  }
});

export function game2() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const divWrapper = document.createElement("div");
  divWrapper.classList.add("game2-wrapper");
  divWrapper.classList.remove("game2-start");
  divWrapper.innerHTML = `
  <h2>Jedi's Agility</h2>
  <p class="game2-wrapper_info">${
    settings.lang === "en"
      ? gamesData.en[1].description
      : gamesData.ru[1].description
  }</p>
  <div class="game2-wrapper_button"><span>${
    settings.lang === "en" ? "Start Game" : "Начать Игру"
  }</span></div>`;
  main.appendChild(divWrapper);

  const startBtn = document.querySelector(
    ".game2-wrapper_button"
  ) as HTMLElement;
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startGameAgility();
    });
  }
}

export function fixGame2() {
  window.addEventListener("hashchange", () => {
    document.body.addEventListener("keyup", reset, { once: true });
    window.addEventListener("touchstart", reset, { once: true });
  });
}

window.addEventListener("keyup", reset, { once: true });
window.addEventListener("touchstart", reset, { once: true });
