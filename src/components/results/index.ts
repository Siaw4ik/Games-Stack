import "./result.css";
import { StatisticGames } from "../module/Games";
import {
  ScoreGamesUserSort,
  ScoreGameUserSort,
  ResultTop10,
} from "../module/types";
import {
  returnLocalStorageIsRegistred,
  returnLocalStorage,
} from "../module/localStorage";

const arrButton = ["game1", "game2", "game3", "game4"];

export function drawTable(lang: string) {
  const userRegistred = returnLocalStorageIsRegistred();
  const main = document.querySelector(".main") as HTMLElement;
  const div = document.createElement("div");
  div.classList.add("wrapper_main-result");
  div.innerHTML = `
    <div class="wrapper_table-result">
      <form class="table-flip"></form>
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
  const form = document.querySelector(".table-flip") as HTMLElement;
  arrButton.forEach((elem) => {
    const buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `
      <input  class="table-result_${elem}" type="radio" name="table" value="${elem}">
      <p>${elem}</p>
    `;
    form.appendChild(buttonDiv);
  });

  const buttonDivUser = document.createElement("div");
  buttonDivUser.setAttribute("class", "user-radio");
  buttonDivUser.style.display = "none";
  buttonDivUser.innerHTML = `
      <input type="radio" name="table" value="user">
      <p>${userRegistred.userName}</p>
    `;
  form.prepend(buttonDivUser);

  if (userRegistred.isRegistred === "true") {
    buttonDivUser.style.display = "flex";
    (buttonDivUser.querySelector("input") as HTMLInputElement).checked = true;
    (document.querySelector(
      ".wrapper_table-result table"
    ) as HTMLElement).setAttribute("id", "user-table");
  }
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

export function drawtbody(data: ScoreGameUserSort | ResultTop10) {
  const tbody = document.querySelector(
    ".wrapper_table-result tbody"
  ) as HTMLElement;
  tbody.innerHTML = "";
  const usersGame = Object.entries(data.scores);
  usersGame.forEach((arr, index) => {
    drawRawGameUser(index + 1, arr[0], arr[1]);
  });
}

export function result() {
  const settings = returnLocalStorage();
  const userRegistred = returnLocalStorageIsRegistred();
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const statistic = new StatisticGames();
  const optionSort = "ascGame";
  const userOption: ScoreGamesUserSort = {
    username: userRegistred.userName,
    option: optionSort,
  };
  if (userRegistred.isRegistred === "true") {
    drawTable(settings.lang);
    statistic.getScoreGamesUser(userOption).then((data) => {
      drawtbody(data);
    });
  } else if (userRegistred.isRegistred === "false") {
    drawTable(settings.lang);
    const objgame1 = {
      gamename: arrButton[0],
      option: "ascName",
    };
    statistic.getScoreTop10(objgame1).then((data) => {
      (document.querySelector(".table-name") as HTMLElement).innerHTML =
        "участники";
      drawtbody(data);
    });
    const buttonGAme1 = document.querySelector(
      `.table-result_${arrButton[0]}`
    ) as HTMLInputElement;
    buttonGAme1.checked = true;
    console.log(buttonGAme1);
  }

  const radioTables = document.querySelectorAll(
    'input[type=radio][name="table"]'
  );
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
          option: "ascName",
        };
        (document.querySelector(
          ".wrapper_table-result table"
        ) as HTMLElement).setAttribute("id", "games-table");
        statistic.getScoreTop10(objgame).then((data) => {
          (document.querySelector(".table-name") as HTMLElement).innerHTML =
            "участники";
          drawtbody(data);
        });
      } else if (value === "user") {
        (document.querySelector(
          ".wrapper_table-result table"
        ) as HTMLElement).setAttribute("id", "user-table");
        statistic.getScoreGamesUser(userOption).then((data) => {
          (document.querySelector(".table-name") as HTMLElement).innerHTML =
            "Имя игры";
          drawtbody(data);
        });
      }
    });
  });
}
