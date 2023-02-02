import { User } from "./User";
import { TypeUser } from "./types";

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

function drawWindowSignup() {
  const signupWindow = document.querySelector(".signup-window") as HTMLElement;
  const shadow = document.querySelector(".shadow_login-window") as HTMLElement;
  signupWindow.classList.add("active");
  shadow.classList.add("active");
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

  btnSignup.addEventListener("click", () => {
    drawWindowSignup();
  });

  btnSignupBurger.addEventListener("click", () => {
    drawWindowSignup();
  });

  crossLogin.addEventListener("click", () => {
    signupWindow.classList.remove("active");
    shadow.classList.remove("active");
  });

  shadow.addEventListener("click", () => {
    shadow.classList.remove("active");
    signupWindow.classList.remove("active");
  });
}

export function authorizateUser() {
  const user = new User();

  const btnSignup = document.querySelector(".signup-window_button");
  /* const loginUser = (document.querySelector(
    ".signup-window_logName input"
  ) as HTMLInputElement).value;
  const passwordUser = (document.querySelector(
    ".signup-window_password input"
  ) as HTMLInputElement).value;
  const objUser: TypeUser = {
    username: loginUser,
    password: passwordUser,
  }; */

  btnSignup?.addEventListener("click", () => {
    const loginUser = (document.querySelector(
      ".signup-window_logName input"
    ) as HTMLInputElement).value;
    const passwordUser = (document.querySelector(
      ".signup-window_password input"
    ) as HTMLInputElement).value;
    const objUser: TypeUser = {
      username: loginUser,
      password: passwordUser,
    };
    user.reсordUser(objUser).then((result) => {
      console.log(result);
    });
  });
}
