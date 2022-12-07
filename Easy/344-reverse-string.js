// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function (s) {
    if (s.length === 1) return;
  
    let left = 0;
    let right = s.length - 1;
    let temp = null;
  
    while (left < right) {
      temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
    }
  };
const s = ["h","e","l","l","o"]
reverseString(s)
console.log(s)
/*
Example 1:
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]
Example 2:
    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]
*/