/* eslint-disable prefer-promise-reject-errors */
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const timeLimit = function(fn, t) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject('Time Limit Exceeded'), t);

            async function getResult() {
                const res = await fn(...args);
                clearTimeout(timeout);
                resolve(res);
            }

            try {
                getResult();
            } catch (error) {
                clearTimeout(timeout);
                reject(error);
            }
        });
    };
};

export { timeLimit };
