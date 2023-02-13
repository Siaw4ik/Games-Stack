import "./index.css";
import { startGame3 } from "./module/start";
import { gamesData } from "../gamesInfo/gamesData";
import { returnLocalStorage } from "../module/localStorage";

export function game3() {
  const main = document.querySelector(".main") as HTMLElement;
  const settings = returnLocalStorage();
  main.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("game3-wrapper");
  div.innerHTML = `
  <h2>Jedi's Mobility</h2>
  <p class="game3-wrapper_info">${
    settings.lang === "en" ? gamesData.en[2].manual : gamesData.ru[2].manual
  }</p>
  <div class="game3-wrapper_button"><span>${
    settings.lang === "en" ? "Start Game" : "Начать Игру"
  }</span></div>`;
  main.appendChild(div);

  const startBtn = document.querySelector(
    ".game3-wrapper_button"
  ) as HTMLElement;

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startGame3();
    });
  }
}
