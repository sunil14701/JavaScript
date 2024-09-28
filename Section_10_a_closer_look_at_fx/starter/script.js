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