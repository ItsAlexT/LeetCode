// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const mapAnagram = new Map();

  for (const word of strs) {
    const sortedWord = word
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    if (mapAnagram.has(sortedWord)) mapAnagram.get(sortedWord).push(word);
    else mapAnagram.set(sortedWord, [word]);
  }
  const returnArray = [];
  for (const [key, value] of mapAnagram) {
    returnArray.push(value);
  }
  return returnArray;
};

const strs = [""]
console.log(groupAnagrams(strs));

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
