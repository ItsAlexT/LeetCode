// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const mapNums = new Map();
  for (let i = 1; i <= nums.length; i++) {
    mapNums.set(i, true);
  }

  for (const num of nums) {
    mapNums.delete(num);
  }

  let retArr = [];
  for (const key of mapNums.keys()) {
    retArr.push(key);
  }
  return retArr;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));

// Example 1:
//     Input: nums = [4,3,2,7,8,2,3,1]
//     Output: [5,6]

// Example 2:
//     Input: nums = [1,1]
//     Output: [2]
