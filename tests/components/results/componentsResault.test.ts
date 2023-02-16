import { createObjParametr } from "../../../src/components/results/componentsResault";

const arrcreateObjParametr = [
  {
    username: "Slawik",
    option: "ascScore",
  },
  {
    username: "Dima",
    option: "descScore",
  },
  {
    username: "Maxim",
    option: "ascScore",
  },
];

describe("createObjParametr function:", () => {
  test("should return an object with two fields, 1 field its value is truncated to 6 by the character of 1 argument, 2 field - 2 argument", () => {
    expect(createObjParametr("table-Slawik", "ascScore")).toEqual(
      arrcreateObjParametr[0]
    );
    expect(createObjParametr("table-Dima", "descScore")).toEqual(
      arrcreateObjParametr[1]
    );
    expect(createObjParametr("table-Maxim", "ascScore")).toEqual(
      arrcreateObjParametr[2]
    );
  });
});
