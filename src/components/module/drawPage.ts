import logo from "../../assets/rs_school.svg";
import icon from "../../assets/github_icon.svg";
import light from "../../assets/sunny.svg";
import dark from "../../assets/moon.svg";
import iconUser from "../../assets/account.png";
import iconOk from "../../assets/input_OK.svg";
import logoHeder from "../../assets/logo.svg";
import iconNO from "../../assets/input_Unavailable.svg";
import inputOk from "../../assets/iconOKInput.svg";
import inputFail from "../../assets/cross_input.svg";
import {
  returnLocalStorage,
  returnLocalStorageIsRegistered,
} from "./localStorage";

const settings = returnLocalStorage();
const userTrue = returnLocalStorageIsRegistered();

function drawHTMLLayout() {
  const div = document.createElement("div");
  div.classList.add("wrapper");
  div.innerHTML = `
  <div class="conteiner_header-main">
    <div class="parallax_background_container">
      <div class="parallax_background">
        <div class="images-parallax_galaxy"></div>
      </div>
    </div>
    <div class="generalAudio"></div>
    <header class="header">
      <div class="up-header">
        <div class="wrap_logo">
          <a class="wrap_logo_a" href="./index.html">
            <div class="logo">
              <img class="logoHeader" src="${logoHeder}">
            </div>
          </a>
        </div>
        <div class="container_settings-authorization">
          <div class="personal-settigs">
            <div class="lang">
              <div class="lang_ru">ru</div>
              <div class="lang_en lang-active">en</div>
            </div>
            <div class="style">
              <img class="btn-style light" src="${
                settings.style === "dark" ? dark : light
              }" alt="light">
            </div>
            <div class="volume">
              <div class="volumeOn">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
                  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                  </svg>
                  <div class="volume-slash"></div>
              </div>
            </div>
          </div>
          <div class="authorization">
            <div class="btn_autorization authorin" style="${
              userTrue.isRegistred === "true"
                ? "display: none;"
                : "display: flex;"
            }">${settings.lang === "en" ? "Sign up" : "Регистрация"}</div>
            <div class="btn_autorization login" style="${
              userTrue.isRegistred === "true"
                ? "display: none;"
                : "display: flex;"
            }">${settings.lang === "en" ? "Login" : "Войти"}</div>
          </div>
          <img class="${
            userTrue.isRegistred === "true" ? "iconUser active" : "iconUser"
          }" src="${iconUser}">
          <div class="burger">
            <svg class="burger_svg" width="26" height="15" viewBox="0 0 26 15" fill="#4784ff" xmlns="http://www.w3.org/2000/svg">
              <rect width="26" height="3" rx="2" fill="#4784ff"/>
              <rect y="6" width="26" height="3" rx="2" fill="#4784ff"/>
              <rect y="12" width="26" height="3" rx="2" fill="#4784ff"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="pages">
        <p class="about">${settings.lang === "en" ? "Home" : "Главная"}</p>
        <p class="game1">Jedi's Mind</p>
        <p class="game2">Jedi's Agility</p>
        <p class="game3">Jedi's Mobility</p>
        <p class="game4">Jedi's Strategy</p>
        <p class="game5">Jedi's Memory</p>
        <p class="result">${
          settings.lang === "en" ? "Results" : "Результаты"
        }</p>
      </div>
      <div class="burger_menu">
        <div class="wrap_burger_up">
          <div class="wrap_logo">
            <a class="wrap_logo_a" href="./index.html">
              <div class="logo">
                <p><span class="one-part">GAME </span><span class="two-part"> STACK</span></p>
              </div>
            </a>
          </div>
          <div class="cross">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" style="fill: #D713C3;"/>
                <path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" style="fill: #D713C3;"/>
            </svg>
          </div>
        </div>
        <div class="burger_nav_wrap">
          <nav class="burger_nav">
            <ul class="burger_nav_ul">
              <li class="burger_nav_ul_item burger-about">
              ${settings.lang === "en" ? "Home" : "Главная"}
              </li>
              <li class="burger_nav_ul_item burger-game1">Jedi's Mind</li>
              <li class="burger_nav_ul_item burger-game2">Jedi's Agility</li>
              <li class="burger_nav_ul_item burger-game3">Jedi's Mobility</li>
              <li class="burger_nav_ul_item burger-game4">Jedi's Strategy</li>
              <li class="burger_nav_ul_item burger-game5">Jedi's Memory</li>
              <li class="burger_nav_ul_item burger-result">
              ${settings.lang === "en" ? "Results" : "Результаты"}
              </li>
            </ul>
            <div class="authorization-burger">
              <div class="btn_autorization-burger authorin-burger" style="${
                userTrue.isRegistred === "true"
                  ? "display: none;"
                  : "display: flex;"
              }">${settings.lang === "en" ? "Sign up" : "Регистрация"}</div>
              <div class="btn_autorization-burger login-burger" style="${
                userTrue.isRegistred === "true"
                  ? "display: none;"
                  : "display: flex;"
              }">${settings.lang === "en" ? "Login" : "Войти"}</div>
            </div>
          </nav>
        </div>
      </div>
      <div class="shadow"></div>
      <div class="shadow_login-window"></div>
      <div class="shadow_account-window"></div>
      <div class="login-window">
        <div class="login-window_header">
          <p>${settings.lang === "en" ? "Login" : "Логин"}</p>
          <div class="login-window_cross">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" fill="#4684ff"/>
              <path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" fill="#4684ff"/>
            </svg>
          </div>
        </div>
        <div class="login-window_main">
          <div class="login-window_logName">
            <p>${settings.lang === "en" ? "Login:" : "Логин:"}</p>
            <input type="text">
            <img src="">
          </div>
          <p class="login_check-login-down"></p>
          <div class="login-window_password">
            <p>${settings.lang === "en" ? "Password:" : "Пароль:"}</p>
            <input type="text">
          </div>
          <div class="login-window_button">
            <span>${settings.lang === "en" ? "Login" : "Войти"}</span>
          </div>
        </div>
        <div class="wrapper-login-success">
          <p></p>
          <img class="iconOk" src="${iconOk}">
        </div>
        <div class="wrapper-login-fail">
          <p></p>
          <img class="iconOk" src="${iconNO}">
        </div>
      </div>
      <div class="signup-window">
        <div class="signup-window_header">
          <p>${settings.lang === "en" ? "Sign Up" : "Регистрация"}</p>
          <div class="signup-window_cross">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" fill="#4684ff"/>
              <path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" fill="#4684ff"/>
            </svg>
          </div>
        </div>
        <div class="signup-window_main">
          <div class="signup-window_logName">
            <p>${settings.lang === "en" ? "Login:" : "Логин:"}</p>
            <input type="text">
            <img class="signup-window_logName-imgok" src="${inputOk}">
            <img class="signup-window_logName-imgfail" src="${inputFail}">
            <div class="check-login"></div>
          </div>
          <p class="signup_check-login-down"></p>
          <div class="signup-window_password">
            <p>${settings.lang === "en" ? "Password:" : "Пароль:"}</p>
            <input type="text">
          </div>
          <div class="signup-window_button">
            <span>${
              settings.lang === "en" ? "Sign Up" : "Зарегистрироваться"
            }</span>
          </div>
        </div>
        <div class="wrapper-signup-success">
          <p></p>
          <img class="iconOk" src="${iconOk}">
        </div>
      </div>
      <div class="account-window">
        <div class="header_account-window">
          <div class="header_account-window_up">
            <img src="${iconUser}">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" fill="#4684ff"/>
              <path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" fill="#4684ff"/>
            </svg>
          </div>
          <div class="account_nameUser">${
            userTrue.isRegistred === "true" ? `${userTrue.userName}` : ""
          }</div>
        </div>
        <p class="score-window">${
          settings.lang === "en" ? "Games statistics" : "Статистика игр"
        }</p>
        <p class="btn-logout">${settings.lang === "en" ? "Logout" : "Выйти"}</p>
      </div>
    </header>
    <main class="main"></main>
  </div>
  <div class="footer_wrapper">
    <footer class="footer">
      <div class="github">
        <a class="social-link" href="https://github.com/bulrock" target="_blank">
          <img class="icon github-icon1" src="" alt="github icon1"/>
        </a>
        <a class="social-link" href="https://github.com/Siaw4ik" target="_blank">
          <img class="icon github-icon2" src="" alt="github icon2"/>
        </a>
        <a class="social-link" href="https://github.com/pahomomg" target="_blank">
          <img class="icon github-icon3" src="" alt="github icon2"/>
        </a>
      </div>
      <p>Game Stack 2023</p>
      <a href="https://rs.school/js/" class="social-link">
          <img class="logoRS" src="" alt="rs school logo"/>
      </a>
    </footer>
  </div>
  `;
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("wrapper_outer");
  outerDiv.appendChild(div);
  document.body.appendChild(outerDiv);

  if (settings.lang === "ru") {
    (document.querySelector(".lang_ru") as HTMLElement).setAttribute(
      "class",
      "lang_ru lang-active"
    );
    (document.querySelector(".lang_en") as HTMLElement).setAttribute(
      "class",
      "lang_en"
    );
  } else if (settings.lang === "en") {
    (document.querySelector(".lang_en") as HTMLElement).setAttribute(
      "class",
      "lang_en lang-active"
    );
  }
}

