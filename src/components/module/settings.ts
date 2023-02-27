import light from "../../assets/sunny.svg";
import dark from "../../assets/moon.svg";
// import { Settings } from "./types";
import { redrawGameInfoSectionForToggleLang } from "../gamesInfo";
import { translateHeaderTable } from "../results";
import { changeGame5AudioVolume, translateGame5 } from "../game5";
import { changeGame4AudioVolume, translateGame4 } from "../game4";
import { changeGame3AudioVolume, translateGame3 } from "../game3/module/start";
import { changeGame2AudioVolume, translateGame2 } from "../game2";
import { changeGame1AudioVolume, translateGame1 } from "../game1";
import backAudio from "../../assets/sounds/MercuryAudio.mp3";
import { returnLocalStorage } from "./localStorage";

const backHomeAudio = new Audio(backAudio);
backHomeAudio.loop = true;

window.addEventListener("hashchange", () => {
  const settingsChange = returnLocalStorage();
  if (window.location.hash !== "#about") {
    backHomeAudio.pause();
  } else if (
    window.location.hash === "#about" &&
    settingsChange.volume === true
  ) {
    backHomeAudio.play();
  }
});

export function toggleVolume() {
  const volume = document.querySelector(".volumeOn") as HTMLElement;
  const volumeSlash = document.querySelector(".volume-slash") as HTMLElement;

  function changeClassVolume() {
    const settingsChange = returnLocalStorage();
    volume.classList.toggle("active");
    if (volume.classList.value === "volumeOn") {
      volumeSlash.classList.remove("active");
      settingsChange.volume = false;
      localStorage.setItem("settings", JSON.stringify(settingsChange));
      changeGame5AudioVolume(false);
      changeGame4AudioVolume(false);
      changeGame1AudioVolume(false);
      changeGame2AudioVolume(false);
      changeGame3AudioVolume(false);
      if (window.location.hash === "#about") {
        backHomeAudio.pause();
      }
    }
    if (volume.classList.value === "volumeOn active") {
      volumeSlash.classList.add("active");
      settingsChange.volume = true;
      localStorage.setItem("settings", JSON.stringify(settingsChange));
      changeGame5AudioVolume(true);
      changeGame4AudioVolume(true);
      changeGame1AudioVolume(true);
      changeGame2AudioVolume(true);
      changeGame3AudioVolume(true);
      if (window.location.hash === "#about") {
        backHomeAudio.play();
      }
    }
  }

  (volume as HTMLElement).addEventListener("click", () => {
    changeClassVolume();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyV" && (event.ctrlKey || event.metaKey)) {
      changeClassVolume();
    }
  });
}

export function toggleLight() {
  const btnLight = document.querySelector(".btn-style") as HTMLElement;
  const header = document.querySelector(".header") as HTMLElement;
  const footer = document.querySelector(".footer_wrapper") as HTMLElement;
  const menu = document.querySelector(".burger_menu") as HTMLElement;
  const menuItem = document.querySelectorAll(".burger_nav_ul");
  const main = document.querySelector(".main") as HTMLElement;
  const containerHeaderMain = document.querySelector(
    ".conteiner_header-main"
  ) as HTMLElement;

  function changeClassDark() {
    const settingsChange = returnLocalStorage();
    const arrowUP = document.querySelector(".arrowUp") as HTMLElement;
    const gamesInfoContainer = document.querySelector(
      ".games_info_container"
    ) as HTMLElement;
    btnLight.classList.toggle("light");
    header.classList.toggle("dark");
    footer.classList.toggle("dark");
    main.classList.toggle("dark");
    menu.classList.toggle("dark");
    containerHeaderMain.classList.toggle("dark");
    if (arrowUP) arrowUP.classList.toggle("dark");
    if (gamesInfoContainer) {
      gamesInfoContainer.classList.toggle("dark");
    }

    menuItem.forEach((item) => item.classList.toggle("dark"));
    if (btnLight.classList.value === "btn-style light") {
      btnLight.setAttribute("src", light);
      settingsChange.style = "light";
      localStorage.setItem("settings", JSON.stringify(settingsChange));
    }
    if (btnLight.classList.value === "btn-style") {
      btnLight.setAttribute("src", dark);
      settingsChange.style = "dark";
      localStorage.setItem("settings", JSON.stringify(settingsChange));
    }
  }
  btnLight.addEventListener("click", () => {
    changeClassDark();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyZ" && (event.ctrlKey || event.metaKey)) {
      changeClassDark();
    }
  });
}

