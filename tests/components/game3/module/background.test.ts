/* eslint-disable import/no-unresolved */
/**
 * @jest-environment jsdom
 */
import Background from "../../../../src/components/game3/module/background";

describe("Background update method:", () => {
  test("should return initial y = 0 with provided frameTimeDelta = 0", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = 200;
    const height = 100;
    const speed = 3.5;
    const scaleRatio = 1.111;
    const frameTimeDelta = 0;
    const gameSpeed = 50;
    const newBackground = new Background(
      context,
      width,
      height,
      speed,
      scaleRatio
    );
    newBackground.update(gameSpeed, frameTimeDelta);

    expect(newBackground.y).toEqual(0);
  });

  test("should update y with provided frameTimeDelta and gameSpeed", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = 200;
    const height = 100;
    const speed = 3.5;
    const scaleRatio = 1.5;
    const frameTimeDelta = 10;
    const gameSpeed = 50;
    const newBackground = new Background(
      context,
      width,
      height,
      speed,
      scaleRatio
    );
    newBackground.update(gameSpeed, frameTimeDelta);

    expect(newBackground.y).toEqual(2625);
  });
});

describe("Background reset method:", () => {
  test("shouldn't reset current y value to initial zero value without invoking reset method", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = 200;
    const height = 100;
    const speed = 3.5;
    const scaleRatio = 1.111;
    const frameTimeDelta = 10;
    const gameSpeed = 50;
    const newBackground = new Background(
      context,
      width,
      height,
      speed,
      scaleRatio
    );
    newBackground.update(gameSpeed, frameTimeDelta);

    expect(newBackground.y).not.toEqual(0);
  });

  test("should reset y to initial zero value", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = 200;
    const height = 100;
    const speed = 3.5;
    const scaleRatio = 1.5;
    const frameTimeDelta = 10;
    const gameSpeed = 50;
    const newBackground = new Background(
      context,
      width,
      height,
      speed,
      scaleRatio
    );
    newBackground.update(gameSpeed, frameTimeDelta);
    newBackground.reset();

    expect(newBackground.y).toEqual(0);
  });
});
