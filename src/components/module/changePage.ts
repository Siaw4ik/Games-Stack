import { game1, startGame, clickAnswer, clickNext, startAgain } from "../game1";
import { game2 } from "../game2";
import { game3 } from "../game3";
import { game4 } from "../game4";
import { result } from "../results";
import { parallax } from "../parallax";

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
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("parallax_container");
  div.innerHTML = `
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
      startGame();
      clickAnswer();
      clickNext();
      startAgain();
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
  const hashPage = window.location.hash.slice(1);
  renderNewPage(hashPage);
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
      console.log("main");
    }
    if (target.closest(".game1")) {
      renderNewPage("game1");
      console.log("game1");
    }
    if (target.closest(".game2")) {
      renderNewPage("game2");
      console.log("game2");
    }
    if (target.closest(".game3")) {
      renderNewPage("game3");
      console.log("game3");
    }
    if (target.closest(".game4")) {
      renderNewPage("game4");
      console.log("game4");
    }
    if (target.closest(".result")) {
      renderNewPage("result");
      console.log("result");
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
      renderNewPage("about");
      console.log("burger-HOME");
    }
    if (target.closest(".burger-game1")) {
      renderNewPage("game1");
      console.log("burger-game1");
    }
    if (target.closest(".burger-game2")) {
      renderNewPage("game2");
      console.log("burger-game2");
    }
    if (target.closest(".burger-game3")) {
      renderNewPage("game3");
      console.log("burger-game3");
    }
    if (target.closest(".burger-game4")) {
      renderNewPage("game4");
      console.log("burger-game4");
    }
    if (target.closest(".burger-result")) {
      renderNewPage("result");
      console.log("burger-result");
    }
  });
}

export function changePage() {
  changePageMain();
  changePageBurger();
}
