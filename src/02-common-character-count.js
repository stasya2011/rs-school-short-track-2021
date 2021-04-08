/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s2Arr = s2.split('');
  const s1Arr = s1.split('');
  let count = 0;
  let currentLetter;
  const len = s1Arr.length;
  const len2 = s2Arr.length;
  for (let i = 0; i < len; i++) {
    currentLetter = s1Arr.shift();
    for (let k = 0; k < len2; k++) {
      if (s2Arr[k] === currentLetter) {
        s2Arr.splice(k, 1);
        count++;
        currentLetter = null;
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
