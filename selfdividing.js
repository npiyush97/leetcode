/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
        let result = []
        for(let i=left;i<=right;i++){
            String(i).split('').every(number => +number && !(i % number)) && result.push(i);
        }
        return result
};
console.log(selfDividingNumbers(1,22))






