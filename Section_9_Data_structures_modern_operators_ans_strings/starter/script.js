'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// enhanced object literals: precomputation of keys. values can be computed
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [Number(`${2 + 3}`)]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // return multiple values
  order: function (starterIndex, mainIndex) {
    if (starterIndex < 0 || starterIndex >= this.starterMenu.length)
      return [-1, -1];
    if (mainIndex < 0 || mainIndex >= this.mainMenu.length) return [-1, -1];

    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // old adding object to object
  // openingHours: openingHours,

  // ES6 enhanced object literals
  // 1 object new look
  openingHours,

  // 2 method new look
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  // },
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  // destructuring obj in params of fx
  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    // console.log(obj);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// l101: section intro
// focus on modern JS, built in data structures(DS) like objects, map, arrays. modern E6 operators like optional chaining, destructing. work with string

// 103: destructing arrays
// array destructuring: way of unpacking values from an array/object into separate variables. complex DS to smaller DS.
const arr = [2, 3, 4];

// m1
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// m2: use sq brackets bcs of array destructing
const [a1, b1, c1] = arr;
console.log(a1, b1, c1);
console.log(arr); // original array unaffected

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // req less variables than array size

// m1: switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// m2 reassigning variable values
[main, secondary] = [secondary, main];
console.log(main, secondary);

// return multiple values from fx
const [starterOrder, mainOrder] = restaurant.order(2, 0);
console.log(starterOrder, mainOrder);

// nested array destrucutring
const nested = [2, 4, [5, 6]];
const [i, _, [j1,j2]] = nested;
console.log(i, j1,j2);

// default values
const [p,q=12,r=23] = [1,2];
console.log(p, q, r);

// theme of section: food delivery app

*/

/*
// l105: destructing objects
// curly braces to destructing, have to write exact property name to extract from object. in object order of element does not matter. very usefull in API calls
const { name, openingHours, categories, values } = restaurant;
console.log(name, openingHours, categories, values);

// add custom names to extracted items
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// defualt values: usefull when data is unknown
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // in round brackets
console.log(a, b);

// nested objects
const {
  fri: { open: o = 10, close: c = 18 },
} = hours;
console.log(o, c);

// passing obj in fx. why? as the number of parameters increases
restaurant.orderDelivery({
  time: '22:30',
  address: 'mera ghar hai',
  mainIndex: 2,
  starterIndex: 2,
});

// default values in fx
restaurant.orderDelivery({
  address: 'mera ghar hai',
});
*/

/*
// 106 the spread operator(ES6)
// spread operator: unpacking all the array elements at once.
const arr = [7,8,9];
const badNewArr = [1,2,arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr0 = [1,2,arr];
const newArr = [1,2,...arr];// take all ele out of array and add it manullay. new array is generated 
// newArr.push(...arr);
console.log(newArr0);
console.log(newArr);

// destructuing of array
// const [a,b,c] = arr;
// console.log(a,b,c)

// in fx: pass multiple ele into a fx like below
console.log(...newArr);

// add item in array
const newMenu =  [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// de-structuring
// const [a,b] = [...restaurant.mainMenu];// the spread operator takes all the element from array and it also does'nt create new variable. so we can only only use where we need values separted by commas.
const [a,b] = restaurant.mainMenu;
console.log(a,b);

// usecases of spread opertor
// 1. create shallow copies of arrays. means upto 1 lvl.
const mainMenuCopy = [...restaurant.mainMenu];
// mainMenuCopy[0] = 'apple';
// console.log(mainMenuCopy);
// console.log(restaurant.mainMenu);


// 2. merge two arrays together.
const mergedMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mergedMenu);

//note: spread operators works on all iterables(arrays, strings, maps, sets, but not objects)
const firstName = 'Sunil';
const letters = [...firstName, ' ', 'S.']
console.log(letters);
// note: we can only build a spread operator when building an array or when we pass value into a fx.
// console.log(`${...str} Jonas`); this will not work

// pass valueS to fx with spread operator. real world usecase
// const ingredients = [];
// for(let i=0;i<3;i++){
//   const ing = prompt('Let\'s make pasta ingredient');
//   ingredients.push(ing);
// }

// restaurant.orderPasta(...ingredients);

// since 2018, spread operator works on objects as well
const newRestaurant = {founderIn:1998,...restaurant, founder:'Jonas'};
console.table(newRestaurant);

// instead of using assign fx on object we can use spread operator
// shallow copy on objects: means upto lvl 1
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Lakshman groups';
restaurantCopy.mainMenu[0] = 'apple';
console.log(restaurant);
console.log(restaurantCopy);// changes reflected on nested object for both

*/

/*
// l107: rest pattern and parameters
// rest pattern: syntax same as spread operator, but works opposite. 
// spread operator: unpack the array; rest patterns: pack elements into the arrays.


// 1. destucturing
// SPREAD, bcs on right side of = operator
const arr = [1,2, ...[3,4]];

// REST, bcs on left side of = opertor. why rest name is given bcs rest of remaninig element will be given to new array. rest collect those element that were unused in destructuring assignment
const [a, b, ...others] = [1,2,3,4,5];
console.log(a, b, others);

// the rest pattern must be the last. it will only collect last elements. there can only be only one rest pattern
const [pizza,,Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood)


// objects
const { sat,...weekDays} = restaurant.openingHours;
console.log(sat);
console.log(weekDays);

// 2. functions

// using rest parameters
const add = function(...args){
  let sum = 0;
  for(let i=0;i<args.length;i++){
    sum += args[i];
  }
  return sum;
}

console.log(add(1,2,3,4,5));

const x = [23, 5,7];
console.log(add(...x));// why we are not just passing a single array? by using spread operator we can pass both variables and array at the same time

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinich');
restaurant.orderPizza();

*/

/*
// l108 short circuiting(&& and ||)
// logical operator: use any data type, return any data type, short-circuiting

// for OR operator if all value is truthy value than that first truthy value will be returned, if all values are falsy than last element would be output
// OR operator short circuit when first value is truthy
console.log('---OR---');
console.log(3 || 'Jonas'); // -> o/p = 3
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(null || undefined);

// restaurant.numGuest = 23;// 0 is a falsy value so it will fail in 0. sol in next lecture
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);
const guests2 = restaurant.numGuest || 10; //leverage short circuting to set default values
console.log(guests2);

console.log('---AND---');
// AND operator short circuit when there  is falsy value, if all are truthy value than last value will be returned
console.log(0 && 'Jonas');
console.log('Jonas' && undefined);
console.log('Jonas' && 12);

// practical eg
if (restaurant.orderPizza) {
  restaurant.orderPizza('musrooms', 'sauce');
}

restaurant.orderPizza && restaurant.orderPizza('musrooms', 'sauce'); // if first one is true than proceed further

// l109: the nullish coalescing operator
// idea: check nullish value(null or undefined) and not falsy values
restaurant.numGuest = 0;
const guest1Correct = restaurant.numGuest ?? 10;
console.log(guest1Correct);

// l110 logical assignmebt operators
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;//short hand for this below

//OR logical assignment operator
// rest1.numGuests ||= 10;// if curr value is falsy than 10 will be assigned
// rest2.numGuests ||=10;

//nullish(null or undefined) logical assignment operator
rest1.numGuests ??= 10; // if curr value is falsy than 10 will be assigned
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANOYMOUS>';
// rest2.owner = rest2.owner && '<ANOYMOUS>';

// AND logival operator
rest1.owner &&= '<ANOYMOUS>';// if value is falsy than no effect will take place
rest2.owner &&= '<ANOYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
// l112 looping arrays: the for loop
// new loop of array in ES6

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// regular for loop
for(let i =0;i<menu.length;i++){
  console.log(menu[i]);
}

// forof loop: continue and break can be used 
for(const item of menu){
  console.log(item);
}

// index of ele in forof loop
for(const  [i,ele] of menu.entries()){
  // console.log(item[0], item[1]);
  // console.log(...item);// destructure the array
  console.log(`${i}: ${ele}`); 
}

console.log(...menu.entries()); // see element in  array iterator
console.log([...menu.entries()]); // see element in  array iterator
*/

/*
// l113 enhanced object literals
console.log(restaurant);
// 1. object new look: simple syntax
// 2. method new look inside object
// 3.precomputation in object key.
*/

/*
// l114 optional chaining(?.)

// simple way to find out optional properties w/o getting errors
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// with optional chaining(OC): follow nullish concept
// will throw nullish value whenever nullish value is encountered
console.log(restaurant.openingHours.mon?.open); // if mon property is not nullish than open property will be exexutes else nullish
console.log(restaurant.openingHours?.mon?.open); // we can not check a property if prev part is null but via optional chaining return first null

// real application
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (let i = 0; i < days.length; i++) {
  const open = restaurant.openingHours[days[i]]?.open ?? 'closed';
  console.log(`On ${days[i]}, we open at ${open}`);
}

console.log(restaurant.openingHours);

// OC on methods: check if method exists
console.log(restaurant.order2?.(0, 1) ?? 'Method do not exist');
console.log(restaurant.order?.(0, 1) ?? 'Method do not exist');

// arrays
const users = [
  
];
// const users = [
//   {
//     name: 'Jonas',
//     email: 'Hwllo@gmail.com',
//   },
// ];
console.log(users[0]?.name ?? 'user array empty');

if(users.length > 0) console.log(users[0].name);
else console.log('user array empty');

// ?? and ?. we introduced in same year os they kinda complement each other

*/

/*
// l115 looping objects" objects keys, values and entries

// keys
const keys = Object.keys(openingHours);
console.log(keys);


let openStr = `We are open ${keys.length} days that are: `

for(const day of keys){
  openStr += `${day}, `;
}
console.log(openStr);

// values
const values = Object.values(openingHours);
console.log(values);

// loop entire object
const entries = Object.entries(openingHours);
for(const [key,{open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

/*
// l 117 sets
// in ES6 set and maps were introduced as data structure
// set: collection of unique values.
const orderSet = new Set(['Pasta','Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);

// set are iterables, order of ele of set are irrelivent, unique eles
console.log(new Set('Sting'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('sk'));

orderSet.add('Garlic bread');
orderSet.add('Garlic bread');
orderSet.delete('Pizza');
console.log(orderSet);
// orderSet.clear();
console.log(orderSet);


// set has no indexs, so this for loop not work
for(let i=0;i<orderSet.size;i++){
  console.log(orderSet[i]);//undefined
}

// iterating set
for(const ele of orderSet){
  console.log(ele);
}

// usecase: remove duplicate values from arrays
const staff = ['Waiter', 'Chef', 'Chef', 'Manager'];
const diffStaff = new Set(staff);
console.log(diffStaff);

// convert set into array
const  uniqueStaff0 = [...new Set(staff)];
const uniqueStaffLen = new Set(staff).size;
const uniqueStaff = [...diffStaff];//spread operator work on all iterables
console.log(uniqueStaff0);
console.log(uniqueStaffLen);

// diff letters in unique strings
console.log(new Set('sunill').size);

// sets are not as imp as arrays.
*/

/*
// l118: maps fundamentals
// map is lot more useful than sets
// map is a data structure to map values to keys. just like object data is stroed in key value pairs in maps.
// diff between maps and object -> in maps the keys can have any type(object, other maps, arrays, etc); in object the keys are always string.

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'france, italy');

console.log(rest.set(2, 'chandigarh')); // set method returns the updated map

// map chaining
rest
  .set('categories', restaurant.categories)
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D') //as set returns updated map os we can update map again
  .set(false, 'We are closed :(');
console.log(rest);

console.log(rest.get(true));
console.log(rest.get('true')); // datatype of key maters
console.log(rest);
const time = 2;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

console.log(rest.has('categories'));
rest.delete('categories');
console.log(rest.has('categories'));

rest.clear();
console.log(rest);
console.log(rest.size);


// how to get array/object as map kays
rest.set([1,2], 'test');
console.log(rest.get([1,2]));// undefined; eventhought we are passing the same values in array but they are not the same array, address is diff in heap(they are not the same object in heap)

// this will work, have to pass same object 
const arr = [1,2];
rest.set(arr, 'best');
console.log(rest.get(arr));

// DOM in map key: this topic may unlock advance fx in js
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); 
*/

// l119: iterations

// set map elements via array
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  [4, 'C++'],
  ['correct', 3],
  [true, 'Correct answer'],
  [false, 'Try again'],
]);
console.log(question);

// convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); // but all the keys of objet is string data type

// maps are also iterable
// for(const [key, value] of Object.entries(openingHours)) // bcs object is not iterable

console.log(`Question: ${question.get('question')}`);
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Options ${key}: ${value}`);
}
// const answer = Number(prompt(`Enter your answer?`));
const answer = 3;
console.log(answer);
console.log(question.get(answer === question.get('correct')));

// console.log('Answer: ', question.get((question.get('correct'))));

// map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()])
// when to use map and objects;
