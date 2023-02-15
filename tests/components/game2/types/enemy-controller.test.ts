/**
 * @jest-environment jsdom
 */

import EnemyController from "../../../../src/components/game2/types/enemy-controller";

describe("MeteorsController getRandomNumber method:", () => {
  test("should return random number between two provided min and max arguments", () => {
    for (let i = 0; i < 20; i += 2) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      const scaleRatio = 6.76;
      const speed = 9.5;
      const min = i;
      const max = 30;
      const img = new Image();
      img.src = "../assets/enemy_1.png";
      const enemyImages = [{ image: img, width: 100, height: 20 }];
      const enemyController = new EnemyController(
        ctx,
        enemyImages,
        scaleRatio,
        speed
      );

      expect(enemyController.getRandomNumber(min, max)).toBeGreaterThanOrEqual(
        min
      );
      expect(enemyController.getRandomNumber(min, max)).toBeLessThanOrEqual(
        max
      );
    }
  });
});

describe("MeteorsController reset method:", () => {
  test("shouldn't return empty meteors array when it isn't invoked", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const scaleRatio = 6.76;
    const speed = 9.5;
    const img = new Image();
    img.src = "../assets/enemy_1.png";
    const enemyImages = [{ image: img, width: 100, height: 20 }];
    const enemyController = new EnemyController(
      ctx,
      enemyImages,
      scaleRatio,
      speed
    );
    enemyController.createEnemy();

    expect(enemyController.enemy.length).not.toEqual(0);
  });

  test("should return empty meteors array when it invoked", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const scaleRatio = 6.76;
    const speed = 9.5;
    const img = new Image();
    img.src = "../assets/enemy_1.png";
    const enemyImages = [{ image: img, width: 100, height: 20 }];
    const enemyController = new EnemyController(
      ctx,
      enemyImages,
      scaleRatio,
      speed
    );
    enemyController.createEnemy();
    enemyController.reset();

    expect(enemyController.enemy.length).toEqual(0);
  });
});
