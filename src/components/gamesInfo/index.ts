import { gamesData } from "./gamesData";
import { returnLocalStorage } from "../module/localStorage";
import "./index.css";

export function createGamesInfoSection(): HTMLDivElement {
  const language = returnLocalStorage().lang;
  const gamesInfoSection = document.createElement("div") as HTMLDivElement;
  gamesInfoSection.classList.add("games_info_container");
  const line = document.createElement("div");
  line.classList.add("game_section_line");
  gamesInfoSection.appendChild(line);

  const dataArr = language === "ru" ? gamesData.ru : gamesData.en;
  dataArr.forEach((obj) => {
    const gameSection = document.createElement("div") as HTMLDivElement;
    gameSection.classList.add(`${obj.id}_info_section`);
    gameSection.classList.add("game_section");
    gameSection.innerHTML = `
        <div class="game_section_heder">
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
          </div>
          <div class="game_section_picture">
            <img class="logo_games_picture" src="${obj.pictureUrl}" alt="game picture">
          </div>
        </div>
        <div class="game_section_btn">
          <p class="game_btn" id="${obj.id}">${obj.button}</p>
        </div>
        <div class="game_section_line">
        </div>
      `;

    gamesInfoSection.appendChild(gameSection);
  });

  return gamesInfoSection;
}
