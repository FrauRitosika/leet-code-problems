/* eslint-disable prefer-promise-reject-errors */
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject('Time Limit Exceeded'), t);

            new Promise(resolve => {
                const res = fn(...args);
                resolve(res);
            }).then(result => resolve(result),
                error => reject(error));
        });
    };
};

export { timeLimit };
