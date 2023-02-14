// import { IMeteor } from "./types";
import Meteor from "./Meteor";
import { createOneMeteorLine } from "./meteors";
import { METEOR_CONFIG } from "../constants/constants";
import Ship from "./Ship";

export default class MeteorsController {
  METEORS_INTERVAL_MIN = 1500;

  METEORS_INTERVAL_MAX = 2000;

  nextMeteorsLineInterval = 0;

  meteors: Meteor[] = [];

  context: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  scaleRatio: number;

  speed: number;

  constructor(
    context: CanvasRenderingContext2D,
    scaleRatio: number,
    speed: number
  ) {
    this.context = context;
    this.canvas = context.canvas;
    this.scaleRatio = scaleRatio;
    this.speed = speed;

    this.setNextMeteorsTime();
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setNextMeteorsTime() {
    const num = this.getRandomNumber(
      this.METEORS_INTERVAL_MIN,
      this.METEORS_INTERVAL_MAX
    );

    this.nextMeteorsLineInterval = num;
  }

  createMeteors() {
    createOneMeteorLine(METEOR_CONFIG).forEach((met) => {
      const meteor = new Meteor(
        this.context,
        met.dx * this.scaleRatio,
        met.dy * this.scaleRatio,
        met.width * this.scaleRatio,
        met.height * this.scaleRatio,
        met.img
      );
      this.meteors.push(meteor);
    });
  }

  update(gameSpeed: number, frameTimeDelta: number) {
    if (this.nextMeteorsLineInterval <= 0) {
      this.createMeteors();
      this.setNextMeteorsTime();
    }
    this.nextMeteorsLineInterval -= frameTimeDelta;

    this.meteors.forEach((meteor) => {
      meteor.update(this.speed, gameSpeed, frameTimeDelta, this.scaleRatio);
    });

    this.meteors = this.meteors.filter(
      (meteor) => meteor.y < this.canvas.height
    );
  }

  drawMeteors() {
    this.meteors.forEach((meteor) => {
      meteor.drawMeteor();
    });
  }

  collideWith(falcon: Ship) {
    return this.meteors.some((meteor) => meteor.collideWith(falcon));
  }

  reset() {
    this.meteors = [];
  }
}
