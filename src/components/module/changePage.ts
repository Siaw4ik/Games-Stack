import {
  game1 /* , startGame, clickAnswer, clickNext, startAgain */,
} from "../game1";
import { game2 } from "../game2";
import { game3 } from "../game3";
import { game4 } from "../game4";
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

export function getLocationHash(): string {
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

export function renderNewPage(idPage: string) {
  changeLocationHash(idPage);
  setButtonChooseAtr(idPage);
  switch (idPage) {
    case "about":
      drawHomePage();
      break;
    case "result":
      result();
      break;
    case "game1":
      game1();
      break;
    case "game2":
      game2();
      break;
    case "game3":
      game3();
      break;
    case "game4":
      game4();
      break;
    default:
      drawHomePage();
  }
}

export function enableRoutChange() {
  window.addEventListener("hashchange", () => {
    const hashPage = window.location.hash.slice(1);
    renderNewPage(hashPage);
  });
}

function changePageMain() {
  /* const hashPage = window.location.hash.slice(1); */
  /* renderNewPage(hashPage); */
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
      window.location.hash = "#about";
    }
    if (target.closest(".game1")) {
      window.location.hash = "#game1";
    }
    if (target.closest(".game2")) {
      window.location.hash = "game2";
    }
    if (target.closest(".game3")) {
      window.location.hash = "#game3";
    }
    if (target.closest(".game4")) {
      window.location.hash = "#game4";
    }
    if (target.closest(".result")) {
      window.location.hash = "#result";
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
    if (target.closest(".burger-result")) {
      window.location.hash = "#result";
    }
  });
}

export function changePage() {
  changePageMain();
  changePageBurger();
}
