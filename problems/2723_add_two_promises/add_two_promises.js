/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function(promise1, promise2) {
    return new Promise((resolve) => {
        let finalResult = 0;
        Promise.all([promise1, promise2]).then((results) => {
            for (const result of results) {
                finalResult += result;
            }
            resolve(finalResult);
        });
    });
};

export { addTwoPromises };
