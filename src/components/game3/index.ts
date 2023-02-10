/* eslint-disable no-plusplus */
import { meteorImgArr, createMeteorLine } from "./module/meteors";
import { METEOR, METEOR_ARR } from "./constants/constants";
// import audiofile from "../../assets/sounds/Mercury_audio.mp3";
import "./index.css";
import background from "../../assets/images_game_3/background.png";
import ship from "../../assets/images_game_3/millennium-falcon.png";

let context: CanvasRenderingContext2D;
const bg = new Image();
bg.src = background;
const falcon = new Image();
falcon.src = ship;

let xPos = 700;
let yPos = 400;

const cache = {
  falcon: falcon.src,
};

function draw() {
  context.drawImage(bg, 0, 0);
  context.drawImage(falcon, xPos, yPos);
  // const canvas = document.getElementById("game_3") as HTMLCanvasElement;
  let isTrue = false;
  for (let i = 0; i < METEOR_ARR.length; i++) {
    context.drawImage(meteorImgArr["0"], METEOR_ARR[i].x, METEOR_ARR[i].y);

    METEOR_ARR[i].y += 2;

    if (METEOR_ARR[i].y === 800) {
      isTrue = true;
    }
  }

  const line = createMeteorLine(METEOR);
  if (isTrue) {
    METEOR_ARR.map((elem, index) => {
      elem.x = line[index].x;
      elem.y = line[index].y;
      return elem;
    });
  }

  requestAnimationFrame(draw);
}

function setCanvasSize(elem: HTMLCanvasElement) {
  window.addEventListener("resize", () => {
    elem.height = window.innerHeight * 0.85;
    elem.width = window.innerWidth * 0.7;
  });
}

export function game3() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("wrapper_game_3");
  div.innerHTML = `<canvas id="game_3" width="1400" height="750"></canvas>`;
  // const audio = new Audio(audiofile);
  // audio.autoplay = true;
  main.appendChild(div);

  const canvas = document.getElementById("game_3") as HTMLCanvasElement;

  if (canvas) {
    setCanvasSize(canvas);
  }

  if (canvas) {
    context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  draw();
}

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
    case "KeyA":
      falcon.src = cache.falcon;
      xPos -= 50;
      break;
    case "ArrowRight":
    case "KeyD":
      falcon.src = cache.falcon;
      xPos += 50;
      break;
    case "ArrowUp":
    case "KeyW":
      falcon.src = cache.falcon;
      yPos -= 50;
      break;
    case "ArrowDown":
    case "KeyS":
      falcon.src = cache.falcon;
      yPos += 50;
      break;
    default:
      falcon.src = cache.falcon;
  }
});
