import "./index.css";
import { gamesData } from "../gamesInfo/gamesData";
import backAudio from "../../assets/sounds/back-game5-starwars.mp3";
import winAudio from "../../assets/sounds/final-game5-starwars.mp3";
import cardAudio from "../../assets/sounds/game5-one-card.mp3";
import failAudio from "../../assets/sounds/failAudio-starwars.mp3";
import {
  returnLocalStorage,
  returnLocalStorageIsRegistered,
  returnLocalStorageUnknown,
} from "../module/localStorage";
import { StatisticGames } from "../module/Games";
import { ScoreGamesUserSort } from "../module/types";
import { sendScore } from "../results/sendScore";
import { emptySquares, checkWin } from "./componentsGame4";

const game4BackAudio = new Audio(backAudio);
const game4FinalAudio = new Audio(winAudio);
const game4OneCard = new Audio(cardAudio);
const game4failAudio = new Audio(failAudio);
game4OneCard.volume = 0.5;
game4BackAudio.volume = 0.7;
game4FinalAudio.volume = 0.7;
game4failAudio.volume = 0.7;

export function changeGame4AudioVolume(mode: boolean) {
  if (mode === true) {
    game4BackAudio.volume = 0.7;
    game4FinalAudio.volume = 0.7;
    game4failAudio.volume = 0.7;
    game4OneCard.volume = 0.5;
  } else if (mode === false) {
    game4BackAudio.volume = 0;
    game4FinalAudio.volume = 0;
    game4failAudio.volume = 0;
    game4OneCard.volume = 0;
  }
}

let origBoard: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let humanPlay: string = "";
let ai: string = "";
let scoreUser: number;

function declareWinner(who: string) {
  const endBlock = document.getElementById("game4-end") as HTMLElement;
  const endMessage = document.getElementById("game4-endMessage") as HTMLElement;

  endBlock.classList.add("open");
  endMessage.innerHTML = who;
}

