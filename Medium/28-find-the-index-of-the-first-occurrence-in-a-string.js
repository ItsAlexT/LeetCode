// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }

  return -1;
};

const haystack = "leetcode",
  needle = "leeto";
console.log(strStr(haystack, needle));

// Example 1:
//     Input: haystack = "sadbutsad", needle = "sad"
//     Output: 0
//     Explanation: "sad" occurs at index 0 and 6.
//     The first occurrence is at index 0, so we return 0.

// Example 2:
//     Input: haystack = "leetcode", needle = "leeto"
//     Output: -1
//     Explanation: "
