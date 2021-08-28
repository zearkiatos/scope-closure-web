import { moneyBox, moneyBoxClosure } from "../../src/closure/closure";
describe("Test suite for closure", () => {
  test("Should return the current money quantity in the money box but it is not count for the total it is not a closure", () => {
    const expectedResult = "MoneyBox: $15";
    const realExpectedResult = "MoneyBox: $10";

    moneyBox(5);
    const moneyBoxTotal = moneyBox(10);

    expect(moneyBoxTotal).not.toBe(expectedResult);
    expect(moneyBoxTotal).toBe(realExpectedResult);
  });

  test("Should return the current money quantity in the money box with a closure structure", () => {
    const firstExpectedResult = "MoneyBox: $4";
    const secondExpectedResult = "MoneyBox: $10";
    const thirdExpectedResult = "MoneyBox: $20";

    const myMoneyBox = moneyBoxClosure();

    expect(myMoneyBox(4)).toBe(firstExpectedResult);
    expect(myMoneyBox(6)).toBe(secondExpectedResult);
    expect(myMoneyBox(10)).toBe(thirdExpectedResult);
  });
});
