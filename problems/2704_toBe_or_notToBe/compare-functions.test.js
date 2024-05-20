import { expectFunc } from './compare-functions.js';

describe('toBe(val) accepts another value and returns true if the two values === each other. ' +
    'If they are not equal, it should throw an error "Not Equal".', () => {
        it.each([
            {
                actualVal: 5,
                expectedVal: 5,
                resultValue: true,
                message: 'toBe(val) should return true: &actualVal === $expectedVal'
            },
            {
                actualVal: null,
                expectedVal: null,
                resultValue: true,
                message: 'toBe(val) should return true: &actualVal === $expectedVal'
            },
            {
                actualVal: 1,
                expectedVal: true,
                resultValue: false,
                message: 'toBe(val) should return false: &actualVal !== $expectedVal'
            },
            {
                actualVal: 0,
                expectedVal: null,
                resultValue: false,
                message: 'toBe(val) should return false: &actualVal !== $expectedVal'
            }
        ])('$message', ({ actualVal, expectedVal, resultValue }) => {
            function compareFuncs(actualVal) {
                try {
                    return { "value": expectFunc(expectedVal).toBe(actualVal) };
                } catch (err) {
                    return { "error": err.message };
                }
            };
            expect(compareFuncs(actualVal)).toEqual(resultValue ? { "value": true } : { "error": "Not Equal" });
        });
    });

    describe('notToBe(val) accepts another value and returns true if the two values !== each other. ' +
    'If they are equal, it should throw an error "Equal".', () => {
        it.each([
            {
                actualVal: 5,
                expectedVal: 5,
                resultValue: false,
                message: 'notToBe(val) should return false: &actualVal === $expectedVal'
            },
            {
                actualVal: null,
                expectedVal: null,
                resultValue: false,
                message: 'notToBe(val) should return false: &actualVal === $expectedVal'
            },
            {
                actualVal: 1,
                expectedVal: true,
                resultValue: true,
                message: 'notToBe(val) should return true: &actualVal !== $expectedVal'
            },
            {
                actualVal: 0,
                expectedVal: null,
                resultValue: true,
                message: 'notToBe(val) should return true: &actualVal !== $expectedVal'
            }
        ])('$message', ({ actualVal, expectedVal, resultValue }) => {
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