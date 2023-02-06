import { StatisticGames } from "../module/Games";
import { ScoreGamesUserSort } from "../module/types";
import { returnLocalStorageIsRegistred } from "../module/localStorage";

export function result() {
  const statistic = new StatisticGames();
  const user = returnLocalStorageIsRegistred().userName;
  const optionSort = "ascScore";
  const userOption: ScoreGamesUserSort = {
    username: user,
    option: optionSort,
  };
  statistic.getScoreGamesUser(userOption).then((data) => {
    console.log(data);
  });
}
