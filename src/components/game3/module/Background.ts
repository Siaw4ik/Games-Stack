import background from "../../../assets/images_game_3/background.png";

export default class Background {
  context: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  width: number;

  height: number;

  speed: number;

  scaleRatio: number;

  x: number;

  y: number;

  imageBackground: HTMLImageElement;

  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    speed: number,
    scaleRatio: number
  ) {
    this.context = context;
    this.canvas = context.canvas;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.scaleRatio = scaleRatio;
    this.x = 0;
    this.y = 0;

    this.imageBackground = new Image();
    this.imageBackground.src = background;
  }

  draw() {
    this.context.drawImage(
      this.imageBackground,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.context.drawImage(
      this.imageBackground,
      this.x,
      this.y - this.height + 1.5,
      this.width,
      this.height
    );

    if (this.y > this.height) {
      this.y = 0;
    }
  }

  update(gameSpeed: number, frameTimeDelta: number) {
    this.y += gameSpeed * frameTimeDelta * this.speed * this.scaleRatio;
  }

  reset() {
    this.y = 0;
  }
}
