// https://leetcode.com/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const mapNums1 = new Map();
  for (let i = 0; i < nums1.length; i++) {
    mapNums1.set(nums1[i], i);
  }
  const returnArray = new Array(nums1.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      let num = stack.pop();
      returnArray[mapNums1.get(num)] = nums2[i];
    }

    if (mapNums1.has(nums2[i])) stack.push(nums2[i]);
  }
  return returnArray;
};

const nums1 = [4, 1, 2],
  nums2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1, nums2));

// Example 1:
//     Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
//     Output: [-1,3,-1]
//     Explanation: The next greater element for each value of nums1 is as follows:
//     - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
//     - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
//     - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:
//     Input: nums1 = [2,4], nums2 = [1,2,3,4]
//     Output: [3,-1]
//     Explanation: The next greater element for each value of nums1 is as follows:
//     - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
//     - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
