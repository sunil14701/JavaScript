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

/*
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
console.log(2**4);
*/

/*
// l17 strings and template literals(ES 6)
const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const currYear = 2037;

let description = "I'm " + firstName + ', a ' + (currYear - birthYear) + ' year old ' + job + '!.';
console.log(description); 

// backticks are used
description = `I'm ${firstName},a ${currYear - birthYear} year old ${job}!`;
console.log(description);

// can use backticks, single quotes, double quotes in strings.
// use backticks always

// backticks: multi line strings
console.log(`hello
    yello`);
console.log('hello\n\
    yello');// before ES6
console.log('hello\n    yello');// before ES6
*/

/*
// L18 if/else statement
const currAge = 18;
const threshold = 18;

const canDrive = currAge >= threshold;
if (canDrive) console.log("You can drive");
else console.log(`you can drive after ${threshold - currAge} years.`);

if (currAge > threshold) console.log("You can drive.");
else if (currAge == threshold) console.log("Give DL test");
else console.log(`you can drive after ${threshold - currAge} years`);

const birthYear = 2015;
let century;
if(birthYear>2000 && birthYear <3000) century = 21;
else if(birthYear>1900 && birthYear <=2000) century = 20;
else century = 18;
console.log(century);
*/

/*
// L20 type conversion and coercion
// type conversion: manually convert one type to another 
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number('123q')); // NaN i.e invalid number 
console.log(NaN, typeof NaN);
console.log(123,String(123));
// can not convert to undefined or null
console.log(Boolean(0), Boolean(10));

// type coercion: js auto convert types 
console.log(1 + 'A'); // number + string = string
console.log(23 - '2'); // 21
console.log(23 + '2'); // 232
console.log('23' * '2');//46
console.log('23' * 2); //46

let n = '1' + 1;
n = n-1;
console.log(n);

console.log(2+3+4+'5');
console.log('10'-'4'-'3'-2+'5');
*/

/*
// l21 truthy and falsy values
// only 5 falsy values : 0, "", undefined, null, NaN
// when typecase above than falsy values else truty values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));

// boolean is always type coercion
if(!"") console.log("hello");
else console.log("no hello");

const money = 0;
if(money){
    console.log(`Don't spend it all :)`);
}else {
    console.log(`You should get a job.`);
}


// let height;
let height = 23;
if(height) console.log('Height is defined');
else console.log('Height is undefined');
*/

/*
// l22: equality operators == vs ===
//  === : strict equality operator, do not do type coercion
//  == : losse equality operator, do type coercion
const age = 18;
if (age === 18) console.log("Adult");

if (18 == "18") console.log("loose");
if (18 === "18") console.log("strict");
// avoid == as it can introduce bugs, use strict

const favNum = prompt(`What's your number`);
console.log(favNum, typeof favNum);

if (Number(favNum) === 23) console.log(`amazing number`);
else if (Number(favNum) === 7) console.log(`prime no`);
else console.log(`not amazing`);

//  != , !==
// always use the strict version
if ("9" !== 9) console.log("strict compartion");
if ("9" != 9) console.log("loose compartion");
*/

/*
// l23 boolean logic
// AND -> &&
// OR -> ||
// NOT -> !

const age = 16
*/

/*
// l24 logical operators
const hasDriversLicense = true;
const hasGoodVision = true;

let ansAnd = hasDriversLicense && hasGoodVision; 
let ansOR = hasDriversLicense || hasGoodVision; 
console.log(ansAnd, ansOR, !hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) console.log(`Sarah is able to drive`);
else console.log(`Someone else should drive.`);

const isTired =false;
console.log(hasDriversLicense && hasGoodVision || isTired);

const canDrive = hasDriversLicense && hasGoodVision && !isTired;

if(canDrive) console.log(`Sarah can drive for next 2 hrs`);
else console.log(`Sarah has to rest.`);
*/

/*
// L26 switch statement
let day = prompt("Enter you Day below");

if (day == "1") day = Number(day);

switch (day) {
  case "Monday": // day === 'Monday' i.e strict comparing
    console.log(`Today is monday`);
    break;

  case "Tuesday":
    console.log(`Today is Tuesday`);
    break;

  case "Wednesday":
    console.log(`Today is Wednesday`);
    break;

  case "Thrusday":
    console.log(`Today is Thrusday`);
    break;

  case "Friday":
    console.log(`Today is Friday`);
    break;

  case "Saturday":
    console.log(`Today is Saturday`);
    break;

  case "1":
    console.log(`1 is string`);
    break;

  case 1:
    console.log(`1 is number`);
    break;

  case "Sunday":
    console.log(`Today is Sunday`);
    break;

  default:
    console.log("Default");
}

if (day === "Monday") console.log("Today is Monday");
else if (day === "Tuesday") console.log("Today is Tuesday");
else if (day === "Wednesday") console.log("Today is wednesday");
else if (day === "Thursday") console.log("Today is Thursday");
else if (day === "Friday") console.log("Today is Friday");
else if (day === "Saturday") console.log("Today is Saturday");
else if (day === "Sunday") console.log("Today is Sunday");
else console.log("Default");
*/

/*
// l27 statements and expressions
// expression: piece of code that produces a value. eg: 4+5, 1991, true && false, 'string'.
// statement: piece of code that do not produce a value. It ends with semi-colon. eg: if-else statement, switch statement.

// In template literals we can only expect expressions and not statement.
console.log(`I'm good ${23}, ${if(12) 34; else 45}`);
*/

/*
// l28 ternary operator
const age = 12;
const canDrive = age>= 18? "Can drive":"Can not drive";
let canDrive2;
if(age >=18) canDrive2 = 'Can drive';
else canDrive2 = 'Can not drive';

console.log(canDrive);
console.log(canDrive2);

age >= 18? console.log(`Can drive`): console.log(`Can not drive`);

// operator always produces a value. So its a expression
// it can be used in template leterals
console.log(`God is ${age<18? "Good": "Bad"}`);

*/

// l30 JS releases: ES5, ES6+, ESNEXT
// PDF