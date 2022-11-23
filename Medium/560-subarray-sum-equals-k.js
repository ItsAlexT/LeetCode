// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let movingSum = 0;
  let movingArray = [];
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    movingSum = movingSum + nums[i];
    movingArray.push(nums[i]);

    if (movingSum > k) {
      while (movingSum > k) {
        movingSum = movingSum - movingArray.shift();
      }
    }
    if (movingSum === k) counter++;
  }
  return counter;
};

const nums = [1, 1, 1],
  k = 2;
console.log(subarraySum(nums, k));

// Example 1:
//   Input: nums = [1,1,1], k = 2
//   Output: 2

// Example 2:
//   Input: nums = [1,2,3], k = 3
//   Output: 2
