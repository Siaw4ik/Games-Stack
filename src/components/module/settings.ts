import light from "../../assets/sunny.svg";
import dark from "../../assets/moon.svg";
import { Settings } from "./types";

const settings: Settings = {
  lang: "en",
  style: "light",
  volume: false,
};

export function toggleVolume() {
  const volume = document.querySelector(".volumeOn") as HTMLElement;
  const volumeSlash = document.querySelector(".volume-slash") as HTMLElement;

  function changeClassVolume() {
    volume.classList.toggle("active");
    if (volume.classList.value === "volumeOn") {
      volumeSlash.classList.remove("active");
      settings.volume = false;
      localStorage.setItem("settings", JSON.stringify(settings));
    }
    if (volume.classList.value === "volumeOn active") {
      volumeSlash.classList.add("active");
      settings.volume = true;
      localStorage.setItem("settings", JSON.stringify(settings));
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
  const footer = document.querySelector(".footer") as HTMLElement;
  const wrap = document.querySelector(".wrapper") as HTMLElement;
  const menu = document.querySelector(".burger_menu") as HTMLElement;
  const menuItem = document.querySelectorAll(".burger_nav_ul");

  function changeClassDark() {
    btnLight.classList.toggle("light");
    header.classList.toggle("dark");
    footer.classList.toggle("dark");
    wrap.classList.toggle("dark");
    menu.classList.toggle("dark");
    menuItem.forEach((item) => item.classList.toggle("dark"));
    if (btnLight.classList.value === "btn-style light") {
      btnLight.setAttribute("src", light);
      settings.style = "light";
      localStorage.setItem("settings", JSON.stringify(settings));
    }
    if (btnLight.classList.value === "btn-style") {
      btnLight.setAttribute("src", dark);
      settings.style = "dark";
      localStorage.setItem("settings", JSON.stringify(settings));
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

  langRu.addEventListener("click", () => {
    langRu.classList.add("lang-active");
    langEn.classList.remove("lang-active");
    settings.lang = "ru";
    localStorage.setItem("settings", JSON.stringify(settings));

    btnAuthorin.innerHTML = "Авторизация";
    btnLogin.innerHTML = "Войти";
    btnBurgerAuthorin.innerHTML = "Авторизация";
    btnBurgerLogin.innerHTML = "Войти";
    about.innerHTML = "Главная";
    result.innerHTML = "Результаты";
    burgerAbout.innerHTML = "Главная";
    burgerResult.innerHTML = "Результаты";

    loginLogNameP.innerHTML = "Логин";
    loginPasswordP.innerHTML = "Пароль";
    loginBtn.innerHTML = "Войти";
    signupLogNameP.innerHTML = "Логин";
    signupPasswordP.innerHTML = "Пароль";
    signupBtn.innerHTML = "Зарегистрироваться";

    logoutBtn.innerHTML = "Выйти";
    scoreWindow.innerHTML = "Статистика игр";
  });

  langEn.addEventListener("click", () => {
    langEn.classList.add("lang-active");
    langRu.classList.remove("lang-active");
    settings.lang = "en";
    localStorage.setItem("settings", JSON.stringify(settings));

    btnAuthorin.innerHTML = "Sign up";
    btnLogin.innerHTML = "Login";
    btnBurgerAuthorin.innerHTML = "Sign up";
    btnBurgerLogin.innerHTML = "Login";
    about.innerHTML = "Home";
    result.innerHTML = "Results";
    burgerAbout.innerHTML = "Home";
    burgerResult.innerHTML = "Results";

    loginLogNameP.innerHTML = "Login";
    loginPasswordP.innerHTML = "Password";
    loginBtn.innerHTML = "Login";
    signupLogNameP.innerHTML = "Login";
    signupPasswordP.innerHTML = "Password";
    signupBtn.innerHTML = "Sign Up";

    logoutBtn.innerHTML = "Logout";
    scoreWindow.innerHTML = "Game statistics";
  });
}