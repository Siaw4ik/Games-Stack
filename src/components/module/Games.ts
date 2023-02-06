import { ScoreGameUser, AnswerRecordUser, ScoreGamesUserSort } from "./types";

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
  ): Promise<AnswerRecordUser> {
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
    const data: AnswerRecordUser = await response.json();

    return data;
  }
}
