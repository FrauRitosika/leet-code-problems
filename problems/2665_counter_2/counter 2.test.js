const { createCounter } = require('./counter 2');

describe('createCounter should return an object with three functions: increment(), decrement(), reset()', () => {
    it.each([
        {
            init: 8,
            functions: ["increment"],
            expected: [9],
            message: "increment() increases the current value by 1 and then returns it"
        },
        {
            init: 5,
            functions: ["decrement"],
            expected: [4],
            message: "decrement() reduces the current value by 1 and then returns it"
        },
        {
            init: 10,
            functions: ["reset"],
            expected: [10],
            message: "reset() sets the current value to init and then returns it"
        },
        {
            init: 0,
            functions: ["increment","increment","decrement","reset","reset","decrement"],
            expected: [1,2,1,0,0,-1],
            message: "expected result equal $expected"
        }
    ])('function behavior does not meet the requirement: $message', ({init,functions,expected}) => {
        const counter = createCounter(init);
        const result = functions.map((el) => counter[el]());
        expect(result).toStrictEqual(expected);
    })
});
