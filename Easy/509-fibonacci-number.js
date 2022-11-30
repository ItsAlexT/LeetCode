// https://leetcode.com/problems/fibonacci-number/?

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {

    let first = 0
    let second = 1

    if (n === 0) return first
    if (n === 1) return second

    let startInc = 2
    let sum = 0
    while (startInc <= n) {

        sum = first + second
        first = second
        second = sum
        startInc++
    }

    return sum
};

const n = 4
console.log(fib(4))

/*
Example 1:
    Input: n = 2
    Output: 1
    Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
    Input: n = 3
    Output: 2
    Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
    Input: n = 4
    Output: 3
    Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/