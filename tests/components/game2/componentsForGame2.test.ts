import { deltaCurrentAnPrevTime } from "../../../src/components/game2/componentsForGame2";

describe("deltaCurrentAnPrevTime function:", () => {
  test("should return currenTime > 0", () => {
    expect(deltaCurrentAnPrevTime(32, 16)).toBeGreaterThan(0);
  });
});
