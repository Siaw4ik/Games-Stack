import { game1 } from "../game1";
import { game2 } from "../game2";
import { game3 } from "../game3";
import { game4 } from "../game4";
import { game5 } from "../game5";
import { result } from "../results";
import { parallax } from "../parallax";
import { createGamesInfoSection } from "../gamesInfo";
import { returnLocalStorage } from "./localStorage";

function setButtonChooseAtr(hash: string) {
  const pages = document.querySelectorAll(".pages p");
  pages.forEach((elem) => elem.removeAttribute("id"));
  const page = document.querySelector(`.${hash}`) as HTMLElement;
  const burgerPage = document.querySelector(`.burger-${hash}`) as HTMLElement;
  page.setAttribute("id", "choose");
  burgerPage.setAttribute("id", "choose-burger");
}

function changeLocationHash(hash: string) {
  window.location.hash = `#${hash}`;
}

export function getCurrentPageId(): string {
  return window.location.hash.slice(1);
}

export function drawHomePage() {
  const { style } = returnLocalStorage();
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("parallax_container");
  div.innerHTML = `
    <div class="image_dark_hole"></div>
    <div class="parallax_images images-parallax">
      <div class="images-parallax_item">
        <div class="images-parallax_death-star"></div>
      </div>
      <div class="images-parallax_item">
        <div class="images-parallax_ship"></div>
      </div>
    </div>
 `;

  main.appendChild(div);
  main.appendChild(createGamesInfoSection());

  const gamesInfoContainer = document.querySelector(
    ".games_info_container"
  ) as HTMLElement;

  if (style === "dark") {
    gamesInfoContainer.classList.add("dark");
  } else if (style === "light") {
    gamesInfoContainer.classList.remove("dark");
  }

  setButtonChooseAtr("about");
  parallax();
}

function updateBackgroundStyle(shouldStretch: boolean) {
  const containerHeaderMain = document.querySelector(".wrapper") as HTMLElement;

  if (containerHeaderMain) {
    if (shouldStretch) {
      containerHeaderMain.classList.add("stretch");
    } else {
      containerHeaderMain.classList.remove("stretch");
    }
  }
}

function updateMainStyle(
  prevGameId: string,
  newGameId: string,
  shouldSetHeight: boolean
) {
  const main = document.querySelector(".main") as HTMLElement;
  if (prevGameId) {
    main.classList.remove(prevGameId);
  }
  main.classList.add(newGameId);

  if (main) {
    if (shouldSetHeight) {
      main.classList.add("static-height");
    } else {
      main.classList.remove("static-height");
    }
  }
}

export function renderNewPage(pageId: string) {
  const previousPageId = getCurrentPageId();
  changeLocationHash(pageId);
  setButtonChooseAtr(pageId);
  switch (pageId) {
    case "about":
      updateBackgroundStyle(false);
      updateMainStyle(previousPageId, pageId, false);
      drawHomePage();
      break;
    case "result":
      result();
      updateBackgroundStyle(true);
      updateMainStyle(previousPageId, pageId, true);
      break;
    case "game1":
      game1();
      updateBackgroundStyle(true);
      updateMainStyle(previousPageId, pageId, true);
      break;
    case "game2":
      game2();
      updateBackgroundStyle(true);
      updateMainStyle(previousPageId, pageId, true);
      break;
    case "game3":
      game3();
      updateBackgroundStyle(true);
      updateMainStyle(previousPageId, pageId, true);
      break;
    case "game4":
      game4();
      updateBackgroundStyle(true);
      updateMainStyle(previousPageId, pageId, true);
      break;
    case "game5":
      game5();
      updateBackgroundStyle(true);
      updateMainStyle(previousPageId, pageId, true);
      break;
    default:
      drawHomePage();
      updateBackgroundStyle(false);
      updateMainStyle(previousPageId, pageId, false);
  }
}

export function enableRoutChange() {
  window.addEventListener("hashchange", () => {
    const hashPage = window.location.hash.slice(1);
    renderNewPage(hashPage);
  });
}

function changePageMain() {
  const pages = document.querySelector(".pages") as HTMLElement;
  pages.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    document.querySelectorAll(".pages p").forEach((page) => {
      page.removeAttribute("id");
    });
    target.setAttribute("id", "choose");
    const classTarget = target.getAttribute("class");
    const burgerLi = document.querySelector(`.burger-${classTarget}`);
    document.querySelectorAll(".burger_nav_ul li").forEach((page) => {
      page.removeAttribute("id");
    });
    burgerLi?.setAttribute("id", "choose-burger");
    if (target.closest(".about")) {
      renderNewPage("about");
    }
    if (target.closest(".game1")) {
      renderNewPage("game1");
    }
    if (target.closest(".game2")) {
      renderNewPage("game2");
    }
    if (target.closest(".game3")) {
      renderNewPage("game3");
    }
    if (target.closest(".game4")) {
      renderNewPage("game4");
    }
    if (target.closest(".game5")) {
      renderNewPage("game5");
    }
    if (target.closest(".result")) {
      renderNewPage("result");
    }
  });
}

function changePageBurger() {
  const pages = document.querySelector(".burger_nav_ul") as HTMLElement;
  pages.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    document.querySelectorAll(".burger_nav_ul li").forEach((page) => {
      page.removeAttribute("id");
    });
    target.setAttribute("id", "choose-burger");
    const classTarget = target.getAttribute("class")?.slice(26);
    const pageP = document.querySelector(`.${classTarget}`);
    document.querySelectorAll(".pages p").forEach((page) => {
      page.removeAttribute("id");
    });
    pageP?.setAttribute("id", "choose");
    if (target.closest(".burger-about")) {
      window.location.hash = "#about";
    }
    if (target.closest(".burger-game1")) {
      window.location.hash = "#game1";
    }
    if (target.closest(".burger-game2")) {
      window.location.hash = "#game2";
    }
    if (target.closest(".burger-game3")) {
      window.location.hash = "#game3";
    }
    if (target.closest(".burger-game4")) {
      window.location.hash = "#game4";
    }
    if (target.closest(".burger-game5")) {
      window.location.hash = "#game5";
    }
    if (target.closest(".burger-result")) {
      window.location.hash = "#result";
    }
  });
}

export function changePage() {
  changePageMain();
  changePageBurger();
}
