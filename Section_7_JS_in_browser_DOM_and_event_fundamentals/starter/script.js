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

// console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;
let hightScore = 0;
let score = 20;
let canPlay = true;
let hasWin = false;
let message = 'Start guessing...';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const calcSecretNumber = function () {
  return Math.floor(Math.random() * 19 + 1);
};

const setSecretNumber = function (width, placeholder) {
  document.querySelector('.number').style.width = width; // assign a  string
  document.querySelector('.number').textContent = placeholder;
};
let secretNumber = calcSecretNumber();

const setBodyColor = function (color) {
  //   document.body.style.backgroundColor = 'green';
  document.querySelector('body').style.backgroundColor = color; // inline style is applied, check in dev tools-> elements
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const updateHighScore = function (highScore) {
  if (hightScore < score) {
    hightScore = score;
    document.querySelector('.highscore').textContent = hightScore;
  }
};
// event handler, pass anynanomas fx
const checkWin = function (event) {
  // console.log(event);
  if (event.type === 'click' || event.key === 'Enter') {
    const inputValue = Number(document.querySelector('.guess').value);

    //   console.log(inputValue, typeof inputValue, secretNumber); // check secret number
    if (canPlay) {
      if (!inputValue) {
        message = 'No number entered.';
      } else {
        if (score > 1) {
          if (inputValue === secretNumber) {
            hasWin = true;
            canPlay = false;
            setBodyColor('green');
            setSecretNumber('30rem', secretNumber);
            message = 'Correct answer';
            updateHighScore(hightScore);
          } else {
            message =
              inputValue < secretNumber ? 'Too small guess' : 'Too high guess';
            score--;
          }
        } else {
          canPlay = false;
          score--;
          message = 'Your lost. Play again';
          setBodyColor('red');
        }
        setScore(score);
      }
    } else {
      message = `${hasWin ? 'You Win, want to' : 'You Lose❌'} Play Again`;
    }

    //   update message UI
    displayMessage(message);
  }
};

// again functionality
const playAgain = function () {
  canPlay = true;
  hasWin = false;

  setBodyColor('#222');

  // new secret number
  secretNumber = calcSecretNumber();
  setSecretNumber('15rem', '?');
  message = 'Start guessing...';
  displayMessage(message);
  document.querySelector('.guess').value = '';

  // reset backend score and UI
  score = 20;
  setScore(score);
};

// addeventlistener: js engine executes the fx, we just pass the fx expression and do not call it
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkWin);
const guessInput = document.querySelector('.guess');
guessInput.addEventListener('keyup', checkWin);
// challaenge #1
// attact event listner to again btn
document.querySelector('.again').addEventListener('click', playAgain);

// made code DRY
