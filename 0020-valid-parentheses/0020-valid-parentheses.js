/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (const x of s) {
    if (x === '(' || x === '{' || x === '[') {
      stack.push(x);
    } else {
      const p = stack.pop();
      if (x === ')' && p !== '(') return false;
      if (x === '}' && p !== '{') return false;
      if (x === ']' && p !== '[') return false;
    }
  }
  return stack.length === 0;
};