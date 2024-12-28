'use strict';
/* const bookings = [];
const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {
  //ES5
//   numPassengers = numPassengers || 1;
//   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 23, '$400');
createBooking('LH123');
createBooking('LH123', 3);
createBooking('LH123', 6);
 

///////////////////////////////////////////////////////////////////
///How Passing Arguments Works

const flight = 'LH234';
const ibrahim = {
  name: 'Ibrahim, Suleiman',
  passport: 7654567865765,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  passenger.passport === 7654567865765
    ? alert('Checked In')
    : alert('Invalid Passport');
};

checkIn(flight, ibrahim);
console.log(flight);
console.log(ibrahim);

const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(ibrahim);
checkIn(flight, ibrahim);
///////////////////////////////////////////////////////////////////
///Functions Accepting CallBacks

const oneWord = str => {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = str => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function

const transformer = (str, fn) => {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

transformer('JavaScript is the best programming language!', upperFirstWord);
transformer('JavaScript is the best programming language!', oneWord);

//JS call backs all the time

const high5 = function () {
  console.log('🙋‍♂️');
};

document.body.addEventListener('click', high5);
['ibrahim', 'marhta', 'logan'].forEach(high5);

//*************************My callaBackFunction****************** 

const mr = str => {
  return 'Mr. ' + str;
};
const alhaji = str => {
  return 'Alhaji ' + str;
};
const engr = str => {
  return 'ENG. ' + str;
};
const dr = str => {
  return 'DR. ' + str;
};

const fullName = (name, fn) => {
  console.log(`Welcome -- ${fn(name)}`)
  console.log(`Welcome ${name}`)
};

fullName('Ibrahim Suleiman', mr);
fullName('Ibrahim Suleiman', alhaji);
fullName('Ibrahim Suleiman', engr);
fullName('Ibrahim Suleiman', dr);

//////////////////////////////////////////////////////////////////
///Function returning functions

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Ibrahim');
greeterHey('Peter Paker');

greet('Hello')('MJ');

//////////////////////////////////////////////////////////////////
///Function returning functions

const airPeace = {
  airline: 'Air Peace',
  iataCode: 'AP',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

airPeace.book('281', 'Ibrahim');
airPeace.book('281', 'Ned');

const dana = {
  airline: 'Dana',
  iataCode: 'DN',
  bookings: [],
};

const book = airPeace.book;

//will not work
// book(231, 'May Paker')

//will work *********** Call Method
book.call(dana, 372, 'May Paker');
console.log(dana);

book.call(airPeace, 876, 'Happy Jones');
console.log(airPeace);

const azman = {
  airline: 'Azman Air',
  iataCode: 'AZ',
  bookings: [],
};

book.call(azman, 536, 'Tobby Maguaeier');

//will work *********** Apply Method
const flightData = [273, 'Flash Thompson'];
book.apply(azman, flightData);
console.log(azman);
//Best and mothern alternative
book.call(azman, ...flightData);

//////////////////////////////////////////////////////////////////
///The Bind Method

const bookAP = book.bind(airPeace);
const bookDN = book.bind(dana);
const bookAZ = book.bind(azman);

bookAP(23, 'Musa Isa');

const bookAP23 = book.bind(airPeace, 23);
bookAP23('Tony Stark');
bookAP23('Doctor Strange');

//With EventListners
airPeace.planes = 300;
airPeace.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// airPeace.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', airPeace.buyPlane.bind(airPeace));
  
  //Partial Aplication
  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200));
  
  
  const addVAT = addTax.bind(null, 0.23);
  // addVAT = value => value + value * 0.23;
  console.log(addVAT(100));
  console.log(addVAT(23));
  
  //Exercise
const addTax2 = rate => {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
//////////////////////////////////////////////////////////////////
///Immidieatly Invoked Function Expression -IIFE-

const runOnce = function () {
  console.log('This will run as many times as we call it');
};
runOnce();

//IIFE-----
(function () {
  console.log('this will only run once');
})();

(() => {
  console.log('Likewise for arrow functions');
})();

  
  
  
  
  */

//////////////////////////////////////////////////////////////////
///Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    const plural = passengerCount < 2 ? '' : "'s";
    console.log(`${passengerCount} passenger${plural}`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);

//Exapmle 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = (n, wait) => {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`We will start boarding in ${wait} seconds`);
};

boardPassengers(30, 2)