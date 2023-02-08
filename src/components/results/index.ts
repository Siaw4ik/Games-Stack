import "./result.css";
import { StatisticGames } from "../module/Games";
import {
  ScoreGamesUserSort,
  ScoreGameUserSort,
  ResultTop10,
  RequestTop10,
} from "../module/types";
import {
  returnLocalStorageIsRegistred,
  returnLocalStorage,
} from "../module/localStorage";

const arrButton = [
  { game1: "Jedi's Mind" },
  { game2: "Jedi Agility" },
  { game3: "game3" },
  { game4: "game4" },
];

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
      <input  class="table-result_${
        Object.keys(elem)[0]
      }" type="radio" name="table" value="${Object.values(elem)[0]}">
      <p>${Object.values(elem)[0]}</p>
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
    ) as HTMLElement).setAttribute("class", "user-table");
    (document.querySelector(
      ".wrapper_table-result table"
    ) as HTMLElement).setAttribute("id", `table-${userRegistred.userName}`);
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

function drawRawEmpty(mode: string, lang: string, name?: string) {
  const tbody = document.querySelector(
    ".wrapper_table-result tbody"
  ) as HTMLElement;
  tbody.innerHTML = "";
  const raw = document.createElement("tr");
  raw.innerHTML = `
    <td class="raw-empty" colspan="3">${
      lang === "en"
        ? `${
            mode === "user"
              ? "No results! You haven't played yet!"
              : `No results for ${name}`
          }`
        : `${
            mode === "user"
              ? "Нет результатов! Вы еще не играли!"
              : `Нет результатов игры ${name}`
          }`
    }</td>
  `;
  tbody.appendChild(raw);
}

