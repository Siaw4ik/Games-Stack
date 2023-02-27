import { User } from "../module/User";
import { TypeUser } from "../module/types";
/* import VImg from "../../assets/iconOKInput.svg";
import XImg from "../../assets/cross_input.svg"; */
import {
  returnLocalStorage,
  returnLocalStorageIsRegistered,
} from "../module/localStorage";
import { drawScoreFromBackEnd } from "../game4";
import {
  checkValidLoginSignUP,
  checkValidPasswordSignUP,
} from "./сomponentsRegister";

function clearInputFalse(name: string) {
  /* const checkLoginImg = document.querySelector(
    `.${name}-window_logName img`
  ) as HTMLElement; */
  const checkLoginDown = document.querySelector(
    `.${name}_check-login-down`
  ) as HTMLElement;
  const checkLogin = document.querySelector(".check-login") as HTMLElement;
  const imgInputOk = document.querySelector(
    ".signup-window_logName-imgok"
  ) as HTMLElement;
  const imgInputFail = document.querySelector(
    ".signup-window_logName-imgfail"
  ) as HTMLElement;

  checkLoginDown.innerHTML = "";
  imgInputFail.classList.remove("active");
  imgInputOk.classList.remove("active");
  // checkLoginImg.setAttribute("src", "");
  if (name === "signup") {
    checkLogin.classList.remove("active");
  }
}

function drawSuccessBlock(name: string, user: string) {
  const settings = returnLocalStorage();
  const mainSuccess = document.querySelector(
    `.wrapper-${name}-success`
  ) as HTMLElement;
  const mainSuccessP = document.querySelector(
    `.wrapper-${name}-success p`
  ) as HTMLElement;
  const main = document.querySelector(`.${name}-window_main`) as HTMLElement;

  mainSuccess.classList.add("active");
  main.classList.add("no-active");

  if (name === "signup") {
    mainSuccessP.innerHTML = `
    ${
      settings.lang === "en"
        ? `Authorization completed successfully!!!<br>Welcome, ${user}!!!`
        : `Авторизация выполнена успешно!!!<br>Добро пожаловать, ${user}!!!`
    }`;
  }
  if (name === "login") {
    mainSuccessP.innerHTML = `
    ${
      settings.lang === "en"
        ? `You are logged into your account!!!<br>Welcome, ${user}!!!`
        : `Вы вошли в свой аккаунт!!!<br>Добро пожаловать, ${user}!!!`
    }`;
  }
}

