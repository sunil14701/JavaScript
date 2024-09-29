'use strict';

// challenge #1
// poll app
// Data1: [5, 2,3 ]
// Data2: [1,5,3,9,6,1]
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  let questionStr = `${this.question}`;
  for (const number of this.options) {
    const opt = `\n${number}`;
    questionStr += opt;
  }
  const selected = Number(prompt(questionStr));
  if (
    (selected < 0 || selected > this.answers.length) &&
    typeof selected != 'number'
  )
    alert('Refresh again, put number that are options');
  else {
    this.answers[selected]++;
  }
  this.displayResults();
  this.displayResults('string');
};

// poll.registerNewAnswer.bind(poll)()
const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = 'array') {
  // const type = prompt("string or array");
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    let pollRes = `Poll result are ${this.answers.join(', ')}`;
    console.log(pollRes);
  } else {
    alert('enter string or array in literal');
  }
};

// new this keyoword for bonus
const newObj = {
  answers: [5, 2, 3],
  // answers : [1,5,3,9,6,1]
};
poll.displayResults.call(newObj, 'string');