export function toggleLang() {
  const langRu = document.querySelector(".lang_ru") as HTMLElement;
  const langEn = document.querySelector(".lang_en") as HTMLElement;
  const btnAuthorin = document.querySelector(
    ".btn_autorization.authorin"
  ) as HTMLElement;
  const btnLogin = document.querySelector(
    ".btn_autorization.login"
  ) as HTMLElement;
  const btnBurgerAuthorin = document.querySelector(
    ".authorin-burger"
  ) as HTMLElement;
  const btnBurgerLogin = document.querySelector(".login-burger") as HTMLElement;
  const about = document.querySelector(".about") as HTMLElement;
  const result = document.querySelector(".result") as HTMLElement;
  const burgerAbout = document.querySelector(".burger-about") as HTMLElement;
  const burgerResult = document.querySelector(".burger-result") as HTMLElement;

  const loginLogNameP = document.querySelector(
    ".login-window_logName p"
  ) as HTMLElement;
  const loginPasswordP = document.querySelector(
    ".login-window_password p"
  ) as HTMLElement;
  const loginBtn = document.querySelector(
    ".login-window_button span"
  ) as HTMLElement;
  const signupLogNameP = document.querySelector(
    ".signup-window_logName p"
  ) as HTMLElement;
  const signupPasswordP = document.querySelector(
    ".signup-window_password p"
  ) as HTMLElement;
  const signupBtn = document.querySelector(
    ".signup-window_button"
  ) as HTMLElement;
  const logoutBtn = document.querySelector(".btn-logout") as HTMLElement;
  const scoreWindow = document.querySelector(".score-window") as HTMLElement;
  const signUpTitle = document.querySelector(
    ".signup-window_header p"
  ) as HTMLElement;
  const logInTitle = document.querySelector(
    ".login-window_header p"
  ) as HTMLElement;

  function toggleRu() {
    const settingsChange = returnLocalStorage();
    langRu.classList.add("lang-active");
    langEn.classList.remove("lang-active");
    settingsChange.lang = "ru";
    localStorage.setItem("settings", JSON.stringify(settingsChange));

    btnAuthorin.innerHTML = "Регистрация";
    btnLogin.innerHTML = "Войти";
    btnBurgerAuthorin.innerHTML = "Регистрация";
    btnBurgerLogin.innerHTML = "Войти";
    about.innerHTML = "Главная";
    result.innerHTML = "Результаты";
    burgerAbout.innerHTML = "Главная";
    burgerResult.innerHTML = "Результаты";

    signUpTitle.innerHTML = "Регистрация";
    logInTitle.innerHTML = "Логин";
    loginLogNameP.innerHTML = "Логин";
    loginPasswordP.innerHTML = "Пароль";
    loginBtn.innerHTML = "Войти";
    signupLogNameP.innerHTML = "Логин";
    signupPasswordP.innerHTML = "Пароль";
    signupBtn.innerHTML = "Зарегистрироваться";

    logoutBtn.innerHTML = "Выйти";
    scoreWindow.innerHTML = "Статистика игр";
    translateHeaderTable(settingsChange.lang);
    translateGame5(settingsChange.lang);
    translateGame4(settingsChange.lang);
    translateGame1(settingsChange.lang);
    translateGame2(settingsChange.lang);
    translateGame3(settingsChange.lang);
    redrawGameInfoSectionForToggleLang(settingsChange.lang);
  }

  langRu.addEventListener("click", toggleRu);

  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyB" && (event.ctrlKey || event.metaKey)) {
      toggleRu();
    }
  });

  function toggleEn() {
    const settingsChange = returnLocalStorage();
    langEn.classList.add("lang-active");
    langRu.classList.remove("lang-active");
    settingsChange.lang = "en";
    localStorage.setItem("settings", JSON.stringify(settingsChange));

    btnAuthorin.innerHTML = "Sign up";
    btnLogin.innerHTML = "Login";
    btnBurgerAuthorin.innerHTML = "Sign up";
    btnBurgerLogin.innerHTML = "Login";
    about.innerHTML = "Home";
    result.innerHTML = "Results";
    burgerAbout.innerHTML = "Home";
    burgerResult.innerHTML = "Results";

    signUpTitle.innerHTML = "Sign Up";
    logInTitle.innerHTML = "Login";
    loginLogNameP.innerHTML = "Login";
    loginPasswordP.innerHTML = "Password";
    loginBtn.innerHTML = "Login";
    signupLogNameP.innerHTML = "Login";
    signupPasswordP.innerHTML = "Password";
    signupBtn.innerHTML = "Sign Up";

    logoutBtn.innerHTML = "Logout";
    scoreWindow.innerHTML = "Game statistics";
    translateHeaderTable(settingsChange.lang);
    translateGame5(settingsChange.lang);
    translateGame4(settingsChange.lang);
    translateGame1(settingsChange.lang);
    translateGame2(settingsChange.lang);
    translateGame3(settingsChange.lang);
    redrawGameInfoSectionForToggleLang(settingsChange.lang);
  }

  langEn.addEventListener("click", toggleEn);

  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyM" && (event.ctrlKey || event.metaKey)) {
      toggleEn();
    }
  });
}
