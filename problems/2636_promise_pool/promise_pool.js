/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */

const promisePool = async function(functions, n) {
    let executeFuncs = 0;
    let emphtyPool = n;
    const t = new Date();
    const results = [];

    return new Promise(resolve => {
        function pushResult(ms, i) {
            results[i] = ms;
            if (executeFuncs >= functions.length & emphtyPool === n) resolve(results);
        }

        async function execute() {
            const i = executeFuncs;
            if ((i < functions.length) & (emphtyPool > 0)) {
                executeFuncs += 1;
                emphtyPool -= 1;
                functions[i]().then(res => {
                    emphtyPool += 1;
                    execute();
                    pushResult(new Date() - t, i);
                });
                if (emphtyPool > 0) execute();
            };
        };

        if (functions.length === 0) { pushResult(); };
        execute();
    });
};

export { promisePool };
