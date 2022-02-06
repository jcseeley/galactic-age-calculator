import User from '../src/js/galactic-ages';

describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User(30,79);
  });

  test('should correctly create a user object with age, lifeExpectancy, and yearsPast properties', () => {
    expect(user.age).toEqual(30);
    expect(user.lifeExpectancy).toEqual(79);
    expect(user.yearsPast).toEqual(0);
  });

  test('should change user age to Mercury years', () => {
    user.mercuryAge();
    expect(user.age).toEqual(125);
  });

  test('should change lifeExpectancy to Mercury years left to live', () => {
    user.mercuryAge();
    expect(user.lifeExpectancy).toEqual(204);
  });

  test('should add a yearsPast property with a positive number if user has lived beyond life expectancy', () => {
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

  test('should add a yearsPast property with a positive number if user has lived beyond life expectancy', () => {
    let user = new User(85,79);
    user.venusAge();
    expect(user.yearsPast).toEqual(9);
  });

  test('should change user age to Mars years', () => {
    user.marsAge();
    expect(user.age).toEqual(15);
  });

  test('should change lifeExpectancy to Mars years left to live', () => {
    user.marsAge();
    expect(user.lifeExpectancy).toEqual(27);
  });

  test('should add a yearsPast property with a positive number if user has lived beyond life expectancy', () => {
    let user = new User(85,79);
    user.marsAge();
    expect(user.yearsPast).toEqual(2);
  });

  test('should change user age to Jupiter years', () => {
    user.jupiterAge();
    expect(user.age).toEqual(2);
  });
  test('should change lifeExpectancy to Jupiter years left to live', () => {
    user.jupiterAge();
    expect(user.lifeExpectancy).toEqual(4);
  });

  test('should add a yearsPast property with a positive number if user has lived far enough beyond life expectancy', () => {
    let user = new User(95,79);
    user.jupiterAge();
    expect(user.yearsPast).toEqual(1);
  });

});