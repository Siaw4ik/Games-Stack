import background from "../../../assets/images/background.png";

export default class Ground {
  ctx: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  width: number;

  height: number;

  speed: number;

  scaleRatio: number;

  x: number;

  y: number;

  groundImage;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    speed: number,
    scaleRatio: number
  ) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.scaleRatio = scaleRatio;

    this.x = 0;
    this.y = this.canvas.height - this.height;

    this.groundImage = new Image();
    this.groundImage.src = background;
  }

  draw() {
    this.ctx.drawImage(
      this.groundImage,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.ctx.drawImage(
      this.groundImage,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );

    if (this.x < -this.width) {
      this.x = 0;
    }
  }

  update(gameSpeed: number, frameTimeDelta: number) {
    this.x -= gameSpeed * frameTimeDelta * this.speed * this.scaleRatio;
  }

  reset() {
    this.x = 0;
  }
}
