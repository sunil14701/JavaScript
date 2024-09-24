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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
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
const [players1, players2] = game.players
console.log(players1,players2);

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
const {odds :{team1, team2, x: draw}} = game;
console.log(team1);
console.log(draw);
console.log(team2);

// t6 
const printGoals = function(...players){
    for(let i=0;i<players.length;i++){
        console.log(players[i], players.length);
    }
}

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
printGoals(...game.scored);

// t7

team1 < team2 && console.log('team1 will win');
team1 > team2 && console.log('team2 will win')
team1 == team2 && console.log('Draw will happen');


