// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const indexMap = new Map();
  const palindromSet = new Set();
  if (s.length < 3) return 0;
  // Create indexmap O(n)
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (indexMap.has(char)) indexMap.get(char).push(i);
    else indexMap.set(char, [i]);
  }
  //   console.log(indexMap);

  for (const [key, value] of indexMap) {
    // if letter appears only once or consecutive
    if (value.length < 2 || value[value.length - 1] - value[0] === 1) continue;
    for (let i = value[0] + 1; i < value[value.length - 1]; i++) {
      let pali = key + s[i] + key;
      palindromSet.add(pali);
    }
  }

  //   console.log(palindromSet);
  return palindromSet.size;
};
const s = "bbcbaba";
console.log(countPalindromicSubsequence(s));
/*
Example 1:
    Input: s = "aabca"
    Output: 3
    Explanation: The 3 palindromic subsequences of length 3 are:
    - "aba" (subsequence of "aabca")
    - "aaa" (subsequence of "aabca")
    - "aca" (subsequence of "aabca")

Example 2:
    Input: s = "adc"
    Output: 0
    Explanation: There are no palindromic subsequences of length 3 in "adc".

Example 3:
    Input: s = "bbcbaba"
    Output: 4
    Explanation: The 4 palindromic subsequences of length 3 are:
    - "bbb" (subsequence of "bbcbaba")
    - "bcb" (subsequence of "bbcbaba")
    - "bab" (subsequence of "bbcbaba")
    - "aba" (subsequence of "bbcbaba")
*/
