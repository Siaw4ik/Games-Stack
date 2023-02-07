export default class Score {
  ctx: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  scaleRatio: number;

  constructor(ctx: CanvasRenderingContext2D, scaleRatio: number) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.scaleRatio = scaleRatio;
  }

  score = 0;

  update(frameTimeDelta: number) {
    this.score += frameTimeDelta;
  }

  reset() {
    this.score = 0;
  }

  draw() {
    const y = 20 * this.scaleRatio;

    const fontSize = 20 * this.scaleRatio;
    this.ctx.font = `${fontSize}px serif`;
    this.ctx.fillStyle = "#525250";
    const scoreX = this.canvas.width - 75 * this.scaleRatio;
    const scorePadded = Math.floor(this.score).toString().padStart(6, "0");
    this.ctx.fillText(scorePadded, scoreX, y);
  }
}
