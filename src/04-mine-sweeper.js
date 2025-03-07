/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = matrix.map((element, index) => {
    const s = element.map((itemInner, indexInner) => {
      let count = 0;

      if (matrix[index][indexInner + 1] === true
         && indexInner + 1 !== undefined) {
        count += 1;
      }
      if (matrix[index][indexInner - 1] === true
         && indexInner - 1 !== undefined) {
        count += 1;
      }

      if (matrix[index - 1] !== undefined
         && matrix[index - 1][indexInner] === true) {
        count += 1;
      }

      if (matrix[index + 1] !== undefined && matrix[index + 1][indexInner] === true) {
        count += 1;
      }

      if (matrix[index - 1] !== undefined
         && indexInner - 1 !== undefined && matrix[index - 1][indexInner - 1] === true) {
        count += 1;
      }

      if (matrix[index - 1] !== undefined
         && indexInner + 1 !== undefined && matrix[index - 1][indexInner + 1] === true) {
        count += 1;
      }

      if (matrix[index + 1] !== undefined
         && indexInner + 1 !== undefined && matrix[index + 1][indexInner + 1] === true) {
        count += 1;
      }

      if (matrix[index + 1] !== undefined && indexInner - 1 !== undefined
         && matrix[index + 1][indexInner - 1] === true) {
        count += 1;
      }
      return count;
    });

    return s;
  });
  return arr;
}

module.exports = minesweeper;
