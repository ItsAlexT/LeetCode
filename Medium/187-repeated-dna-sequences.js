// https://leetcode.com/problems/repeated-dna-sequences/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length < 11) return [];

  const mapDNA = new Map();
  const setDNA = new Set();

  let left = 0;
  let right = 10;
  while (right <= s.length) {
    const aux = s.substring(left, right);
    left++;
    right++;
    if (mapDNA.has(aux)) {
      setDNA.add(aux);
    } else mapDNA.set(aux, true);
  }
  return Array.from(setDNA.keys());
};

const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(findRepeatedDnaSequences(s));
// Example 1
//     Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
//     Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
//     Input: s = "AAAAAAAAAAAAA"
//     Output: ["AAAAAAAAAA"]
