
// assignment 1: functions
const describeCountry = function(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}. `;
};

const country1 = describeCountry('India', 1450, 'Delhi');
const country2 = describeCountry('Pakistan', 230, 'Karachi');
const country3 = describeCountry('China', 1400, 'Beijing');
console.log(country1);
console.log(country2);
console.log(country3);

// assignment 2: fx declarations vs expressions
let worldPopulation = 7900;

// calling fx before declaration
const percentageIndia = percentageOfWorld1(1450);
const percentagePakistan = percentageOfWorld1(230);
const percentageChina = percentageOfWorld1(1400);
console.log(percentageIndia, percentagePakistan, percentageChina);

function percentageOfWorld1(population){
    return (population*100)/worldPopulation;
}

const percentageOfWorld2 = function(population){
    return (population*100)/worldPopulation;
};
const percentageIndia2 = percentageOfWorld2(1450);
const percentagePakistan2 = percentageOfWorld2(230);
const percentageChina2 = percentageOfWorld2(1400);
console.log(percentageIndia2, percentagePakistan2, percentageChina2);


// Assignment 3: arrow fx

const percentageOfWorld3 = (population) =>{
    return (population*100)/worldPopulation;
};
const percentageIndia3 = percentageOfWorld2(1450);
const percentagePakistan3 = percentageOfWorld2(230);
const percentageChina3 = percentageOfWorld2(1400);
console.log(percentageIndia3, percentagePakistan3, percentageChina3);

// Assignemnt 3: fx calling fx 
const describePopulation = function (country, population){
    const percPopulation = percentageOfWorld3(population);
    return `${country} has ${population} million people, which is about ${percPopulation}% of the world`;
}
const describeIndia = describePopulation('India',1450);
const describePakistan = describePopulation('Pakistan',230);
const describeChina = describePopulation('China',1400);
console.log(describeIndia);
console.log(describePakistan);
console.log(describeChina);

// Assignment 4: intro to arrays
const populations = [1450, 1400, 230, 130];
const len = populations.length;
if(len === 4) console.log(true);
else console.log(false);

const percentages = [percentageOfWorld3(populations[0]),
                    percentageOfWorld2(populations[1]),
                    percentageOfWorld2(populations[2]),
                    percentageOfWorld2(populations[3]),
                    ];
console.log(populations);
console.log(percentages);

// Assignment 5: basic array operations
let neigbours = ['China','Pakistan','Myanmar','Srilanka'];
neigbours.push('Utopia');
neigbours.pop();
if(!neigbours.includes('Germany')){
    console.log(`Probably no a central european country :D`);
}
const index = neigbours.indexOf('China');
neigbours[index] = 'Republic of China';
console.log(neigbours);

// assgnment 6: intro to objects
const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population : 1450,
    neigbours: neigbours,
    // describe: function(){
    //     const desc = `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neigbours.length} neighbourning countries and a capital called ${this.capital}.`
    //     return desc;
    // }
}
console.log(myCountry);

// asssignment 7: dot vs bracket notation

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neigbours.length} neighbourning countries and a capital called ${myCountry.capital}.`);

console.log(myCountry.population)
myCountry.population+=2;
console.log(myCountry.population)
myCountry['population']-=2;
console.log(myCountry.population)

// assignment 8: object methods
myCountry.describe =  function(){
        const desc = `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neigbours.length} neighbourning countries and a capital called ${this.capital}.`
        return desc;
    };
console.log(myCountry.describe());

myCountry.checkIsland = !myCountry.neigbours.length? true:false;
console.log(myCountry.checkIsland);

// assignment 8
for(let i=0;i<50;i++){
    console.log(`Voter number ${i+1} is currently voting.`);
}

// assignment 9
const percentage2 = [];
for(let i=0;i<populations.length;i++){
    percentage2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);
console.log(percentage2);

// assignemnt 10: looping backwards and loops in loop
let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i=0;i<listOfNeighbours.length;i++){
    for(let j=0;j<listOfNeighbours[i].length;j++){
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

// assignment 11:while loop
let i=0;
const percentage3 = [];
while(i<populations.length)
    {
        percentage3.push(percentageOfWorld1(populations[i]));
        i++;
    }
console.log(percentage3);
// for loop is better as we know len of array prev