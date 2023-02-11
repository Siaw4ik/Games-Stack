import { IMeteor } from "../module/types";
import { createRandomMeteorImg } from "../module/meteors";

export const METEOR_CONFIG: IMeteor[] = [
  { img: createRandomMeteorImg(), dx: 0, dy: -150, width: 31, height: 31 },
  { img: createRandomMeteorImg(), dx: 210, dy: -150, width: 31, height: 31 },
  { img: createRandomMeteorImg(), dx: 420, dy: -150, width: 31, height: 31 },
  { img: createRandomMeteorImg(), dx: 630, dy: -150, width: 31, height: 31 },
  { img: createRandomMeteorImg(), dx: 840, dy: -150, width: 31, height: 31 },
  { img: createRandomMeteorImg(), dx: 1050, dy: -150, width: 31, height: 31 },
  { img: createRandomMeteorImg(), dx: 1250, dy: -150, width: 31, height: 31 },
];

export const GAME_WIDTH = 750;
export const GAME_HEIGHT = 250;
export const BACKGROUND_WIDTH = 750;
export const BACKGROUND_HEIGHT = 250;
export const PLAYER_WIDTH = 45;
export const PLAYER_HEIGHT = 60;
export const MAX_RIGHT_POS = GAME_WIDTH;
export const MAX_LEFT_POS = 0;
export const MAX_MOVE_DIST = 100;
export const MIN_MOVE_DIST = 25;
export const METEORS_AND_BACKGROUND_SPEED = 0.5;
export const GAME_SPEED_START = 0.25;
export const GAME_SPEED_INCREMENT = 0.00001;
