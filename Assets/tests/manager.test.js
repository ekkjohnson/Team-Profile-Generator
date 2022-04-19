const Manager = require('../lib/manager');
describe('Manager', () =>{

  it('Should have name, id, and email attributes after instantiation.', () => {
      const liz = new Manager('liz', 10, 'liz@gmail.com');

      expect(liz.name).toBe('liz');
      expect(liz.id).toBe(10);
      expect(liz.email).toBe('liz@gmail.com');
  });

  it('should get the name, email, id, and role using methods', () => {
      const ella = new Manager('ella', 33, 'ella@gmail.com');

      expect(ella.getName()).toBe('ella');
      expect(ella.getId()).toBe(33);
      expect(ella.getEmail()).toBe('ella@gmail.com');
      expect(ella.getRole()).toBe('Manager');
  });
});