// https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const firstArr = pattern.split("");
  const secondArr = s.split(" ");
  const secondWord = new Array(secondArr.length);
  const setWords = new Set();

  if (firstArr.length !== secondArr.length) return false;

  const mapAux = new Map();

  for (let i = 0; i < firstArr.length; i++) {
    const first = firstArr[i];
    const second = secondArr[i];
    if (!mapAux.has(first)) {
      if (setWords.has(second)) return false;
      mapAux.set(first, second);
      setWords.add(second);
    }
    secondWord[i] = mapAux.get(first);
  }

  return s === secondWord.join(" ");
};

const pattern = "abba",
  s = "dog cat cat dog";
console.log(wordPattern(pattern, s));

// Example 1:
//     Input: pattern = "abba", s = "dog cat cat dog"
//     Output: true

// Example 2:
//     Input: pattern = "abba", s = "dog cat cat fish"
//     Output: false

// Example 3:
//     Input: pattern = "aaaa", s = "dog cat cat dog"
//     Output: false
