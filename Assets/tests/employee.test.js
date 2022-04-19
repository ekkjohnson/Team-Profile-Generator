const EmployeeData = require('../lib/employee');


describe("EmployeeQuestions", () => {
  it("return the employee name", () => {
      var employee = new EmployeeData ("liz", "6", "liz@gmail.com", "employeee")
      var emloyeeName =employee.getName()
      expect(emloyeeName).toBe("liz")
  })
});
