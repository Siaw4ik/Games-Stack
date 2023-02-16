import {
  emptySquares,
  checkWin,
} from "../../../src/components/game4/componentsGame4";

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
