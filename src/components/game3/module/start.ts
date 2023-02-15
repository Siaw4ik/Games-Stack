/* eslint-disable no-unused-vars */
import {
  GAME_HEIGHT,
  GAME_WIDTH,
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  MIN_MOVE_DIST,
  MAX_MOVE_DIST,
  BACKGROUND_WIDTH,
  BACKGROUND_HEIGHT,
  METEORS_AND_BACKGROUND_SPEED,
  GAME_SPEED_START,
  GAME_SPEED_INCREMENT,
  GAME3_BACKGROUND_AUDIO,
  GAME3_FINAL_AUDIO,
  GAME3_MOVE_SOUND,
} from "../constants/constants";

import Ship from "./ship";
import Background from "./background";
import MeteorsController from "./meteorsController";
import Score from "./score";
import { sendScore } from "../../results/sendScore";
import { gamesData } from "../../gamesInfo/gamesData";
import { returnLocalStorage } from "../../module/localStorage";

GAME3_MOVE_SOUND.volume = 0.5;
GAME3_BACKGROUND_AUDIO.volume = 0.7;
GAME3_FINAL_AUDIO.volume = 0.7;

let falcon: Ship;
let background: Background;
let meteorsController: MeteorsController;
let score: Score;

let scaleRatio: number;
let previousTime: number;
let gameSpeed = GAME_SPEED_START;
let gameOver = false;
let hasAddedEventListenersForRestart = false;
let waitingToStart = true;

export function changeGame3AudioVolume(mode: boolean) {
  if (mode === true) {
    GAME3_BACKGROUND_AUDIO.volume = 0.7;
    GAME3_FINAL_AUDIO.volume = 0.7;
    GAME3_MOVE_SOUND.volume = 0.5;
  } else if (mode === false) {
    GAME3_BACKGROUND_AUDIO.volume = 0;
    GAME3_FINAL_AUDIO.volume = 0;
    GAME3_MOVE_SOUND.volume = 0;
  }
}

function createSprites() {
  const canvas = document.getElementById("game_3") as HTMLCanvasElement;
  if (canvas) {
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const shipWidthInGame = PLAYER_WIDTH * scaleRatio;
    const shipHeightInGame = PLAYER_HEIGHT * scaleRatio;
    const shipMinMoveInGame = MIN_MOVE_DIST * scaleRatio;
    const shipMaxMoveInGame = MAX_MOVE_DIST * scaleRatio;
    const backgroundWidthInGame = BACKGROUND_WIDTH * scaleRatio;
    const backgroundHeightInGame = BACKGROUND_HEIGHT * scaleRatio;

    falcon = new Ship(
      context,
      shipWidthInGame,
      shipHeightInGame,
      shipMinMoveInGame,
      shipMaxMoveInGame,
      scaleRatio
    );

    background = new Background(
      context,
      backgroundWidthInGame,
      backgroundHeightInGame,
      METEORS_AND_BACKGROUND_SPEED,
      scaleRatio
    );

    meteorsController = new MeteorsController(
      context,
      scaleRatio,
      METEORS_AND_BACKGROUND_SPEED
    );

    score = new Score(context, scaleRatio);
  }
}

function showGameOver() {
  const settings = returnLocalStorage();
  const canvas = document.getElementById("game_3") as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "white";
    const x = canvas.width / 6;
    const y = canvas.height / 7;
    ctx.fillText(
      `${
        settings.lang === "en"
          ? "            Game Over! Click mouse to Start Again"
          : "Конец игры! Нажмите левую кнопку мыши для повтора"
      }`,
      x,
      y
    );
  }
}

export function reset() {
  const settings = returnLocalStorage();
  const mainChild = (document.querySelector(".main") as HTMLElement)
    .childNodes[0] as HTMLElement;
  if (mainChild) {
    if (mainChild.classList.value === "game3-wrapper") {
      hasAddedEventListenersForRestart = false;
      gameOver = false;
      waitingToStart = false;
      background.reset();
      meteorsController.reset();
      score.reset();
      gameSpeed = GAME_SPEED_START;
      GAME3_BACKGROUND_AUDIO.loop = true;
      GAME3_BACKGROUND_AUDIO.play();
      GAME3_BACKGROUND_AUDIO.currentTime = 0;
      GAME3_FINAL_AUDIO.pause();
      if (settings.volume === true) {
        changeGame3AudioVolume(true);
      } else if (settings.volume === false) {
        changeGame3AudioVolume(false);
      }
    }
  }
}

