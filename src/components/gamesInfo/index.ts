import { gamesData } from "./gamesData";
import { returnLocalStorage } from "../module/localStorage";
import "./index.css";

export function createGamesInfoSection(): HTMLDivElement {
  const language = returnLocalStorage().lang;
  const gamesInfoSection = document.createElement("div") as HTMLDivElement;
  gamesInfoSection.classList.add("games_info_container");
  gamesInfoSection.addEventListener("click", (e) => {
    const targetBtn = e.target as HTMLElement;
    if (targetBtn) {
      if (targetBtn.closest(".game_btn")) {
        window.location.hash = `#${(targetBtn as HTMLElement).getAttribute(
          "id"
        )}`;
      }
    }
  });
  const gamesInfoTitle = document.createElement("h2") as HTMLDivElement;
  gamesInfoTitle.classList.add("games_info_title");
  const blockquoteTitle = document.createElement("blockquote") as HTMLElement;
  blockquoteTitle.classList.add("games_info_quote");

  const dataTitle = language === "ru" ? gamesData.ru_title : gamesData.en_title;
  gamesInfoTitle.textContent = dataTitle;
  const dataQuote = language === "ru" ? gamesData.ru_quote : gamesData.en_quote;
  blockquoteTitle.textContent = dataQuote;
  gamesInfoSection.appendChild(gamesInfoTitle);
  gamesInfoSection.appendChild(blockquoteTitle);

  const dataArr = language === "ru" ? gamesData.ru : gamesData.en;
  dataArr.forEach((obj) => {
    const gameSection = document.createElement("div") as HTMLDivElement;
    gameSection.classList.add(`${obj.id}_info_section`);
    gameSection.classList.add("game_section");
    gameSection.innerHTML = `
      <div class="game_section_header">
        <div class="game_sections_wrapper">
          <div class="game_section_name">
            <p class="game_name">${obj.name}</p>
          </div>
          <div class="game_section_description">
            <p class="game_description">${obj.description}</p>
          </div>
          <div class="game_section_rules">
            <p class="game_rules">${obj.rules}</p>
          </div>
          <div class="game_section_btn">
            <p class="game_btn" id="${obj.id}">${obj.button}</p>
          </div>
        </div>
        <div class="game_section_picture">
          <img class="logo_games_picture" src="${obj.pictureUrl}" alt="game picture">
        </div>
      </div>
      <div class="game_section_line">
      </div>
    `;

    gamesInfoSection.appendChild(gameSection);
  });

  return gamesInfoSection;
}

export function redrawGameInfoSectionForToggleLang(language: string) {
  const gamesInfoTitle = document.querySelector(
    ".games_info_title"
  ) as HTMLDivElement;
  const blockquoteTitle = document.querySelector(
    ".games_info_quote"
  ) as HTMLElement;
  const dataTitle = language === "ru" ? gamesData.ru_title : gamesData.en_title;
  if (gamesInfoTitle) {
    gamesInfoTitle.textContent = dataTitle;
  }
  const dataQuote = language === "ru" ? gamesData.ru_quote : gamesData.en_quote;

  if (blockquoteTitle) {
    blockquoteTitle.textContent = dataQuote;
  }

  const sections = document.querySelectorAll(".game_section");
  sections.forEach((section) => {
    const id = section.getAttribute("class")?.slice(0, 5);
    console.log(id);

    const dataArr = language === "ru" ? gamesData.ru : gamesData.en;
    if (id) {
      const obj = dataArr.find((elem) => elem.id === id);
      (section.querySelector(
        ".game_name"
      ) as HTMLElement).innerHTML = `${obj?.name}`;

      (section.querySelector(
        ".game_description"
      ) as HTMLElement).innerHTML = `${obj?.description}`;

      (section.querySelector(
        ".game_rules"
      ) as HTMLElement).innerHTML = `${obj?.rules}`;
    }
  });
}
