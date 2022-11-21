// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(N) Space - O(N) Time
var containsDuplicate = function (nums) {
  const setNums = new Set();

  for (const num of nums) {
    if (setNums.has(num)) return true;
    else setNums.add(num);
  }
  return false;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
