import "./index.css";

const origBoard: string[] = new Array(
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8"
);
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

function cellsremoveListener() {
  const cells: HTMLElement[] = Array.from(
    document.querySelectorAll(".game4-main__game-cell")
  );
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].removeEventListener("click", turnClick, false);
  }
}

function checkWin(board: string[], player: string) {
  const plays = board.reduce(
    (a: string[], e: string, i: number) =>
      e === player ? a.concat(i.toString()) : a,
    []
  );
  let gameWon = null;
  for (const [index, win] of winCombinatios.entries()) {
    if (win.every((elem) => plays.indexOf(elem.toString()) > -1)) {
      gameWon = { index, player };
      break;
    }
  }
  return gameWon;
}
function gameOver(gameWon: { index: number; player: string }) {
  for (const index of winCombinatios[gameWon.index]) {
    const winSquare = document.getElementById(
      `game4-cell-${index}`
    ) as HTMLElement;
    winSquare.style.backgroundColor =
      gameWon.player === humanPlay ? "blue" : "red";
  }
  cellsremoveListener();
  declareWinner(gameWon.player === humanPlay ? "You win" : "You lose");
}

function turn(squareId: string, player: string) {
  origBoard[Number(squareId.split("-")[2])] = player;

  const current = document.getElementById(squareId) as HTMLElement;
  current.innerHTML = player;
  const gameWon = checkWin(origBoard, player);
  if (gameWon) {
    gameOver(gameWon);
  }
}

function declareWinner(who: string) {
  const winner = document.getElementById("game4-end") as HTMLElement;
  winner.innerHTML = who;
}

function emptySquares() {
  return origBoard.filter((e) => Number(e) >= 0);
}

function checkTie() {
  if (emptySquares().length === 0) {
    const cells: HTMLElement[] = Array.from(
      document.querySelectorAll(".game4-main__game-cell")
    );
    cells.forEach((e) => {
      e.style.background = "green";
      e.removeEventListener("click", turnClick, false);
    });
    declareWinner("Tie Game");
    return true;
  }
  return false;
}

function bestSpot() {
  console.log(`game4-cell-${emptySquares()[0]}`);
  return `game4-cell-${emptySquares()[0]}`;
}

function turnClick(e: Event): void {
  const target = e.target as HTMLElement;
  if (Number(origBoard[Number(target.id.split("-")[2])]) >= 0) {
    turn(target.id, humanPlay);
    if (!checkTie()) turn(bestSpot(), ai);
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
    <table id="game4-main" class="game4-main__game-table">
      <tr class="game4-main__game-row">
        <td id="game4-cell-0" class="game4-main__game-cell"></td>
        <td id="game4-cell-1" class="game4-main__game-cell"></td>
        <td id="game4-cell-2" class="game4-main__game-cell"></td>
      </tr>
      <tr class="game4-main__game-row">
        <td id="game4-cell-3" class="game4-main__game-cell"></td>
        <td id="game4-cell-4" class="game4-main__game-cell"></td>
        <td id="game4-cell-5" class="game4-main__game-cell"></td>
      </tr>
      <tr class="game4-main__game-row">
        <td id="game4-cell-6" class="game4-main__game-cell"></td>
        <td id="game4-cell-7" class="game4-main__game-cell"></td>
        <td id="game4-cell-8" class="game4-main__game-cell"></td>
      </tr>
    </table>
    <div id="game4-end" class="game4-main__endgame"></div>
  </div>
</div>`;
  main.appendChild(body);
  startGame();
}
