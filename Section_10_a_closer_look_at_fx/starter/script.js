'use strict';

// l127: section intro
// higher order fx, bind method, closures

/*
// l129: default parameters
const bookings = [];

// we can have defualt value as the expression. can declare the fx parameters which we declared prev from curr in value field
const createBooking = function(flightNum, numPassengers=0, price=12*34*numPassengers){

    // setting default values before ES6
    // flightNum = flightNum ?? 0;
    // numPassengers = numPassengers ?? 0;
    // price = price ?? 0;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH13',23,34);
createBooking('LH13',undefined,34);// we can not skip the default parameters. use undefined to skip a defualt parameter
*/

/*
// l130: how passing arguments works: value vs reference
const flight = 'LH234';// primitive type
const jonas = {
    name: 'Jonas kumar',
    passport: '1234567890',
}; // reference type

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';// passing a primitve type to a fx is same as creating new variable
    passenger.name = 'Mr. Jonas kumar';// jonas object will change. when we pass a reference type to a fx refernce to the bojet in the memory heap, but they point to same object in the memory

    if(passenger.passport === '1234567890'){
        alert('Checked In');
    }else alert('Wrong Passport');

}

checkIn(flight,jonas);
console.log(flight);// LH234
console.log(jonas);// name will be changed

// same as above
let flightNum = flight;
let passenger = jonas;
flightNum = 999;// variable copy will change
passenger = {
    name: 'sanjay',
}// jonas object will not change as whole address is changed
console.log(flight);
console.log(jonas);
console.log(passenger);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000000000);
}

// beware of passing object to fx as object value can be changed. mupliple fxs which are manuplulating the same object is dangerous
newPassport(jonas);
checkIn(flight,jonas);

// passing by pass/refernce
// JS has no passing by reference, only passing by value is there. for object we are passing by value, we are just passing the memory address of the object in a new variable
*/

/*
// l131: first class and higher order fx
// first class fx enables us to write higher order fx

// first class fx
// JS treats fx as first class citizens, this means that fx are simply VALUES. fx are just another TYPE of object.

// since objects are values we can use fx as many ways
// 1. store fx in variables or methods
const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

// passing fx as arguments like in event listerner fx to objects

// we can return fx from other fx.

// we can call methods on fx
// counter.inc.bind(fx);

// Higher order fx
// a fx that either receives anther fx as an argument or a fx that recieves a new fx or both. this is only possible bcs of first class fxs
// 1. fx that receives another fx
const greet = () => console.log(`hey jonas`);
btn.addEventListner('click', greet); // here addEventListner is a higher order fx and greet fx is a first class fx aka callback fx.

// 2 fx that returns new fx
function count() {
  let cnt = 0;
  return function () {
    cnt++;
  };
}// here count is a higher order fx which is returning a fx.

// diff between first class fx and higher order fx
// they are diff
// first class fx: its just a feature. all this means is fx is value. it is a concept.
// bcs the lang supports first class fx higer order for possible
*/

/*

// l132: fxs accepting callback fxs
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [firstWord, ...otherWords] = str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ');
}

// higher order fx: takes in a fx
const transformer = function(str, fx){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fx(str)}`);

    // fxs has properties and methods
    console.log(`Transformed by: ${fx.name}`);
}

// passing a callback fx(we do not call them self but JS will call them) to higher order fx
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);


// js uses callbacks all the time
let cnt = 1;
const high5 = function(){
    console.log(`(⌐■_■) ${cnt++}`);
}

// eg1
document.body.addEventListener('click', high5);// here addevenlister is a higher order fx and high5 is callback fx

// eg2: higher orderfx
['Jonas', 'Martha', 'Adam'].forEach(high5);

// why are call back fxs used in js?
// 1. make our code more reusable and interconnnected parts.
// 2. call back fxs allows us to create abstraction(hide the code implementaion).  more about abstracion in OOPS.
*/

/*
// l133: fx returning fx
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterMorning = greet('Good morning,');
greeterMorning('Sunil');
greeterMorning('Jonas'); //greeting varibale is comming from greet fx. it is possible because of clousers.

greet('Hello,')('Sunil');

// why fx returning fx? -> will be useful in programming paradigm in functinal programming.

// challenge: above fx using arrow fx
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hey,')('Kumar');
*/

