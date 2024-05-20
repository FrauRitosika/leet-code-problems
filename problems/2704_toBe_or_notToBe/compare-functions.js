/**
 * @param {string} val
 * @return {Object}
 */

function expectFunc (expectedVal) {
    return {
        toBe: function (actualVal) {
            if (expectedVal !== actualVal) throw new SyntaxError('Not Equal');
            return true;
        },
        notToBe: function (actualVal) {
            if (expectedVal === actualVal) throw new SyntaxError('Equal');
            return true;
        }
    };
}

export { expectFunc };
