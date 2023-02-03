import "./style.css";
import {
  toggleVolume,
  toggleLight,
  toggleLang,
} from "./components/modul/settings";
import { drawPage } from "./components/modul/drawPage";
import { drawHomePage, changePage } from "./components/modul/changePage";
import {
  loginSystem,
  signupSystem,
  authorizateUser,
} from "./components/modul/register";
import Router from "./components/router/router";
import routes from "./components/router/routes";

drawPage();
drawHomePage();
changePage();

toggleVolume();
toggleLight();
toggleLang();

loginSystem();
signupSystem();
authorizateUser();

console.log("start page");

const router = new Router(routes);
const test1 = <HTMLElement>document.querySelector(".about");
if (test1) {
  test1.addEventListener("click", () => {
    router.loadRoute("");
  });
}
const test2 = <HTMLElement>document.querySelector(".game1");
if (test2) {
  test2.addEventListener("click", () => {
    router.loadRoute("game1");
  });
}
const test3 = <HTMLElement>document.querySelector(".game2");
if (test3) {
  test3.addEventListener("click", () => {
    router.loadRoute("game2");
  });
}
const test4 = <HTMLElement>document.querySelector(".game3");
if (test4) {
  test4.addEventListener("click", () => {
    router.loadRoute("game3");
  });
}
const test5 = <HTMLElement>document.querySelector(".game4");
if (test5) {
  test5.addEventListener("click", () => {
    router.loadRoute("game4");
  });
}
const test6 = <HTMLElement>document.querySelector(".result");
if (test6) {
  test6.addEventListener("click", () => {
    router.loadRoute("results");
  });
}