function bestSpot() {
  let thirdTurnAi = false;
  let aiTurn: string = "";
  const emptyCells = emptySquares(origBoard);
  const cells: HTMLElement[] = Array.from(
    document.querySelectorAll(".game4-main__game-cell")
  );
  emptyCells.sort(
    (a, b) =>
      Number(a) -
      Number(a) +
      Math.random() -
      (Number(b) - Number(b) + Math.random())
  );
  const humanCells: HTMLElement[] = [];
  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i].innerText === humanPlay) {
      humanCells.push(cells[i]);
    }
  }
  if (humanCells.length === 1) {
    if (humanCells.filter((e) => e.id === "game4-cell-4").length === 0) {
      aiTurn = "game4-cell-4";
    } else {
      aiTurn = [cells[0], cells[2], cells[6], cells[8]].sort(
        (a, b) =>
          Number(a.id.split("-")[2]) -
          Number(a.id.split("-")[2]) +
          Math.random() -
          (Number(b.id.split("-")[2]) -
            Number(b.id.split("-")[2]) +
            Math.random())
      )[0].id;
    }
  }

  if (humanCells.length === 2) {
    if (
      (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-1").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-5").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-6").length > 0 &&
        cells[2].innerHTML !== ai) ||
      (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-5").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-5").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-8").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        cells[0].innerHTML === ai) ||
      (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-8").length > 0)
    ) {
      aiTurn = "game4-cell-2";
    }
    if (
      (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-2").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-6").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-8").length > 0 &&
        cells[0].innerHTML !== ai) ||
      (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-3").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-6").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-6").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        cells[2].innerHTML === ai)
    ) {
      aiTurn = "game4-cell-0";
    }
    if (
      (humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-4").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-6").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-8").length > 0)
    ) {
      aiTurn = "game4-cell-5";
    }
    if (
      (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-5").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-6").length > 0)
    ) {
      aiTurn = "game4-cell-3";
    }
    if (
      (humanCells.filter((e) => e.id === "game4-cell-6").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-5").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        cells[8].innerHTML !== ai) ||
      (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-3").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-5").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-5").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-6").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        cells[6].innerHTML === ai) ||
      (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        cells[6].innerHTML === ai) ||
      (humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-5").length > 0)
    ) {
      aiTurn = "game4-cell-8";
    }
    if (
      (humanCells.filter((e) => e.id === "game4-cell-7").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-3").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
        cells[6].innerHTML !== ai) ||
      (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        cells[8].innerHTML === ai)
    ) {
      aiTurn = "game4-cell-6";
    }
    if (
      (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-2").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-7").length > 0)
    ) {
      aiTurn = "game4-cell-1";
    }
    if (
      (humanCells.filter((e) => e.id === "game4-cell-6").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
      (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
        humanCells.filter((e) => e.id === "game4-cell-1").length > 0)
    ) {
      aiTurn = "game4-cell-7";
    }
  }
  if (humanCells.length === 3) {
    if (
      (cells[0].innerHTML === ai &&
        cells[3].innerHTML === ai &&
        cells[6].innerHTML !== humanPlay) ||
      (cells[8].innerHTML === ai &&
        cells[7].innerHTML === ai &&
        cells[6].innerHTML !== humanPlay) ||
      (cells[2].innerHTML === ai &&
        cells[4].innerHTML === ai &&
        cells[6].innerHTML !== humanPlay)
    ) {
      aiTurn = "game4-cell-6";
      thirdTurnAi = true;
    }

    if (
      (cells[6].innerHTML === ai &&
        cells[3].innerHTML === ai &&
        cells[0].innerHTML !== humanPlay) ||
      (cells[2].innerHTML === ai &&
        cells[1].innerHTML === ai &&
        cells[0].innerHTML !== humanPlay) ||
      (cells[8].innerHTML === ai &&
        cells[4].innerHTML === ai &&
        cells[0].innerHTML !== humanPlay)
    ) {
      aiTurn = "game4-cell-0";
      thirdTurnAi = true;
    }

    if (
      (cells[8].innerHTML === ai &&
        cells[5].innerHTML === ai &&
        cells[2].innerHTML !== humanPlay) ||
      (cells[0].innerHTML === ai &&
        cells[1].innerHTML === ai &&
        cells[2].innerHTML !== humanPlay) ||
      (cells[6].innerHTML === ai &&
        cells[4].innerHTML === ai &&
        cells[2].innerHTML !== humanPlay)
    ) {
      aiTurn = "game4-cell-2";
      thirdTurnAi = true;
    }

    if (
      (cells[2].innerHTML === ai &&
        cells[5].innerHTML === ai &&
        cells[8].innerHTML !== humanPlay) ||
      (cells[6].innerHTML === ai &&
        cells[7].innerHTML === ai &&
        cells[8].innerHTML !== humanPlay) ||
      (cells[0].innerHTML === ai &&
        cells[4].innerHTML === ai &&
        cells[8].innerHTML !== humanPlay)
    ) {
      aiTurn = "game4-cell-8";
      thirdTurnAi = true;
    }

    if (
      (cells[0].innerHTML === ai &&
        cells[2].innerHTML === ai &&
        cells[1].innerHTML !== humanPlay) ||
      (cells[7].innerHTML === ai &&
        cells[4].innerHTML === ai &&
        cells[1].innerHTML !== humanPlay) ||
      (cells[0].innerHTML === ai &&
        cells[2].innerHTML === ai &&
        cells[1].innerHTML !== humanPlay)
    ) {
      aiTurn = "game4-cell-1";
      thirdTurnAi = true;
    }

    if (
      (cells[6].innerHTML === ai &&
        cells[8].innerHTML === ai &&
        cells[7].innerHTML !== humanPlay) ||
      (cells[1].innerHTML === ai &&
        cells[4].innerHTML === ai &&
        cells[7].innerHTML !== humanPlay) ||
      (cells[8].innerHTML === ai &&
        cells[6].innerHTML === ai &&
        cells[7].innerHTML !== humanPlay)
    ) {
      aiTurn = "game4-cell-7";
      thirdTurnAi = true;
    }

    if (
      (cells[0].innerHTML === ai &&
        cells[6].innerHTML === ai &&
        cells[3].innerHTML !== humanPlay) ||
      (cells[5].innerHTML === ai &&
        cells[4].innerHTML === ai &&
        cells[3].innerHTML !== humanPlay) ||
      (cells[0].innerHTML === ai &&
        cells[6].innerHTML === ai &&
        cells[3].innerHTML !== humanPlay)
    ) {
      aiTurn = "game4-cell-3";
      thirdTurnAi = true;
    }

    if (
      (cells[2].innerHTML === ai &&
        cells[8].innerHTML === ai &&
        cells[5].innerHTML !== humanPlay) ||
      (cells[3].innerHTML === ai &&
        cells[4].innerHTML === ai &&
        cells[5].innerHTML !== humanPlay) ||
      (cells[2].innerHTML === ai &&
        cells[8].innerHTML === ai &&
        cells[5].innerHTML !== humanPlay)
    ) {
      aiTurn = "game4-cell-5";
      thirdTurnAi = true;
    }
  }

  const aiCells: HTMLElement[] = [];
  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i].innerText === ai) {
      aiCells.push(cells[i]);
    }
  }
  if (humanCells.length === 3 && thirdTurnAi === false) {
    aiTurn = `game4-cell-${emptyCells[0]}`;
  }
  if (humanCells.length > 3) {
    aiTurn = `game4-cell-${emptyCells[0]}`;
  }

  return aiTurn;
}

