/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let numberA = BigInt("0b" + a)
    let numberB = BigInt("0b" + b)
    let result = numberA + numberB;
    return result.toString(2)
};