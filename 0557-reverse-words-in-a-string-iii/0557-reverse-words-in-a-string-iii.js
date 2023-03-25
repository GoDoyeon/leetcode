/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let array = s.split(' ')
    let result = ''
    
    array.forEach((value, index) => {
        let x = value.split("").reverse().join("");
        result += x
        if(index !== array.length - 1) {
            result += ' '
        }
    })
    
    return result
};