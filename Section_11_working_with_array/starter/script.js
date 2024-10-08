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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
// l143: simple array methods
// why array have methods? methods are simply fxs that are attached to a object. array is also object. 

// why all arrays have access to this methods? prototypal inheritance; arrays are object and they have access to special built-in methods

let arr = ['a', 'b', 'c', 'd', 'e'];
// slice: return new array
console.log(arr.slice(1,3));// end parameter is not included in o/p
console.log(arr.slice(1));
console.log(arr.slice(1,-1));
console.log(arr.slice(-2,-1));

// create shallow copy
console.log(arr.slice());// mostly used when we chaining multiple methods together
console.log([...arr]);

// SPLICE: mutates the original array
// console.log(arr.splice(2));
// console.log(arr);//array loses that part which was extracted

// pop last element
// console.log(arr.splice(-1));
// console.log(arr);//array loses that part which was extracted

// console.log(arr.splice(0,2));
// console.log(arr);//array loses that part which was extracted

// REVERSE
console.log(arr.reverse());
console.log(arr);

// CONCAT
const arr2 = ['A', 'C', 12,34];
const newArr = arr.concat(arr2);
console.log(newArr);

// prev way
const newArr2 = [...arr, ...arr2];
console.log(newArr2);

// JOIN 
const newArr3 = arr.join(':');
console.log(newArr3);

// push, unshift, pop, shift, indexof, includes, intersection
// more at mdn docs
*/

/*
// 144 the new at method ES 2022
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(1));

// getting last element
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));// -ve index starts from end
console.log(arr.at(-34));

// at method can be used in method chaining : combine multiple methods at same time
// at methd also work on strings
console.log('sunil'.at(-1));

*/

// l145: looping arras: for each
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i,money] of movements.entries()) {
  if (money < 0) console.log(`user${i+1} widthdraw ${Math.abs(money)} dollar`);
  else console.log(`user${i+1} deposit ${money} dollar`);
}

// foreach -> higher order fx that req are call back fx
console.log(''.padEnd(10,'-'));
movements.forEach(function (money, i, array) {//1st -> curr ele, 2nd -> index, 3rd -> array
  if (money < 0) console.log(`user${i+1} widthdraw ${Math.abs(money)} dollar`);
  else console.log(`user${i+1} deposit ${money} dollar`);
});
// we use a callback fx to tell other higher order fx exactly what it should do
// note: break and continue is not there in foreach loop so use other loops to use break and continue
