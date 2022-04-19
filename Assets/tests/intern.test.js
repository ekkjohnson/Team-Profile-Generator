const internData = require('../lib/intern');


describe("internrQuestions", () => {
  it("return the internr name", () => {
      var intern = new internData ("liz", "6", "liz@gmail.com", "intern")
      var internName =intern.getName()
      expect(internName).toBe("liz")
  })
});