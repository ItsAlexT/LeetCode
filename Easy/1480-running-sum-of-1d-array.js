// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  var returnArray = new Array(nums.length);

  let prevSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prevSum = prevSum + nums[i];
    returnArray[i] = prevSum;
  }

  return returnArray;
};

const nums = [1, 2, 3, 4];
console.log(runningSum(nums));

/*
Example 1:
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:
    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:
    Input: nums = [3,1,2,10,1]
    Output: [3,4,6,16,17]
    */
