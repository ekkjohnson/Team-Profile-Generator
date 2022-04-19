const Intern = require('../lib/intern');
describe('Intern', () =>{

  it('Should have name, id, and email and school attributes after instantiation.', () => {
      const liz = new Intern('liz', 10, 'liz@gmail.com, UM');

      expect(liz.name).toBe('liz');
      expect(liz.id).toBe(10);
      expect(liz.email).toBe('liz@gmail.com');
      expect(liz.school).toBe('UM');
  });

  it('should get the name, email, id, and role using methods', () => {
      const ella = new Intern('ella', 33, 'ella@gmail.com');

      expect(ella.getName()).toBe('ella');
      expect(ella.getId()).toBe(33);
      expect(ella.getEmail()).toBe('ella@gmail.com');
      expect(ella.getSchool()).toBe('UM');
      expect(ella.getRole()).toBe('Intern');
  });
});