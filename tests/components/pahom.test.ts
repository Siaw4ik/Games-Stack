import {
  changeScore1,
  changeQuestionsAnsweredCountby1,
} from "../../src/components/game1/componentsGame1";

import {
  deltaCurrentAnPrevTime,
  returnFalcyArgs,
} from "../../src/components/game2/componentsForGame2";

import {
  emptySquares,
  checkWin,
} from "../../src/components/game4/componentsGame4";

describe("changeScore1 function:", () => {
  test("should return the score +1", () => {
    expect(changeScore1(1)).toBe(2);
    expect(changeScore1(19)).toBe(20);
    expect(changeScore1(0)).toBe(1);
    expect(changeScore1(39)).toBe(40);
    expect(changeScore1(2)).not.toBe(4);
  });
});

describe("changeQuestionsAnsweredCountby1 function:", () => {
  test("should return questions answered count +1", () => {
    expect(changeQuestionsAnsweredCountby1(1)).toBe(2);
    expect(changeQuestionsAnsweredCountby1(19)).toBe(20);
    expect(changeQuestionsAnsweredCountby1(0)).toBe(1);
    expect(changeQuestionsAnsweredCountby1(39)).toBe(40);
    expect(changeQuestionsAnsweredCountby1(2)).not.toBe(4);
  });
});

describe("deltaCurrentAnPrevTime function:", () => {
  test("should return currenTime > 0", () => {
    expect(deltaCurrentAnPrevTime(32, 16)).toBeGreaterThan(0);
  });
});

describe("returnFalcyArgs function:", () => {
  test("should return false for boolean args ", () => {
    expect(returnFalcyArgs(true, false, true)).toBe(false);
    expect(returnFalcyArgs(true, false, false)).toBe(false);
    expect(returnFalcyArgs(false, true, true)).toBe(false);
    expect(returnFalcyArgs(false, true, false)).toBe(false);
    expect(returnFalcyArgs(true, true, true)).toBe(false);
    expect(returnFalcyArgs(false, false, true)).toBe(false);
  });
});

describe("emptySquares function:", () => {
  test("should return array of empty squres ", () => {
    expect(
      emptySquares(["0", "1", "2", "3", "4", "5", "6", "7", "8"])
    ).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8"]);
    expect(
      emptySquares(["x", "1", "2", "3", "4", "5", "6", "7", "8"])
    ).toEqual(["1", "2", "3", "4", "5", "6", "7", "8"]);
    expect(
      emptySquares(["x", "1", "2", "o", "4", "5", "6", "7", "8"])
    ).toEqual(["1", "2", "4", "5", "6", "7", "8"]);
    expect(emptySquares(["x", "o", "x", "o", "x", "o", "x", "o", "x"])).toEqual(
      []
    );
  });
});

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

describe("checkWin function:", () => {
  test("should return object with winner and winCombo or null ", () => {
    expect(
      checkWin(["x", "x", "x", "3", "o", "5", "o", "7", "8"], "x")
    ).toEqual({ index: 0, player: "x" });
    expect(
      checkWin(["x", "x", "o", "3", "o", "5", "o", "7", "8"], "o")
    ).toEqual({ index: 7, player: "o" });
    expect(checkWin(["x", "x", "o", "3", "o", "5", "", "7", "8"], "o")).toEqual(
      null
    );
  });
});
