/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  const leng = columnTitle.length;
  let result = null;

  for (let i = 0; i < leng; i++) {
    const number = columnTitle[i].charCodeAt(0) - 64;
    result += number * Math.pow(26, leng - i - 1);
  }
  return result;
};