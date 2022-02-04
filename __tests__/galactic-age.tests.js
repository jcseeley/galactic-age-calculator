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

});