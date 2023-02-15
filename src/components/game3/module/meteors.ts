import { IMeteor } from "./types";

const meteor1 = new Image();
meteor1.src = "./assets/meteor_1.png";
const meteor2 = new Image();
meteor2.src = "./assets/meteor_2.png";
const meteor3 = new Image();
meteor3.src = "./assets/meteor_3.png";
const meteor4 = new Image();
meteor4.src = "./assets/meteor_4.png";
const meteor5 = new Image();
meteor5.src = "./assets/meteor_5.png";
const meteor6 = new Image();
meteor6.src = "./assets/meteor_6.png";
const meteor7 = new Image();
meteor7.src = "./assets/meteor_7.png";
const meteor8 = new Image();
meteor8.src = "./assets/meteor_8.png";
const meteor9 = new Image();
meteor9.src = "./assets/meteor_9.png";
const meteor10 = new Image();
meteor10.src = "./assets/meteor_10.png";
const meteor11 = new Image();
meteor11.src = "./assets/meteor_11.png";
const meteor12 = new Image();
meteor12.src = "./assets/meteor_12.png";

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

// eslint-disable-next-line no-unused-vars
let removedOneMeteor: IMeteor[];

export function createOneMeteorLine(arr: IMeteor[]): IMeteor[] {
  const newArr = arr.slice();
  const randomNum = Math.floor(Math.random() * 7);
  removedOneMeteor = newArr.splice(randomNum, 1);
  return newArr;
}

export function createRandomMeteorImg(): HTMLImageElement {
  const randomNum = Math.floor(Math.random() * 11);
  return meteorImgArr[randomNum];
}
