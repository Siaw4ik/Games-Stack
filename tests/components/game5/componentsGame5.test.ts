import { changeScore20 } from "../../../src/components/game5/componentsGame5";

describe("changeScore20 function:", () => {
  test("should return the score minus 20", () => {
    expect(changeScore20(1000)).toBe(980);
    expect(changeScore20(680)).toBe(660);
    expect(changeScore20(500)).toBe(480);
    expect(changeScore20(21)).toBe(1);
    expect(changeScore20(555)).toBe(535);
  });
});
