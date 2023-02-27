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

  xPos: number;

  canvasWidth: number;

  canvasElement: HTMLElement;

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
    this.x = (this.canvas.width * scaleRatio) / 2;
    this.y = this.canvas.height - this.height - 20 * scaleRatio;

    this.imageFalcon = new Image();
    this.imageFalcon.src = falcon;
    this.image = this.imageFalcon;

    this.canvasElement = document.getElementById("game_3") as HTMLElement;
    this.canvasWidth = this.canvasElement.scrollWidth;
    this.xPos = (this.canvasWidth * scaleRatio + this.width / 2) / 2;

    this.canvas.removeEventListener("mouseup", this.onMouseDown);
    this.canvas.removeEventListener("touchmove", this.onTouchMove);
    this.canvas.addEventListener("mousedown", this.onMouseDown);
    this.canvas.addEventListener("touchmove", this.onTouchMove);
  }

  onTouchMove = (e: TouchEvent) => {
    this.xPos = e.touches[0].clientX - this.width / 2;
    if (this.xPos < 0 + this.width) {
      this.xPos = 0;
    }

    if (this.xPos + this.width > this.canvas.width) {
      this.xPos = this.canvas.width - this.width;
    }
  };

  onMouseDown = (e: MouseEvent) => {
    const padding = (window.innerWidth - this.canvasWidth) / 2;
    if (e.type === "mousedown") {
      this.xPos =
        (e.clientX - padding) *
          (this.scaleRatio > 1 ? this.scaleRatio : 1 / this.scaleRatio) -
        this.width / 2;
      const onMouseMove = (event: MouseEvent) => {
        this.xPos =
          (event.clientX - padding) *
            (this.scaleRatio > 1 ? this.scaleRatio : 1 / this.scaleRatio) -
          this.width / 2;

        if (this.xPos < 0) {
          this.xPos = 0;
        }
        if (this.xPos + this.width > this.canvas.width) {
          this.xPos = this.canvas.width - this.width;
        }
      };
      this.canvas.addEventListener("mousemove", onMouseMove);

      const onMouseUp = () => {
        this.canvas.removeEventListener("mousemove", onMouseMove);
      };

      this.canvas.addEventListener("mouseup", onMouseUp);
    }
  };

  update() {
    this.x = this.xPos;
  }

  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
