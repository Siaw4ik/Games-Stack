export function clickingIconUserandLogout() {
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
  const btnSignup = document.querySelector(".authorin") as HTMLElement;
  const btnSignupBurger = document.querySelector(
    ".authorin-burger"
  ) as HTMLElement;
  const btnLogin = document.querySelector(".login") as HTMLElement;
  const btnLoginBurger = document.querySelector(".login-burger") as HTMLElement;

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
