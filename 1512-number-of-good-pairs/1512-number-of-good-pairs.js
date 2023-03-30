/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = 0;
    nums.forEach((num, index) => {
        for(let i = index + 1; i < nums.length; i++) {
            if(num === nums[i]) {
                result++
            }
        }
    })
    return result
};