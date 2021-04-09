/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const currentValue = [];
  const d = [];
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    arr[i] = '';
    for (let k = 0; k < arr.length; k++) {
      currentValue.push(...arr[k]);
    }
    arr[i] = t;
    d.push(currentValue.splice(0));
  }

  for (let t = 0; t < d.length; t++) {
    d[t] = +d[t].join('');
  }
  for (let k = 0; k < d.length - 1; k++) {
    for (let s = 0; s < d.length - 1 - k; s++) {
      if (d[s + 1] < d[s]) {
        const minValue = d[s + 1];
        d[s + 1] = d[s];
        d[s] = minValue;
      }
    }
  }

  return +(d.splice(d.length - 1).join());
}

module.exports = deleteDigit;
