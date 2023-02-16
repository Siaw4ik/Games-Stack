import { emptySquares } from "../../../src/components/game4/componentsGame4";

describe("emptySquares function:", () => {
  test("return a boolean value, corresponding to the validation login string longer than 5 characters and have capital letters", () => {
    expect(emptySquares(["-1", "-2", "3", "4"])).toEqual(["3", "4"]);
    expect(
      emptySquares(["slawa", "-5", "-1", "-7", "-2", "3", "4", "100"])
    ).toEqual(["3", "4", "100"]);
    expect(emptySquares(["-1", "-2", "0", "13", "-4", "a"])).toEqual([
      "0",
      "13",
    ]);
  });
});
