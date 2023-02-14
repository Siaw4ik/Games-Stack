function ab(a:number,b: number){
	return a + b
}

describe("calculateDiscount function:", () => {
	test("should return price with discount", () => {
	  expect(ab(5000, 20)).toBe(5020);
	});
  });