import "./style.css";
import {
  toggleVolume,
  toggleLight,
  toggleLang,
} from "./components/module/settings";
import { drawPage } from "./components/module/drawPage";
import {
  renderNewPage,
  getCurrentPageId,
  changePage,
  enableRoutChange,
} from "./components/module/changePage";
import {
  authorizeUser,
  closeOpenWindowRegisration,
} from "./components/registration/register";
import { clickingIconUserandLogout } from "./components/registration/accountUser";
import { retryBtnclick, chipClick } from "./components/game4";

enableRoutChange();
drawPage();

const pageId = getCurrentPageId() ? getCurrentPageId() : "about";
renderNewPage(pageId);

changePage();

toggleVolume();
toggleLight();
toggleLang();

authorizeUser();
closeOpenWindowRegisration();
clickingIconUserandLogout();

retryBtnclick();
chipClick();
console.log("start page");
