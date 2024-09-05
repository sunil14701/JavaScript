
// Challenge #1
// BMI = mass / (height * height);
 
let massMark=78, heightMark=1.69, massJohn=92, heightJohn=1.95;
// let massMark=95, heightMark=1.88, massJohn=85, heightJohn=1.76;
 
 
let BMIMark = massMark /(heightMark **2);
let BMIJohn = massJohn /(heightJohn*heightJohn);
 
console.log(BMIMark, BMIJohn);
 
let markHigherBMI = BMIMark >= BMIJohn;
console.log(markHigherBMI);

// Challenge #2
// if(BMIMark >= BMIJohn) console.log(`Mark's BMI is higher than John's!`);
// else console.log(`John's BMI is higher than Mark's!`);
 
if(BMIMark >= BMIJohn) console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
else console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);
 
if(BMIMark >= BMIJohn) console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
else console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's! (${BMIMark.toFixed(1)})`);

 
