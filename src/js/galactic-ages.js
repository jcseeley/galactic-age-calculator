export default class User {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryAge() {
    this.age = parseInt(this.age / 0.24);
    this.lifeExpectancy = parseInt(this.lifeExpectancy / 0.24 - this.age);
    if (this.lifeExpectancy < 0) {
      this.yearsPast = Math.abs(0 - this.lifeExpectancy);
    }
  }

  venusAge() {
    this.age = parseInt(this.age / 0.62);
  }
}