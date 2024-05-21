import { expectFunc } from './compare-functions.js';

describe('toBe(val) accepts another value and returns true if the two values === each other. ' +
    'If they are not equal, it should throw an error "Not Equal".', () => {
        it.each([
            {
                actualVal: 5,
                expectedVal: 5,
                resultValue: true,
                message: `toBe(val) should return true for`
            },
            {
                actualVal: null,
                expectedVal: null,
                resultValue: true,
                message: 'toBe(val) should return true for'
            },
            {
                actualVal: 1,
                expectedVal: true,
                resultValue: false,
                message: `toBe(val) should return error for`
            },
            {
                actualVal: 0,
                expectedVal: null,
                resultValue: false,
                message: 'toBe(val) should return error for'
            }
        ])(`$message $actualVal and $expectedVal`, ({ actualVal, expectedVal, resultValue }) => {
            const funcObj = expectFunc(expectedVal);
            if (resultValue) {
                expect(funcObj.toBe(actualVal)).toBeTruthy();
            } else {
                 expect(() => funcObj.toBe(actualVal)).toThrow();
            }
        });
    });

    describe('notToBe(val) accepts another value and returns true if the two values !== each other. ' +
    'If they are equal, it should throw an error "Equal".', () => {
        it.each([
            {
                actualVal: 5,
                expectedVal: 5,
                resultValue: false,
                message: 'notToBe(val) should return error for'
            },
            {
                actualVal: null,
                expectedVal: null,
                resultValue: false,
                message: 'notToBe(val) should return error for'
            },
            {
                actualVal: 1,
                expectedVal: true,
                resultValue: true,
                message: 'notToBe(val) should return true for'
            },
            {
                actualVal: 0,
                expectedVal: null,
                resultValue: true,
                message: 'notToBe(val) should return true for'
            }
        ])(`$message $actualVal and $expectedVal`, ({ actualVal, expectedVal, resultValue }) => {
            function compareFuncs(actualVal) {
                try {
                    return { "value": expectFunc(expectedVal).notToBe(actualVal) };
                } catch (err) {
                    return { "error": err.message };
                }
            };
            expect(compareFuncs(actualVal)).toEqual(resultValue ? { "value": true } : { "error": "Equal" });
        });
    });