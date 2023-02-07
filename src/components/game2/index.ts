import "./index.css";
import Player from "./core/types/dino";
import Ground from "./core/types/ground";

import CactiController from "./core/types/cacti-controller";
import Score from "./core/types/score";

export const currentTime: number = 0;

const gameSpeedStart = 0.75;
const gameSpeedIncrement = 0.00001;
const gameWidth = 800;
const gameHeight = 200;
const playerWidth = 88 / 1.5;
const playerHight = 94 / 1.5;
const maxJumpingHeight = gameHeight;
const minJumpingHeight = 150;
const groundWidth = 2400;
const groundHeight = 24;
const groundAndCactusSpeed = 0.5;

const cactiConfig = [
  {
    width: 48 / 1.5,
    height: 100 / 1.5,
    image:
      "https://raw.githubusercontent.com/rolling-scopes-school/pahomomg-JSFE2022Q3/dino/cactus_1.png?token=GHSAT0AAAAAAB6OOP45CPUELEFJPZCMGEJAY7CLZYA",
  },
  {
    width: 98 / 1.5,
    height: 100 / 1.5,
    image:
      "https://raw.githubusercontent.com/rolling-scopes-school/pahomomg-JSFE2022Q3/dino/cactus_2.png?token=GHSAT0AAAAAAB6OOP445NZTRROBRE57N5YCY7CLZZQ",
  },
  {
    width: 68 / 1.5,
    height: 70 / 1.5,
    image:
      "https://raw.githubusercontent.com/rolling-scopes-school/pahomomg-JSFE2022Q3/dino/cactus_3.png?token=GHSAT0AAAAAAB6OOP454OZETDZZWOY3J22MY7CLZ2Q",
  },
];

let scaleRatio: number;
let previousTime: number;
let player: Player;
let ground: Ground;
let score: Score;
let cactiController: CactiController;
let gameSpeed = gameSpeedStart;
let gameOver = false;
let hasAddedEventListenersForRestart = false;
let waitingToStart = true;

function createSprites() {
  const canvas = document.getElementById("game") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const playerWidthInGame = playerWidth * scaleRatio;
  const playerHightInGame = playerHight * scaleRatio;
  const minJunpHeightInGame = minJumpingHeight * scaleRatio;
  const maxJumpWidthInGame = maxJumpingHeight * scaleRatio;

  const groundWidthInGame = groundWidth * scaleRatio;
  const groundHeightInGame = groundHeight * scaleRatio;

  player = new Player(
    ctx,
    playerWidthInGame,
    playerHightInGame,
    minJunpHeightInGame,
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

  const cactiImages = cactiConfig.map((e) => {
    const image = new Image();
    image.src = e.image;
    return {
      image,
      width: e.width * scaleRatio,
      height: e.height * scaleRatio,
    };
  });

  cactiController = new CactiController(
    ctx,
    cactiImages,
    scaleRatio,
    groundAndCactusSpeed
  );

  score = new Score(ctx, scaleRatio);
}

export const game2 = () => {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const page = `<div class="game2-main__container _game2-container">
    <canvas id="game2" class="game2-main__game"></canvas>
  </div>`;
  const body = document.createElement("div");
  body.classList.add("game2-wrapper");
  body.innerHTML = page;
  document.body.appendChild(body);
  const canvas = document.getElementById("game2") as HTMLCanvasElement;

  function getScaleRatio() {
    const scrrenHeight = Math.min(
      window.innerHeight,
      document.documentElement.clientHeight
    );
    const scrrenWidth = Math.min(
      window.innerWidth,
      document.documentElement.clientWidth
    );
    if (scrrenWidth / scrrenHeight < gameWidth / gameHeight) {
      return scrrenWidth / gameWidth;
    }
    return scrrenHeight / gameHeight;
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
};

function showGameOver() {
  const canvas = document.getElementById("game") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const fontSize = 40 * scaleRatio;
  ctx.font = `${fontSize}px Verdana`;
  ctx.fillStyle = "grey";
  const x = canvas.width / 14;
  const y = canvas.height / 2;
  ctx.fillText("Tap Screen or Press Space To Start", x, y);
}

function reset() {
  hasAddedEventListenersForRestart = false;
  gameOver = false;
  waitingToStart = false;
  ground.reset();
  cactiController.reset();
  score.reset();
  gameSpeed = gameSpeedStart;
}

function setupGameReset() {
  if (!hasAddedEventListenersForRestart) {
    hasAddedEventListenersForRestart = true;

    setTimeout(() => {
      window.addEventListener("keyup", reset, { once: true });
      window.addEventListener("touchstart", reset, { once: true });
    }, 1000);
  }
}

function showStartGameText() {
  const canvas = document.getElementById("game") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const fontSize = 40 * scaleRatio;
  ctx.font = `${fontSize}px Verdana`;
  ctx.fillStyle = "grey";
  const x = canvas.width / 14;
  const y = canvas.height / 2;
  ctx.fillText("Tap Screen or Press Space To Start", x, y);
}

function updateGameSpeed(frameTimeDelta: number) {
  gameSpeed += frameTimeDelta * gameSpeedIncrement;
}

function clearScreen() {
  const canvas = document.getElementById("game") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function gameLoop(currentTime: number) {
  console.log(gameSpeed);
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
    cactiController.update(gameSpeed, frameTimeDelta);
    player.update(gameSpeed, frameTimeDelta);
    score.update(frameTimeDelta);
    updateGameSpeed(frameTimeDelta);
  }

  if (!gameOver && cactiController.collideWith(player)) {
    gameOver = true;
    setupGameReset();
  }
  ground.draw();
  cactiController.draw();
  player.draw();
  score.draw();

  if (gameOver) {
    showGameOver();
  }

  if (waitingToStart) {
    showStartGameText();
  }

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);

window.addEventListener("keyup", reset, { once: true });
window.addEventListener("touchstart", reset, { once: true });
