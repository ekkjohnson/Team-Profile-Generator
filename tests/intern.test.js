const Intern = require('../lib/intern');
describe('Intern', () =>{

  it('Should have name, id, and email and school attributes after instantiation.', () => {
      const liz = new Intern('liz', 10, 'liz@gmail.com', 'UM');

      expect(liz.name).toBe('liz');
      expect(liz.id).toBe(10);
      expect(liz.email).toBe('liz@gmail.com');
      expect(liz.school).toBe('UM');
  });


});