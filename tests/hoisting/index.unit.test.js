import { nameOfDog } from '../../src/hoisting';
describe("Test suites for hoisting", () => {
  test("Should assigned value in a before it will be declare", () => {
    const expectResult = 2;

    a = 2;
    var a;

    expect(a).toBe(expectResult);
  });

  test("Should the variable a be undefined if is declare and assigned after it will be evaluate", () => {
    const expectResult = 'Rocky';

    const dogName = nameOfDog('Rocky');

    expect(expectResult).toBe(dogName);
  });

  test("Should return the name of a dog", () => {
    expect(a).toBeUndefined();
    var a = 2;
  });
});