const Engineer = require('../lib/engineer');
describe('Engineer', () =>{

  it('Should have name, id, and email attributes and github after instantiation.', () => {
      const liz = new Engineer('liz', 10, 'liz@gmail.com', 'liz99');

      expect(liz.name).toBe('liz');
      expect(liz.id).toBe(10);
      expect(liz.email).toBe('liz@gmail.com');
      expect(liz.github).toBe('liz99')
  });


});