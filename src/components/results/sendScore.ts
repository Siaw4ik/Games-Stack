import { StatisticGames } from "../module/Games";
import { ScoreGameUser } from "../module/types";
import { returnLocalStorageIsRegistred } from "../module/localStorage";

export function sendScore(game: string, result: number) {
  const statistic = new StatisticGames();
  const userRegistred = returnLocalStorageIsRegistred();
  const name =
    userRegistred.isRegistred === "true"
      ? userRegistred.userName
      : "Unknown Jedi";
  const obj: ScoreGameUser = {
    username: name,
    gamename: game,
    score: result,
  };
  statistic.addScoreGameUser(obj);

  statistic.addScoreTop10(obj);
}
