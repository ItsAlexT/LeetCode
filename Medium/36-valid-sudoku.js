
// https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = board.length;
  const columns = board[0].length;
  const mapColumn = new Map();

  for (let i = 0; i < columns; i++) {
    mapColumn.set(i, new Set());
  }

  for (let i = 0; i < rows; i++) {
    const row = board[i];
    const setRow = new Set();
    for (let j = 0; j < columns; j++) {
      const val = row[j];

      if (val !== ".") {
        // Row check
        if (setRow.has(val)) return false;
        else setRow.add(val);

        // Column check
        if (mapColumn.get(j).has(val)) return false;
        else mapColumn.get(j).add(val);
      }
    }
  }
  for (let i = 0; i < board.length; i = i + 3) {
    for (let j = 0; j < board.length; j = j + 3) {
      const check = isSquareValid(board, i, j);
      if (!check) return false;
    }
  }

  return true;
};

var isSquareValid = function (board, left, right) {
  const setSquare = new Set();
  for (let i = left; i < left + 3; i++) {
    for (let j = right; j < right + 3; j++) {
      const val = board[i][j];
      if (val !== ".") {
        if (setSquare.has(val)) return false;
        setSquare.add(val);
      }
    }
  }
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));

/*
Example 1:
  Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
    Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/
