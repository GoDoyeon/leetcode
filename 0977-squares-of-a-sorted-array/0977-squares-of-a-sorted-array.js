/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums = nums.map((num) => num ** 2)
    nums.sort((a, b) => a - b)
    return nums
};