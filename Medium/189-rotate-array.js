// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k % nums.length === 0 || k === 0) return;

  if (k > nums.length - 1) k = k % nums.length;
  // reverse list
  swap(nums, 0, nums.length - 1);
  // swap first part
  swap(nums, 0, k - 1);
  //swap second part
  swap(nums, k, nums.length - 1);

  //   console.log(nums);
};

const swap = function (nums, left, right) {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
rotate(nums, k);
console.log(nums);

/*
Example 1:
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]
*/
