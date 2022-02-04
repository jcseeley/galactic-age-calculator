export default class User {
  constructor(age, yearsLeft) {
    this.age = age;
    this.yearsLeft = yearsLeft;
  }

  mercuryAge() {
    this.age = parseInt(this.age / 0.24);
  }
}