function turnClick(e: Event): void {
  function gameOver(gameWon: { index: number; player: string }) {
    const settingsStart = returnLocalStorage();
    const scoreHTML = document.querySelector(
      ".game4-main-score-number"
    ) as HTMLElement;
    const cells: HTMLElement[] = Array.from(
      document.querySelectorAll(".game4-main__game-cell")
    );
    for (let i = 0; i < cells.length; i += 1) {
      cells[i].removeEventListener("click", turnClick, false);
    }
    const userTrue = returnLocalStorageIsRegistered();
    if (gameWon.player === humanPlay) {
      if (userTrue.isRegistred === "true") {
        scoreUser += 3;
        scoreHTML.innerHTML = `${scoreUser}`;
        sendScore("Jedi's Strategy", scoreUser);
      } else if (userTrue.isRegistred === "false") {
        scoreHTML.innerHTML = `${Number(scoreHTML.innerHTML) + 3}`;
        sendScore("Jedi's Strategy", Number(scoreHTML.innerHTML));
        localStorage.setItem(
          "unknownStrategy",
          JSON.stringify(Number(scoreHTML.innerHTML))
        );
      }
    } else if (gameWon.player !== humanPlay) {
      if (userTrue.isRegistred === "true") {
        scoreUser -= 3;
        scoreHTML.innerHTML = `${scoreUser}`;
        sendScore("Jedi's Strategy", scoreUser);
      } else if (userTrue.isRegistred === "false") {
        scoreHTML.innerHTML = `${Number(scoreHTML.innerHTML) - 3}`;
        sendScore("Jedi's Strategy", Number(scoreHTML.innerHTML));
        localStorage.setItem(
          "unknownStrategy",
          JSON.stringify(Number(scoreHTML.innerHTML))
        );
      }
    }

    declareWinner(
      gameWon.player === humanPlay
        ? `${settingsStart.lang === "en" ? "You win!" : "Вы победили!"}`
        : `${settingsStart.lang === "en" ? "You lose!" : "Вы проиграли!"}`
    );
    game4BackAudio.pause();
    if (gameWon.player === humanPlay) {
      game4FinalAudio.play();
      game4FinalAudio.currentTime = 0;
    }

    if (gameWon.player === ai) {
      game4failAudio.play();
      game4failAudio.currentTime = 0;
    }
  }
  function turn(squareId: string, player: string) {
    if (humanPlay) {
      game4OneCard.play();
      const chips = Array.from(document.querySelectorAll(".game4-main__chip"));
      chips.forEach((el) => el.classList.add("disable"));
      origBoard[Number(squareId.split("-")[2])] = player;

      const current = document.getElementById(squareId) as HTMLElement;
      current.innerHTML = player;

      if (player === "game4-yoda-chip") {
        current.classList.add("game4-yoda");
        current.removeEventListener("click", turnClick, false);
      }
      if (player === "game4-dart-chip") {
        current.classList.add("game4-dart");
        current.removeEventListener("click", turnClick, false);
      }
    }
  }
  function checkTie() {
    const userTrue = returnLocalStorageIsRegistered();
    const scoreHTML = document.querySelector(
      ".game4-main-score-number"
    ) as HTMLElement;
    const gameWon = checkWin(origBoard, humanPlay);
    if (emptySquares(origBoard).length === 0 && !gameWon) {
      const settingsStart = returnLocalStorage();
      const cells: HTMLElement[] = Array.from(
        document.querySelectorAll(".game4-main__game-cell")
      );
      cells.forEach((element) => {
        element.removeEventListener("click", turnClick, false);
      });
      declareWinner(`${settingsStart.lang === "en" ? "Tie game!" : "Ничья!"}`);
      game4BackAudio.pause();
      game4failAudio.play();
      game4failAudio.currentTime = 0;

      if (userTrue.isRegistred === "true") {
        scoreUser += 1;
        scoreHTML.innerHTML = `${scoreUser}`;
        sendScore("Jedi's Strategy", scoreUser);
      } else if (userTrue.isRegistred === "false") {
        scoreHTML.innerHTML = `${Number(scoreHTML.innerHTML) + 1}`;
        sendScore("Jedi's Strategy", Number(scoreHTML.innerHTML));
        localStorage.setItem(
          "unknownStrategy",
          JSON.stringify(Number(scoreHTML.innerHTML))
        );
      }
      return true;
    }
    return false;
  }

  let gameWon = null;
  const target = e.target as HTMLElement;
  if (Number(origBoard[Number(target.id.split("-")[2])]) >= 0) {
    turn(target.id, humanPlay);
    gameWon = checkWin(origBoard, humanPlay);
    if (gameWon) {
      gameOver(gameWon);
    }
  }
  if (!checkTie() && !gameWon) {
    turn(bestSpot(), ai);
    gameWon = checkWin(origBoard, ai);
    if (gameWon) {
      gameOver(gameWon);
    }
  }
}

