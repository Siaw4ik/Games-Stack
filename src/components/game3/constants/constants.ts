import { IMeteor } from "../module/types";
import { createRandomMeteorImg } from "../module/meteors";
import backgroundAudio from "../../../assets/sounds/back-game5-starwars.mp3";
import winAudio from "../../../assets/sounds/final-game5-starwars.mp3";
import moveAudio from "../../../assets/sounds/game5-one-card.mp3";

export const GAME3_BACKGROUND_AUDIO = new Audio(backgroundAudio);
export const GAME3_FINAL_AUDIO = new Audio(winAudio);
export const GAME3_MOVE_SOUND = new Audio(moveAudio);

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
export const PLAYER_WIDTH = 75;
export const PLAYER_HEIGHT = 100;
export const MAX_RIGHT_POS = GAME_WIDTH;
export const MAX_LEFT_POS = 0;
export const MAX_MOVE_DIST = 150;
export const MIN_MOVE_DIST = 50;
export const METEORS_AND_BACKGROUND_SPEED = 0.5;
export const GAME_SPEED_START = 0.4;
export const GAME_SPEED_INCREMENT = 0.000035;
