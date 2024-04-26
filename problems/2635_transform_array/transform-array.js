/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const map = function (arr, fn) {
    arr.forEach((el, i) => arr[i] = fn(el, i));
    return arr;
};

module.exports = { map };
