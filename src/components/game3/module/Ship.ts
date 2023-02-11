import falcon from "../../../assets/images_game_3/millennium-falcon.png";

export default class Ship {
  context: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  width: number;

  height: number;

  maxMove: number;

  minMove: number;

  scaleRatio: number;

  x: number;

  y: number;

  imageFalcon: HTMLImageElement;

  image: HTMLImageElement;

  xPos = 700;

  yPos = 400;

  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    maxMove: number,
    minMove: number,
    scaleRatio: number
  ) {
    this.context = context;
    this.canvas = context.canvas;
    this.width = width;
    this.height = height;
    this.maxMove = maxMove;
    this.minMove = minMove;
    this.scaleRatio = scaleRatio;
    this.x = 375 * scaleRatio;
    this.y = this.canvas.height - this.height - 1.5 * scaleRatio;

    this.imageFalcon = new Image();
    this.imageFalcon.src = falcon;
    this.image = this.imageFalcon;

    document.removeEventListener("keydown", this.onKeyDown);
    // window.removeEventListener("touchstart", this.onTouchStart);
    document.addEventListener("keydown", this.onKeyDown);
    // window.addEventListener("touchstart", this.onTouchStart);
  }

  onKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowLeft":
      case "KeyA":
        this.moveLeft();
        break;
      case "ArrowRight":
      case "KeyD":
        this.moveRight();
        break;
      default:
        this.xPos += 0;
    }
  };

  update() {
    this.x = this.xPos;
  }

  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    if (this.xPos > 0) {
      this.xPos -= this.maxMove;
    } else {
      this.xPos = 0;
    }
  }

  moveRight() {
    if (this.xPos < this.canvas.width - this.width) {
      this.xPos += this.maxMove;
    } else {
      this.xPos = this.canvas.width - this.width;
    }
  }
}
