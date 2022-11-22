// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function (nums) {
    const prodNumsLeft = new Array(nums.length);
    prodNumsLeft[0] = 1;
    let prod = 1;
    for (let i = 1; i < nums.length; i++) {
      prod = prod * nums[i - 1];
      prodNumsLeft[i] = prod;
    }
    let returnArr = new Array(nums.length);
    prod = 1;
    for (let i = nums.length - 1; i > -1; i--) {
      returnArr[i] = prod * prodNumsLeft[i];
      prod = prod * nums[i];
    }
    return returnArr;
  };

const nums = [1,2,3,4]
console.log(productExceptSelf(nums))

// Example 1:
//     Input: nums = [1,2,3,4]
//     Output: [24,12,8,6]

// Example 2:
//     Input: nums = [-1,1,0,-3,3]
//     Output: [0,0,9,0,0]