function setupGameReset() {
  const canvas = document.getElementById("game_3") as HTMLCanvasElement;
  if (!hasAddedEventListenersForRestart) {
    hasAddedEventListenersForRestart = true;

    setTimeout(() => {
      canvas.addEventListener(
        "click",
        (e) => {
          if (e.type === "click") {
            reset();
          }
        },
        { once: true }
      );
      if (canvas) {
        canvas.addEventListener(
          "touchstart",
          () => {
            reset();
          },
          { once: true }
        );
      }
    }, 500);
  }
}

function showStartGameText() {
  const settings = returnLocalStorage();
  const canvas = document.getElementById("game_3") as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "white";
    const x = canvas.width / 4;
    const y = canvas.height / 7;
    ctx.fillText(
      `${
        settings.lang === "en"
          ? "                     Click mouse to Start"
          : "Для начала игры нажмите левую кнопку мыши"
      }`,
      x,
      y
    );
  }
}

function updateGameSpeed(frameTimeDelta: number) {
  gameSpeed += frameTimeDelta * GAME_SPEED_INCREMENT;
}

function clearScreen() {
  const canvas = document.getElementById("game_3") as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function gameLoop(currentTime: number) {
  const container = document.querySelector(".game3-main_game") as HTMLElement;
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
      background.update(gameSpeed, frameTimeDelta);
      meteorsController.update(gameSpeed, frameTimeDelta);
      falcon.update();
      score.update(frameTimeDelta);
      updateGameSpeed(frameTimeDelta);
    }

    if (!gameOver && meteorsController.collideWith(falcon)) {
      gameOver = true;
      GAME3_BACKGROUND_AUDIO.pause();
      GAME3_FINAL_AUDIO.play();
      GAME3_FINAL_AUDIO.currentTime = 0;
      sendScore("Jedi's Mobility", Math.trunc(score.score));
      setupGameReset();
    }
    background.draw();
    meteorsController.drawMeteors();
    falcon.draw();
    score.draw();

    if (gameOver) {
      showGameOver();
    }

    if (waitingToStart) {
      showStartGameText();
    }

    const requestId = requestAnimationFrame(gameLoop);
    if (window.location.hash !== "#game3") {
      cancelAnimationFrame(requestId);
    }
  }
}

export function startGame3() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const body = document.createElement("div");
  body.classList.add("game3-wrapper");
  body.innerHTML = `<div class="game3-main_container _game3-container">
      <canvas id="game_3" class="game3-main_game"></canvas>
    </div>`;
  main.appendChild(body);

  const canvas = document.getElementById("game_3") as HTMLCanvasElement;

  function getScaleRatio() {
    const screenHeight = Math.min(
      window.innerHeight,
      document.documentElement.clientHeight
    );
    const screenWidth = Math.min(
      window.innerWidth,
      document.documentElement.clientWidth
    );
    if (screenWidth / screenHeight < GAME_WIDTH / GAME_HEIGHT) {
      return screenWidth / GAME_WIDTH;
    }
    return screenHeight / GAME_HEIGHT;
  }

  function setScreen() {
    scaleRatio = getScaleRatio();
    canvas.width = GAME_WIDTH * scaleRatio;
    canvas.height = GAME_HEIGHT * scaleRatio;
    createSprites();
  }

  setScreen();
  window.addEventListener("resize", () => setTimeout(setScreen, 500));

  if (window.screen) {
    window.addEventListener("resize", setScreen);
  }
  requestAnimationFrame(gameLoop);

  const container = document.querySelector(".game3-main_game") as HTMLElement;
  if (container) {
    canvas.addEventListener("click", reset, { once: true });
    if (canvas) {
      canvas.addEventListener("touchstart", reset, { once: true });
    }
  }
}

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#game3") {
    requestAnimationFrame(gameLoop);
  }
  const canvas = document.getElementById("game_3") as HTMLCanvasElement;

  if (falcon && window.location.hash !== "#game3") {
    GAME3_BACKGROUND_AUDIO.pause();
    GAME3_FINAL_AUDIO.pause();
    waitingToStart = true;
    gameOver = false;
    window.removeEventListener("mousedown", falcon.onMouseDown);
    if (canvas) {
      canvas.removeEventListener("touchstart", reset);
    }
  }
});

export function translateGame3(lang: string) {
  const manual = document.querySelector(".game3-wrapper_info") as HTMLElement;
  const startBtn = document.querySelector(
    ".game3-wrapper_button"
  ) as HTMLElement;

  if (startBtn && manual) {
    startBtn.innerHTML = `${lang === "en" ? "Start Game" : "Начать Игру"}`;
    manual.innerHTML = `${
      lang === "en" ? gamesData.en[2].manual : gamesData.ru[2].manual
    }`;
  }
}
