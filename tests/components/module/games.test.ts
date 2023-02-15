import { StatisticGames } from "../../../src/components/module/Games";

const statistic = new StatisticGames();

const fetchReturnSlawik = {
  success: true,
  username: "TestGameStack001",
  scores: {
    "Jedi's Memory": 260,
    "Jedi's Agility": 44,
    "Jedi's Mobility": 48,
    "Jedi's Mind": 11,
    "Jedi's Strategy": 4,
  },
};

describe("StatisticGames.getScoreGamesUser function:", () => {
  test("should return games with results played by user Slavik", async () => {
    const data = await statistic.getScoreGamesUser({
      username: "TestGameStack001",
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
