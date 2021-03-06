export default class User {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsPast = 0;
  }

  mercuryAge() {
    this.age = parseInt(this.age / 0.24);
    this.lifeExpectancy = parseInt(this.lifeExpectancy / 0.24 - this.age);
    if (this.lifeExpectancy < 0) {
      this.yearsPast = Math.abs(0 - this.lifeExpectancy);
      this.lifeExpectancy = 0;
    } else {
      this.lifeExpectancy += 0;
    }
  }

  venusAge() {
    this.age = parseInt(this.age / 0.62);
    this.lifeExpectancy = parseInt(this.lifeExpectancy / 0.62 - this.age);
    if (this.lifeExpectancy < 0) {
      this.yearsPast = Math.abs(0 - this.lifeExpectancy);
      this.lifeExpectancy = 0;
    } else {
      this.lifeExpectancy += 0;
    }
  }

  marsAge() {
    this.age = parseInt(this.age / 1.88);
    this.lifeExpectancy = parseInt(this.lifeExpectancy / 1.88 - this.age);
    if (this.lifeExpectancy < 0) {
      this.yearsPast = Math.abs(0 - this.lifeExpectancy);
      this.lifeExpectancy = 0;
    } else {
      this.lifeExpectancy += 0;
    }
  }

  jupiterAge() {
    this.age = parseInt(this.age / 11.86);
    this.lifeExpectancy = parseInt(this.lifeExpectancy / 11.86 - this.age);
    if (this.lifeExpectancy < 0) {
      this.yearsPast = Math.abs(0 - this.lifeExpectancy);
      this.lifeExpectancy = 0;
    } else {
      this.lifeExpectancy += 0;
    }
  }
}