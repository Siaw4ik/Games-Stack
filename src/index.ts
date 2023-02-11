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
  authorizeUser,
  closeOpenWindowRegisration,
} from "./components/registration/register";
import { clickingIconUserandLogout } from "./components/registration/accountUser";
import { gameAllfunc } from "./components/game1";
import { fixGame2 } from "./components/game2";
import { retryBtnclick, chipClick } from "./components/game4";

enableRoutChange();
drawPage();

const pageId = getLocationHash() ? getLocationHash() : "about";
renderNewPage(pageId);

changePage();

toggleVolume();
toggleLight();
toggleLang();

authorizeUser();
closeOpenWindowRegisration();
clickingIconUserandLogout();

gameAllfunc();

fixGame2();
retryBtnclick();
chipClick();
console.log("start page");
