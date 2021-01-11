/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let res = 0,count = 0
    // let j = s.split(' ').join('')
    for(let i=0;i<s.length;i++){
        if(s[i] == '('){
           res = Math.max(res, ++count)
        }
        if(s[i] == ')'){
            count--
        }
    }
    return res
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1"))
