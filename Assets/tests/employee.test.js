const employeeData = require('../lib/employee');


describe("EmployeeQuestions", () => {
  it("return the employee name", () => {
      var employee = new employeeData ("liz", "6", "liz@gmail.com", "employee")
      var employeeName =employee.getName()
      expect(employeeName).toBe("liz")
  })
});
