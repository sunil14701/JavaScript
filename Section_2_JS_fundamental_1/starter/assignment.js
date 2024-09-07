// Assignament 1: values and variables
const country = "India";
const continent = "Asia";
let population = 1500; // in millions

console.log(country);
console.log(continent);
console.log(population);

// Assignment 2: data types
const isIsland = false;
let language;
console.log(country, typeof country);
console.log(population, typeof population);
console.log(isIsland, typeof isIsland);
console.log(language, typeof language);

// Assignment 3: let, const, var
language = "hindi";
// isIsland = true; error is shown

// Assignment 4: basic operators
const halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);

let finlandPopulation = 6;
if (population > finlandPopulation) console.log("Yes");
else console.log("No");

let avgPopulation = 33;
if (population < avgPopulation) console.log("less people");
else console.log(`more peoole`);

const description = `${country} is in ${continent}, and its ${halfPopulation} million people speak ${language}.`;
console.log(description);

// Assignment 5: if else statement
let diffInPopulation, correctWord;
// population = 130;
if (population > avgPopulation) {
  diffInPopulation = population - avgPopulation;
  correctWord = "above";
} else {
  diffInPopulation = avgPopulation - population;
  correctWord = "below";
}
console.log(
  `${country}'s population is ${diffInPopulation} million ${correctWord} average.`
);

// Assignment 6: type conversion and coercion
// 4
// 617
// 23
// false
// 1143

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// Assignment 7: ==, ===
// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

// if(numNeighbours ===1) console.log(`Only 1 border!`);
// else if(numNeighbours > 1) console.log(`More than 1 border`);
// else console.log(`No borders`);
// we should use type conversion as prompt return any value in form of string. so we have to use strict comparison for checking the value as well as the type of the variable.

// Assignment 8: logical operators

// make condition true
// language = 'English';
// population = 2;

const sarahDesireCountry = (language == 'English') && population < 50 && !isIsland;

if(sarahDesireCountry) console.log(`You should live in ${country} :)`);
else console.log(`${country} does not meet your criteria :(`);

// Assignment 9: switch case
// language = 'english';
switch(language){
    case 'chinese':
        console.log(`Most number of native speakers`);
        break;
    
    
    case 'mandarin':
        console.log(`Most number of native speakers`);
        break;
    
    
    case 'spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    
    
    case 'english':
        console.log(`3rd place in number of native speakers`);
        break;
    
    
    case 'hindi':
        console.log(`4th place in  number of native speakers`);
        break;
    
    case 'arabic':
        console.log(`5th place in  number of native speakers`);
        break;

    default:
        console.log(`Great language too :D`);
        break;
}

// Assignment 10: ternary operator
// population = 130;
const populationKind = population > avgPopulation? 'above': 'below';
console.log(`${country}'s population is ${populationKind} average.`);