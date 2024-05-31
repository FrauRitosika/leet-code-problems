/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

const promiseAll = function(functions) {
    let counter = 0;
    const results = [];
    return new Promise((resolve, reject) => {
        functions.forEach((el, i) => {
            try {
                el().then(
                    result => {
                        results[i] = result;
                        counter += 1;
                        if (counter === [...functions].length) resolve(results);
                    });
            } catch (err) {
                reject(err);
            }
        });
    });
};

export { promiseAll };
