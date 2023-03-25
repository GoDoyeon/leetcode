/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let result = 0
    let i = 0;
    while(i < nums.length) {
        if (target === nums[i]) {
            result = i
            break
        } else if (target < nums[i]) {
            result = i
            break
        } else {
            i++
            result = i
        }
    }
    return result
};