function drawRawWait(lang: string) {
  const tbody = document.querySelector(
    ".wrapper_table-result tbody"
  ) as HTMLElement;
  tbody.innerHTML = "";
  const raw = document.createElement("tr");
  raw.innerHTML = `
    <td class="raw-empty" colspan="3">${
      lang === "en" ? "Loading..." : "Загрузка..."
    }</td>
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

let optionNameUser: string = "ascGame";
let optionNameGame: string = "ascName";
let optionScore: string = "ascScore";

function sortresult() {
  const statistic = new StatisticGames();
  const table = document.querySelector(
    ".wrapper_table-result table"
  ) as HTMLElement;
  if (table) {
    const resultCell = document.querySelector(".table-result") as HTMLElement;
    const nameCell = document.querySelector(".table-name") as HTMLElement;
    resultCell.addEventListener("click", () => {
      const settings = returnLocalStorage();
      optionScore = optionScore === "ascScore" ? "descScore" : "ascScore";
      drawRawWait(settings.lang);
      const nameTable = table.getAttribute("id");
      const classTable = table.getAttribute("class");
      if (nameTable && classTable === "user-table") {
        const obj: ScoreGamesUserSort = {
          username: nameTable.slice(6),
          option: optionScore,
        };
        statistic.getScoreGamesUser(obj).then((data) => {
          if (Object.entries(data.scores).length > 0) {
            drawtbody(data);
          } else if (Object.entries(data.scores).length === 0) {
            drawRawEmpty("game", settings.lang);
          }
        });
      }
      if (nameTable && classTable === "games-table") {
        const obj: RequestTop10 = {
          gamename: nameTable.slice(6),
          option: optionScore,
        };
        statistic.getScoreTop10(obj).then((data) => {
          if (Object.entries(data.scores).length > 0) {
            drawtbody(data);
          } else if (Object.entries(data.scores).length === 0) {
            drawRawEmpty("game", settings.lang);
          }
        });
      }
    });

    nameCell.addEventListener("click", () => {
      const settings = returnLocalStorage();
      drawRawWait(settings.lang);
      const nameTable = table.getAttribute("id");
      const classTable = table.getAttribute("class");
      if (nameTable && classTable === "user-table") {
        optionNameUser = optionNameUser === "ascGame" ? "descGame" : "ascGame";
        const obj: ScoreGamesUserSort = {
          username: nameTable.slice(6),
          option: optionNameUser,
        };
        statistic.getScoreGamesUser(obj).then((data) => {
          if (Object.entries(data.scores).length > 0) {
            drawtbody(data);
          } else if (Object.entries(data.scores).length === 0) {
            drawRawEmpty("game", settings.lang);
          }
        });
      }
      if (nameTable && classTable === "games-table") {
        optionNameGame = optionNameGame === "ascName" ? "descName" : "ascName";
        const obj: RequestTop10 = {
          gamename: nameTable.slice(6),
          option: optionNameGame,
        };
        statistic.getScoreTop10(obj).then((data) => {
          if (Object.entries(data.scores).length > 0) {
            drawtbody(data);
          } else if (Object.entries(data.scores).length === 0) {
            drawRawEmpty("game", settings.lang);
          }
        });
      }
    });
  }
}

function changeRadioBtn() {
  const radioTables = document.querySelectorAll(
    'input[type=radio][name="table"]'
  );
  radioTables.forEach((radio) => {
    radio.addEventListener("change", () => {
      const statistic = new StatisticGames();
      const settingsChange = returnLocalStorage();
      const userRegistred = returnLocalStorageIsRegistred();
      drawRawWait(settingsChange.lang);
      const value = radio.getAttribute("value");
      if (value && value !== "user") {
        const objgame = {
          gamename: value,
          option: optionNameGame,
        };
        (document.querySelector(
          ".wrapper_table-result table"
        ) as HTMLElement).setAttribute("class", "games-table");
        (document.querySelector(
          ".wrapper_table-result table"
        ) as HTMLElement).setAttribute("id", `table-${value}`);
        statistic.getScoreTop10(objgame).then((data) => {
          (document.querySelector(".table-name") as HTMLElement).innerHTML = `${
            settingsChange.lang === "en" ? "Players" : "Игроки"
          }`;
          (document.querySelector(
            ".table-result"
          ) as HTMLElement).innerHTML = `${
            settingsChange.lang === "en" ? "Result" : "Результат"
          }`;
          if (Object.entries(data.scores).length > 0) {
            drawtbody(data);
          } else if (Object.entries(data.scores).length === 0) {
            drawRawEmpty("game", settingsChange.lang, value);
          }
        });
      } else if (value === "user") {
        const userOptionChange: ScoreGamesUserSort = {
          username: userRegistred.userName,
          option: optionNameUser,
        };
        (document.querySelector(
          ".wrapper_table-result table"
        ) as HTMLElement).setAttribute("class", "user-table");
        (document.querySelector(
          ".wrapper_table-result table"
        ) as HTMLElement).setAttribute("id", `table-${userRegistred.userName}`);
        statistic.getScoreGamesUser(userOptionChange).then((data) => {
          (document.querySelector(".table-name") as HTMLElement).innerHTML = `${
            settingsChange.lang === "en" ? "Name Game" : "Имя игры"
          }`;
          (document.querySelector(
            ".table-result"
          ) as HTMLElement).innerHTML = `${
            settingsChange.lang === "en" ? "Result" : "Результат"
          }`;
          if (Object.entries(data.scores).length > 0) {
            drawtbody(data);
          } else if (Object.entries(data.scores).length === 0) {
            drawRawEmpty("user", settingsChange.lang);
          }
        });
      }
    });
  });
}

export function result() {
  const settings = returnLocalStorage();
  const userRegistred = returnLocalStorageIsRegistred();
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const statistic = new StatisticGames();
  const userOption: ScoreGamesUserSort = {
    username: userRegistred.userName,
    option: optionNameUser,
  };
  if (userRegistred.isRegistred === "true") {
    drawTable(settings.lang);
    (document.querySelector(".table-name") as HTMLElement).innerHTML = `${
      settings.lang === "en" ? "Name Game" : "Имя игры"
    }`;
    drawRawWait(settings.lang);
    statistic.getScoreGamesUser(userOption).then((data) => {
      if (Object.entries(data.scores).length > 0) {
        drawtbody(data);
      } else if (Object.entries(data.scores).length === 0) {
        drawRawEmpty("user", settings.lang);
      }
    });
  } else if (userRegistred.isRegistred === "false") {
    drawTable(settings.lang);
    const objgame1 = {
      gamename: "Jedi's Mind",
      option: optionNameGame,
    };
    drawRawWait(settings.lang);
    statistic.getScoreTop10(objgame1).then((data) => {
      (document.querySelector(".table-name") as HTMLElement).innerHTML = `${
        settings.lang === "en" ? "Players" : "Игроки"
      }`;
      if (Object.entries(data.scores).length > 0) {
        drawtbody(data);
      } else if (Object.entries(data.scores).length === 0) {
        drawRawEmpty("game", settings.lang, "Jedi's Mind");
      }
    });
    const buttonGAme1 = document.querySelector(
      `.table-result_game1`
    ) as HTMLInputElement;
    buttonGAme1.checked = true;
    (document.querySelector(
      ".wrapper_table-result table"
    ) as HTMLElement).setAttribute("class", "games-table");
    (document.querySelector(
      ".wrapper_table-result table"
    ) as HTMLElement).setAttribute("id", `table-game1`);
  }
  changeRadioBtn();
  sortresult();
}

export function translateHeaderTable(lang: string) {
  const table = document.querySelector(
    ".wrapper_table-result table"
  ) as HTMLElement;
  const resultCell = document.querySelector(".table-result") as HTMLElement;
  const nameCell = document.querySelector(".table-name") as HTMLElement;

  if (table) {
    const nameTable = table.getAttribute("class");
    resultCell.innerHTML = `${lang === "en" ? "Result" : "Результат"}`;

    if (nameTable === "user-table") {
      nameCell.innerHTML = `${lang === "en" ? "Name Game" : "Имя игры"}`;
    }

    if (nameTable === "games-table") {
      nameCell.innerHTML = `${lang === "en" ? "Players" : "Игроки"}`;
    }
  }
}
