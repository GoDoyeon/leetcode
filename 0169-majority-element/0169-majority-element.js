/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = nums.reduce((num, i) => {
        num[i] = (num[i] || 0) + 1;
        return num;
    }, {});
    
    let maxKey = Object.keys(obj)[0]
    let maxValue = obj[maxKey]

    for (let key in obj) {
        if (obj[key] > maxValue) {
            maxKey = key;
            maxValue = obj[key];
        }
    }

    return maxKey
};