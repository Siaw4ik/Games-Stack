/**
 * @jest-environment jsdom
 */
import Ground from "../../../../src/components/game2/types/background";

describe("Ground update method:", () => {
  test("should return initial x = 0 with provided frameTimeDelta = 0", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = 1000;
    const height = 400;
    const speed = 1.5;
    const scaleRatio = 1.1;
    const frameTimeDelta = 0;
    const gameSpeed = 30;
    const newGround = new Ground(ctx, width, height, speed, scaleRatio);
    newGround.update(gameSpeed, frameTimeDelta);

    expect(newGround.x).toEqual(0);
  });

  test("should update x with provided frameTimeDelta and gameSpeed", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = 1000;
    const height = 400;
    const speed = 1.5;
    const scaleRatio = 1.1;
    const frameTimeDelta = 100;
    const gameSpeed = 50;
    const newGround = new Ground(ctx, width, height, speed, scaleRatio);
    newGround.update(gameSpeed, frameTimeDelta);

    expect(newGround.x).toEqual(-8250);
  });
});

describe("Ground reset method:", () => {
  test("shouldn't reset current x value to initial zero value without invoking reset method", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = 100;
    const height = 100;
    const speed = 1.5;
    const scaleRatio = 1.8;
    const frameTimeDelta = 10;
    const gameSpeed = 40;
    const newGround = new Ground(ctx, width, height, speed, scaleRatio);
    newGround.update(gameSpeed, frameTimeDelta);

    expect(newGround.x).not.toEqual(0);
  });

  test("should reset x to initial zero value", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = 100;
    const height = 100;
    const speed = 1.5;
    const scaleRatio = 1.8;
    const frameTimeDelta = 10;
    const gameSpeed = 40;
    const newGround = new Ground(ctx, width, height, speed, scaleRatio);
    newGround.update(gameSpeed, frameTimeDelta);
    newGround.reset();

    expect(newGround.x).toEqual(0);
  });
});
