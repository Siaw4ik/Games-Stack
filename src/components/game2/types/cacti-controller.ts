import Cactus from "./cactus";
import Player from "./dino";

export default class CactiController {
  cactus_interval_min = 500;

  cactus_interval_max = 2000;

  nextCactusInterval = 0;

  cacti: Cactus[] = [];

  ctx: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  cactiImages: { image: HTMLImageElement; width: number; height: number }[];

  scaleRatio: number;

  speed: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    cactiImages: { image: HTMLImageElement; width: number; height: number }[],
    scaleRatio: number,
    speed: number
  ) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.cactiImages = cactiImages;
    this.scaleRatio = scaleRatio;
    this.speed = speed;
    this.setNextCactusTime();
  }

  setNextCactusTime() {
    const num = this.getRandomNumber(
      this.cactus_interval_min,
      this.cactus_interval_max
    );
    this.nextCactusInterval = num;
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  createCactus() {
    const index = this.getRandomNumber(0, this.cactiImages.length - 1);
    const cactusImage = this.cactiImages[index];
    const x = this.canvas.width * 1.5;
    const y = this.canvas.height - cactusImage.height;
    const cactus = new Cactus(
      this.ctx,
      x,
      y,
      cactusImage.width,
      cactusImage.height,
      cactusImage.image
    );
    this.cacti.push(cactus);
  }

  update(gameSpeed: number, frameTimeDelta: number) {
    if (this.nextCactusInterval <= 0) {
      this.createCactus();
      this.setNextCactusTime();
    }
    this.nextCactusInterval -= frameTimeDelta;
    this.cacti.forEach((cactus) => {
      cactus.update(this.speed, gameSpeed, frameTimeDelta, this.scaleRatio);
    });

    this.cacti = this.cacti.filter((cactus) => cactus.x > -cactus.width);
  }

  draw() {
    this.cacti.forEach((cactus) => cactus.draw());
  }

  collideWith(sprite: Player) {
    return this.cacti.some((cactus) => cactus.collideWith(sprite));
  }

  reset() {
    this.cacti = [];
  }
}
