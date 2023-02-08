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
import { costylGame2 } from "./components/game2";

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

costylGame2();

console.log("start page");
