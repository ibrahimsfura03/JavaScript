'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const displayMovement = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovement(account1.movements);

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  acc.balance = balance; // Store the balance in a separate property
  labelBalance.textContent = `${balance}€`;
};

// --------------------Calc Summary ----------------------
const calcDisplaySummary = acc => {
  // --------------------Calc Sum Incomes ----------------------
  const income = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${income}€`;

  // --------------------Calc Sum Outcome ----------------------
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr, i, arr) => acc + curr, movements[0]);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  // --------------------Calc Sum Interes ----------------------
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov / 100) * acc.interestRate)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, curr) => acc + curr);
  labelSumInterest.textContent = `${interest}€`;
};
// --------------------End of Calc Summry -----------------

const user = 'Steven Thomas Williams';
const createUserNames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);

const updateUI = acc => {
  //Display Movements
  displayMovement(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
};

// --------------------Event handler login -----------------

let currentAcount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAcount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAcount);

  if (currentAcount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Message
    labelWelcome.textContent = `Welcome ${currentAcount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Interface update
    updateUI(currentAcount);
  }
});
// --------------------End of Event handler login ------------

// --------------------Event handler Transfer -----------

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receverAcc &&
    currentAcount.balance >= amount &&
    receverAcc !== currentAcount.username
  ) {
    currentAcount.movements.push(-amount);
    receverAcc.movements.push(amount);

    //Interface update
    updateUI(currentAcount);
  }
});

// --------------------End of Event handler Transfer ------------

// --------------------Event handler Request Loan ------------
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAcount.movements.some(mov => mov >= amount * 0.1)) {
    currentAcount.movements.push(amount);
    updateUI(currentAcount);
    inputLoanAmount.value = '';
  }
});
// --------------------End of Event handler Request Loan ------------

// --------------------Event handler Delete Account ------------
btnClose.addEventListener('click', e => {
  e.preventDefault();
  const loggedUser = currentAcount.username;
  const loggedPin = currentAcount.pin;

  const deleteUser = inputCloseUsername.value;
  const deletePin = Number(inputClosePin.value);

  if (loggedUser === deleteUser && loggedPin === deletePin) {
    const index = accounts.findIndex(
      acc => acc.username === currentAcount.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
});
// --------------------End of Event handler Delete Account ------------
// --------------------Event handler Movement Sorting ------------

let sorted = false;
btnSort.addEventListener('click', e => {
  // e.preventDefault();
  const movementsSort = currentAcount.movements;
  movementsSort.sort((a, b) => a - b, !sorted);
  console.log(movementsSort);
  displayMovement(movementsSort);
  sorted = !sorted;
});
// --------------------End of Event handler Movement Sorting ------------

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

/*
//Flat
const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);

//FlatMap
const overallBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance3);
*/
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* 
/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE
// console.log(arr.splice(2))
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last elemnt of an array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Ibrahim'.at(0));
console.log('Ibrahim'.at(-1));


for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1} transaction: You deposited ${movement}`);
  } else {
    console.log(`${i + 1} transaction: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});


//Map
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach((value, key, set) => {
  console.log(`${key}: ${value}`);
});


///////////////////////////////////////////////////////////////
///Map

const euroToUsd = 1.1;
const movementUsd = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementUsd);

const euroToUsdFor = [];
for (const mov of movements) euroToUsdFor.push(mov * euroToUsd);
console.log(euroToUsdFor);

const movementTransc = movements.map((mov, i, arr) => {
  const transaction = mov > 0 ? 'deposited' : 'withdrew';
  return `Movement ${i + 1}: you ${transaction} ${Math.abs(mov)}`;
});

console.log(movementTransc);


//////////////////////////////////////////////////////////////
// Filter

const deposit = movements.filter(mov => mov > 0);
const withdraw = movements.filter(mov => mov < 0);
console.log(movements);
console.log(deposit);
console.log(withdraw);


////////////////////////////////////////////////////////////
/// Reduce

console.log(movements);
const balance = movements.reduce((acc, curr, i, arr) => {
  console.log(`Interation ${i}: ${acc}`);
  return acc + curr;
}, 0);
console.log(balance);


/// Maximum value
console.log(movements);
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);


///////////////////////////////////////////////////////////////
///The art of chaining methods

const euroToUsd = 1.1;
const totalDeposits = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, curr, i, arr) => acc + curr, 0);
console.log(totalDeposits);


///////////////////////////////////////////////////////////////
///Find Method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.username === 'js');
console.log(account);

// challenge using for of loop

for (const acc of accounts){
  acc.owner === 'Jessica Davis' ? console.log(acc) : ''
}


///////////////////////////////////////////////////////////////
///Include Method --- Some Method
console.log(movements);
console.log(movements.includes(-130));

//SOME: conditions
const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

//EVERY: condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Seperate call Back
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
console.log(movements.reduce(deposit));

///////////////////////////////////////////////////////////////
///FLAT and FLAtmAP

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr.flat());
const arrDeep = [
  [[1, 2], 3],
  [
    [[4, 5], 6],
    [7, 8, 9],
  ],
];
console.log(arrDeep.flat(3))

///////////////////////////////////////////////////////////////////
///Array Sorting

const freinds = ['musa', 'idi', 'tanimu', 'rabiu', 'adamu'];
console.log(freinds.sort());
console.log(freinds);

console.log(movements);

movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});
console.log(movements);

//Short Form
movements.sort((a, b) => b - a);
console.log(movements);


////////////////////////////////////////////////////////////////
///Array.From

const y = Array.from({ length: 7 }, _ => 1);
console.log(y);

const x = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(x);

const dice = Array.from({ length: 100 }, (_, i) => Math.trunc(Math.random()));
console.log(dice);

*/
///////////////////////////////*********************************

//1.
const bankDepositSun = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((curr, sum) => curr + sum);
console.log(bankDepositSun);

//2.
const numDepositd1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000)
  .reduce((mov, curr, i, arr) => ++i, 0);
console.log(numDepositd1000);

//3.
const { deposits, withdrawals } = accounts
  .flatMap(mov => mov.movements)
  .reduce(
    (sums, i) => {
      sums[i > 0 ? 'deposits' : 'withdrawals'] += i;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

const convertTitleCase = title => {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    );
  return titleCase;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
