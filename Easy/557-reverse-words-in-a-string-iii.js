// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (s.length === 1) return;
  let start = 0;
  let count = 0;
  let flag = true;
  let stringArray = Array.from(s);

  while (count < s.length - 1) {
    let startPos = findStart(s, start);
    let endPos = findEnd(s, startPos + 1);
    stringArray = reverse(stringArray, startPos, endPos);
    count = endPos + 1;
    start = count;
  }
  return stringArray.join("");
};

var findEnd = function (s, startPos) {
  const whitespace = " ";
  let counter = startPos;
  for (let i = startPos; i < s.length; i++) {
    if (s[i] !== whitespace) counter++;
    else {
      return counter - 1;
    }
  }
  return counter - 1;
};

var findStart = function (s, startPos) {
  const whitespace = " ";
  for (let i = startPos; i < s.length; i++) {
    if (s[i] !== whitespace) return i;
  }
  return -1;
};

var reverse = function (s, left, right) {
  let temp = null;

  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};

const s = "Let's take LeetCode contest"
console.log(reverseWords(s))

/*
Example 1:
    Input: s = "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:
    Input: s = "God Ding"
    Output: "doG gniD"
    */

