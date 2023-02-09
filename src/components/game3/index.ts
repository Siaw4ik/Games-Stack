// import audiofile from "../../assets/sounds/Mercury_audio.mp3";
import "./index.css";
import background from "../../assets/images_game_3/background.png";
import shipLeft from "../../assets/images_game_3/millennium-falcon_left.png";
import shipRight from "../../assets/images_game_3/millennium-falcon_right.png";
import ship from "../../assets/images_game_3/millennium-falcon.png";
import met1 from "../../assets/images_game_3/meteor_1.png";
// import met2 from "../../assets/images_game_3/meteor_2.png";
// import met3 from "../../assets/images_game_3/meteor_3.png";
// import met4 from "../../assets/images_game_3/meteor_4.png";
// import met5 from "../../assets/images_game_3/meteor_5.png";
// import met6 from "../../assets/images_game_3/meteor_6.png";
// import met7 from "../../assets/images_game_3/meteor_7.png";
// import met8 from "../../assets/images_game_3/meteor_8.png";
// import met9 from "../../assets/images_game_3/meteor_9.png";
// import met10 from "../../assets/images_game_3/meteor_10.png";
// import met11 from "../../assets/images_game_3/meteor_11.png";
// import met12 from "../../assets/images_game_3/meteor_12.png";
let context: CanvasRenderingContext2D;
const bg = new Image();
bg.src = background;
const falcon = new Image();
falcon.src = ship;
const falconLeft = new Image();
falconLeft.src = shipLeft;
const falconRight = new Image();
falconRight.src = shipRight;
const meteor1 = new Image();
meteor1.src = met1;

function drawBackground() {
  context.drawImage(bg, 0, 0);
  context.drawImage(falcon, 700, 400);
  context.drawImage(meteor1, 100, 0);
  context.drawImage(meteor1, 500, 0);
  context.drawImage(meteor1, 900, 0);
}

// function setCanvasSize(elem: HTMLCanvasElement) {
//   window.addEventListener("resize", () => {
//     elem.height = window.innerHeight * 0.8;
//     elem.width = window.innerWidth * 0.7;
//   });
// }

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
    context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  drawBackground();
}

// const canvas = document.getElementById("game_3") as HTMLCanvasElement;
// if (canvas) {
//   console.log("Canvas!");
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    // console.log(`Нажата клавиша ${e.code} (${e.key})`);
    falcon.src = shipLeft;
  }
  if (e.key === "ArrowRight") {
    // console.log(`Нажата клавиша ${e.code} (${e.key})`);
    falcon.src = shipRight;
  }
});

// if (canvas) {
//   setCanvasSize(canvas);
// }
