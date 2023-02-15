import {
  ScoreGameUser,
  ScoreGamesUserSort,
  ScoreGameUserSort,
  ResultTop10,
  RequestTop10,
} from "./types";

export class StatisticGames {
  async addScoreGameUser(gameUser: ScoreGameUser): Promise<void> {
    await fetch(
      "https://rsclonetestserver-production.up.railway.app/user/addscore",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameUser),
      }
    );
  }

  async getScoreGamesUser(
    gameSort: ScoreGamesUserSort
  ): Promise<ScoreGameUserSort> {
    const response = await fetch(
      "https://rsclonetestserver-production.up.railway.app/user/scores",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameSort),
      }
    );
    const data: ScoreGameUserSort = await response.json();

    return data;
  }

  async addScoreTop10(scoregame: ScoreGameUser): Promise<void> {
    await fetch(
      "https://rsclonetestserver-production.up.railway.app/top/addscore",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(scoregame),
      }
    );
  }

  async getScoreTop10(gameSort: RequestTop10): Promise<ResultTop10> {
    const response = await fetch(
      "https://rsclonetestserver-production.up.railway.app/game/top10",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameSort),
      }
    );
    const data: ResultTop10 = await response.json();

    return data;
  }
}
