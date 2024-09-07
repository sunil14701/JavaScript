"use strict";
/*
// l31 section intro
console.log(`Hello world`);
*/

/*
// l32: activating strict mode
// make js cide secure. 'use strict'; *MUST be first line of js file.
// why strict mode?
// 1. it forbids us to do certain things.
// 2. it creates visible errors in dev console, where in certain situations when js fails silently

// eg: mode will throw error if let, const, var is not used 
let hasDL = false;
const passTest = true;
// if(passTest) hasDLs = true;
if(hasDL) console.log(`I can drive.`);

// eg: error when using reserved js words
// const interface = 'sunil';
const private = 23;
// const if = 23;

// more on this later; such as for functions, objecs, setting properties on primitive values etc.
*/

/*
// l33: functions
// peice of code used again and again.
// DRY principle; maintainable code
function logger(){
    console.log(`My name is jonas`);
}

// calling/running/invoking a fx
logger();
logger();

// parametrized fx, arguments
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with  ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const juice = fruitProcessor(5, 0);
const juice2 = fruitProcessor(5, 4);
const log = logger(12,23,34);// specifying args will not have any effect
console.log(juice);
console.log(juice2);
console.log(log);

// console.log(), Number(), boolean() -> built-in fx
*/

// l34 fx declarations vs expressions

// fx declaration
const age3 = calcAge(1991); // calling fx declaration before it's defined
console.log(age3)

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
const age1 = calcAge(1991);

// fx expression

// calling fx expression before defined, will not work bcs of hoisting
// const age = calcAge2(1991);
// console.log(age4);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2); //arguments are passed to fx, fx recieve parameters

// in js fx are just values
// fx expression can be a fail safe as we have to define a fx first to use it. else we can not call it.
