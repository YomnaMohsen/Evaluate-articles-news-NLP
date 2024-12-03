/**
 * @jest-environment jsdom
 */


const handleSubmit = require("../formHandler");
 
describe("Testing the submit functionality", () => {
test("Testing the handleSubmit() function", () => {
      expect(handleSubmit).toBeDefined();
})});