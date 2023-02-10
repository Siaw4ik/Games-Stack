import { GAME_HEIGHT, GAME_WIDTH } from "../constants/constants";

export function startGame3() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const body = document.createElement("div");
  body.classList.add("game2-wrapper");
  body.innerHTML = `<div class="game3-main_container _game3-container">
      <canvas id="game_3" class="game3-main_game"></canvas>
    </div>`;
  main.appendChild(body);

  const canvas = document.getElementById("game_3") as HTMLCanvasElement;
  // const context = canvas.getContext("2d");

  let scaleRatio: number;

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
    // createSprites();
  }

  setScreen();
  window.addEventListener("resize", () => setTimeout(setScreen, 500));

  if (window.screen) {
    window.addEventListener("resize", setScreen);
  }
  // requestAnimationFrame(gameLoop);
}
