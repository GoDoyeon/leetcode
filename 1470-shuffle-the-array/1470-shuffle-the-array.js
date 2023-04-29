/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = []
    let length = nums.length
    
    const a = nums.slice(0, n)
    const b = nums.slice(n, length)
    
    for(let i = 0; i < length / 2; i++) {
        result.push(a[i])
        result.push(b[i])
    }
    return result
};