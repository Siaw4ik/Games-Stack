export default class Score {
  context: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  scaleRatio: number;

  constructor(context: CanvasRenderingContext2D, scaleRatio: number) {
    this.context = context;
    this.canvas = context.canvas;
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
    const y = this.canvas.height / 7;

    const fontSize = 18 * this.scaleRatio;
    this.context.font = `${fontSize}px sans-serif`;
    this.context.fillStyle = "white";
    const scoreX = this.canvas.width - 85 * this.scaleRatio;
    const scorePadded = Math.floor(this.score).toString().padStart(6, "0");
    this.context.fillText(scorePadded, scoreX, y);
  }
}
