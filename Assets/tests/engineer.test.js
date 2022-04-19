const engineerData = require('../lib/engineer');


describe("EngineerQuestions", () => {
  it("return the Engineer name", () => {
      var engineer = new engineerData ("liz", "6", "liz@gmail.com", "Engineer")
      var engineerName =engineer.getName()
      expect(engineerName).toBe("liz")
  })
});
