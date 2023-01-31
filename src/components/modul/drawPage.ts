import logo from "../../assets/rs_school.svg";
import icon from "../../assets/github_icon.svg";
import light from "../../assets/sunny.svg";
import dark from "../../assets/moon.svg";
import { returnLocalStorage } from "./localStorage";

const settings = returnLocalStorage();

function drawHTMLLayout() {
  const div = document.createElement("div");
  div.setAttribute("class", "wrapper");
  div.innerHTML = `
  <div class="conteiner_header-main">
    <header class="header">
      <div class="up-header">
        <div class="logo">
          <p><span class="one-part">GAME </span><span class="two-part"> STACK</span></p>
        </div>
        <div class="container_settings-authorization">
          <div class="personal-settigs">
            <div class="lang">
              <div class="lang_ru">ru</div>
              <div class="lang_en lang-active">en</div>
            </div>
            <div class="style">
              <img class="btn-style light" src="" alt="light">
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
            <div class="btn_autorization authorin">${
              settings?.lang === "en" ? "Sign up" : "Авторизация"
            }</div>
            <div class="btn_autorization login">${
              settings?.lang === "en" ? "Login" : "Войти"
            }</div>
          </div>
        </div>
      </div>
      <div class="pages">
        <p class="about">${settings?.lang === "en" ? "Home" : "Главная"}</p>
        <p>Game 1</p>
        <p>Game 2</p>
        <p>Game 3</p>
        <p>Game 4</p>
        <p class="result">${
          settings?.lang === "en" ? "Results" : "Результаты"
        }</p>
      </div>
    </header>
    <main class="main"></main>
  </div>
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
  `;
  document.body.appendChild(div);

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

function addLinkCithubRS() {
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
  const footer = document.querySelector(".footer") as HTMLElement;
  const wrap = document.querySelector(".wrapper") as HTMLElement;
  const btnLight = document.querySelector(".btn-style") as HTMLElement;
  if (settings.style === "dark") {
    header.classList.add("dark");
    footer.classList.add("dark");
    wrap.classList.add("dark");
    btnLight.setAttribute("src", dark);
    btnLight.classList.remove("light");
  } else if (settings.style === "light") {
    header.classList.remove("dark");
    footer.classList.remove("dark");
    wrap.classList.remove("dark");
    btnLight.setAttribute("src", light);
  }
}

export function drawPage() {
  drawHTMLLayout();
  addLinkCithubRS();
  drawStyleLightOrDark();
}
