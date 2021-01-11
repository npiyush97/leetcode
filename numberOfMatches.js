/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches,count
    let arr = []
    while (n > 1){
    if(n % 2 != 0){
    matches =  Math.floor((n - 1) /2)
    }
    else{
        matches = n/2
    }
    n = n - matches
    arr.push(matches)
    }
    let j = arr.reduce((a,b)=>a+b)
    console.log(j)

};
numberOfMatches(14)
