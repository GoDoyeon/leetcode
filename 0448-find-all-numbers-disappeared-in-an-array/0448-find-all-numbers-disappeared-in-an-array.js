/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const max = Math.max(...nums) > nums.length ? Math.max(...nums) : nums.length
    const min = 1
    let result = []
    
    for(let i = min; i <= max; i++) {
        if(!nums.includes(i)) {
            result.push(i)
        }
    }
    return result
    
};