import { changeScore20 } from "../../src/components/game5/componentsGame5";
import { createObjParametr } from "../../src/components/results/componentsResault";
import { StatisticGames } from "../../src/components/module/Games";
import { checkValidLoginSignUP } from "../../src/components/registration/сomponentsRegister";

describe("changeScore20 function:", () => {
  test("should return the score minus 20", () => {
    expect(changeScore20(1000)).toBe(980);
    expect(changeScore20(680)).toBe(660);
    expect(changeScore20(500)).toBe(480);
    expect(changeScore20(21)).toBe(1);
    expect(changeScore20(555)).toBe(535);
  });
});

const arrcreateObjParametr = [
  {
    username: "Slawik",
    option: "ascScore",
  },
  {
    username: "Dima",
    option: "descScore",
  },
  {
    username: "Maxim",
    option: "ascScore",
  },
];

describe("createObjParametr function:", () => {
  test("should return an object with two fields, 1 field its value is truncated to 6 by the character of 1 argument, 2 field - 2 argument", () => {
    expect(createObjParametr("table-Slawik", "ascScore")).toEqual(
      arrcreateObjParametr[0]
    );
    expect(createObjParametr("table-Dima", "descScore")).toEqual(
      arrcreateObjParametr[1]
    );
    expect(createObjParametr("table-Maxim", "ascScore")).toEqual(
      arrcreateObjParametr[2]
    );
  });
});

const statistic = new StatisticGames();

const fetchReturnSlawik = {
  success: true,
  username: "Slawik",
  scores: {
    "Jedi Agility": 105628,
    "Jedi's Memory": 810,
    "Jedi's Mobility": 250,
    "Jedi's Agiclity": 100,
    "Jedi's Agility": 45,
    "Jedi's Strategy": 19,
    "Jedi's Mind": 14,
  },
};

describe("StatisticGames.getScoreGamesUser function:", () => {
  test("should return games with results played by user Slavik", async () => {
    const data = await statistic.getScoreGamesUser({
      username: "Slawik",
      option: "ascScore",
    });
    expect(data).toEqual(fetchReturnSlawik);
  });
});

describe("StatisticGames.getScoreTop10 function:", () => {
  test("should return a response to the server stating that there are no results of such a game on the server", async () => {
    const data = await statistic.getScoreTop10({
      gamename: "tetris",
      option: "ascScore",
    });
    expect(data).toEqual({
      success: false,
      message: "Top isn't available",
    });
  });
});

describe("checkValidLoginSignUP function:", () => {
  test("return a boolean value, corresponding to the validation login string longer than 5 characters and have capital letters", () => {
    expect(checkValidLoginSignUP("Slawik")).toBe(true);
    expect(checkValidLoginSignUP("slawa")).toBe(false);
    expect(checkValidLoginSignUP("s")).toBe(false);
    expect(checkValidLoginSignUP("SlawikCool")).toBe(true);
  });
});
