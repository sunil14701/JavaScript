
// Challenge #1
// BMI = mass / (height * height);
 
// let massMark=78, heightMark=1.69, massJohn=92, heightJohn=1.95;
let massMark=95, heightMark=1.88, massJohn=85, heightJohn=1.76;
 
 
let BMImark = massMark /(heightMark **2);
let BMIjohn = massJohn /(heightJohn*heightJohn);
 
console.log(BMImark, BMIjohn);
 
let markHigherBMI = BMImark >= BMIjohn;
console.log(markHigherBMI);
