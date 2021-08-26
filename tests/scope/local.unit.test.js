import { helloWorld, functionScope, getGlobalScope } from "../../src/scope/local";
describe('Test suite for local variables', () => {
    test("Should return the data for local variables hello", () => {
        const expectedResult = 'hello is not defined';
        
        helloWorld();
        
        try {
            console.log(hello);
        }
        catch(e) {
            expect(e.message).toBe(expectedResult);
        }

      });

      test("Should execute function a return a function with local scope value", () => {
        const expectedResult = "I am just a local";
        
        const localScope = functionScope();
        
        expect(localScope).toBe(expectedResult);
      });

      test("Should get global scope value", () => {
        const expectedResult = "I am global";
        
        const localScope = getGlobalScope();
        
        expect(localScope).toBe(expectedResult);
      });
})