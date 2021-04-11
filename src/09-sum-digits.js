/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n.toString().length === 1) {
    return n;
  }

  function desiv(num) {
    const arr = [];
    for (let i = 0; i < num.toString().length; i++) {
      arr.push(num.toString().substr(i, 1));
    }

    const currentV = arr.reduce((accum, cur) => +accum + +cur);

    return currentV;
  }

  const value = desiv(n);
  let newValue;
  if (value.toString().length > 1) {
    newValue = desiv(value);
    return newValue;
  }
  return value;
}

module.exports = getSumOfDigits;
