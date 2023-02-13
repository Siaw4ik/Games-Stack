import jedi from "../../../assets/images/jedi.png";
import jediRun1 from "../../../assets/images/jedi_run1.png";
import jediRun2 from "../../../assets/images/jedi_run2.png";

export default class Player {
  walk_animation_timer = 200;

  walkAnimationTimer = this.walk_animation_timer;

  dinoRunImages: HTMLImageElement[] = [];

  jumpPressed = false;

  jumpInProgress = false;

  falling = false;

  jump_speed = 0.6;

  gravity = 0.35;

  ctx: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  width: number;

  height: number;

  minJumpHeight: number;

  maxJumpHeight: number;

  scaleRatio: number;

  x: number;

  y: number;

  yStandingPosition: number;

  standingStillImage: HTMLImageElement;

  image: HTMLImageElement;

  dinoRunImage1: HTMLImageElement;

  dinoRunImage2: HTMLImageElement;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    minJumpHeight: number,
    maxJumpHeight: number,
    scaleRatio: number
  ) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.width = width;
    this.height = height;
    this.minJumpHeight = minJumpHeight;
    this.maxJumpHeight = maxJumpHeight;
    this.scaleRatio = scaleRatio;

    this.x = 180 * scaleRatio;
    this.y = this.canvas.height - this.height - 1.5 * scaleRatio;
    this.yStandingPosition = this.y;

    this.standingStillImage = new Image();
    this.standingStillImage.src = jedi;
    this.image = this.standingStillImage;

    this.dinoRunImage1 = new Image();
    this.dinoRunImage1.src = jediRun1;

    this.dinoRunImage2 = new Image();
    this.dinoRunImage2.src = jediRun2;
    this.dinoRunImages.push(this.dinoRunImage1);
    this.dinoRunImages.push(this.dinoRunImage2);

    window.removeEventListener("keydown", this.keydown);
    window.removeEventListener("keyup", this.keyup);
    window.addEventListener("keydown", this.keydown);
    window.addEventListener("keyup", this.keyup);

    window.removeEventListener("touchstart", this.touchstart);
    window.removeEventListener("touchend", this.touchend);
    window.addEventListener("touchstart", this.touchstart);
    window.addEventListener("touchend", this.touchend);
  }

  keydown = (event: KeyboardEvent) => {
    if (event.code === "Space") {
      this.jumpPressed = true;
    }
  };

  keyup = (event: KeyboardEvent) => {
    if (event.code === "Space") {
      this.jumpPressed = false;
    }
  };

  touchstart = () => {
    this.jumpPressed = true;
  };

  touchend = () => {
    this.jumpPressed = false;
  };

  update(gameSpeed: number, frameTimeDelta: number) {
    this.run(gameSpeed, frameTimeDelta);
    if (this.jumpInProgress) {
      this.image = this.standingStillImage;
    }
    this.jump(frameTimeDelta);
  }

  jump(frameTimeDelta: number) {
    if (this.jumpPressed) {
      this.jumpInProgress = true;
    }

    if (this.jumpInProgress && !this.falling) {
      if (
        this.y > this.canvas.height - this.minJumpHeight ||
        (this.y > this.canvas.height - this.maxJumpHeight && this.jumpPressed)
      ) {
        this.y -= this.jump_speed * frameTimeDelta * this.scaleRatio;
      } else {
        this.falling = true;
      }
    } else if (this.y < this.yStandingPosition) {
      this.y += this.gravity * frameTimeDelta * this.scaleRatio;
      if (this.y + this.height > this.canvas.height) {
        this.y = this.yStandingPosition;
      }
    } else {
      this.falling = false;
      this.jumpInProgress = false;
    }
  }

  run(gameSpeed: number, frameTimeDelta: number) {
    if (this.walkAnimationTimer <= 0) {
      this.image =
        this.image === this.dinoRunImages[0]
          ? this.dinoRunImages[1]
          : this.dinoRunImages[0];
      this.walkAnimationTimer = this.walk_animation_timer;
    }
    this.walkAnimationTimer -= frameTimeDelta * gameSpeed;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
