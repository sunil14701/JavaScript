
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
