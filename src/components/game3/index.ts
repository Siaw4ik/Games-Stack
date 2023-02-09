// import audiofile from "../../assets/sounds/Mercury_audio.mp3";

export function game3() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `<canvas id="game_3" width="800" height="600"></canvas>`;
  // const audio = new Audio(audiofile);
  // audio.autoplay = true;
  main.appendChild(div);
}
