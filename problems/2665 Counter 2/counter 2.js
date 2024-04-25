/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

function createCounter (init) {
    const startValue = init;
    return {
        increment: function () {
            return ++init;
        },
        decrement: function () {
            return --init;
        },
        reset: function () {
            init = startValue;
            return init;
        }
    };
};

module.exports = { createCounter };
