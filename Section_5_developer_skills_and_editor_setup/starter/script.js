// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// l55: setting up prettier and vs code
// 1. prettier vs extention: go to docs to customise the coding style. eg: single brackets instead of double brackets

const x = 23;
if (x === 45) console.log(`hello`);

const calcAge = (birthYear) => 2037 - birthYear;

// global snippets
console.log(x);

// 2. auto close tag vs extention, ESlint extention, image preview, todo highlight
// BUG, note, todo, lecture

*/

/*
// l56: install node.js and setting up a dev env
//  live server extention vs extention
console.log(237);

// real js programmer use this
// nodejs : js runtime, run js outside the browser
// node -v, npm --version
// npm install live-server -g // npm node package manager -> program to download tools, -g -> globally
// in terminal -> live-server
*/

// l57: learning how to code
// 1. have a clear goal->todo mine learn node.js and move to development in emaar, make yt clone to minimize distractions.
// 2. will never know everything(fact)
// 3. do  small challages and take notes: codewars website
// 4 build projects; don't stuck in tutotial hell
// 5. do not learn in isolation
// 6. don't get stuck in perfect code
// pdf

// l58: how to think like a developer: become a problem solver
// problem solveing do not mean fix coding mistakes or bugs
// pdf -> 4 steps to solve any problem

// l59: using google, stackoverflow, MDN
// given an array of temp of one day, calc the temp amplitude

/*
const calcAmplitude = function (temperatures) {
  let ma = temperatures[0];
  let mi = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    let curr = temperatures[i];
    if (typeof curr !== 'number') continue;
    if (curr > ma) ma = curr;
    if (curr < mi) mi = curr;
  }
  const amplitude = ma - mi;
  return amplitude;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const amp = calcAmplitude(temperatures);
console.log(`Ampitude: ${amp}`);

const temperatures2 = [1, 2, 3, 4, 5, 100];
const mergedTemp = temperatures.concat(temperatures2);
const mergedAmp = calcAmplitude(mergedTemp);
console.log(mergedTemp);
console.log(mergedAmp);

// l60, l61: debugging with the console and breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Enter temp in celsius')),
  };
  debugger;// from js script
  // console.log(measurement.value);
  // console.table(measurement.value);
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const inKelvin = measurement['value'] + 273;
  return inKelvin;
};

// A. Identify the bug
console.log(measureKelvin());

// breakpoint -> degugger
// dev tools -> source tab -> page window -> yourFile.js -> add breakpoint -> refresh the page
debugger
*/

// l62 coding challenge

const printForcast = function(tempArray){
    let inSingleLine = "";
    for(let i=0;i<tempArray.length;i++){
        inSingleLine+=(`... ${tempArray[i]}°C in ${i+1} days `);
    }
    inSingleLine += '...';
    console.log(inSingleLine);
}

const forcastedMaxTemp = [17, 21, 23];
// const forcastedMaxTemp = [12, 5, -5, 0, 4];
printForcast(forcastedMaxTemp);