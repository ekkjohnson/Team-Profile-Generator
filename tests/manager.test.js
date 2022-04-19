const Manager = require('../lib/manager');
describe('Manager', () =>{

  it('Should have name, id, email attributes, and office number after instantiation.', () => {
      const liz = new Manager('liz', 10, 'liz@gmail.com', 6);

      expect(liz.name).toBe('liz');
      expect(liz.id).toBe(10);
      expect(liz.email).toBe('liz@gmail.com');
      expect(liz.officeNumber).toBe(6);
  });

  
});