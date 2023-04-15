/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let result = []
    let values = [...s]
    let count = 1
    let input = []
    values.forEach((value, index) => {
        if(value === s[index + 1]) {
            count++
        } else {
            count = 1
        }
        if(count === 1 && input.length > 0) {
            result.push(input)
            input = []
        }
        
        if(count > 2) {
            input = [index+2-count, index + 1]
        }
    })
    return result
    
};