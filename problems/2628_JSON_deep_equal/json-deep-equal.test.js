import { areDeeplyEqual } from './json-deep-equal.js';

describe('If both values are primitive types, ' + 
'they are deeply equal if they pass the === equality check', () => {
	it.each([
		{
            message: "have different type: number and string",
            objA: 1,
            objB: "1", 
            expected: false
        },
        {
            message: "have different type: number and boolean",
            objA: 1,
            objB: true, 
            expected: false
        },
        {
            message: "are deeply equal",
            objA: 1,
            objB: 1, 
            expected: true
        }
	])("arguments $message", ({objA, objB, expected}) => {
		const result = areDeeplyEqual(objA, objB);
		expect(result).toBe(expected);
	});
});

describe('If both values are arrays, they are deeply equal ' + 
'if they have the same elements in the same order, and each element is also deeply equal', () => {
    it.each([
        {
            message: "2th array elements are of different type: number and string",
            objA: [1,2],
            objB: [1,"2"], 
            expected: false
        },
        {
            message: "arrays elements have different order",
            objA: [1,2],
            objB: [2,1], 
            expected: false
        },
        {
            message: "arrays are deeply equal",
            objA: [1,2],
            objB: [1,2], 
            expected: true
        },
        {
            message: "array is deeply equal to array only",
            objA: [1],
            objB: new Map().set(0,1), 
            expected: false
        }
    ])("$message", ({objA, objB, expected}) => {
        const result = areDeeplyEqual(objA, objB);
		expect(result).toBe(expected);
    })
});

describe('If both values are objects, they are deeply equal if they have the same keys, ' + 
'and the associated values for each key are also deeply equal', () => {
    it.each([
        {
            message: "objects are deeply equal",
            objA: {},
            objB: {}, 
            expected: true
        },
        {
            message: "objects are deeply equal",
            objA: {"x":1,"y":2},
            objB: {"x":1,"y":2}, 
            expected: true
        },
        {
            message: "elements x are of different type: primitive number and object",
            objA: {"y":1,"x":2},
            objB: {"y":1,"x": {"x": 2}}, 
            expected: false
        }
    ])("$message", ({objA, objB, expected}) => {
        const result = areDeeplyEqual(objA, objB);
		expect(result).toBe(expected);
    })
});
