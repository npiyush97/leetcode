var countConsistentStrings = function (allowed, words) {
  let count = 0,
    match;
  for (i in words) {
    let n = 0;
    match = true;
    while (n < words[i].length) {
      if (!allowed.includes(words[i][n])) {
        match = false;
      }
      n++;
    }
    match && count++;
  }
  return count;
};
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
