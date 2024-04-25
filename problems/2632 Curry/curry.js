/**
 * @param {Function} func
 * @return {Function}
 */

function curry (func) {
    const receivedArgs = [];
    return function curried (...args) {
        receivedArgs.push(...args);

        if (receivedArgs.length === func.length) {
            return func(...receivedArgs);
        } else {
            return curried;
        }
    };
}

module.exports = { curry };
