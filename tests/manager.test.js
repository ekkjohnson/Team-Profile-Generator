const Manager = require('../lib/manager');
describe('Manager', () =>{

  it('Should have name, id, email attributes, and office number after instantiation.', () => {
      const liz = new Manager('liz', 10, 'liz@gmail.com', 6);

      expect(liz.name).toBe('liz');
      expect(liz.id).toBe(10);
      expect(liz.email).toBe('liz@gmail.com');
      expect(liz.OfficeNumber).toBe(6)
  });

  it('should get the name, id, email, role, and office number using methods', () => {
      const ella = new Manager('ella', 33, 'ella@gmail.com', 7);

      expect(ella.getName()).toBe('ella');
      expect(ella.getId()).toBe(33);
      expect(ella.getEmail()).toBe('ella@gmail.com');
      expect(ella.getOfficeNumber()).toBe(7)
      expect(ella.getRole()).toBe('Manager');

  });
});