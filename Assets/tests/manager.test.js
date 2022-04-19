const managerData = require('../lib/manager');


describe("managerQuestions", () => {
  it("return the manager name", () => {
      var manager = new managerData ("liz", "6", "liz@gmail.com", "manager")
      var managerName =manager.getName()
      expect(managerName).toBe("liz")
  })
});