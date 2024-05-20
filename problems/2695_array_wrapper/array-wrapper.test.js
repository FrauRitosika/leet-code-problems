import { ArrayWrapper } from './array-wrapper.js';

describe('When two instances of this class are added together with the + operator,' + 
' the resulting value is the sum of all the elements in both arrays', () => {
    it.each([
        {
            message: "0 + 0 should return 0",
            numsA: new ArrayWrapper([]),
            numsB: new ArrayWrapper([]),
            expected: 0
        },
        {
            message: "(1 + 2) + (3 + 4) should return 10",
            numsA: new ArrayWrapper([1,2]),
            numsB: new ArrayWrapper([3,4]),
            expected: 10
        },
    ])("$message", ({numsA, numsB, expected}) => {
        const result = numsA + numsB;
		expect(result).toBe(expected);
    })
});

describe('When the String() function is called on the instance, ' + 
'it will return a comma separated string surrounded by brackets', () => {
    it.each([
        {
            nums: new ArrayWrapper([23, 98, 42, 70]),
            expected: '[23,98,42,70]'
        },
        {
            nums: new ArrayWrapper([]),
            expected: '[]'
        },
    ])("method String() should return $expected", ({nums, expected}) => {
        const result = String(nums);
		expect(result).toBe(expected);
    })
});
