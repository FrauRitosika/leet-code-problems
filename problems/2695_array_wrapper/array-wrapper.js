/**
 * @param {number[]} nums
 * @return {void}
 */

class ArrayWrapper extends Array {
    [Symbol.toPrimitive] (hint) {
        const vals = Array.from(...this.values());
        return (hint === 'string') ? '[' + vals.toString() + ']' : vals.reduce((sum, el) => sum = +el + sum, 0);
    }
}

module.exports = ArrayWrapper;
