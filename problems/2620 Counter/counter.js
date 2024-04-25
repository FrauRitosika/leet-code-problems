/**
 * @param {number} n
 * @return {Function} counter
 */

function createCounter (n) {
    let result = n;
    return function () {
        return result++;
    };
}

module.exports = { createCounter };
