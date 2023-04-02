/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let i = 0;
    let j = 0;
    let res = [];
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1));       
        for (j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                res[i][j] = 1;
            }
            else {
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
    }
    return res;  
};