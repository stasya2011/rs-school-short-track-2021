/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrCurrent = [];
  const arrCopy = [...arr];
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] > -1) {
      arrCurrent.push(arrCopy[i]);
    }
  }
  for (let j = 0; j < arrCurrent.length - 1; j++) {
    for (let k = 0; k < arrCurrent.length - 1 - j; k++) {
      if (arrCurrent[k + 1] < arrCurrent[k]) {
        const minValue = arrCurrent[k + 1];
        arrCurrent[k + 1] = arrCurrent[k];
        arrCurrent[k] = minValue;
      }
    }
  }
  for (let n = 0; n < arrCopy.length; n++) {
    for (let k = 0; k < arrCurrent.length; k++) {
      if (arr[n] !== -1) {
        arrCopy[n] = arrCurrent.shift();
        break;
      }
    }
  }
  return arrCopy;
}

module.exports = sortByHeight;
