// https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = new Array(nums.length);
  let sum = 0;
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    leftSum[i] = sum;
    sum = sum + nums[i];
  }
  sum = 0;

  for (let i = nums.length - 1; i > -1; i--) {
    if (sum === leftSum[i]) index = i;
    sum = sum + nums[i];
  }

  return index;
};

const nums = [-1, -1, 0, 0, -1, -1];
console.log(pivotIndex(nums));

/*
Example 1:
    Input: nums = [1,7,3,6,5,6]
    Output: 3
    Explanation:
    The pivot index is 3.
    Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
    Right sum = nums[4] + nums[5] = 5 + 6 = 11

Example 2:
    Input: nums = [1,2,3]
    Output: -1
    Explanation:
    There is no index that satisfies the conditions in the problem statement.

Example 3:
    Input: nums = [2,1,-1]
    Output: 0
    Explanation:
    The pivot index is 0.
    Left sum = 0 (no elements to the left of index 0)
    */
