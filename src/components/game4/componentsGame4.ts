
export function emptySquares(origBoard: string[]) {
  return origBoard.filter((e) => Number(e) >= 0);
}

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

export function checkWin(board: string[], player: string) {
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
