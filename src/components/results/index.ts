import "./result.css";
import { StatisticGames } from "../module/Games";
import { ScoreGamesUserSort /* , ScoreGameUserSort  */ } from "../module/types";
import {
  returnLocalStorageIsRegistred,
  returnLocalStorage,
} from "../module/localStorage";

function drawTable(name: string, lang: string) {
  const main = document.querySelector(".main") as HTMLElement;
  const div = document.createElement("div");
  div.classList.add("wrapper_main-result");
  div.innerHTML = `
    <div class="wrapper_table-result">
      <form class="table-flip">
        <div>
          <input type="radio" name="table" value="user">
          <p>${name}</p>
        </div>
        <div>
          <input type="radio" name="table" value="game1">
          <p>game1</p>
        </div>
        <div>
          <input type="radio" name="table" value="game2">
          <p>game2</p>
        </div>
        <div>
          <input type="radio" name="table" value="game3">
          <p>game3</p>
        </div>
        <div>
          <input type="radio" name="table" value="game4">
          <p>game4</p>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th class="table-number">№</th>
            <th class="table-name">${
              lang === "en" ? "Name Game" : "Имя игры"
            }</th>
            <th class="table-result">${
              lang === "en" ? "Result" : "Результат"
            }</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  `;
  main.appendChild(div);
}

function drawRawGameUser(num: number, name: string, score: number) {
  const tbody = document.querySelector(
    ".wrapper_table-result tbody"
  ) as HTMLElement;
  const raw = document.createElement("tr");
  raw.innerHTML = `
    <td>${num}</td>
    <td>${name}</td>
    <td>${score}</td>
  `;
  tbody.appendChild(raw);
}

export function result() {
  const settings = returnLocalStorage();
  const userRegistred = returnLocalStorageIsRegistred();
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  if (userRegistred.isRegistred === "true") {
    const statistic = new StatisticGames();
    const optionSort = "ascScore";
    const userOption: ScoreGamesUserSort = {
      username: userRegistred.userName,
      option: optionSort,
    };
    drawTable(userRegistred.userName, settings.lang);
    statistic.getScoreGamesUser(userOption).then((data) => {
      const tbody = document.querySelector(
        ".wrapper_table-result tbody"
      ) as HTMLElement;
      tbody.innerHTML = "";
      const usergames = Object.entries(data.scores);
      console.log(usergames);
      usergames.forEach((arr, index) => {
        drawRawGameUser(index + 1, arr[0], arr[1]);
      });
    });

    const radioTables = document.querySelectorAll(
      'input[type=radio][name="table"]'
    );
    console.log(radioTables);
    radioTables.forEach((radio) => {
      radio.addEventListener("change", () => {
        const value = radio.getAttribute("value");
        if (
          value === "game1" ||
          value === "game2" ||
          value === "game3" ||
          value === "game4"
        ) {
          const objgame = {
            gamename: value,
            option: "ascScore",
          };
          statistic.getScoreTop10(objgame).then((data) => {
            console.log(data);
            const tbody = document.querySelector(
              ".wrapper_table-result tbody"
            ) as HTMLElement;
            tbody.innerHTML = "";
            const usersGame = Object.entries(data.scores);
            (document.querySelector(".table-name") as HTMLElement).innerHTML =
              "участники";
            usersGame.forEach((arr, index) => {
              drawRawGameUser(index + 1, arr[0], arr[1]);
            });
          });
        } else if (value === "user") {
          statistic.getScoreGamesUser(userOption).then((data) => {
            const tbody = document.querySelector(
              ".wrapper_table-result tbody"
            ) as HTMLElement;
            tbody.innerHTML = "";
            const usergames = Object.entries(data.scores);
            (document.querySelector(".table-name") as HTMLElement).innerHTML =
              "Имя игры";
            usergames.forEach((arr, index) => {
              drawRawGameUser(index + 1, arr[0], arr[1]);
            });
          });
        }
      });
    });
  }
}
