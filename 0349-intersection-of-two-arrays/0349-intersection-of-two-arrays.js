/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = []
    nums1.forEach((num) => {
        let isInclude = nums2.includes(num)
        if(isInclude && !result.includes(num)) {
            result.push(num)
        }
    })
    return result
};