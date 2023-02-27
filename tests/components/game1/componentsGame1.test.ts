import {
  changeScore1,
  changeQuestionsAnsweredCountby1,
} from "../../../src/components/game1/componentsGame1";

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
