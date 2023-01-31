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
  (volume as HTMLElement).addEventListener("click", () => {
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
  });
}

export function toggleLight() {
  const btnLight = document.querySelector(".btn-style") as HTMLElement;
  const header = document.querySelector(".header") as HTMLElement;
  const footer = document.querySelector(".footer") as HTMLElement;
  const wrap = document.querySelector(".wrapper") as HTMLElement;
  const menu = document.querySelector(".burger_menu") as HTMLElement;
  const menuItem = document.querySelectorAll(".burger_nav_ul");
  btnLight.addEventListener("click", () => {
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
  const burgerAbout = document.querySelector(".burger-about a") as HTMLElement;
  const burgerResult = document.querySelector(
    ".burger-result a"
  ) as HTMLElement;
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
  });
}
