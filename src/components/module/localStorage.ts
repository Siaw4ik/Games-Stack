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

export function returnLocalStorageIsRegistered() {
  const storage = localStorage.getItem("userTrue");
  let result = {
    userName: "",
    isRegistred: "",
  };
  if (typeof storage === "string" && storage.length > 0) {
    result = JSON.parse(storage);
  }
  return result;
}
export function returnLocalStorageUnknown() {
  const storage = localStorage.getItem("unknownStrategy");
  let result = 0;
  if (typeof storage === "string" && storage.length > 0) {
    result = JSON.parse(storage);
  }
  return result;
}
