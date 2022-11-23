// https://leetcode.com/problems/brick-wall/

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  //   const sumBricks = wall[0].reduce((prev, next) => prev + next);
  const sumBricks = wall.length;
  const mapRows = new Map();

  for (let i = 0; i < wall.length; i++) {
    const row = wall[i];
    if (row.length === 1) continue;
    let sum = row[0];
    if (mapRows.has(sum)) {
      mapRows.set(sum, mapRows.get(sum) - 1);
    } else {
      mapRows.set(sum, sumBricks - 1);
    }

    for (let j = 1; j < row.length - 1; j++) {
      sum = sum + row[j];
      if (mapRows.has(sum)) {
        mapRows.set(sum, mapRows.get(sum) - 1);
      } else {
        mapRows.set(sum, sumBricks - 1);
      }
    }
  }
  let min = sumBricks;
  for (const [key, value] of mapRows) {
    min = Math.min(min, value);
  }
  //   console.log(mapRows);
  return min;
};

const wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
];
console.log(leastBricks(wall));

// Example 1:
//     Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
//     Output: 2

// Example 2:
//     Input: wall = [[1],[1],[1]]
//     Output: 3
