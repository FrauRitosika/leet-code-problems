/**
 * @return {Function}
 */

function createHelloWorld () {
    const func = (...args) => 'Hello World';
    return func;
}

export { createHelloWorld };
