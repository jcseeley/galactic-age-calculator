import User from '../src/js/galactic-ages';

describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User(30,79);
  });

  test('should correctly create a user object with age and lifeExpectancy', () => {
    expect(user.age).toEqual(30);
    expect(user.lifeExpectancy).toEqual(79); 
  });

  test('should change user age to Mercury years', () => {
    user.mercuryAge();
    expect(user.age).toEqual(125);
  });

  test('should change lifeExpectancy to Mercury years left to live', () => {
    user.mercuryAge();
    expect(user.lifeExpectancy).toEqual(204);
  });

  test('should add a yearsPast property with a positive number if user age is higher than lifeExpectancy', () => {
    let user = new User(85,79);
    user.mercuryAge();
    expect(user.yearsPast).toEqual(24);
  });

  test('should change user age to Venus years', () => {
    user.venusAge();
    expect(user.age).toEqual(48);
  });

  test('should change lifeExpectancy to Venus years left to live', () => {
    user.venusAge();
    expect(user.lifeExpectancy).toEqual(79);
  });

  test('should add a yearsPast property with a positive number if user age is higher than lifeExpectancy', () => {
    let user = new User(85,79);
    user.venusAge();
    expect(user.yearsPast).toEqual(9);
  });

});