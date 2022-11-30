// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let first = 0;
  let second = 1;
  let third = 1;

  if (n === 0) return first;
  if (n === 1) return second;
  if (n === 2) return third;

  let count = 2;
  let sum = null;
  while (count < n) {
    sum = first + second + third;

    first = second;
    second = third;
    third = sum;
    count++;
  }

  return third;
};

console.log(tribonacci(25));

/*
Example 1:
    Input: n = 4
    Output: 4
    Explanation:
    T_3 = 0 + 1 + 1 = 2
    T_4 = 1 + 1 + 2 = 4
Example 2:
    Input: n = 25
    Output: 1389537
    */
