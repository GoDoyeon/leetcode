/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr = []
    let result = ''
    const obj = {}
    for(let i = 0; i < indices.length; i++) {
        arr.push({
            key: indices[i], 
            value: s[i]
        })
    }
    
    arr.forEach(data => {
        obj[data.key] = data.value
    })

    for (var prop of Object.values(obj)) {
        result += prop
    }
    return result
};