import { action, makeObservable, observable } from "mobx";

class Athlete {
  name: string;
  age: number;
  teamHistory: string[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.teamHistory = [];

    makeObservable(this, {
      wishHappyBirthday: action,
      name: observable,
      age: observable,
      teamHistory: true,
    });
  }

  wishHappyBirthday() {
    this.age++;
  }
}

export default Athlete;