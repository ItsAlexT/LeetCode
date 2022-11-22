// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let maxNum = null;
  const mapNums = new Map();

  for (const num of nums) {
    if (mapNums.has(num)) mapNums.set(num, mapNums.get(num) + 1);
    else mapNums.set(num, 1);

    if (mapNums.get(num) > max) {
      maxNum = num;
      max = mapNums.get(num);
    }
  }
  return maxNum
};
const nums = [3,2,3]
console.log(majorityElement(nums))
// Example 1:
//     Input: nums = [3,2,3]
//     Output: 3

// Example 2:
//     Input: nums = [2,2,1,1,1,2,2]
//     Output: 2
