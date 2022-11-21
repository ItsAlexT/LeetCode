// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const mapNums = new Map();
  let diff = null;
  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    if (mapNums.has(nums[i])) return [mapNums.get(nums[i]), i];
    else mapNums.set(diff, i);
  }
  return [];
};

const nums = [3,3], target = 6
console.log(twoSum(nums, target));

/*
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/
