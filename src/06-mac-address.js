/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = '';
  if (n.includes(' ')) {
    result += false;
  }
  const arr = n.split('-');
  const right = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].join();
  for (let t = 0; t < arr.length; t++) {
    for (let r = 0; r < arr[t].length; r++) {
      if (right.match([arr[t][r]])) {
        result = true;
        break;
      } else {
        result = false;
        return result;
      }
    }
  }
  return result;
}

module.exports = isMAC48Address;
