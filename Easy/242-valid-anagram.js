// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(N) Space - O(N) Time
var isAnagram = function (first, second) {
  if (first.length !== second.length) return false;

  const mapFirst = new Map();
  let counter = 0;
  // Build frequency map from first char
  for (const char of first) {
    if (mapFirst.has(char)) mapFirst.set(char, mapFirst.get(char) + 1);
    else mapFirst.set(char, 1);
  }

  // Check for second string
  for (const char of second) {
    if (mapFirst.has(char)) {
      // decrement value if letter exists
      counter = mapFirst.get(char);
      counter--;
      // if we have more letters of a kind than first string
      if (counter < 0) return false;
      mapFirst.set(char, counter);
    } else return false;
  }

  return true;
};

const s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
