import Ship from "./ship";

export default class Meteor {
  context: CanvasRenderingContext2D;

  x: number;

  y: number;

  width: number;

  height: number;

  image: HTMLImageElement;

  constructor(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    image: HTMLImageElement
  ) {
    this.context = context;
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
    this.y += speed * gameSpeed * frameTimeDelta * scaleRatio;
  }

  drawMeteor() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collideWith(falcon: Ship) {
    const adjustBy = 1.2;
    if (
      falcon.x < this.x + this.width / adjustBy &&
      falcon.x + falcon.width / adjustBy > this.x &&
      falcon.y < this.y + this.height / adjustBy &&
      falcon.height + falcon.y / adjustBy > this.y
    ) {
      return true;
    }
    return false;
  }
}
