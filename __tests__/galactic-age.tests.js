import User from '../src/js/galactic-ages';

describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User(30,79);
  });

  test('should correctly create a user object with two numbers', () => {
    expect(user.age).toEqual(30);
    expect(user.yearsLeft).toEqual(79); 
  });

  test('should change user age to Mercury years', () => {
    user.mercuryAge();
    expect(user.age).toEqual(125);
  });

  test('should change user age to Mercury age and yearsLeft to expected years left to live', () => {
    user.mercuryAge();
    expect(user.age).toEqual(125);
    expect(user.yearsLeft).toEqual(204);
  });

});