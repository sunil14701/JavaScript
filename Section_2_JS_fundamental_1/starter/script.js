/*
// 8:linking a JS file
// let js = "amazing";

// if (js === "amazing") alert("JS is FUN!!!");
// else alert("Boring");

// console.log(2 * 3);
*/

/*
//9: values and variables
// value is smallest unit of info in js like "jonas". values can be stored them in variables
// variable: it is a box in which we can store ta value.
console.log("Jonas");

// camelCase notation: standard notation in JS
let firstName = "Bob";
console.log(firstName);

let first_name_person = "sunil"; // snake case notation

// variable name can not start with number it can only contain letters, numbers, underscores or dollar sign
// let 3years = 3; can't write number prefix
// let jonas&metilda = 'JM'; wrong
// let new = 10; reserved varibale name are not allowed eg: function
let _function = 23;
let $function = 23;
let name = "Jonas"; // it is reserved keyword but still we can use
let Person = "Jonas"; //starting with upper case only for OOPS'S
let PI = 3.14; // upper case variable case for variable that is constant

// make variable name as descriptive as possible
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob, myCurrentJob);
*/

/*
//: 11 data types
//  in js a value is only object(dict) or primitive datatype

// there are 7 primitive data types
// 1. Number: stores float or int
// 2. string: text
// 3. boolean: true or fasle
// 4. undefined: varibale declared but not inilitized -> empty value
// 5. Null: empty value -> declared and inltilized
// 6. symbol(ES2015): value that is unique and cannot be changed
// 7.BigInt: Larger integer than the number type can hold

// JS is dynamic typing. ``values have type not variable``. assing diff values with diff datatype within same variable in single program

let JsIsFun = true;
let age = 23;
let firstName = "Jonas";
console.log(JsIsFun, age, firstName);
console.log(typeof JsIsFun); // typeof is operator not a func
console.log(typeof typeof JsIsFun); // string

// dynamic typing
JsIsFun = "Yes";
console.log(typeof JsIsFun);
// let JsIsFun = 12; already declared


// undefined with both value and its type
let secondName;
console.log(secondName); // undefined
console.log(typeof secondName); // undefined
let email = null;
console.log(typeof email); // object, value is null but not type, bug not corrected bcs of legacy reasons
*/

/*
// 12 let, const and var
// let, const: ES6
// var: before ES6

let age = 30; // mutable variable, define empty variable
age = 31;

const birthYear = 1991; // not suppose to change in program, immutable
// birthYear = 1992; wrong
// const job; // no empty const variable, as can not be changed later in code

// use const more as we get less bugs. use let only if you are sure that variable is going to change.

// var: don't use it; will be there in legacy code
var job = "programmer";
job = "teacher";

// let is block scoped and var is function scoped

// we can create a variable w/o let, const, var
lastName = "Kumar";
console.log(lastName); // terrible idea ; does not create a variable in current scope, instead JS will create a property in global object
*/

/*
// 13 basic operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2)
console.log((ageJonas+1)/2);
console.log(ageJonas**2);

const firstName = 'Jonas';
const lastName = 'kumar';
console.log(firstName + ' ' + lastName); // template string will be used later

// typeof operator -> used earlier

// assignment operator
let x = 10 + 4;
console.log(x);
x += 10;// const will not work
x *= 2;
x /=10;
x++;
x--;
++x;
--x;
console.log(x);

// comparison operators -> produce bool values
console.log(ageJonas > ageSarah);// >, < , <=, >=
console.table(now-1991 > now-2018);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

// all the variable that are present on linked script will be present in brwoser console
*/

// L14 operator precedence -> mdn presedence table
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5); // 10 left to right
console.log(25 - 10 - 5); // 20 presendece right to left

// = is right to left
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

let avgAge = (ageJonas + ageSarah) / 2;
console.log(avgAge);
