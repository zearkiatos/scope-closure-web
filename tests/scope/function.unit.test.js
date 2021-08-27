import { fruits, anotherFunction } from "../../src/scope/function";
describe("Test suite for function", () => {
  test("Should return an error if try to access to variable into the function scope", () => {
    const expectedResult = "fruit is not defined";

    fruits();

    try {
      console.log(fruit);
    } catch (e) {
      expect(e.message).toBe(expectedResult);
    }
  });

  test("Should return an object value", () => {
    const expectedResult = {
        x: 2,
        y: 1
    };

    const result = anotherFunction();

    expect(result).toEqual(expectedResult);
  });
});
