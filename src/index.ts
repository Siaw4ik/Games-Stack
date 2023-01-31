import "./style.css";
import {
  toggleVolume,
  toggleLight,
  toggleLang,
} from "./components/modul/settings";
import { drawPage } from "./components/modul/drawPage";

drawPage();

toggleVolume();
toggleLight();
toggleLang();

console.log("start page");
