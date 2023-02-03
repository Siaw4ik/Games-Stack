import { User } from "./User";
import { TypeUser } from "./types";
/* import iconOk from "../../assets/icons8-ок-128.svg"; */
import VImg from "../../assets/icons8-галочка.svg";
import XImg from "../../assets/1675432350.svg";

import { returnLocalStorage } from "./localStorage";

export function loginSystem() {
  const btnLogin = document.querySelector(".login") as HTMLElement;
  const btnLoginBurger = document.querySelector(".login-burger") as HTMLElement;
  const crossLogin = document.querySelector(
    ".login-window_cross"
  ) as HTMLElement;
  const loginWindow = document.querySelector(".login-window") as HTMLElement;
  const shadow = document.querySelector(".shadow_login-window") as HTMLElement;

  function drawWindowLogin() {
    loginWindow.classList.add("active");
    shadow.classList.add("active");
  }

  btnLogin.addEventListener("click", () => {
    drawWindowLogin();
  });

  btnLoginBurger.addEventListener("click", () => {
    drawWindowLogin();
  });

  crossLogin.addEventListener("click", () => {
    loginWindow.classList.remove("active");
    shadow.classList.remove("active");
  });

  shadow.addEventListener("click", () => {
    shadow.classList.remove("active");
    loginWindow.classList.remove("active");
  });
}

function clearInputFalse() {
  const loginUserInput = document.querySelector(
    ".signup-window_logName input"
  ) as HTMLInputElement;
  const checkLoginImg = document.querySelector(
    ".signup-window_logName img"
  ) as HTMLElement;
  const checkLoginDown = document.querySelector(
    ".check-login-down"
  ) as HTMLElement;

  loginUserInput.style.color = "black";
  checkLoginDown.innerHTML = "";
  checkLoginDown.innerHTML = "";
  checkLoginImg.setAttribute("src", "");
}

export function signupSystem() {
  const btnSignup = document.querySelector(".authorin") as HTMLElement;
  const btnSignupBurger = document.querySelector(
    ".authorin-burger"
  ) as HTMLElement;
  const crossLogin = document.querySelector(
    ".signup-window_cross"
  ) as HTMLElement;
  const signupWindow = document.querySelector(".signup-window") as HTMLElement;
  const shadow = document.querySelector(".shadow_login-window") as HTMLElement;
  const loginUserInput = document.querySelector(
    ".signup-window_logName input"
  ) as HTMLInputElement;
  const passwordUserInput = document.querySelector(
    ".signup-window_password input"
  ) as HTMLInputElement;

  btnSignup.addEventListener("click", () => {
    signupWindow.classList.add("active");
    shadow.classList.add("active");
  });

  btnSignupBurger.addEventListener("click", () => {
    signupWindow.classList.add("active");
    shadow.classList.add("active");
  });

  crossLogin.addEventListener("click", () => {
    loginUserInput.value = "";
    passwordUserInput.value = "";
    clearInputFalse();
    signupWindow.classList.remove("active");
    shadow.classList.remove("active");
  });

  shadow.addEventListener("click", () => {
    loginUserInput.value = "";
    passwordUserInput.value = "";
    clearInputFalse();
    shadow.classList.remove("active");
    signupWindow.classList.remove("active");
  });
}

function drawSuccessBlock() {
  const settings = returnLocalStorage();
  const mainSuccess = document.querySelector(
    ".wrapper-signup-success"
  ) as HTMLElement;
  const mainSuccessP = document.querySelector(
    ".wrapper-signup-success p"
  ) as HTMLElement;
  const mainSignUp = document.querySelector(
    ".signup-window_main"
  ) as HTMLElement;

  mainSuccess.classList.add("active");
  mainSignUp.classList.add("no-active");

  mainSuccessP.innerHTML = `
    ${
      settings.lang === "en"
        ? "Authorization completed successfully!!!"
        : "Авторизация выполнена успешно!!!"
    }</p>`;
}

function checkInputLogNameTrue() {
  const checkLogin = document.querySelector(".check-login") as HTMLElement;
  const checkLoginDown = document.querySelector(
    ".check-login-down"
  ) as HTMLElement;
  const checkLoginImg = document.querySelector(
    ".signup-window_logName img"
  ) as HTMLElement;
  const loginUserInput = document.querySelector(
    ".signup-window_logName input"
  ) as HTMLInputElement;
  const btnSendSignup = document.querySelector(
    ".signup-window_button"
  ) as HTMLElement;

  console.log("такое имя есть");
  const settings = returnLocalStorage();
  checkLogin.classList.add("active");
  checkLogin.innerHTML = `${
    settings.lang === "en"
      ? "This login is already taken, use another one..."
      : "Этот логин уже занят, используйте другой..."
  }`;
  checkLoginDown.innerHTML = `${
    settings.lang === "en"
      ? "This login is already taken, use another one..."
      : "Этот логин уже занят, используйте другой..."
  }`;
  checkLoginImg.setAttribute("src", XImg);
  loginUserInput.style.color = "red";
  btnSendSignup.setAttribute("id", "false");
  setTimeout(() => {
    checkLogin.classList.remove("active");
  }, 2000);
}

