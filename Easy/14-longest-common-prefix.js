// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longest = "";
  let position = 0;
  let search = true;
  while (search) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][position] === strs[0][position] && strs[0][position] != null)
        continue;
      else {
        search = false;
        break;
      }
    }
    if (search) {
      longest = longest + strs[0][position];
      position++;
    }
  }

  return longest;
};

const strs = [""];
console.log(longestCommonPrefix(strs));

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
