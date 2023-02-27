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
    this.score += frameTimeDelta / 600;
  }

  reset() {
    this.score = 0;
  }

  draw() {
    const y = 30 * this.scaleRatio;

    const fontSize = 18 * this.scaleRatio;
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = "black";
    const scoreX = this.canvas.width - 85 * this.scaleRatio;
    const scorePadded = Math.floor(this.score).toString().padStart(6, "0");
    this.ctx.fillText(scorePadded, scoreX, y);
  }
}
