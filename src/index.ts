import "./style.css";
import {
  toggleVolume,
  toggleLight,
  toggleLang,
} from "./components/module/settings";
import { drawPage } from "./components/module/drawPage";
import { drawHomePage, changePage } from "./components/module/changePage";
import {
  loginSystem,
  signupSystem,
  authorizeUser,
} from "./components/module/register";

drawPage();
drawHomePage();
changePage();

toggleVolume();
toggleLight();
toggleLang();

loginSystem();
signupSystem();
authorizeUser();

console.log("start page");
