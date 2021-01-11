/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let temp = new Array(26).fill(0)
    let ans = []
    for(let i=0;i<s.length;i++){
        temp[s.charCodeAt(i) - 97] += 1
    }
    let flag = true
    while(ans.length < s.length){
        for(let i=0;i<temp.length;i++){
            let pos = i
            if(!flag){
                pos = 25 - i
            }
            if(temp[pos] !== 0){
                ans.push(String.fromCharCode(pos+97))
                temp[pos] -= 1
            }
        }
        flag = !flag
    }
    ans = ans.join('')
    return ans
};
console.log(sortString('leetcode'))

const cnts = new Array(26).fill(0);
for (let i = 0; i < s.length; i++) cnts[s.charCodeAt(i) - 97]++;
const res = new Array(Math.max(...cnts)).fill('');
for (let i = 0; i < 26; i++)
  for (let j = 0; j < cnts[i]; j++)
    if (0 === j % 2) res[j] += String.fromCharCode(i + 97);
    else res[j] = String.fromCharCode(i + 97) + res[j];
return res.join('');
