// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const retArray = [[1]];
  if (numRows === 1) return retArray;
  retArray.push([1, 1]);
  if (numRows === 2) return retArray;

  let rows = 2;
  while (rows < numRows) {
    const newRow = new Array(rows + 1);
    // leading and trailing 1
    newRow[0] = 1;
    newRow[newRow.length - 1] = 1;

    for (let i = 1; i < newRow.length - 1; i++) {
      newRow[i] = retArray[rows - 1][i - 1] + retArray[rows - 1][i];
    }

    retArray.push(newRow);
    rows++;
  }
  return retArray;
};

const numRows = 5;
console.log(generate(numRows));

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]
