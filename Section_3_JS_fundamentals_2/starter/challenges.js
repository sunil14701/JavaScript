
// challenge #1
const calcAverage = (score1, score2, score3) => {
    const avg = (score1+ score2+ score3)/3;
    return avg;
};
 
const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= (avgKoalas*2)) return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    else if((avgDolphins*2) <= avgKoalas) return `Koalas win (${avgDolphins} vs. ${avgKoalas})`;
    else return `No team wins`;
};


// test1
// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);
const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);

console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));
console.log(checkWinner(576,111));

// challenge 2
const calcTip = function(bill){
    const tip = bill>=50 && bill <= 300? 0.15*bill: 0.2*bill;
    return tip;
};
 
const bills = new Array(125,555,44);
const tips = new Array();
for(let i=0;i<bills.length;i++)
{
    tips.push(calcTip(bills[i]));
}
 
const totals = [];
for(let i=0;i<bills.length;i++){
    totals.push(bills[i] + tips[i]);
}