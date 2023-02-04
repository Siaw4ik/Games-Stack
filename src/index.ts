import "./style.css";
import {
  toggleVolume,
  toggleLight,
  toggleLang,
} from "./components/module/settings";
import { drawPage } from "./components/module/drawPage";
import {
  renderNewPage,
  getLocationHash,
  changePage,
  enableRoutChange,
} from "./components/module/changePage";
import {
  loginSystem,
  signupSystem,
  authorizeUser,
} from "./components/module/register";

enableRoutChange();
drawPage();
const pageId = getLocationHash() ? getLocationHash() : "about";
renderNewPage(pageId);
// drawHomePage();
changePage();

toggleVolume();
toggleLight();
toggleLang();

loginSystem();
signupSystem();
authorizeUser();

console.log("start page");
