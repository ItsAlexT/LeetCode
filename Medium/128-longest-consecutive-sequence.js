// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const setNums = new Set(nums);
  let max = 0;

  for (const num of setNums.keys()) {
    // if greater number in set

    if (setNums.has(num + 1)) continue;
    else {
      let tmpCons = 1;
      let copyNum = num;
      while (setNums.has(copyNum - 1)) {
        tmpCons++;
        copyNum--;
      }
      max = Math.max(max, tmpCons);
    }
  }
  return max;
};

const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));

// Example 1:
//     Input: nums = [100,4,200,1,3,2]
//     Output: 4
//     Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
//     Input: nums = [0,3,7,2,5,8,4,6,0,1]
//     Output: 9
