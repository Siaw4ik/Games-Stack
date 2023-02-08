import Player from "./jedi";

export default class Cactus {
  ctx: CanvasRenderingContext2D;

  x: number;

  y: number;

  width: number;

  height: number;

  image: HTMLImageElement;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    image: HTMLImageElement
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  update(
    speed: number,
    gameSpeed: number,
    frameTimeDelta: number,
    scaleRatio: number
  ) {
    this.x -= speed * gameSpeed * frameTimeDelta * scaleRatio;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collideWith(sprite: Player) {
    const adjustBy = 1.4;
    if (
      sprite.x < this.x + this.width / adjustBy &&
      sprite.x + sprite.width / adjustBy > this.x &&
      sprite.y < this.y + this.height / adjustBy &&
      sprite.height + sprite.y / adjustBy > this.y
    ) {
      return true;
    }
    return false;
  }
}
