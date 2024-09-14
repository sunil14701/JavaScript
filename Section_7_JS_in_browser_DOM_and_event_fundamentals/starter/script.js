'use strict';

/*
// l70: project 1:guess my number

// select html class 
console.log(document.querySelector('.message').textContent);

// select html id 
// console.log(document.querySelector('#message').textContent);
//  console.log(document);
*/

// l71: DOM and DOM manipulation
// DOM: document object model, complete html in tree like structure
// DOM is not part of JS, but part of web API.
// web API: librabry implemented by browsers, auto ovailbale to js without importing anything.
// besides DOM there are other webAPI's like timers fetch
// pdf 

// l72 selecting ana manupulating elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = '12';
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 34;// take input