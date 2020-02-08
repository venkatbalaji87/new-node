/**
 * Property
 * Method
 */

class human {
  //static method
  static someMehtod() {
    console.log("it has nothing to do with this process");
  }
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastname = lastName;
    this._spokenWords = [];
  }
  // _firstName = "";
  //_lastname = "";

  //getter
  get name() {
    return this._firstName + " " + this._lastname;
  }

  //seter
  set name(human) {
    const [firstName = "", lastName = ""] = human.split(" ");
    this._firstName = firstName;
    this._lastname = lastName;
  }

  speak(word) {
    this._spokenWords.push.push(word);
    console.log(word);
  }
}

const manojBalaji = new human("Manoj", "balaji", "he is good enogh");
manojBalaji.name = "balaji fromerode";
console.log(manojBalaji);
console.log(manojBalaji.name);
human.someMehtod();
