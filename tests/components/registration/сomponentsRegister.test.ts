import {
  checkValidLoginSignUP,
  checkValidPasswordSignUP,
} from "../../../src/components/registration/сomponentsRegister";

describe("checkValidLoginSignUP function:", () => {
  test("return a boolean value, corresponding to the validation login string longer than 5 characters and have capital letters", () => {
    expect(checkValidLoginSignUP("Slawik")).toBe(true);
    expect(checkValidLoginSignUP("slawa")).toBe(false);
    expect(checkValidLoginSignUP("s")).toBe(false);
    expect(checkValidLoginSignUP("SlawikCool")).toBe(true);
  });
});

describe("checkValidPasswordSignUP function:", () => {
  test("return a boolean value, corresponding to the validation password string longer than 5 characters", () => {
    expect(checkValidPasswordSignUP("Slawik")).toBe(true);
    expect(checkValidPasswordSignUP("slawaaa")).toBe(true);
    expect(checkValidPasswordSignUP("s")).toBe(false);
    expect(checkValidPasswordSignUP("")).toBe(false);
  });
});
