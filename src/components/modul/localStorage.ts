import { Settings } from "./types";

export function returnLocalStorage() {
  const storage = localStorage.getItem("settings");
  let state: Settings = {
    lang: "ru",
    style: "light",
    volume: false,
  };
  if (typeof storage === "string" && storage.length > 0) {
    state = JSON.parse(storage);
  }
  return state;
}