export function startGame() {
  const mainGame = document.querySelector(".game4-main__container");
  if (mainGame) {
    const chips = Array.from(document.querySelectorAll(".game4-main__chip"));
    chips.forEach((el) => el.classList.remove("disable", "chosen"));
    const cells: HTMLElement[] = Array.from(
      document.querySelectorAll(".game4-main__game-cell")
    );
    cells.forEach((e) => {
      e.innerHTML = "";
      e.classList.remove("game4-yoda", "game4-dart");
      e.removeEventListener("click", turnClick, false);
    });
    origBoard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    ai = "";
    humanPlay = "";
  }
}

export function drawScoreFromBackEnd() {
  const statisticGames = new StatisticGames();
  const userTrue = returnLocalStorageIsRegistered();
  const obj: ScoreGamesUserSort = {
    username: userTrue.userName,
    option: "ascScore",
  };
  statisticGames.getScoreGamesUser(obj).then((result) => {
    const scoreHTML = document.querySelector(
      ".game4-main-score-number"
    ) as HTMLElement;
    const propertyGame = Object.entries(result.scores).find(
      (elem) => elem[0] === "Jedi's Strategy"
    );
    /* scoreUser = propertyGame !== undefined ? propertyGame[1] : 0; */
    if (scoreHTML && window.location.hash === "#game4") {
      scoreUser = propertyGame !== undefined ? propertyGame[1] : 0;
      scoreHTML.innerHTML = `${scoreUser}`;
    }
  });
}

