// https://leetcode.com/problems/first-bad-version/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
    let left = 1,
      right = n;
    while (left <= right) {
      var mid = Math.floor(left + (right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid-1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};

/*
Example 1:
    Input: n = 5, bad = 4
    Output: 4
    Explanation:
    call isBadVersion(3) -> false
    call isBadVersion(5) -> true
    call isBadVersion(4) -> true
    Then 4 is the first bad version.


Example 2:
    Input: n = 1, bad = 1
    Output: 1
    */
