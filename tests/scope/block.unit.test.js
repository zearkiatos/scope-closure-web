import { fruits } from "../../src/scope/block";
describe("Test suite for block", () => {
  test("Should return item and return, it can access to a block scope", () => {
    const expectedResult = {
      fruits1: "Apple 🍎",
      fruits2: "Banana 🍌",
      fruits3: "Kiwi 🥝",
    };

    const result = fruits();

    expect(result).toEqual(expectedResult);
  });

  test("Should return the correct value for the first scope before the block", () => {
    const expectedResult = 1;
    const fnLet = () => {
      let x = 1;
      {
        let x = 2;
        console.log(x);
      }
      return x;
    };

    const result = fnLet();

    expect(result).toBe(expectedResult);
  });

  test("Should return the correct value when use var declaration it is change the first initialization value in the block", () => {
    const expectedResult = 2;
    const fnLet = () => {
      var x = 1;
      {
        var x = 2;
        console.log(x);
      }
      return x;
    };

    const result = fnLet();

    expect(result).toBe(expectedResult);
  });
});