export function startGameTicTac() {
  const settingsStart = returnLocalStorage();
  const userTrue = returnLocalStorageIsRegistered();
  const unknownScore = returnLocalStorageUnknown();
  game4BackAudio.loop = true;
  game4BackAudio.play();
  game4BackAudio.currentTime = 0;
  game4FinalAudio.pause();
  game4failAudio.pause();
  if (settingsStart.volume === true) {
    changeGame4AudioVolume(true);
  } else if (settingsStart.volume === false) {
    changeGame4AudioVolume(false);
  }

  if (userTrue.isRegistred === "true") drawScoreFromBackEnd();

  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const body = document.createElement("div") as HTMLElement;
  body.classList.add(".game4-wrapper");
  body.innerHTML = `
  <div class="game4-main__container _game4-container">
    <div class="game4-main__settings">
      <div class="game4-main-header">
        <h2 class="game4-main__title">Jedi's Strategy</h2>
        <p class="game4-main-score">
          <span class="game4-main-score-title">
          ${settingsStart.lang === "en" ? "Score: " : "Счёт: "}
          </span>
          <span class="game4-main-score-number">${
            userTrue.isRegistred === "true"
              ? scoreUser
              : `${unknownScore !== null ? unknownScore : "0"}`
          }</span>
        </p>
      </div>
      <div class="game4-main__chips">
        <div id="game4-yoda-chip" class="game4-main__chip"></div>
        <div id="game4-dart-chip" class="game4-main__chip"></div>
      </div>
    </div>
    <div id="game4-main" class="game4-main__game-table">
      <div class="game4-main__game-row">
        <div id="game4-cell-0" class="game4-main__game-cell"></div>
        <div id="game4-cell-1" class="game4-main__game-cell"></div>
        <div id="game4-cell-2" class="game4-main__game-cell"></div>
      </div>
      <div class="game4-main__game-row">
        <div id="game4-cell-3" class="game4-main__game-cell"></div>
        <div id="game4-cell-4" class="game4-main__game-cell"></div>
        <div id="game4-cell-5" class="game4-main__game-cell"></div>
      </div>
      <div class="game4-main__game-row">
        <div id="game4-cell-6" class="game4-main__game-cell"></div>
        <div id="game4-cell-7" class="game4-main__game-cell"></div>
        <div id="game4-cell-8" class="game4-main__game-cell"></div>
      </div>
      <div id="game4-end" class="game4-main__endgame game4-endgame">
    <div id="game4-endMessage" class="game4-endgame__message"></div>
    <button id="game4-retryBtn" class="game4-endgame__button">${
      settingsStart.lang === "en" ? "Start again" : "Начать заново"
    }</button>
    </div>
    </div>
  </div>`;
  main.appendChild(body);
  startGame();
  window.addEventListener("hashchange", () => {
    if (window.location.href !== "#game4") {
      game4BackAudio.pause();
      game4FinalAudio.pause();
      game4failAudio.pause();
    }
  });
}

export function game4() {
  const userTrue = returnLocalStorageIsRegistered();
  if (userTrue.isRegistred === "true") drawScoreFromBackEnd();
  const settings = returnLocalStorage();
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const divWrapper = document.createElement("div");
  divWrapper.classList.add("game4-wrapper");
  divWrapper.classList.remove("game4-start");
  divWrapper.innerHTML = `
  <h2>Jedi's Strategy</h2>
  <p class="game4-wrapper_info">${
    settings.lang === "en" ? gamesData.en[3].manual : gamesData.ru[3].manual
  }</p>
  <div class="game4-wrapper_button"><span>${
    settings.lang === "en" ? "Start Game" : "Начать Игру"
  }</span></div>`;
  main.appendChild(divWrapper);

  const startBtn = document.querySelector(
    ".game4-wrapper_button"
  ) as HTMLElement;
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startGameTicTac();
    });
  }
}

