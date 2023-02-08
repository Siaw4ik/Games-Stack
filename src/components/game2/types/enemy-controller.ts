import Enemy from "./enemy";
import Player from "./jedi";

export default class EnemyController {
  enemy_interval_min = 600;

  enemy_interval_max = 2000;

  nextEnemyInterval = 0;

  enemy: Enemy[] = [];

  ctx: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  enemyImages: { image: HTMLImageElement; width: number; height: number }[];

  scaleRatio: number;

  speed: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    enemyImages: { image: HTMLImageElement; width: number; height: number }[],
    scaleRatio: number,
    speed: number
  ) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.enemyImages = enemyImages;
    this.scaleRatio = scaleRatio;
    this.speed = speed;
    this.setNextEnemyTime();
  }

  setNextEnemyTime() {
    const num = this.getRandomNumber(
      this.enemy_interval_min,
      this.enemy_interval_max
    );
    this.nextEnemyInterval = num;
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  createEnemy() {
    const index = this.getRandomNumber(0, this.enemyImages.length - 1);
    const enemyImage = this.enemyImages[index];
    const x = this.canvas.width * 1.5;
    const y = this.canvas.height - enemyImage.height;
    const enemy = new Enemy(
      this.ctx,
      x,
      y,
      enemyImage.width,
      enemyImage.height,
      enemyImage.image
    );
    this.enemy.push(enemy);
  }

  update(gameSpeed: number, frameTimeDelta: number) {
    if (this.nextEnemyInterval <= 0) {
      this.createEnemy();
      this.setNextEnemyTime();
    }
    this.nextEnemyInterval -= frameTimeDelta;
    this.enemy.forEach((enemy) => {
      enemy.update(this.speed, gameSpeed, frameTimeDelta, this.scaleRatio);
    });

    this.enemy = this.enemy.filter((cactus) => cactus.x > -cactus.width);
  }

  draw() {
    this.enemy.forEach((enemy) => enemy.draw());
  }

  collideWith(sprite: Player) {
    return this.enemy.some((enemy) => enemy.collideWith(sprite));
  }

  reset() {
    this.enemy = [];
  }
}
