// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pos_zero = null;
  let temp;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (pos_zero !== null) {
        temp = nums[pos_zero];
        nums[pos_zero] = nums[i];
        nums[i] = temp;
        pos_zero++;
      }
    } else {
      if (pos_zero == null) pos_zero = i;
    }
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));

/*
Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

Example 2:
    Input: nums = [0]
    Output: [0]
*/
