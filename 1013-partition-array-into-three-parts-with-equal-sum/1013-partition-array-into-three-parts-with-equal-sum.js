/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let totalSum = arr.reduce((a, b) => a + b)
    const average = totalSum / 3
    let sum = 0
    let count = 0
    
    for(let i=0; i<arr.length; i++) {
        sum += arr[i]
        if(sum === average) {
            count++
            sum = 0
        }
    }
    return count>=3;
};