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

/*
// l72 selecting ana manupulating elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = '12';
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 34; // take input

*/
// l73: handling click events

const secretNumber = Math.floor(Math.random() * 19 + 1);
// console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

// highscore
let hightScore = 0;
let score = 20;

document.querySelector('.check').addEventListener(
  'click',
  // event handler
  function () {
    //   console.log(document.querySelector('.guess').value);
    const inputValue = Number(document.querySelector('.guess').value);
    console.log(inputValue, typeof inputValue);
    if (!inputValue) {
      document.querySelector('.message').textContent = 'No number entered.';
    } else {
      if (score > 1) {
        if (inputValue === secretNumber) {
          document.body.style.backgroundColor = 'green';
          document.querySelector('.message').textContent = 'Correct answer';
          if (hightScore < score) hightScore = score;
          document.querySelector('.highscore').textContent = hightScore;
          document.querySelector('.score') = 20;
        } else if (inputValue < secretNumber) {
            document.querySelector('.message').textContent = 'Too small guess';
        } else {
            document.querySelector('.message').textContent = 'Too high guess';
        }
        document.querySelector('.score').textContent = --score;
    }else{
        document.querySelector('.score').textContent = --score;
        document.querySelector('.message').textContent = 'Your lost';
        document.body.style.backgroundColor = 'red';
        // score = 20;
        // document.querySelector('.score').textContent = score;
    }
    }
    // if(inputValue  === 45) {
    //     document.querySelector('.message').textContent = 'Sunil Wins';
    // }
  }
);
// addeventlistener: js engine executes the fx, we just pass the fx expression and do not call it