export function retryBtnclick() {
  const main = document.querySelector(".main") as HTMLElement;

  main.addEventListener("click", (e) => {
    if ((<HTMLButtonElement>e.target).id === "game4-retryBtn") {
      const endBlock = document.getElementById("game4-end") as HTMLElement;
      endBlock.classList.remove("open");
      startGame();
      const settingsStart = returnLocalStorage();
      game4BackAudio.loop = true;
      game4BackAudio.play();
      game4BackAudio.currentTime = 0;
      game4FinalAudio.pause();
      game4failAudio.pause();
      if (settingsStart.volume === true) {
        changeGame4AudioVolume(true);
      } else if (settingsStart.volume === false) {
        changeGame4AudioVolume(false);
      }
    }
  });
}

export function chipClick() {
  const main = document.querySelector(".main") as HTMLElement;
  main.addEventListener("click", (e) => {
    if ((<HTMLElement>e.target).className === "game4-main__chip") {
      const chips: HTMLElement[] = Array.from(
        document.querySelectorAll(".game4-main__chip")
      );
      chips.forEach((el) => el.classList.remove("chosen"));
      (<HTMLElement>e.target).classList.add("chosen");
      humanPlay = (<HTMLElement>e.target).id;
      if (humanPlay === "game4-yoda-chip") ai = "game4-dart-chip";
      else {
        ai = "game4-yoda-chip";
      }
      const cells: HTMLElement[] = Array.from(
        document.querySelectorAll(".game4-main__game-cell")
      );
      cells.forEach((el) => {
        el.addEventListener("click", turnClick, false);
      });
      game4OneCard.play();
    }
  });
}

export function translateGame4(lang: string) {
  const manual = document.querySelector(".game4-wrapper_info") as HTMLElement;
  const startBtn = document.querySelector(
    ".game4-wrapper_button"
  ) as HTMLElement;
  const retryBtn = document.querySelector(
    "#game4-retryBtn"
  ) as HTMLButtonElement;
  const endMessage = document.getElementById("game4-endMessage") as HTMLElement;
  const scoreTitle = document.querySelector(
    ".game4-main-score-title"
  ) as HTMLElement;

  if (startBtn && manual) {
    startBtn.innerHTML = `${lang === "en" ? "Start Game" : "Начать Игру"}`;
    manual.innerHTML = `${
      lang === "en" ? gamesData.en[3].manual : gamesData.ru[3].manual
    }`;
  }

  if (retryBtn && endMessage) {
    retryBtn.innerHTML = `${lang === "en" ? "Start again" : "Начать заново"}`;
    scoreTitle.innerHTML = `${lang === "en" ? "Score: " : "Счёт: "}`;
    if (endMessage.innerHTML === "You win!") {
      endMessage.innerHTML = `${lang === "en" ? "You win!" : "Вы победили!"}`;
    }
    if (endMessage.innerHTML === "Вы победили!") {
      endMessage.innerHTML = `${lang === "ru" ? "Вы победили!" : "You win!"}`;
    }
    if (endMessage.innerHTML === "You lose!") {
      endMessage.innerHTML = `${lang === "en" ? "You lose!" : "Вы проиграли!"}`;
    }
    if (endMessage.innerHTML === "Вы проиграли!") {
      endMessage.innerHTML = `${lang === "ru" ? "Вы проиграли!" : "You lose!"}`;
    }
    if (endMessage.innerHTML === "Tie game!") {
      endMessage.innerHTML = `${lang === "en" ? "Tie game!" : "Ничья!"}`;
    }
    if (endMessage.innerHTML === "Ничья!") {
      endMessage.innerHTML = `${lang === "ru" ? "Ничья!" : "Tie game!"}`;
    }
  }
}
