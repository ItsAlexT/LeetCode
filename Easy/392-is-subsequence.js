// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(1) Space - O(N) Time
var isSubsequence = function (first, second) {
  let pointOne = 0;
  let pointTwo = 0;

  while (pointOne < first.length && pointTwo < second.length) {
    if (first[pointOne] === second[pointTwo]) {
      pointOne++;
    }
    pointTwo++;
  }
  if (pointOne !== first.length) return false;
  return true;
};

const s = "axc",
  t = "ahbgdc";
console.log(isSubsequence(s, t));

/*
Example 1:
    Input: s = "abc", t = "ahbgdc"
    Output: true

Example 2:
    Input: s = "axc", t = "ahbgdc"
    Output: false
 */
