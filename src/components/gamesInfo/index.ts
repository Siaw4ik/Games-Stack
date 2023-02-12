import { gamesData } from "./gamesData";
import { returnLocalStorage } from "../module/localStorage";
/* import arrowUP from "../../assets/arrow-svg.svg"; */
import "./index.css";

function drawArrow(name: string) {
  const settings = returnLocalStorage();
  const main = document.querySelector(".main") as HTMLElement;
  const arrow = document.createElement("div");
  arrow.classList.add(name);
  arrow.hidden = true;
  if (name === "arrowUp") {
    if (settings.style === "dark") {
      arrow.classList.add("dark");
    } else {
      arrow.classList.remove("dark");
    }
    arrow.innerHTML = `<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 512 512" xml:space="preserve">
<g>
 <g>
   <g>
     <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333
       c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333
       z"/>
     <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17
       l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17
       C369.42,189.917,355.913,189.917,347.582,198.248z"/>
   </g>
 </g>
</g>
</svg>`;
  } else if (name === "arrowDown") {
    arrow.innerHTML = `<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 512 512" xml:space="preserve">
<g>
 <g>
   <g>
     <path fill="white" d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17
       l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17
       C369.42,189.917,355.913,189.917,347.582,198.248z"/>
   </g>
 </g>
</g>
</svg>`;
  }
  main.appendChild(arrow);
}

function drawArrowUP() {
  drawArrow("arrowUp");
  const arrow = document.querySelector(".arrowUp") as HTMLElement;

  arrow.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  window.addEventListener("scroll", () => {
    arrow.hidden =
      window.pageYOffset < document.documentElement.clientHeight - 300;
  });
}

function drawArrowDown() {
  drawArrow("arrowDown");
  const arrow = document.querySelector(".arrowDown") as HTMLElement;
  arrow.hidden = false;

  window.addEventListener("scroll", () => {
    arrow.hidden = window.pageYOffset > 50;
  });
}

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
  drawArrowUP();
  drawArrowDown();

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
