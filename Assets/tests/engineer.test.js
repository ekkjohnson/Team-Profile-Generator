const Engineer = require('../lib/engineer');
describe('Engineer', () =>{

  it('Should have name, id, and email attributes and github after instantiation.', () => {
      const liz = new Engineer('liz', 10, 'liz@gmail.com');

      expect(liz.name).toBe('liz');
      expect(liz.id).toBe(10);
      expect(liz.email).toBe('liz@gmail.com');
      expect(liz.github).toBe(liz99);
  });

  it('should get the name, email, id, and role using methods', () => {
      const ella = new Engineer('ella', 33, 'ella@gmail.com');

      expect(ella.getName()).toBe('ella');
      expect(ella.getId()).toBe(33);
      expect(ella.getEmail()).toBe('ella@gmail.com');
      expect(ella.getRole()).toBe('Engineer');
      expect(ella.getGitHub()).toBe('ella98');
  });
});