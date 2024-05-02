const {createCounter} = require('./counter');

describe('counter function initially returns n and then ' +
'returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc)', () => {
    it.each([
        {
            calls: ["call","call","call"],
            startNumber: 10,
            expected: [10,11,12]
        },
        {
            calls: ["call"],
            startNumber: 0,
            expected: [0]
        },
        {
            calls: ["call","call","call","call"],
            startNumber: -2,
            expected: [-2,-1,0,1]
        }
    ])( "function should return $expect", ({calls,startNumber,expected}) => {
        const counter = createCounter(startNumber);
        const result = calls.map((el) => counter());
        expect(result).toStrictEqual(expected);
    });
});