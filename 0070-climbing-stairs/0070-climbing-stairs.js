/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one = 0;
    let two = 1;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum = one + two;
        one = two;
        two = sum;
    }
    return sum;
};