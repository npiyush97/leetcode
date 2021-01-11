var halvesAreAlike = function (s) {
  let str = s.toLowerCase();
  let cc = 0,
    cc2 = 0;
  let a = str.length / 2;
  for (let i = 0; i < a; i++) {
    if (str[i] ==  "a" ||str[i] ==   "e" ||str[i] ==   "i" ||str[i] ==   "o" ||str[i] ==   "u") {
      cc = cc  + 1;
    }
  }
  for (let j = a; j < str.length; j++) {
    if (str[j] == "a" ||str[j] == "e" ||str[j] == "i" ||str[j] == "o" ||str[j] == "u") {
      cc2 = cc2 + 1;
    }
  }
  if (cc === cc2) {
    return true;
  } else {
    return false;
  }
};
console.log(halvesAreAlike("boOokLME"));

// better
let haalkie = function(s){
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    let checkA = 0,checkB = 0
    for(let i = 0;i<s.length/2;i++){
        if(vowels.has(s[i])) checkA++
        if(vowels.has(s[s.length-i-1]))checkB++
    }
    return checkA == checkB
}

console.log(haalkie('boOokLME'))