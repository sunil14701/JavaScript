'use strict';

// challenge1
console.log('#1'.padStart(5, '-').padEnd(8, '-'));

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  const dogs = [...dogsJuliaCorrected, ...dogsKate];
  dogs.forEach(function (dogAge, index, array) {
    if (dogAge >= 3)
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dogAge} years old.`
      );
    else console.log(`Dog number ${index + 1} is still a puppy🐶.`);
  });
};

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];

checkDogs(dogsJulia, dogsKate);

// challenge 2
console.log('#2'.padStart(5, '-').padEnd(8, '-'));
const calcAverageHumanAge = function (ages) {
  const dogsAvgAge = ages.map(function (age) {
    if (age <= 2) return 2 * age;
    else return 16 + age * 4;
  });

  const dogsGreater18 = dogsAvgAge.filter(function (age) {
    return age >= 18;
  });

//   const sumDogAge = dogsGreater18.reduce(function (accumulator, currAge) {
//     return accumulator + currAge;
//   }, 0);
// return sumDogAge / dogsGreater18.length;

  const avgDogAge = dogsGreater18.reduce(function (accumulator, currAge,index, array) {
    return (accumulator + currAge/array.length);
  }, 0);
  return avgDogAge;
};

let dogsAge = [5, 2, 4, 1, 15, 8, 3];
// dogsAge = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(dogsAge));

