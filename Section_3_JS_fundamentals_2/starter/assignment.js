
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





