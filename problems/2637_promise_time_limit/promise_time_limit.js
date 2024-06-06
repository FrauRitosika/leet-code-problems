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
                try {
                    const res = await fn(...args);
                    resolve(res);
                } catch (error) {
                    reject(error);
                } finally { clearTimeout(timeout); }
            }

            getResult();
        });
    };
};

export { timeLimit };
