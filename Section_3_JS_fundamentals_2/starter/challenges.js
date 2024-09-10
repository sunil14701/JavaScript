// challenge #1
const calcAverage = (score1, score2, score3) => {
  const avg = (score1 + score2 + score3) / 3;
  return avg;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2)
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  else if (avgDolphins * 2 <= avgKoalas)
    return `Koalas win (${avgDolphins} vs. ${avgKoalas})`;
  else return `No team wins`;
};
// test case fail

// test1
// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));
console.log(checkWinner(576, 111));

// challenge 2
const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
  return tip;
};

const bills = new Array(125, 555, 44);
const tips = new Array();
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

const totals = [];
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}
console.log(totals);

// challenge 3
// BMI = mass / (height * height);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

console.log(mark.bmi, john.bmi);
if (mark.bmi > john.bmi)
  console.log(
    `${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})!`
  );
else if (mark.bmi < john.bmi)
  console.log(
    `${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})!`
  );
// same fx in two objecs violates the DRY. more in OOPS
// last test case fail

// challenge #4
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };


// const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
// const tips = [],
//   totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// // optional
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
