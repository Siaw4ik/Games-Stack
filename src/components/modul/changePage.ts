import { game1 } from "../game1";
import { game2 } from "../game2";
import { game3 } from "../game3";
import { game4 } from "../game4";
import { result } from "../results";

export function drawHomePage() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `<p> home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home  home </p>`;

  main.appendChild(div);

  const about = document.querySelector(".about") as HTMLElement;
  const burgerAbout = document.querySelector(".burger-about") as HTMLElement;
  about.setAttribute("id", "choose");
  burgerAbout.setAttribute("id", "choose-burger");
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
      drawHomePage();
      console.log("HOME");
    }
    if (target.closest(".game1")) {
      game1();
      console.log("game1");
    }
    if (target.closest(".game2")) {
      game2();
      console.log("game2");
    }
    if (target.closest(".game3")) {
      game3();
      console.log("game3");
    }
    if (target.closest(".game4")) {
      game4();
      console.log("game4");
    }
    if (target.closest(".result")) {
      result();
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
      drawHomePage();
      console.log("burger-HOME");
    }
    if (target.closest(".burger-game1")) {
      game1();
      console.log("burger-game1");
    }
    if (target.closest(".burger-game2")) {
      game2();
      console.log("burger-game2");
    }
    if (target.closest(".burger-game3")) {
      game3();
      console.log("burger-game3");
    }
    if (target.closest(".burger-game4")) {
      game4();
      console.log("burger-game4");
    }
    if (target.closest(".burger-result")) {
      result();
      console.log("burger-result");
    }
  });
}

export function changePage() {
  changePageMain();
  changePageBurger();
}
