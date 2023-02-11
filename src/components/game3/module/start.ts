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
  METEOR_CONFIG,
} from "../constants/constants";
import { createOneMeteorLine } from "./meteors";

import Ship from "./Ship";
import Background from "./Background";
import MeteorsController from "./MeteorsController";
import Score from "./Score";

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

    const meteorsImages = createOneMeteorLine(METEOR_CONFIG).map((meteor) => {
      return {
        img: meteor.img,
        dx: meteor.dx,
        dy: meteor.dy,
        width: meteor.width * scaleRatio,
        height: meteor.height * scaleRatio,
      };
    });

    meteorsController = new MeteorsController(
      context,
      meteorsImages,
      scaleRatio,
      METEORS_AND_BACKGROUND_SPEED
    );

    score = new Score(context, scaleRatio);
  }
}

function showGameOver() {
  const canvas = document.getElementById("game_3") as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const fontSize = 18 * scaleRatio;
    ctx.font = `${fontSize}px Lato`;
    ctx.fillStyle = "#D713C3";
    const x = canvas.width / 3.5;
    const y = canvas.height / 7;
    ctx.fillText("Game Over! Press Any Key to Start Again", x, y);
  }
}

export function reset() {
  const mainChild = (document.querySelector(".main") as HTMLElement)
    .childNodes[0] as HTMLElement;
  if (mainChild.classList.value === "game3-wrapper") {
    hasAddedEventListenersForRestart = false;
    gameOver = false;
    waitingToStart = false;
    background.reset();
    meteorsController.reset();
    score.reset();
    gameSpeed = GAME_SPEED_START;
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
    }, 500);
  }
}

function showStartGameText() {
  const canvas = document.getElementById("game_3") as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const fontSize = 18 * scaleRatio;
    ctx.font = `${fontSize}px Lato`;
    ctx.fillStyle = "#D713C3";
    const x = canvas.width / 3;
    const y = canvas.height / 7;
    ctx.fillText("Tap Screen or Press Any Key to Start", x, y);
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
    // console.log(Math.trunc(score.score));
    // sendScore("Jedi's Mobility", Math.trunc(score.score));
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

  requestAnimationFrame(gameLoop);
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
}

window.addEventListener("keyup", reset, { once: true });
window.addEventListener("touchstart", reset, { once: true });
