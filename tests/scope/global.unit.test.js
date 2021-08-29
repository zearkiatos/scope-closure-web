import { getHello, getWorld, getHelloWorld, setHello } from "../../src/scope/global";
describe("Test site for global variables", () => {
  test("Should return the data for global variables hello", () => {
    const expectResult = "Hello";

    const result = getHello();

    expect(result).toBe(expectResult);
  });

  test("Should return the data for global variables world", () => {
    const expectResult = "Hello World";

    const result = getWorld();

    expect(result).toBe(expectResult);
  });

  test("Should return the data for global variables helloWorld", () => {
    const expectResult = "Hello World!";

    const result = getHelloWorld();

    expect(result).toBe(expectResult);
  });

  test("Should return set variable hello and return the new value", () => {
    const expectResult = "Hello +";

    setHello('Hello +');
    const result = getHello();

    expect(result).toBe(expectResult);
  });
});
