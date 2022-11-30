// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  // could be done with math faster

  let counter = 0;
  // if even go to next odd
  if (low % 2 === 0) low++;

  for (let i = low; i <= high; i = i + 2) {
    counter++;
  }
  return counter;
};

const low = 8,
  high = 10;
console.log(countOdds(low, high));
/*
Example 1:
    Input: low = 3, high = 7
    Output: 3
    Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:
    Input: low = 8, high = 10
    Output: 1
    Explanation: The odd numbers between 8 and 10 are [9].
    */
