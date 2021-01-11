
var uniqueMorseRepresentations = function (words) {
    let esu = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
    };
    return new Set(words.map(word => word.split('').map(ltr =>esu[ltr]).join(''))).size
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))