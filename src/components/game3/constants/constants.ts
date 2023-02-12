import { IMeteor } from "../module/types";
import { createRandomMeteorImg } from "../module/meteors";

const defaultMeteorSize = 80;
const spaceBetweenMeteors = 110;
export const METEOR_CONFIG: IMeteor[] = [
  {
    img: createRandomMeteorImg(),
    dx: 10,
    dy: -150,
    width: defaultMeteorSize,
    height: defaultMeteorSize,
  },
  {
    img: createRandomMeteorImg(),
    dx: spaceBetweenMeteors,
    dy: -150,
    width: defaultMeteorSize,
    height: defaultMeteorSize,
  },
  {
    img: createRandomMeteorImg(),
    dx: spaceBetweenMeteors * 2,
    dy: -150,
    width: defaultMeteorSize,
    height: defaultMeteorSize,
  },
  {
    img: createRandomMeteorImg(),
    dx: spaceBetweenMeteors * 3,
    dy: -150,
    width: defaultMeteorSize,
    height: defaultMeteorSize,
  },
  {
    img: createRandomMeteorImg(),
    dx: spaceBetweenMeteors * 4,
    dy: -150,
    width: defaultMeteorSize,
    height: defaultMeteorSize,
  },
  {
    img: createRandomMeteorImg(),
    dx: spaceBetweenMeteors * 5,
    dy: -150,
    width: defaultMeteorSize,
    height: defaultMeteorSize,
  },
  {
    img: createRandomMeteorImg(),
    dx: spaceBetweenMeteors * 6,
    dy: -150,
    width: defaultMeteorSize,
    height: defaultMeteorSize,
  },
];

export const GAME_WIDTH = 750;
export const GAME_HEIGHT = 750;
export const BACKGROUND_WIDTH = GAME_WIDTH;
export const BACKGROUND_HEIGHT = GAME_HEIGHT;
export const PLAYER_WIDTH = 45;
export const PLAYER_HEIGHT = 60;
export const MAX_RIGHT_POS = GAME_WIDTH;
export const MAX_LEFT_POS = 0;
export const MAX_MOVE_DIST = 100;
export const MIN_MOVE_DIST = 25;
export const METEORS_AND_BACKGROUND_SPEED = 0.5;
export const GAME_SPEED_START = 0.25;
export const GAME_SPEED_INCREMENT = 0.00001;