function drawFailBlock(status: string) {
  const settings = returnLocalStorage();
  const mainFail = document.querySelector(`.wrapper-login-fail`) as HTMLElement;
  const mainFailP = document.querySelector(
    `.wrapper-login-fail p`
  ) as HTMLElement;
  const main = document.querySelector(`.login-window_main`) as HTMLElement;

  if (status === "add") {
    mainFail.classList.add("active");
    main.classList.add("no-active");
    mainFailP.innerHTML = `
    ${
      settings.lang === "en"
        ? "Error!!!<br>Incorrectly entered login or password data.<br>Try again!!!"
        : "Ошибка!!!<br>Неправильно введены данные Логина или Пароля.<br>Попробуйте еще раз!!!"
    }`;
  }
  if (status === "remove") {
    mainFail.classList.remove("active");
    main.classList.remove("no-active");
    mainFailP.innerHTML = "";
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
    const gamesInfoContainer = document.querySelector(
      `.games_info_container`
    ) as HTMLElement;
    const body = document.querySelector(`.body`) as HTMLElement;
    const arrowDown = document.querySelector(`.arrowDown `) as HTMLElement;
    window.classList.add("active");
    shadow.classList.add("active");
    if (gamesInfoContainer) {
      gamesInfoContainer.classList.add("active");
    }
    if (body) {
      body.classList.add("active");
    }
    if (arrowDown) {
      arrowDown.classList.add("active");
    }
  }

  function closeWindowRegistration(name: string) {
    const window = document.querySelector(`.${name}-window`) as HTMLElement;
    const crossLogin = document.querySelector(
      `.${name}-window_cross`
    ) as HTMLElement;
    const shadow = document.querySelector(
      `.shadow_login-window`
    ) as HTMLElement;
    const gamesInfoContainer = document.querySelector(
      `.games_info_container`
    ) as HTMLElement;
    const body = document.querySelector(`.body`) as HTMLElement;
    const arrowDown = document.querySelector(`.arrowDown `) as HTMLElement;

    crossLogin.addEventListener("click", () => {
      window.classList.remove("active");
      shadow.classList.remove("active");
      if (gamesInfoContainer) {
        gamesInfoContainer.classList.remove("active");
      }
      if (body) {
        body.classList.remove("active");
      }
      if (arrowDown) {
        arrowDown.classList.remove("active");
      }
      if (name === "login") {
        drawFailBlock("remove");
      }
    });

    shadow.addEventListener("click", () => {
      shadow.classList.remove("active");
      window.classList.remove("active");
      if (gamesInfoContainer) {
        gamesInfoContainer.classList.remove("active");
      }
      if (body) {
        body.classList.remove("active");
      }
      if (arrowDown) {
        arrowDown.classList.remove("active");
      }
      if (name === "login") {
        drawFailBlock("remove");
      }
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

function checkInputLogNameTrue() {
  const checkLogin = document.querySelector(".check-login") as HTMLElement;
  const checkLoginDown = document.querySelector(
    ".signup_check-login-down"
  ) as HTMLElement;
  /* const checkLoginImg = document.querySelector(
    ".signup-window_logName img"
  ) as HTMLElement; */
  const loginUserInput = document.querySelector(
    ".signup-window_logName input"
  ) as HTMLInputElement;
  const btnSendSignup = document.querySelector(
    ".signup-window_button"
  ) as HTMLElement;
  const imgInputFail = document.querySelector(
    ".signup-window_logName-imgfail"
  ) as HTMLElement;

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
  // checkLoginImg.setAttribute("src", XImg);
  imgInputFail.classList.add("active");
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
  const loginUserInput = document.querySelector(
    ".signup-window_logName input"
  ) as HTMLInputElement;
  const btnSendSignup = document.querySelector(
    ".signup-window_button"
  ) as HTMLElement;
  const imgInputOk = document.querySelector(
    ".signup-window_logName-imgok"
  ) as HTMLElement;

  checkLoginDown.innerHTML = "";
  imgInputOk.classList.add("active");
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

  const loginWindow = document.querySelector(".login-window") as HTMLElement;
  const loginLogInInput = document.querySelector(
    ".login-window_logName input"
  ) as HTMLInputElement;
  const passwordLogInInput = document.querySelector(
    ".login-window_password input"
  ) as HTMLInputElement;
  const btnSendLogIn = document.querySelector(
    ".login-window_button"
  ) as HTMLElement;

  const accountNameUser = document.querySelector(
    ".account_nameUser"
  ) as HTMLElement;

  const imgInputOk = document.querySelector(
    ".signup-window_logName-imgok"
  ) as HTMLElement;
  const imgInputFail = document.querySelector(
    ".signup-window_logName-imgfail"
  ) as HTMLElement;

  loginUserInput.addEventListener("blur", () => {
    const loginUser = loginUserInput.value;
    const objUser = {
      username: loginUser,
    };
    if (checkValidLoginSignUP(loginUser)) {
      user.checkUser(objUser).then((result) => {
        if (result.success === true) {
          checkInputLogNameTrue();
        } else if (result.success === false) {
          checkInputLogNameFalse();
        }
      });
    }
  });

  passwordUserInput.addEventListener("input", () => {
    const passwordUser = passwordUserInput.value;
    if (checkValidPasswordSignUP(passwordUser)) {
      passwordUserInput.style.color = "green";
      btnSendSignup.setAttribute("id", "true");
    } else {
      passwordUserInput.style.color = "red";
      btnSendSignup.setAttribute("id", "false");
    }
  });

  loginUserInput.addEventListener("input", () => {
    const loginUser = loginUserInput.value;
    if (checkValidPasswordSignUP(loginUser)) {
      loginUserInput.style.color = "green";
      btnSendSignup.setAttribute("id", "true");
    } else if (loginUser.length === 0) {
      loginUserInput.style.color = "black";
      clearInputFalse("signup");
    } else {
      loginUserInput.style.color = "red";
      btnSendSignup.setAttribute("id", "false");
    }
  });

  function activeIconandBtn(userLogin: string) {
    btnSignup.style.display = "none";
    btnSignupBurger.style.display = "none";
    btnLogin.style.display = "none";
    btnLoginBurger.style.display = "none";
    iconUser.classList.add("active");
    const object = {
      userName: userLogin,
      isRegistred: "true",
    };
    localStorage.setItem("userTrue", JSON.stringify(object));

    if (window.location.hash.slice(1) === "result") {
      const userRegisred = returnLocalStorageIsRegistered();
      const userRadio = document.querySelector(
        ".table-flip .user-radio"
      ) as HTMLElement;
      if (userRadio) {
        userRadio.style.display = "flex";
        const userRadioP = document.querySelector(
          ".table-flip .user-radio p"
        ) as HTMLElement;
        userRadioP.innerHTML = userRegisred.userName;
      }
    }
  }

  btnSendSignup.addEventListener("click", () => {
    const loginUser = loginUserInput.value;
    const passwordUser = passwordUserInput.value;
    const isCanSend = btnSendSignup.getAttribute("id");
    const objUser: TypeUser = {
      username: loginUser,
      password: passwordUser,
    };
    if (
      isCanSend === "true" &&
      checkValidPasswordSignUP(passwordUser) &&
      checkValidLoginSignUP(loginUser)
    ) {
      user.reсordUser(objUser).then((result) => {
        if (result.success === true) {
          drawSuccessBlock("signup", loginUser);
          loginUserInput.value = "";
          passwordUserInput.value = "";
          imgInputFail.classList.remove("active");
          imgInputOk.classList.remove("active");
          loginUserInput.style.color = "black";
          activeIconandBtn(loginUser);
          accountNameUser.innerHTML = loginUser;
          drawScoreFromBackEnd();
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

  btnSendLogIn.addEventListener("click", () => {
    const loginUser = loginLogInInput.value;
    const passwordUser = passwordLogInInput.value;
    const objUser: TypeUser = {
      username: loginUser,
      password: passwordUser,
    };

    user.loginUser(objUser).then((result) => {
      if (result.success === true) {
        drawSuccessBlock("login", loginUser);
        loginLogInInput.value = "";
        passwordLogInInput.value = "";
        activeIconandBtn(loginUser);
        accountNameUser.innerHTML = loginUser;
        drawScoreFromBackEnd();
        setTimeout(() => {
          loginWindow.classList.remove("active");
          shadow.classList.remove("active");
        }, 3000);
      } else if (result.success === false) {
        drawFailBlock("add");
        setTimeout(() => {
          drawFailBlock("remove");
          loginLogInInput.value = "";
          passwordLogInInput.value = "";
        }, 2000);
      }
    });
  });
}
