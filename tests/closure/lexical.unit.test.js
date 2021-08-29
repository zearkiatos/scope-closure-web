import { buildCount } from "../../src/closure/lexical";
describe("Test suite for scope lexical", () => {
  test("Should return the value of a count element inside the lexical scope", () => {
    const firstExpectValue = 1;
    const secondExpectValue = 2;
    const thridExpectValue = 3;

    const myCount = buildCount(1);

    expect(myCount()).toBe(firstExpectValue);
    expect(myCount()).toBe(secondExpectValue);
    expect(myCount()).toBe(thridExpectValue);
  });
});