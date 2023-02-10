import "./index.css";
import { startGame3 } from "./module/start";

function startGameMobility() {
  const startBtn = document.querySelector(
    ".game3-wrapper_button"
  ) as HTMLElement;

  startBtn.addEventListener("click", () => {
    const wrapper = document.querySelector(".game3-wrapper") as HTMLElement;
    wrapper.innerHTML = "";
  });

  startGame3();
}

export function game3() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("game3-wrapper");
  div.innerHTML = `
  <h2>Jedi's Mobility</h2>
  <p class="game3-wrapper_info">Some useful information about this awesome game presented for you by FireTeam</p>
  <div class="game3-wrapper_button"><span>Start Game</span></div>`;
  main.appendChild(div);

  startGameMobility();
}
