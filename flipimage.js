var flipAndInvertImage = function(A) {

    return A.map(row => row.reverse().map(x => x^1))

};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
