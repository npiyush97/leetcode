var maximumWealth = function (accounts) {
  var res = 0;
  for (var i = 0; i < accounts.length; i++) {
    var temp = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      temp += accounts[i][j];
    }
    res = Math.max(res, temp);
  }
  return res;
};
console.log(maximumWealth([1, 2, 3], [3, 2, 1]));
// let sum = 0;
// for (let i = 0; i < accounts.length; i++) {
//     const sumArray = accounts[i].reduce((acc, value) => acc + value)
//     if ( sumArray > sum ) {
//         sum = sumArray;
//     }
// }
//   let ambani = 0;
//   accounts.forEach((account) => {
//     let total = account.reduce((total, currValue) => total + currValue);
//     if (total > ambani) {
//       ambani = total;
//     }
//   });
//   return ambani;

// return accounts.reduce((p, c) => Math.max(p, Math.max(p, c.reduce((curr, prev) => curr + prev, 0))), 0);
