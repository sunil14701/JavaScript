'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // destructuring obj in params of fx
  orderDelivery: function ({ time='20:00', address, mainIndex=0, starterIndex=1 }) {
    // console.log(obj);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}`
    );
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  }
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