/*
// l134: the call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'Sunil');
console.log(lufthansa);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// console.log(book);

// Does not work; as now method -> fx
// book('234', 'Sahil');// here this keyword is undefined, bcs in a regular fx call this keywords points to undefined in strict mode. so this keyword depend on how the fx is called

// setting this keyword manually; 3 methods to do this. that are call, apply, bind method. fx is just object and object has methods
book.call(euroWings, '234', 'rAHUL'); // first argument = object that this keyword should be pointing
console.log(euroWings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, '455', 'Sanjay'); // this keyword pointing to swiss object
console.log(swiss);

// apply method : do exactly same thing but need array of argument after this keyword
const flightData = [567, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// apply is not used bcs if spread operator
book.call(swiss, ...flightData);
console.log(swiss);

// bind method is imp

//before lec needed l135: the bind method
// bind method also helps us to set this keyword to any function call. bind does not immediatly call the fx instead it returns new fx where this keyword is bound.

const bookForEuroWing = book.bind(euroWings); // this will create a new fx which will set to eurowing object
console.log(bookForEuroWing);
bookForEuroWing(121, 'sk');
console.log(euroWings);

const bookForSwiss = book.bind(swiss);
const bookForLuf = book.bind(lufthansa);

// we can pre-set multiple arguments other than this keyword in bind method
const bookForEuroWing23 = book.bind(euroWings, 23); // specifying parts of apps before hands -> common pattern -> partial application. means parts of application of original fx are already applied
bookForEuroWing23('goku');
bookForEuroWing23('Doremon');

// with event listners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // this keyword is btn element. why? in event handler fx this keyword always point to the element on which the handler is attached to.
  this.planes++;
  console.log(this.planes);
};

const buyPlane = document.querySelector('.buy');
buyPlane.addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // we have to attach a object to callback fx or this keyword will point to DOM object. we have to manually define the this keyword here. we should not use call as it will immediatly call the fx. so we need bind as it will not call but return a new fx
lufthansa.buyPlane(); // this keyword is dynamic everytime. its depends who is calling.

// partial application
const addTax = (rate, value) => value + value * rate ;
console.log(addTax(0.10,200));

// use one tax all the time
const addTax20 = addTax.bind(null, 0.20);// 1st keyword should be this keyword but we can also pass null
console.log(addTax20(100));

// challeng: above do by fx using return fx 
const addTax2 = function(rate){
  return function(value){
    console.log(value + value *rate);
  }
};

const addTax2VAT = addTax2(0.20);
addTax2VAT(100);

*/

/*
// l137: immediately invoked function expressions(IIFE)
// sometime in js we need a fx that will be executed once not again. means fx should disappear after execution. will be used on async await
const runOnce = function () {
  console.log(`this will never run again`);
};
runOnce(); // this can be executed multiple times

// 1.IIFE -> fx that never run again; this is not a feature but pattern that is used by dev

(function () {
  console.log(`this will never run again`);

  // below variables are fx scoped, can not be accessed outside fx. we can say that all data is private/encapsulated in fx scope. its imp to hide variable and scopes are good way of doing this. bcs of this IIFE pattern was invented.
  const isPrivate = 23;
  var isPrivate2 = 34;
})(); // wrap fx in round bracket to fool js and to run fx w/o name. now fx expression is called immediatley

// console.log(isPrivate);
// console.log(isPrivate2);//one scope can not have access to inner scope

(() => console.log(`this will never run again`))();

// variable declared with let/const create its own scope inside a block
{
  const isPrivate =23;
  var notPrivate = 34; 
}
// console.log(isPrivate);// out of scope
console.log(notPrivate);// parent scoped access

// note: bcs of ES6 blocked scope, IIFE is not used as if we need data privacy than we create a block and not a fx. there is no need to create a fx to  create a scope unless var variable are used. but if you need to execute fx just once than IIFE is used.

*/

/*
// ***l138: closures
// prerequists: Execution context(EC), call stack, scope chain as clousers bring all these concepts together

// note: closure is not feataure like creating an array, object manually, it happens automatically in certain situations we just need to recognise it.

// higher order fx 
const secureBooking  = function(){
  let passengerCount = 0;// this variable can not be accessed outside fx

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);    
  }
};

let booker = secureBooking();
booker();
booker();
booker();

//Q how is this booker fx has access to passengerCount variable as EC of secureBooking is popped out of call stack?
// ans closure; closure makes fx remember all the variables that existed at the fx birthplace
// note secret of clouser: any fx always has access to the variable encironment of the execution context in which the fx was created. even after that EC is popped out. eg: booker fx has access to passengercount variable because it is basically defined in the scope in which the booker fx was created. So scope chain is preserved through the closure even when the scope is popped out bcs its EC is gone. this means that even though the EC is destroyed the variable environment somehow keeps living somewhere in the engine. clouser have priority over scope chain. in execution of booker fx passengercount is not in curent scope so JS will look into the clouser and see if variable is there

// a clouser makes sure that fx does'nt loose connection to variables that existed at the fx birth place.

// we can have a look at backpack/ birthplace variables
console.dir(booker);// go to scopes in console and it is the variable environment of booker fx. here closure is maintained. double bracket[[]] means that it is an internal property we can not access that property with our code 
*/

/*
// l139: more closure examples
// we don't need to always return a fx to see closure in action

// eg1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

console.log(f);
g();
f(); // EC/variable environment of g fx is finished but f fx can access the variables of g fx
console.dir(f);

// Re-ASSIGNING F fx
h();
f();
console.dir(f); //old closure disappers

// eg2

// call fx after some time
setTimeout(function () {
  console.log('TIMER');
}, 2000);

const boardPassengers = function(n, wait){
  const perGroup = n/3;

  // below callback fx will executed independenly so clouser is used to get  variable in birthplace i.e boardpassengers
  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`boarding 3 group with  ${perGroup} passengers`);
  }, wait*1000);


  console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 12; // clouser has more priority over scope-chain variables. fx perGroup is commneted than settimout will take this pergroup else clouser pergroup will be taken
boardPassengers(180,3);
*/

