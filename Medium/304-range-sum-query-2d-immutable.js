// https://leetcode.com/problems/range-sum-query-2d-immutable/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  console.log(this.matrix);
  let sum = 0;
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum = sum + this.matrix[i][j];
    }
  }
  return sum;
};

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];
var obj = new NumMatrix(matrix);
var param_1 = obj.sumRegion(1, 1, 2, 2);
console.log(param_1);

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

//  Input
//  ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
//  [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
//  Output
//  [null, 8, 11, 12]

//  Explanation
//  NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
//  numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
//  numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
//  numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)
