var generateTheString = function(n) {
    return 'b' + 'ab'.substring(n%2,1+n%2).repeat(n-1)
    // if(n === 1){
    //     return 'x'
    // } 
    // if(n % 2 === 0){
    //     return 'x'.repeat(n-1)+'y'
    // }
    // else{
    //     return 'x'.repeat(n)
    // }
};
console.log(generateTheString(1))

