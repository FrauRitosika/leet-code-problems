import { map } from './transform-array.js';

describe('function return a new array with a transformation applied to each element', () => {
    it.each([
        {
            func: function plusone(n) { return n + 1; },
            array: [1,2,3], 
            expended: [2,3,4],
            message: "returned array should be equal newArray = map(arr, plusone)"
        },
        {
            func: function plusI(n, i) { return n + i; },
            array: [1,2,3], 
            expended: [1,3,5],
            message: "returned array should be equal newArray = map(arr, plusI)"
        }

    ])('$message', ({func, array,expended})=> {
        expect(map(array,func)).toStrictEqual(expended);
    });
});
