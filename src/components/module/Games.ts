import {
  ScoreGameUser,
  AnswerRecordUser,
  ScoreGamesUserSort,
  ScoreGameUserSort,
  ResultTop10,
  RequestTop10,
} from "./types";

export class StatisticGames {
  async addScoreGameUser(gameUser: ScoreGameUser): Promise<AnswerRecordUser> {
    const response = await fetch(
      "https://rsclonetestserver-production.up.railway.app/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameUser),
      }
    );
    const data: AnswerRecordUser = await response.json();

    return data;
  }

  async getScoreGamesUser(
    gameSort: ScoreGamesUserSort
  ): Promise<ScoreGameUserSort /*  | AnswerRecordUser */> {
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
    const data: ScoreGameUserSort /*  | AnswerRecordUser */ = await response.json();

    return data;
  }

  async addScoreTop10(scoregame: ScoreGameUser): Promise<AnswerRecordUser> {
    const response = await fetch(
      "https://rsclonetestserver-production.up.railway.app/top/addscore",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(scoregame),
      }
    );
    const data: AnswerRecordUser = await response.json();

    return data;
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
