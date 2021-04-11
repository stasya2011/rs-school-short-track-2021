/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  const count = 1;
  const map = new Map();
  const arr = str.split('');

  if (str.length === 0) {
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i]) === false) {
      map.set(arr[i], count);
    } else {
      if (arr[i - 1] !== arr[i]) {
        const t = `${arr[i]} `;
        map.set(t, 1);
      }
      if (arr[i - 1] === arr[i]) {
        const currentValue = map.get(arr[i]);
        map.set(arr[i], currentValue + 1);
      }
    }
  }

  map.forEach((value, key) => {
    if (value === 1) {
      result += `${key}`;
    } else {
      result += `${value}${key}`;
    }
  });
  return result.trim();
}

module.exports = encodeLine;