function addLinkGithubRS() {
  const logoSchool = <HTMLImageElement>document.querySelector(".logoRS");

  if (logoSchool) {
    logoSchool.setAttribute("src", logo);
  }

  const iconGit1 = <HTMLImageElement>document.querySelector(".github-icon1");
  const iconGit2 = <HTMLImageElement>document.querySelector(".github-icon2");
  const iconGit3 = <HTMLImageElement>document.querySelector(".github-icon3");

  if (iconGit1 && iconGit2 && iconGit3) {
    iconGit1.setAttribute("src", icon);
    iconGit2.setAttribute("src", icon);
    iconGit3.setAttribute("src", icon);
  }
}

function drawStyleLightOrDark() {
  const header = document.querySelector(".header") as HTMLElement;
  const footer = document.querySelector(".footer_wrapper") as HTMLElement;
  const main = document.querySelector(".main") as HTMLElement;
  const btnLight = document.querySelector(".btn-style") as HTMLElement;
  const menu = document.querySelector(".burger_menu") as HTMLElement;
  const menuItem = document.querySelectorAll(".burger_nav_ul");
  const containerHeaderMain = document.querySelector(
    ".conteiner_header-main"
  ) as HTMLElement;
  const gamesInfoContainer = document.querySelector(
    ".games_info_container"
  ) as HTMLElement;
  if (settings.style === "dark") {
    if (gamesInfoContainer) {
      gamesInfoContainer.classList.add("dark");
    }
    header.classList.add("dark");
    footer.classList.add("dark");
    main.classList.add("dark");
    menu.classList.add("dark");
    containerHeaderMain.classList.add("dark");
    menuItem.forEach((item) => item.classList.add("dark"));
    // btnLight.setAttribute("src", dark);
    btnLight.classList.remove("light");
  } else if (settings.style === "light") {
    if (gamesInfoContainer) {
      gamesInfoContainer.classList.remove("dark");
    }
    header.classList.remove("dark");
    footer.classList.remove("dark");
    main.classList.remove("dark");
    menu.classList.remove("dark");
    containerHeaderMain.classList.remove("dark");

    menuItem.forEach((item) => item.classList.remove("dark"));
    // btnLight.setAttribute("src", light);
  }
}

