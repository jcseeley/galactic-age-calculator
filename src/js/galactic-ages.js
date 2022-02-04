export default class User {
  constructor(age, yearsLeft) {
    this.age = age;
    this.yearsLeft = yearsLeft;
  }

  mercuryAge() {
    this.age = parseInt(this.age / 0.24);
    this.yearsLeft = parseInt(this.yearsLeft / 0.24 - this.age);
  }
}