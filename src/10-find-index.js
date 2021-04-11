/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let result;
  let center = Math.ceil(array.length * 0.5);

  if (value > array[center]) {
    center = Math.ceil(array.length * 0.75);
    if (array[center] === value) {
      result = center;
    } else if (value > array[center]) {
      result = center + 1;
    } else {
      result = center - 1;
    }
  } else if (value === array[center]) {
    result = center;
  } else if (value < array[center]) {
    center = Math.ceil(array.length * 0.25);

    if (array[center] === value) {
      result = center;
    } else if (value > array[center]) {
      result = center + 1;
    } else if (value < array[center]) {
      result = 0;
    }
  }

  return result;
}

module.exports = findIndex;
