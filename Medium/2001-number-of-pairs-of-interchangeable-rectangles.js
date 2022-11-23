// https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  const indexMap = new Map();

  for (let i = 0; i < rectangles.length; i++) {
    const rectangle = rectangles[i];
    const res = rectangle[0] / rectangle[1];
    if (indexMap.has(res)) indexMap.get(res).push(i);
    else indexMap.set(res, [i]);
  }

  let counter = 0;

  for (const [key, value] of indexMap) {
    if (value.length < 2) continue;
    counter = counter + ((value.length - 1) * value.length) / 2;
  }
  //   console.log(indexMap);
  return counter;
};

const rectangles = [
  [4, 8],
  [3, 6],
  [10, 20],
  [15, 30],
];
console.log(interchangeableRectangles(rectangles));

// Example 1:
//     Input: rectangles = [[4,8],[3,6],[10,20],[15,30]]
//     Output: 6
//     Explanation: The following are the interchangeable pairs of rectangles by index (0-indexed):
//     - Rectangle 0 with rectangle 1: 4/8 == 3/6.
//     - Rectangle 0 with rectangle 2: 4/8 == 10/20.
//     - Rectangle 0 with rectangle 3: 4/8 == 15/30.
//     - Rectangle 1 with rectangle 2: 3/6 == 10/20.
//     - Rectangle 1 with rectangle 3: 3/6 == 15/30.
//     - Rectangle 2 with rectangle 3: 10/20 == 15/30.

// Example 2:
//     Input: rectangles = [[4,5],[7,8]]
//     Output: 0
//     Explanation: There are no interchangeable pairs of rectangles.
