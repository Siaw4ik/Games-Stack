import { renderNewPage } from "../module/changePage";
import { drawtbody } from "../results";
import { StatisticGames } from "../module/Games";
import { returnLocalStorage } from "../module/localStorage";

export function clickingIconUserandLogout() {
  const iconUser = document.querySelector(".iconUser") as HTMLElement;
  const accountWindow = document.querySelector(
    ".account-window"
  ) as HTMLElement;
  const shadowAccount = document.querySelector(
    ".shadow_account-window"
  ) as HTMLElement;
  const crossAccWindow = document.querySelector(
    ".account-window svg"
  ) as HTMLElement;
  const btnLogout = document.querySelector(".btn-logout") as HTMLElement;
  const mainSuccessSignup = document.querySelector(
    ".wrapper-signup-success"
  ) as HTMLElement;
  const mainSignUp = document.querySelector(
    ".signup-window_main"
  ) as HTMLElement;
  const mainSuccessLogIn = document.querySelector(
    ".wrapper-login-success"
  ) as HTMLElement;
  const mainLogIn = document.querySelector(".login-window_main") as HTMLElement;
  const btnSignup = document.querySelector(".authorin") as HTMLElement;
  const btnSignupBurger = document.querySelector(
    ".authorin-burger"
  ) as HTMLElement;
  const btnLogin = document.querySelector(".login") as HTMLElement;
  const btnLoginBurger = document.querySelector(".login-burger") as HTMLElement;
  const accountStatistic = document.querySelector(
    ".score-window"
  ) as HTMLElement;

  iconUser.addEventListener("click", () => {
    accountWindow.classList.add("active");
    shadowAccount.classList.add("active");
  });

  shadowAccount.addEventListener("click", () => {
    accountWindow.classList.remove("active");
    shadowAccount.classList.remove("active");
  });

  crossAccWindow.addEventListener("click", () => {
    accountWindow.classList.remove("active");
    shadowAccount.classList.remove("active");
  });

  accountStatistic.addEventListener("click", () => {
    accountWindow.classList.remove("active");
    shadowAccount.classList.remove("active");
  });

  btnLogout.addEventListener("click", () => {
    accountWindow.classList.remove("active");
    shadowAccount.classList.remove("active");

    btnSignup.style.display = "flex";
    btnSignupBurger.style.display = "flex";
    btnLogin.style.display = "flex";
    btnLoginBurger.style.display = "flex";
    iconUser.classList.remove("active");
    const object = {
      userName: "",
      isRegistred: "false",
    };
    localStorage.setItem("userTrue", JSON.stringify(object));

    mainSuccessSignup.classList.remove("active");
    mainSignUp.classList.remove("no-active");
    mainSuccessLogIn.classList.remove("active");
    mainLogIn.classList.remove("no-active");

    if (window.location.hash.slice(1) === "result") {
      const statistic = new StatisticGames();
      const settings = returnLocalStorage();
      const table = document.querySelector(
        ".wrapper_table-result table"
      ) as HTMLElement;
      const userRadio = document.querySelector(
        ".table-flip .user-radio"
      ) as HTMLElement;
      if (userRadio) {
        userRadio.style.display = "none";
      }
      if (table.getAttribute("class") === "user-table") {
        const objgame1 = {
          gamename: "Jedi's Mind",
          option: "ascName",
        };
        statistic.getScoreTop10(objgame1).then((data) => {
          (document.querySelector(".table-name") as HTMLElement).innerHTML = `${
            settings.lang === "en" ? "Players" : "Игроки"
          }`;
          drawtbody(data);
        });
        const buttonGAme1 = document.querySelector(
          ".table-result_game1"
        ) as HTMLInputElement;
        buttonGAme1.checked = true;
      }
    }
    const scoreHTML = document.querySelector(
      ".game4-main-score-number"
    ) as HTMLElement;
    localStorage.setItem("unknownStrategy", JSON.stringify(0));
    if (window.location.hash === "#game4" && scoreHTML) {
      scoreHTML.innerHTML = "0";
    }
  });

  accountStatistic.addEventListener("click", () => {
    renderNewPage("result");
  });
}
