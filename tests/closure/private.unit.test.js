import { person  } from "../../src/closure/private";
describe("Test suite for scope lexical", () => {
  test("Should get and set the name from function person", () => {
    const expectValue = 'Pedro';

    const newPerson = person();
    newPerson.setName('Pedro');

    expect(newPerson.getName()).toBe(expectValue);


  });
});