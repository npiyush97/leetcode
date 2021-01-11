// let streamChecker = function (words) {
//   this.root = {};
//   for (let w of words) {
//     w = w.split(" ").reverse().join(" ");
//     let node = this.root;
//     for (let c of w) {
//       if(node [c])node[c]   = {}
//         node = node[c]
//     }
//     node.word = w;
//   }
//   this.letters = [];
// };

// streamChecker.prototype.query = function (letter) {
//   this.letters.push(letter);
//   let lookingFor = this.root;
//   for (let i = this.letters.length - 1; i >= 0; i--) {
//     if (lookingFor[this.letters[i]]) {
//       lookingFor = lookingFor[this.letters[i]];
//       if (lookingFor.word) return true;
//     } else {
//       return false;
//     }
//   }
// };

class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor() {

    this.root = new TrieNode("*");
  }
  addWord(word) {
    let lastNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (lastNode.children[char] === undefined) {
        lastNode.children[char] = new TrieNode(char);
      }
      lastNode = lastNode.children[char];
      if (i == word.length - 1) lastNode.end = true;
    }
  }
  hasWord(word) {
    let lastNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (lastNode.children[char] === undefined) {
        return false;
      } else {
        lastNode = lastNode.children[char];
      }
      if (i == word.length - 1 && lastNode.end) {
        return true;
      } else if (i == word.length - 1) {
        return lastNode;
      }
    }
  }
}

class StreamChecker{
    constructor(words){
        this.trie = new Trie()
        this.letters = []

        for(let word of words){
            let reversedWord = word.split('').reverse().join('')
            this.trie.addWord(reversedWord)
        }
    }
    query(letter){
        this.letters.unshift(letter)
        let possibleWord = ''
        for(let letter of this.letters){
            possibleWord = possibleWord + letter
            let trieWorld = this.trie.hasWord(possibleWord)
            if(trieWorld == true) return true
            if(trieWorld == false) return false
        }
        return false
    }
}


let cast = new StreamChecker([[["cd","f","kl"]],["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"],["k"],["l"]])

console.log(cast.query('a'))








