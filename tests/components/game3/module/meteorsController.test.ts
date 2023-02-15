/* eslint-disable import/no-unresolved */
/**
 * @jest-environment jsdom
 */
import MeteorsController from "../../../../src/components/game3/module/MeteorsController";

describe("MeteorsController getRandomNumber method:", () => {
  test("should return random number between two provided min and max arguments", () => {
    for (let i = 0; i < 20; i += 2) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;
      const scaleRatio = 1.111;
      const speed = 3.5;
      const min = i;
      const max = 30;
      const newMeteorsController = new MeteorsController(
        context,
        scaleRatio,
        speed
      );

      expect(
        newMeteorsController.getRandomNumber(min, max)
      ).toBeGreaterThanOrEqual(min);
      expect(
        newMeteorsController.getRandomNumber(min, max)
      ).toBeLessThanOrEqual(max);
    }
  });
});

describe("MeteorsController reset method:", () => {
  test("shouldn't return empty meteors array when it isn't invoked", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const scaleRatio = 1.111;
    const speed = 3.5;
    const newMeteorsController = new MeteorsController(
      context,
      scaleRatio,
      speed
    );
    newMeteorsController.createMeteors();

    expect(newMeteorsController.meteors.length).not.toEqual(0);
  });

  test("should return empty meteors array when it invoked", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const scaleRatio = 1.111;
    const speed = 3.5;
    const newMeteorsController = new MeteorsController(
      context,
      scaleRatio,
      speed
    );
    newMeteorsController.createMeteors();
    newMeteorsController.reset();

    expect(newMeteorsController.meteors.length).toEqual(0);
  });
});
