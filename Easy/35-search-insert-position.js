// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums = [], target) {
  // Corner cases
  if (nums.length == 0) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  if (target < nums[0]) return 0;

  start_index = 0;
  end_index = nums.length - 1;
  middle_index = 0;

  while (start_index <= end_index) {
    middle_index = Math.floor((start_index + end_index) / 2);

    if (nums[middle_index] == target) return middle_index;

    if (nums[middle_index - 1] < target && target <= nums[middle_index])
      return middle_index;

    if (target > nums[middle_index]) start_index = middle_index + 1;
    else end_index = middle_index - 1;
  }
  return -1;
};

const nums = [1, 3, 5, 6],
  target = 5;
console.log(searchInsert(nums, target));

/*
Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2

Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1

Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4
    */
