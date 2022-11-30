// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const mapArr = new Map();
  // build freq
  for (const num of arr) {
    if (mapArr.has(num)) mapArr.set(num, mapArr.get(num) + 1);
    else mapArr.set(num, 1);
  }

  const setFreq = new Set();
  for (const [key, val] of mapArr) {
    if (setFreq.has(val)) return false;
    setFreq.add(val);
  }

  return true;
};

const arr = [1,2]
console.log(uniqueOccurrences(arr));

/*
Example 1:
    Input: arr = [1,2,2,1,1,3]
    Output: true
    Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
    Input: arr = [1,2]
    Output: false

Example 3:
    Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
    Output: true
*/
