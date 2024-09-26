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
  scorers[game.scored[i]]? scorers[game.scored[i]]++: scorers[game.scored[i]] =1;
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
  console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

  // t4
  for(const [key,value] of gameEvents.entries()){
    if(key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
    else console.log(`[SECOND HALF] ${key}: ${value}`);
  }