// https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let counter = 0;
  let newArr = [0].concat(flowerbed).concat([0]);
  for (let i = 1; i < newArr.length - 1; i++) {
    if (newArr[i] === 1) continue;
    if (newArr[i - 1] === 0 && newArr[i + 1] === 0) {
      counter++;
      newArr[i] = 1;
    }
  }
  if (counter >= n) return true;
  return false;
};
const flowerbed = [1, 0, 0, 0, 1],
  n = 3;
console.log(canPlaceFlowers(flowerbed, n));

// Example 1:
//     Input: flowerbed = [1,0,0,0,1], n = 1
//     Output: true

// Example 2:
//     Input: flowerbed = [1,0,0,0,1], n = 2
//     Output: false
