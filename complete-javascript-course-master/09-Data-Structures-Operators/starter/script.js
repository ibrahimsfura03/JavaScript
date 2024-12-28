'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Opening Hourse Obeject

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours, first one but not handy

  // second one and also E6 future
  openingHours,

  orders(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  ordersDelivery({
    name = 'user',
    time = '20:00',
    location,
    mainIndex = 0,
    starterIndex = 2,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
will be deliverd at ${location} at ${time} to ${name}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicios pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredieant, ...otherIngredients) {
    console.log(`Your pizza is ready with ${mainIngredieant}`);
    console.log(`while these are optional -- ${otherIngredients}`);
  },
};

const rest1 = {
  name: 'HumgryNomad',
  numGuests: 0,
};

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(46);
  console.log(output);
}

/*





//////////////////////////////////////////////////////////////////
/// -----Working With Strings PART-2

//Case sensitivity
const compareStr = (actual, inputed) => {
  actual === inputed
    ? console.log(`${actual} is identical to ${inputed} ` + true)
    : console.log(`${actual} is not identical to ${inputed} ` + false);
};

const email = 'ibrahimsfura03@gmail.com';
const loginEmail = ' IBRahimSFura03@gmail.COM ';
const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail === email);
compareStr('ibrahiM', 'ibraiM');

//Replace
const priceGB = '920,28£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));
console.log(plane.endsWith('neo'));

// practice exercise

const checkBaggage = item => {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome on board');
  }
};

checkBaggage('I Have A Laptop, Some Food And A Pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks a Gun for Protection');

//Split and Joint
console.log('a+very+nice+string'.split('+'));
console.log('Ibrahim Suleieman'.split(' '));

const [firstName, lastName] = 'Ibrahim Suleieman'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(`Mr.${firstName} ${lastName.toUpperCase()}`);

const capitalizeName = name => {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('Jessica ann smith davis');
capitalizeName('ibrahim suleiman adamu fura');

//padding

const maskCreditCard = number => {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1234567878));
console.log(maskCreditCard('092092982098265'));
console.log(maskCreditCard('8828838238283283832932'));

//Repeat
const message = 'Bad wheather... All Departures Delayed.. ';
console.log(message.repeat(6));

const planesInLine = n => {
  console.log(`There are ${n} Planes in line ${'🛬'.repeat(n)}`);
};

planesInLine(4);
planesInLine(5);
planesInLine(15);


//////////////////////////////////////////////////////////////////
/// -----Working With Strings PART-1

const airline = 'TAP Air Portugal';
const plane = 'A3701';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B3FY'[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(-8));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(1, -1));

const checkMiddleSeat = seat => {
  // only B or E are middle seat
  const seats = seat.slice(-1) == 'B' || seat.slice(-1) == 'E' ? 'a' : 'not';
  console.log(`This is ${seats} middle seat`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

/////////////////////////////////////////////////////////////////
/// MAPS iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C++'],
  [2, 'Python'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct 🎉'],
  [false, 'try again :('],
]);
console.log(question);

console.log(Object.entries(openingHours));
//Convert object to map
const openHours = Object.entries(openingHours);
console.log(new Map(openHours));

//Quiz app

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Option ${key}: ${value}`);
  }
}

const ans = 3;

ans == question.get('correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));

//convert Map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

Al-Quran 47:7

يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِن تَنصُرُوا۟ ٱللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ 
O you who have believed, if you support Allah,
He will support you and plant firmly your feet.

/////////////////////////////////////////////////////////////////
/// MAPS in js - Fundamentals

const rest = new Map();
rest.set('name', 'Delluna');
rest.set(1, 'sultan close');
rest.set(2, 'Doctors QTRS');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are opened :)')
  .set(false, 'we are closed :(');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
// rest.clear();

rest.set(document.querySelector('h1'), 'Heading');
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Taist');

console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

/////////////////////////////////////////////////////////////////
/// Sets

const orderSet = new Set([
  'pizza',
  'risotto',
  'pizza',
  'pasta',
  'mushroom',
  'pasta',
]);

console.log(orderSet);

console.log(new Set('ibrahim'));

console.log(orderSet.size);
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('pasta');
// orderSet.clear();
console.log(orderSet);

for (const orders of orderSet) console.log(orders);

const staff = ['Waiter', 'Manager', 'Chef', 'Waiter', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Manager', 'Chef', 'Waiter', 'Chef']).size);

console.log(new Set('ibrahimsuleimanadamufuragombenigeriapantami').size)

Device name	IbrahimSuleiman
Processor	Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz   2.50 GHz
Installed RAM	8.00 GB (7.82 GB usable)
Device ID	9E638C39-32EF-4894-89A4-29F36A208079
Product ID	00331-10000-00001-AA373
System type	64-bit operating system, x64-based processor
Pen and touch	Pen and touch support with 10 touch points



/////////////////////////////////////////////////////////////////
///Looping objects, objects values, keys and entries

//Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We oped in ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Values Names

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and clos at ${close}`);
}

///////////////////////////////////////////////////////////////////
///Optional Chaining

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// console.log(restaurant.openingHours.mon.open)

//using optional chaining
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const opendDays of days) {
  const open = restaurant.openingHours[opendDays]?.open ?? 'closed';
  const close = restaurant.openingHours[opendDays]?.close ?? 'closed';
  console.log(`On ${opendDays} we open at ${open} and close at ${close}`);
}

//Checking for methods as wwell ------------ optional chaining '.?.'
console.log(restaurant.orders?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.ordersRissoto?.(0, 1) ?? 'Method does not exist');

//Checking for arrays as wwell ------------ optional chaining '.?.'
const users = [
  {
    name: 'ibrahim',
    email: 'ibrahimsfura@gmail.com',
  },
];

console.log(users[0]?.name ?? 'No user in this index');
console.log(users[2]?.name ?? 'No user in this index');

////////////////////////////////////////////////////////////////////
///Enhancin objects literals --- OpeningHourse Object

__firstEnhancement__
you can call secondary object inside of main opject 
simply by calling the object name, for instance the openingHourse

__secondEnhancement__
Methods no longer need the keyword "Function",
the colon and the function key word can be ommit and work perfectly

__thirdEnhancment__
We can now compute property names "inside objects", unlike
writing it manually or literally



////////////////////////////////////////////////////////////////////
///For-Of-Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

//-----
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


const rest2 = {
  name: 'Ragnar',
  owner: 'Athelstan',
};  

//OR || logical assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// //Using logical assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullishing This
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND && logical assignment
// rest1.owner = rest1.owner && '<annonymos>';
// rest2.owner = rest2.owner && '<annonymos>';

//Using logical assignment operator
rest1.owner &&= '<annonymos>';
rest2.owner &&= '<annonymos>';

console.log(rest1);
console.log(rest2);

restaurant.numGuess = 0;
const guess2 = restaurant.numGuess || 5;
console.log(guess2);

//Nullish coalescing: Null andUndefined (not 0 or '')
const guesst = restaurant.numGuess ?? 5;
console.log(guesst);

////////////////////////////////////////////////////////////////////
///Short Circuting

//use ANY data type, return ANY data type, and short cicuit or short cicuting
console.log('------ OR || -------');

console.log(3 || 'ibrahim');
console.log('' || 'ibrahim');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 10 || true);

// restaurant.numGuess = 3;
const guess1 = restaurant.numGuess ? restaurant.numGuess : 15;
console.log(guess1);

const guess2 = restaurant.numGuess || 5;
console.log(guess2);

console.log('------ AND && -------');
console.log(0 && 'ibrahim');
console.log('lothbroth' && 23 && null && 'regnar' && undefined);

//Example Practice
if (restaurant.orderPizza) {
  console.log(restaurant.orderPizza('Mushrooms', 'Spinnach', 'Onions'));
}

restaurant.orderPizza &&
  restaurant.orderPizza('Mushrooms', 'Spinnach', 'Onions');


restaurant.orderPizza('Mushrooms', 'Garlic', 'Onions', 'Spinach', 'Olives');

///////////////////////////////////////////////////////////////////////
///////////////////////REST PATTERN///////////////////////////////
//---------------------- Destructuring ---------------------

//Spread pattern, because it is at the right sids of the = assignment operator
const arr = [1, 2, ...[3, 4]];


//Rest patterns, because it is at the left side = assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

///
const [pizza, , risotto, otherFoods] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

//Rest pattern Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions ---------------------------------------------------------

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(9, 6);
add(2, 3, 4);
add(4, 2, 6, 8, 7, 3);

const x = [23, 5, 7];
add(...x);


/////////////////////////////////////////////////////////////
////The spread operator

const arr = [8, 4, 2];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);
console.log(1, 2, 8, 4, 2);



const newMenu = [...restaurant.mainMenu, 'DanWake', 'Taliya', 'HalaBabaTashi'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Marge 2 more arrays
const newArr = [...newMenu, ...mainMenuCopy];
console.log(newArr);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: Strings, Arrays, Maps, Sets, but NOT Objects.

const str = 'ibrahim';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log('i', 'b', 'r', 'a', 'h', 'i', 'm');

const ingridients = [
  // prompt("let's make pasta ingridients 1"),
  // prompt('Ingridients 2'),
  // prompt('Ingridients 3'),
];
restaurant.orderPasta(...ingridients);

const newRestaurant = { foundedIn: 2020, ...restaurant, CEO: 'Ibrahim' };
console.log(newRestaurant);

const restaurantCopy = {};
restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


restaurant.ordersDelivery({
  name: 'Bayashi',
  time: '23:18',
  location: 'sultan road no.4A',
  mainIndex: 2,
  starterIndex: 1,
});
restaurant.ordersDelivery({
  location: 'sultan road no.4A',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Defaukt values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 349;
const obj = { a: 23, b: 9, c: 30 };
({ a, b } = obj);
console.log(obj);

const { fri } = openingHours;
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

 const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z); 

let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

//Destructuring using variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//Array Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, main] = restaurant.orders(2, 0);
console.log(starter, main);


//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);



//Default destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);



*/
