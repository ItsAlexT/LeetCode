// https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  // build frequency map
  for (const num of nums) {
    if (freqMap.has(num)) {
      freqMap.set(num, freqMap.get(num) + 1);
    } else freqMap.set(num, 1);
  }

  //
  const sortedFreq = [...freqMap].sort((a, b) => b[1] - a[1]);
  const retArray = [];
  for (const key of sortedFreq.keys()) {
    retArray.push(sortedFreq[key][0]);
    if (retArray.length === k) break;
  }
  return retArray;
};

const nums = [1], k = 1
console.log(topKFrequent(nums, k));

// Example 1:
//     Input: nums = [1,1,1,2,2,3], k = 2
//     Output: [1,2]

// Example 2:
//     Input: nums = [1], k = 1
//     Output: [1]
