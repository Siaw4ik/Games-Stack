import "./style.css";
import {
  toggleVolume,
  toggleLight,
  toggleLang,
} from "./components/modul/settings";
import { drawPage } from "./components/modul/drawPage";
import { drawHomePage, changePage } from "./components/modul/changePage";

drawPage();
drawHomePage();
changePage();

toggleVolume();
toggleLight();
toggleLang();

console.log("start page");
