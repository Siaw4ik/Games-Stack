import { IMeteor } from "../module/types";
import { createRandomMeteorImg } from "../module/meteors";

export const METEOR: IMeteor[] = [
  { img: createRandomMeteorImg(), x: 0, y: -150 },
  { img: createRandomMeteorImg(), x: 210, y: -150 },
  { img: createRandomMeteorImg(), x: 420, y: -150 },
  { img: createRandomMeteorImg(), x: 630, y: -150 },
  { img: createRandomMeteorImg(), x: 840, y: -150 },
  { img: createRandomMeteorImg(), x: 1050, y: -150 },
  { img: createRandomMeteorImg(), x: 1250, y: -150 },
];

export const GAME_WIDTH = 1400;
export const GAME_HEIGHT = 800;
