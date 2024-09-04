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

// 12 let, const and var
