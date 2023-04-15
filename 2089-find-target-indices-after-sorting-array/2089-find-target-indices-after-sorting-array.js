/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let result = []
    nums.sort((a, b) => a - b)
    
    nums.forEach((num, index) => {
        if(num === target) result.push(index)
    })
    return result
    
};