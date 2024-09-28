'use strict';

// l127: section intro
// higher order fx, bind method, closures

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