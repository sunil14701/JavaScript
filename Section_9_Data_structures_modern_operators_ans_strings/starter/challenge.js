'use strict';

// challenge #1 (football betting app)

// API data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// t1
// const players1 = game.players[0];
// const players2 = game.players[1];

// use destructuring
const [players1, players2] = game.players;
console.log(players1, players2);

// t2
// use REST
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// t3
const allPlayers = [...players2, ...players1];
console.log(allPlayers);

// t4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// t5
// const {team1,x: draw,team2} = game.odds;
const {
  odds: { team1, team2, x: draw },
} = game;
console.log(team1);
console.log(draw);
console.log(team2);

// t6
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i], players.length);
  }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// t7

team1 < team2 && console.log('team1 will win');
team1 > team2 && console.log('team2 will win');
team1 == team2 && console.log('Draw will happen');

// coding challenge #2
console.log(`-------#2-------`);

// t1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// t2
const avg = function (odds) {
  const numbers = Object.values(odds);
  const len = numbers.length;
  let total = 0;
  for (let i = 0; i < len; i++) {
    total += numbers[i];
  }
  return total / len;
};

console.log('Average of odds: ', avg(game.odds));

// t3
for (const [team, points] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[team] ?? 'draw'}: ${points}`);
}

// t4
const scorers = {};
for (let i = 0; i < game.scored.length; i++) {
  //   if (!scorers[game.scored[i]]) scorers[game.scored[i]] = 1;
  //   else scorers[game.scored[i]]++;
  scorers[game.scored[i]]
    ? scorers[game.scored[i]]++
    : (scorers[game.scored[i]] = 1);
}
console.log(scorers);

// challenge #3
console.log('-------3-------');
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// t1
const eventsArray = gameEvents.values();
// console.log(eventsArray);
const uniqueEventsSet = new Set(eventsArray);
// console.log(uniqueEventsSet);
const events = [...uniqueEventsSet];
console.log(events);

// t2
gameEvents.delete(64);
console.log(gameEvents);

// t3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// t4
for (const [key, value] of gameEvents.entries()) {
  if (key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  else console.log(`[SECOND HALF] ${key}: ${value}`);
}

// coding challenge #4
console.log('4'.padEnd(6, '-').padStart(11, '-'));

const toCamelCase = function (str) {
  str = str.toLowerCase().trim();
  let newVariable = str;

  let isConverted = false;
  const words = str.split('_');
  if (words.length <= 2) {
    isConverted = true;
    newVariable = '';
    // convert to camelcase
    for (let i = 0; i < words.length; i++) {
      if (i != 0) words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      newVariable += words[i];
    }
  }

  return [newVariable, isConverted];
};

const convertToCamelCase = function (data) {
  for (const [i, variable] of data.entries()) {
    // console.log(i, variable);
    const [convertedWord, isConverted] = toCamelCase(variable);
    if (isConverted)
      console.log(`${convertedWord.padEnd(20)} ${'✅'.repeat(i + 1)}`);
    else console.log(`${convertedWord.padEnd(20, ' ')} ${'❌'.repeat(i + 1)}`);
  }
};

// const fummyData = [
//   'underscore_case',
//   'first_name',
//   'Some_Variable',
//   'calc_AGE',
//   'my_name_is',
//   'cool',
// ];

// data to input in textarea UI-> 
// underscore_case
//  first_name
// Some_Variable
// calc_AGE 
//  my_name_is
// cool

// insert textarea and btn
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('textarea').value = `first_name
Some_Variable
calc_AGE 
 my_name_is
cool`


// hardcoded
// const textarea = document.getElementById('input_data').value = 'underscore_case first_name Some_Variable calc_AGE my_name_is cool';
// const btn = document.querySelector('#btn');

const btn = document.querySelector('button')

btn.addEventListener('click', function(){
  const textareaData = document.querySelector('textarea').value;
  const data = textareaData.split('\n');
  convertToCamelCase(data);
});

