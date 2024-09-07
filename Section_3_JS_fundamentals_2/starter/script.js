'use strict';

// l31 section intro
console.log(`Hello world`);

// l32: activating strict mode
// make js cide secure. 'use strict'; *MUST be first line of js file.
// why strict mode?
// 1. it forbids us to do certain things.
// 2. it creates visible errors in dev console, where in certain situations when js fails silently

// eg: mode will throw error if let, const, var is not used 
let hasDL = false;
const passTest = true;
// if(passTest) hasDLs = true;
if(hasDL) console.log(`I can drive.`);

// eg: error when using reserved js words
// const interface = 'sunil';
const private = 23;
// const if = 23;

// more on this later; such as for functions, objecs, setting properties on primitive values etc.
