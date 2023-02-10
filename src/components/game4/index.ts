import "./index.css";

const origBoard: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
const humanPlay = "O";
const ai = "X";
const winCombinatios = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

function declareWinner(who: string) {
  const winner = document.getElementById("game4-end") as HTMLElement;
  winner.innerHTML = who;
}

function checkWin(board: string[], player: string) {
  const plays = board.reduce(
    (a: string[], e: string, i: number) =>
      e === player ? a.concat(i.toString()) : a,
    []
  );
  let gameWon = null;
  for (let index = 0; index < winCombinatios.length; index += 1) {
    if (
      winCombinatios[index].every((elem) => plays.indexOf(elem.toString()) > -1)
    ) {
      gameWon = { index, player };
      break;
    }
  }
  return gameWon;
}

function emptySquares() {
  return origBoard.filter((e) => Number(e) >= 0);
}

function bestSpot() {
  let thirdTurnAi = false;
  let aiTurn: string = "";
  const emptyCells = emptySquares();
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
    winCombinatios[gameWon.index].forEach((el) => {
      const winSquare = document.getElementById(
        `game4-cell-${Number(el)}`
      ) as HTMLElement;
      winSquare.style.backgroundColor =
        gameWon.player === humanPlay ? "blue" : "red";
    });
    const cells: HTMLElement[] = Array.from(
      document.querySelectorAll(".game4-main__game-cell")
    );
    for (let i = 0; i < cells.length; i += 1) {
      cells[i].removeEventListener("click", turnClick, false);
    }
    declareWinner(gameWon.player === humanPlay ? "You win" : "You lose");
  }
  function turn(squareId: string, player: string) {
    origBoard[Number(squareId.split("-")[2])] = player;

    const current = document.getElementById(squareId) as HTMLElement;
    current.innerHTML = player;

    if (player === "X") {
      current.classList.add("game4-dart");
      current.removeEventListener("click", turnClick, false);
    }
    if (player === "O") {
      current.classList.add("game4-yoda");
      current.removeEventListener("click", turnClick, false);
    }
  }
  function checkTie() {
    const gameWon = checkWin(origBoard, humanPlay);
    if (emptySquares().length === 0 && !gameWon) {
      const cells: HTMLElement[] = Array.from(
        document.querySelectorAll(".game4-main__game-cell")
      );
      cells.forEach((element) => {
        element.style.backgroundColor = "green";
        element.removeEventListener("click", turnClick, false);
      });
      declareWinner("Tie Game");
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
    const cells: HTMLElement[] = Array.from(
      document.querySelectorAll(".game4-main__game-cell")
    );
    cells.forEach((e) => {
      e.innerHTML = "";
      e.style.removeProperty("background-color");
      e.addEventListener("click", turnClick, false);
    });
  }
}
export function game4() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const body = document.createElement("div");
  body.classList.add("game4-wrapper");
  body.innerHTML = `    <div class="game4-wrapper">
  <div class="game4-main__container _game4-container">
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
    </div>
    <div id="game4-end" class="game4-main__endgame"></div>
  </div>
</div>`;
  main.appendChild(body);
  startGame();
}