function checkInputLogNameFalse() {
  const checkLoginDown = document.querySelector(
    ".check-login-down"
  ) as HTMLElement;
  const checkLoginImg = document.querySelector(
    ".signup-window_logName img"
  ) as HTMLElement;
  const loginUserInput = document.querySelector(
    ".signup-window_logName input"
  ) as HTMLInputElement;
  const btnSendSignup = document.querySelector(
    ".signup-window_button"
  ) as HTMLElement;
  console.log("такого имени нет");
  checkLoginDown.innerHTML = "";
  checkLoginImg.setAttribute("src", VImg);
  loginUserInput.style.color = "green";
  btnSendSignup.setAttribute("id", "true");
}

export function authorizeUser() {
  const user = new User();

  const btnSendSignup = document.querySelector(
    ".signup-window_button"
  ) as HTMLElement;
  const loginUserInput = document.querySelector(
    ".signup-window_logName input"
  ) as HTMLInputElement;
  const passwordUserInput = document.querySelector(
    ".signup-window_password input"
  ) as HTMLInputElement;
  const signupWindow = document.querySelector(".signup-window") as HTMLElement;
  const shadow = document.querySelector(".shadow_login-window") as HTMLElement;
  const btnSignup = document.querySelector(".authorin") as HTMLElement;
  const btnSignupBurger = document.querySelector(
    ".authorin-burger"
  ) as HTMLElement;
  const btnLogin = document.querySelector(".login") as HTMLElement;
  const btnLoginBurger = document.querySelector(".login-burger") as HTMLElement;
  const iconUser = document.querySelector(".iconUser") as HTMLElement;

  const accountWindow = document.querySelector(
    ".account-window"
  ) as HTMLElement;
  const shadowAccount = document.querySelector(
    ".shadow_account-window"
  ) as HTMLElement;
  /*  const accountWindowP = document.querySelectorAll(".account-window p"); */
  const crossAccWindow = document.querySelector(
    ".account-window svg"
  ) as HTMLElement;
  const btnLogout = document.querySelector(".btn-logout") as HTMLElement;
  const mainSuccess = document.querySelector(
    ".wrapper-signup-success"
  ) as HTMLElement;
  const mainSignUp = document.querySelector(
    ".signup-window_main"
  ) as HTMLElement;
  const checkLoginImg = document.querySelector(
    ".signup-window_logName img"
  ) as HTMLElement;

  /* const checkLoginDown = document.querySelector(
    ".check-login-down"
  ) as HTMLElement; */

  loginUserInput.addEventListener("blur", () => {
    const loginUser = loginUserInput.value;
    const objUser = {
      username: loginUser,
    };
    if (loginUser.length > 0) {
      user.checkUser(objUser).then((result) => {
        if (result.success === true) {
          checkInputLogNameTrue();
        } else if (result.success === false) {
          checkInputLogNameFalse();
        }
      });
    }
  });

  loginUserInput.addEventListener("input", () => {
    /* loginUserInput.style.color = "black";
    checkLoginDown.innerHTML = "";
    checkLoginDown.innerHTML = "";
    checkLoginImg.setAttribute("src", ""); */
    clearInputFalse();
  });

  btnSendSignup.addEventListener("click", () => {
    const loginUser = loginUserInput.value;
    const passwordUser = passwordUserInput.value;
    const isCanSend = btnSendSignup.getAttribute("id");
    const objUser: TypeUser = {
      username: loginUser,
      password: passwordUser,
    };
    if (isCanSend === "true" && passwordUser.length > 0) {
      user.reсordUser(objUser).then((result) => {
        console.log(result);
        if (result.success === true) {
          drawSuccessBlock();
          loginUserInput.value = "";
          passwordUserInput.value = "";
          checkLoginImg.setAttribute("src", "");
          loginUserInput.style.color = "black";
          setTimeout(() => {
            signupWindow.classList.remove("active");
            shadow.classList.remove("active");
            btnSignup.style.display = "none";
            btnSignupBurger.style.display = "none";
            btnLogin.style.display = "none";
            btnLoginBurger.style.display = "none";
            iconUser.classList.add("active");
            localStorage.setItem("isRegistred", "true");
          }, 3000);
        }
        /* if (result.success === false) {
      } */
      });
    }
  });

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

  btnLogout.addEventListener("click", () => {
    accountWindow.classList.remove("active");
    shadowAccount.classList.remove("active");

    btnSignup.style.display = "flex";
    btnSignupBurger.style.display = "flex";
    btnLogin.style.display = "flex";
    btnLoginBurger.style.display = "flex";
    iconUser.classList.remove("active");
    localStorage.setItem("isRegistred", "false");

    mainSuccess.classList.remove("active");
    mainSignUp.classList.remove("no-active");
  });
}
