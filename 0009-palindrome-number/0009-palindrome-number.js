/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let array = Array.from(String(x));

  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] != array[array.length - 1 - i]) {
      return false;
    }
  }

  return true;
};