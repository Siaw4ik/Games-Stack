/**
 * @jest-environment jsdom
 */

import Score from "../../../../src/components/game3/module/score";

describe("Score update method:", () => {
  test("should return initial score = 0 with provided frameTimeDelta = 0", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const frameTimeDelta = 0;
    const scaleRatio = 1.111;
    const score = new Score(context, scaleRatio);
    score.update(frameTimeDelta);

    expect(score.score).toEqual(0);
  });

  test("should update score with provided frameTimeDelta", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const frameTimeDelta = 1200;
    const scaleRatio = 1.254;
    const score = new Score(context, scaleRatio);
    score.update(frameTimeDelta);

    expect(score.score).toEqual(2);
  });
});

describe("Score reset method:", () => {
  test("should reset current score to initial zero value", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const frameTimeDelta = 6000;
    const scaleRatio = 1.111;
    const score = new Score(context, scaleRatio);
    score.update(frameTimeDelta);
    score.reset();

    expect(score.score).toEqual(0);
  });

  test("shouldn't reset current score to initial zero value without invoking reset method", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const frameTimeDelta = 1200;
    const scaleRatio = 1.254;
    const score = new Score(context, scaleRatio);
    score.update(frameTimeDelta);

    expect(score.score).not.toEqual(0);
  });
});
