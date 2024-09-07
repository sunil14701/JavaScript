// Challenge #1
// BMI = mass / (height * height);

let massMark = 78,
  heightMark = 1.69,
  massJohn = 92,
  heightJohn = 1.95;
// let massMark=95, heightMark=1.88, massJohn=85, heightJohn=1.76;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark >= BMIJohn;
console.log(markHigherBMI);

// Challenge #2
// if(BMIMark >= BMIJohn) console.log(`Mark's BMI is higher than John's!`);
// else console.log(`John's BMI is higher than Mark's!`);

if (BMIMark >= BMIJohn)
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
else console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);

if (BMIMark >= BMIJohn)
  console.log(
    `Mark's BMI (${BMIMark.toFixed(
      1
    )}) is higher than John's (${BMIJohn.toFixed(1)})!`
  );
else
  console.log(
    `John's BMI (${BMIJohn.toFixed(
      1
    )}) is higher than Mark's! (${BMIMark.toFixed(1)})`
  );

// challenge #3

/* Write your code below. Good luck! 🙂 */

// let DolphinScore1 = 96,
//   DolphinScore2 = 108,
//   DolphinScore3 = 89;
// let koalasScore1 = 88,
//   koalasScore2 = 91,
//   koalasScore3 = 110;

// let DolphinScore1 = 97,
//   DolphinScore2 = 112,
//   DolphinScore3 = 101;
// let koalasScore1 = 109,
//   koalasScore2 = 95,
//   koalasScore3 = 123;

let DolphinScore1 = 97,
  DolphinScore2 = 112,
  DolphinScore3 = 101;
let koalasScore1 = 109,
  koalasScore2 = 95,
  koalasScore3 = 106;

let scoreDolphins = (DolphinScore1 + DolphinScore2 + DolphinScore3) / 3;
let scoreKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas) console.log(`Dolphins win the trophy`);
else if (scoreDolphins < scoreKoalas) console.log(`Koalas win the trophy`);
else console.log(`Both win the trophy`);

// bonus1
if((scoreDolphins > scoreKoalas) && scoreDolphins >= 100)  console.log(`Dolphins win the trophy`);
else if((scoreDolphins < scoreKoalas) && scoreKoalas >=100) console.log(`Koalas win the trophy`);
else console.log(`Both win the trophy`);

// bonus2
if((scoreDolphins > scoreKoalas) && scoreDolphins >= 100)  console.log(`Dolphins win the trophy`);
else if((scoreDolphins < scoreKoalas) && scoreKoalas >=100) console.log(`Koalas win the trophy`);
else if(scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) console.log(`Both win the trophy`);
else console.log(`No one wins the trophy`);

// challenge #4

// const bill=275;
// const bill=40;
const bill=430;

const tip = bill >= 50 && bill <= 300? 0.15*bill: 0.20*bill;
 
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

 