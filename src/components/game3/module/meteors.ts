/* eslint-disable no-plusplus */
import { IMeteor } from "./types";
import met1 from "../../../assets/images_game_3/meteor_1.png";
import met2 from "../../../assets/images_game_3/meteor_2.png";
import met3 from "../../../assets/images_game_3/meteor_3.png";
import met4 from "../../../assets/images_game_3/meteor_4.png";
import met5 from "../../../assets/images_game_3/meteor_5.png";
import met6 from "../../../assets/images_game_3/meteor_6.png";
import met7 from "../../../assets/images_game_3/meteor_7.png";
import met8 from "../../../assets/images_game_3/meteor_8.png";
import met9 from "../../../assets/images_game_3/meteor_9.png";
import met10 from "../../../assets/images_game_3/meteor_10.png";
import met11 from "../../../assets/images_game_3/meteor_11.png";
import met12 from "../../../assets/images_game_3/meteor_12.png";

const meteor1 = new Image();
meteor1.src = met1;
const meteor2 = new Image();
meteor2.src = met2;
const meteor3 = new Image();
meteor3.src = met3;
const meteor4 = new Image();
meteor4.src = met4;
const meteor5 = new Image();
meteor5.src = met5;
const meteor6 = new Image();
meteor6.src = met6;
const meteor7 = new Image();
meteor7.src = met7;
const meteor8 = new Image();
meteor8.src = met8;
const meteor9 = new Image();
meteor9.src = met9;
const meteor10 = new Image();
meteor10.src = met10;
const meteor11 = new Image();
meteor11.src = met11;
const meteor12 = new Image();
meteor12.src = met12;

export const meteorImgArr: HTMLImageElement[] = [
  meteor1,
  meteor2,
  meteor3,
  meteor4,
  meteor5,
  meteor6,
  meteor7,
  meteor8,
  meteor9,
  meteor10,
  meteor11,
  meteor12,
];

let removedMeteor: IMeteor[];

export function getHoleStart() {
  const start = removedMeteor[0].x;
  return start;
}

export function getHoleEnd() {
  const end = removedMeteor[0].x + removedMeteor[0].img.width;
  return end;
}

export function createMeteorLine(arr: IMeteor[]): IMeteor[] {
  const newArr = arr.slice();
  const randomNum = Math.floor(Math.random() * 7);
  removedMeteor = newArr.splice(randomNum, 1);
  return newArr;
}

export function createRandomMeteorImg(): HTMLImageElement {
  const randomNum = Math.floor(Math.random() * 11);
  return meteorImgArr[randomNum];
}
