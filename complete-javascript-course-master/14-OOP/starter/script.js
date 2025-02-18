'use strict';

/* 

//Using constructor function
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //instance methods /// NEVER use this kind of method
  // this.calcAge = function(){
  //     return 2025 - this.birthYear;
  // }
};

const me = new Person('Ibrahim', 2003);
const frnd = new Person('Muhammad', 2004);

console.log(me, frnd);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  return 2025 - this.birthYear;
};

console.log(me.calcAge());


///////////////////////////////////////////////////////////////////
///ES6 classes

//Class expression
// const PersonCl = class{}

//class declaration - prefarable one.
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  
  //method
  calcAge() {
    console.log(2025 - `${this.birthYear}` + ' years Old!');
  }
     //static methods
  static hey(){
    console.log("hey there :)");
    console.log(this);
  }
}

const me = new PersonCl('Ibrahim', 2003);
console.log(me);
me.calcAge();


//////////////////////////////////////////////////////////
///Setters and Getters

const accounts = {
  ownwer: 'Ibrahim',
  movements: [300, 404, 504, -200, 399],

  get latest() {
    return accounts.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

accounts.latest = 3040;
console.log(accounts.latest);


//////////////////////////////////////////////////////////////////
///Inheritance between classes: constructor function

const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.intro = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const ibrahim = new Student('Ibrahim', 2003, 'Software');
ibrahim.intro();
console.log(ibrahim.calcAge);


//////////////////////////////////////////////////////////////////
///Inheritance between classes: ES6 - Classes

//parent class
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //method
  calcAge() {
    console.log(2025 - `${this.birthYear}` + ' years Old!');
  }
  //static methods
  static hey() {
    console.log('hey there :)');
    console.log(this);
  }
}

//child class

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.console = course;
  }
  
  intro() {
    this.console.log(`My name is ${this.firstName}`);
  }
  
  calcAge(){
    console.log(`I am ${2025 - this.birthYear} years old, but i feel like i am ${2025 - this.birthYear + 10}`)
  }
}

const logan = new StudentCl('MarthaLogan', 1962, 'Catering');
// console.log(logan);
logan.calcAge();

*/

/////////////////////////////////////////////////////////////////////
///More on Classes ///////////////// Encapsulation

//bankist
class Account {
  //pubblic fields
  locale = navigator.language;

  //private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
  }

  //methods to interract with movements/ public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //private methods
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved :)');
    }
    return this;
  }
}

//new Object
const user1 = new Account('Ibrahim', 'naira', 8569);
user1.withdraw(200);
user1.deposit(100);
user1.requestLoan(300);
console.log(user1.getMovements());

//chaining
user1.deposit(200).deposit(300).deposit(90).withdraw(3999).requestLoan(2828282);


console.log(user1.getMovements());