function toggleBurger() {
  const menu = document.querySelector(".burger_menu") as HTMLElement;
  const burger = document.querySelector(".burger") as HTMLElement;
  const cross = document.querySelector(".cross") as HTMLElement;
  const shadow = document.querySelector(".shadow") as HTMLElement;
  const burgerNav = document.querySelectorAll(".burger_nav_ul_item");
  const { body } = document;

  burger.addEventListener("click", () => {
    const gamesInfoContainer = document.querySelector(
      ".games_info_container"
    ) as HTMLElement;
    const arrowDown = document.querySelector(".arrowDown") as HTMLElement;
    menu.classList.add("active");
    body.classList.add("lock");
    shadow.classList.add("active");
    if (arrowDown) {
      arrowDown.classList.add("active");
    }
    if (gamesInfoContainer) {
      gamesInfoContainer.classList.add("active");
    }
  });

  burgerNav.forEach((item) => {
    const gamesInfoContainer = document.querySelector(
      ".games_info_container"
    ) as HTMLElement;
    const arrowDown = document.querySelector(".arrowDown") as HTMLElement;
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      body.classList.remove("lock");
      shadow.classList.remove("active");
      if (arrowDown) {
        arrowDown.classList.remove("active");
      }
      if (gamesInfoContainer) {
        gamesInfoContainer.classList.remove("active");
      }
    });
  });

  cross.addEventListener("click", () => {
    const gamesInfoContainer = document.querySelector(
      ".games_info_container"
    ) as HTMLElement;
    const arrowDown = document.querySelector(".arrowDown") as HTMLElement;
    menu.classList.remove("active");
    body.classList.remove("lock");
    shadow.classList.remove("active");
    if (arrowDown) {
      arrowDown.classList.remove("active");
    }
    if (gamesInfoContainer) {
      gamesInfoContainer.classList.remove("active");
    }
  });

  shadow.addEventListener("click", () => {
    const gamesInfoContainer = document.querySelector(
      ".games_info_container"
    ) as HTMLElement;
    const arrowDown = document.querySelector(".arrowDown") as HTMLElement;
    menu.classList.remove("active");
    body.classList.remove("lock");
    shadow.classList.remove("active");
    if (arrowDown) {
      arrowDown.classList.remove("active");
    }
    if (gamesInfoContainer) {
      gamesInfoContainer.classList.remove("active");
    }
  });
}

function drawIconVolume() {
  const volume = document.querySelector(".volumeOn") as HTMLElement;
  const volumeSlash = document.querySelector(".volume-slash") as HTMLElement;
  if (settings.volume === true) {
    volume.classList.add("active");
    volumeSlash.classList.add("active");
  }
  if (settings.volume === false) {
    volume.classList.remove("active");
    volumeSlash.classList.remove("active");
  }
}

export function drawPage() {
  drawHTMLLayout();
  drawIconVolume();
  addLinkGithubRS();
  drawStyleLightOrDark();
  toggleBurger();
}

if (
  localStorage.getItem("userTrue") === null ||
  userTrue.isRegistred === "false"
) {
  localStorage.setItem("unknownStrategy", JSON.stringify(0));
  const object = {
    userName: "",
    isRegistred: "false",
  };
  localStorage.setItem("userTrue", JSON.stringify(object));
}
