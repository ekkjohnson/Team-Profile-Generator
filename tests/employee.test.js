const Employee = require('../lib/employee');
describe('Employee', () =>{

  it('Should have name, id, and email attributes after instantiation.', () => {
      const liz = new Employee('liz', 10, 'liz@gmail.com');

      expect(liz.name).toBe('liz');
      expect(liz.id).toBe(10);
      expect(liz.email).toBe('liz@gmail.com');
  });

  
});