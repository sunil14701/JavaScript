'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

/*
// l145: looping arras: for each
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, money] of movements.entries()) {
  if (money < 0)
    console.log(`user${i + 1} widthdraw ${Math.abs(money)} dollar`);
  else console.log(`user${i + 1} deposit ${money} dollar`);
}

// foreach -> higher order fx that req are call back fx
console.log(''.padEnd(10, '-'));
movements.forEach(function (money, i, array) {
  //1st -> curr ele, 2nd -> index, 3rd -> array
  if (money < 0)
    console.log(`user${i + 1} widthdraw ${Math.abs(money)} dollar`);
  else console.log(`user${i + 1} deposit ${money} dollar`);
});
// we use a callback fx to tell other higher order fx exactly what it should do
// note: break and continue is not there in foreach loop so use other loops to use break and continue

// l146 forEach with maps and sets
console.log('146'.padStart(5, '-').padEnd(7, '-'));

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['Eur', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// for each: map -> pass callback fx
currencies.forEach(function (values, key, map) {
  if (key == 'USD') {
    console.log(`${key}'s currency is ${values}.`, map);
  }
});

for(let [key, value] of currencies){
  console.log(key,': ' ,value);
}

// set 
const curr = new Set([2,3,4,2,3,4]);


curr.forEach(function(value,_,map){
  // set does not have keys, values, indexes. so in foreach loop key and value for set are same to keep the signature same
  console.log(value, _, map);// underscore is throw away variable i.e unnecessary
});

for(let item of curr){
  console.log(item,curr);
}

// fx signature: fx name + parameter list. 

*/

/*
// l147 project: banklist app
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
const displayMovements = function (movements) {
  
  // empty container
  containerMovements.innerHTML = '';// text content -> only text content, innerHTML -> all tags + content 

  // add data in movements
  console.log(movements);
  movements.forEach(function (mov, i) {
    const transaction = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${transaction}"> ${i + 1} ${transaction}</div>
            <div class="movements__value">${mov}€</div>
        </div>
      `;
    console.log(html);
    containerMovements.insertAdjacentHTML("afterbegin",html) 
  });
};

displayMovements(account1.movements);
*/

/*
// l150:data transformations: map, filter, reduce
// map: it returns a new array containing the results of applying an operation on all original array elements.
// filter: it returns a new array containing the array elements that passed a specified test condition.
// reduce: boils all array elements down to single value.

// l151: the map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsdRate = 1.1;

// this paradigm is more inligned with functional programming, modern way
const movementsInEuro = movements.map(function (value, index, array) {
  return value * euroToUsdRate;
});
const movementsInEuroArrow = movements.map(
  (value, index, array) => value * euroToUsdRate
);
console.log(movementsInEuro);
console.log(movementsInEuroArrow);

const movementDescritptions = movements.map((value, index, array) => {
  let step = value>0? 'deposited': 'withdrew';
  return `Movement ${index + 1}: You ${step} ${Math.abs(value)}`;
});
console.log(movementDescritptions);

// side effect: when we are printing as well as returning from fx


// for(let i=0;i<movements.length;i++){
//   console.log(movements[i]);
// }

// normal way
const movementsInEuro2 = [];
for (const value of movements) {
  movementsInEuro2.push(value * euroToUsdRate);
}
console.log(movementsInEuro2);

// movements.forEach(function(value, index, array){
//   console.log(value);
// });

*/
// HW do assingme section 9

/*
// l153 the filter method 
const deposits = movements.filter(function(value){
  return value>0; // return boolean
});
console.log(deposits);

// same as above using for loop
const deposits2 = [];
for(const value of movements){
  if(value>0) deposits2.push(value);
}
console.log(deposits2);

// why don't use normal for loop? 1. to use more functional code, 2. to chain all methods together, use them one after other to get big final result

// challange
// get array of withdrews
const withdrews = movements.filter(value => value <0);
console.log(withdrews);
*/

/*
// l154: the reduce method
// accumulator -> snlowball -> will provide a final value
const totalMoney = movements.reduce(function (accumulater, currVal, index) {
  console.log(index, currVal, accumulater);
  return accumulater + currVal; // accumulator will always be added sum of prev value
}, 0);
console.log(totalMoney);

const totalMoneyArrow = movements.reduce(
  (accumulater, currVal, index) => accumulater + currVal, // accumulator will always be added sum of prev value
  0
);
console.log(totalMoneyArrow);

// same above with simple loop
let totalMoney2 = 0;
for (const value of movements) {
  totalMoney2 += value;
}
console.log(totalMoney2);

// MAXIMUM VALUE using reduce
const maxMovement = movements.reduce(function (accumulator, curr) {
  if (accumulator > curr) return accumulator;
  else return curr;
},movements[0]);
console.log(movements);
console.log(maxMovement);
*/
