import "./style.css";
import {
  toggleVolume,
  toggleLight,
  toggleLang,
} from "./components/modul/settings";
import { drawPage } from "./components/modul/drawPage";
import { drawHomePage, changePage } from "./components/modul/changePage";
import {
  loginSystem,
  signupSystem,
  authorizateUser,
} from "./components/modul/register";

drawPage();
drawHomePage();
changePage();

toggleVolume();
toggleLight();
toggleLang();

loginSystem();
signupSystem();
authorizateUser();

console.log("start page");
