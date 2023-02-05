import { User } from "../module/User";
import { TypeUser } from "../module/types";
/* import iconOk from "../../assets/icons8-ок-128.svg"; */
import VImg from "../../assets/icons8-галочка.svg";
import XImg from "../../assets/1675432350.svg";

import { returnLocalStorage } from "../module/localStorage";

function clearInputFalse(name: string) {
  const checkLoginImg = document.querySelector(
    `.${name}-window_logName img`
  ) as HTMLElement;
  const checkLoginDown = document.querySelector(
    `.${name}_check-login-down`
  ) as HTMLElement;
  const checkLogin = document.querySelector(".check-login") as HTMLElement;

  checkLoginDown.innerHTML = "";
  checkLoginImg.setAttribute("src", "");
  if (name === "signup") {
    checkLogin.classList.remove("active");
  }
}

export function closeOpenWindowRegisration() {
  const btnLogin = document.querySelector(".login") as HTMLElement;
  const btnLoginBurger = document.querySelector(".login-burger") as HTMLElement;
  const btnSignup = document.querySelector(".authorin") as HTMLElement;
  const btnSignupBurger = document.querySelector(
    ".authorin-burger"
  ) as HTMLElement;

  function openWindowRegistration(name: string) {
    const window = document.querySelector(`.${name}-window`) as HTMLElement;
    const shadow = document.querySelector(
      `.shadow_login-window`
    ) as HTMLElement;
    window.classList.add("active");
    shadow.classList.add("active");
  }

  function closeWindowRegistration(name: string) {
    const window = document.querySelector(`.${name}-window`) as HTMLElement;
    const crossLogin = document.querySelector(
      `.${name}-window_cross`
    ) as HTMLElement;
    const shadow = document.querySelector(
      `.shadow_login-window`
    ) as HTMLElement;

    crossLogin.addEventListener("click", () => {
      window.classList.remove("active");
      shadow.classList.remove("active");
    });

    shadow.addEventListener("click", () => {
      shadow.classList.remove("active");
      window.classList.remove("active");
    });
  }

  function clearInput(name: string) {
    const loginInput = document.querySelector(
      `.${name}-window_logName input`
    ) as HTMLInputElement;
    const passwordInput = document.querySelector(
      `.${name}-window_password input`
    ) as HTMLInputElement;

    loginInput.style.color = "black";
    loginInput.value = "";
    passwordInput.value = "";
  }

  btnLogin.addEventListener("click", () => {
    const nameWindow = "login";
    openWindowRegistration(nameWindow);
    closeWindowRegistration(nameWindow);
    clearInputFalse(nameWindow);
    clearInput(nameWindow);
  });

  btnLoginBurger.addEventListener("click", () => {
    const nameWindow = "login";
    openWindowRegistration(nameWindow);
    closeWindowRegistration(nameWindow);
    clearInputFalse(nameWindow);
    clearInput(nameWindow);
  });

  btnSignup.addEventListener("click", () => {
    const nameWindow = "signup";
    openWindowRegistration(nameWindow);
    closeWindowRegistration(nameWindow);
    clearInputFalse(nameWindow);
    clearInput(nameWindow);
  });

  btnSignupBurger.addEventListener("click", () => {
    const nameWindow = "signup";
    openWindowRegistration(nameWindow);
    closeWindowRegistration(nameWindow);
    clearInputFalse(nameWindow);
    clearInput(nameWindow);
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
    ".signup_check-login-down"
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
    ".signup_check-login-down"
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

  const checkLoginImg = document.querySelector(
    ".signup-window_logName img"
  ) as HTMLElement;

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
    loginUserInput.style.color = "black";
    clearInputFalse("signup");
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
          btnSignup.style.display = "none";
          btnSignupBurger.style.display = "none";
          btnLogin.style.display = "none";
          btnLoginBurger.style.display = "none";
          iconUser.classList.add("active");
          localStorage.setItem("isRegistred", "true");
          setTimeout(() => {
            signupWindow.classList.remove("active");
            shadow.classList.remove("active");
          }, 3000);
        }
        /* if (result.success === false) {
      } */
      });
    }
  });
}

export function logInUser() {
  console.log("login");
}
