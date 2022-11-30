// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // initialize to 1st num
  let [runningSum, maxSum] = [nums[0], nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const sum = runningSum + nums[i];

    runningSum = Math.max(nums[i], sum);
    maxSum = Math.max(maxSum, runningSum);
  }

  return maxSum;
};
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
/*
Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
    Input: nums = [1]
    Output: 1

Example 3:
    Input: nums = [5,4,-1,7,8]
    Output: 23
    */
