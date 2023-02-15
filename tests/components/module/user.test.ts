import { User } from "../../../src/components/module/User";

const user = new User();

describe("user.reсordUser function:", () => {
  test("should return a response from the server stating that this user already exists on the server", async () => {
    const data = await user.reсordUser({
      username: "Slawik",
      password: "slawacool",
    });
    expect(data).toEqual({
      success: false,
      message: "Username is already exists",
    });
  });
});

const successLogin = {
  success: true,
  user: {
    _id: "63ecaff846cea8759fe949a9",
    username: "TestGameStack001",
    __v: 0,
    password: "testgamestack001",
    highScores: {
      "Jedi's Mind": 11,
      "Jedi's Agility": 44,
      "Jedi's Mobility": 48,
      "Jedi's Strategy": 4,
      "Jedi's Memory": 260,
    },
  },
};

describe("user.loginUser function:", () => {
  test("should return a response from the server stating that the user has successfully registered on the site", async () => {
    const data = await user.loginUser({
      username: "TestGameStack001",
      password: "testgamestack001",
    });
    expect(data).toEqual(successLogin);
  });
});
