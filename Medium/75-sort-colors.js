// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const arayNums = [0, 0, 0];

  for (const num of nums) {
    arayNums[num] = arayNums[num] + 1;
  }

  let counter = 0;
  for (let i = 0; i < arayNums.length; i++) {
    for (let j = 1; j <= arayNums[i]; j++) {
      nums[counter] = i;
      counter++;
    }
  }
};

const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);

// Example 1:
//     Input: nums = [2,0,2,1,1,0]
//     Output: [0,0,1,1,2,2]

// Example 2:
//     Input: nums = [2,0,1]
//     Output: [0,1,2]
