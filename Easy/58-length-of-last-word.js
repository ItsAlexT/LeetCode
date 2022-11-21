// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let rightPos = s.length - 1;
  let leftPos = 0;

  while (s[rightPos] === " ") {
    rightPos--;
  }
  leftPos = rightPos;
  while (s[leftPos] !== " " && leftPos > -1) {
    leftPos--;
  }
  return rightPos - leftPos;
};

const s = "  wakanda  ";
console.log(lengthOfLastWord(s));

/*
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/
