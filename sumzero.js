/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let arr = []
  for(let i=0;i<n;i++){
        arr .push( i * 2 - n + 1)
  }
  return arr
};
console.log(sumZero(7))