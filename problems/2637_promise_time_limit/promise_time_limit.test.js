import { timeLimit } from './promise_time_limit.js';

describe('function return a new time limited version of the input function', () => {
    it.each([
        {
            fn: async (n) => {
                await new Promise(res => setTimeout(res, 100));
                return n * n;
            },
            inputs: [5],
            t: 150,
            islimitReached: false,
            result: 25
        }
        ,
        {
            fn: async (n) => {
                await new Promise(res => setTimeout(res, 100));
                return n * n;
            },
            inputs: [5],
            t: 50,
            islimitReached: true
        },
        {
            fn: async (a, b) => {
                await new Promise(res => setTimeout(res, 120));
                return a + b;
            },
            inputs: [5, 10],
            t: 150,
            islimitReached: false,
            result: 15
        }
    ])('If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.', async ({ fn, inputs, t, islimitReached, result }) => {
        const limited = timeLimit(fn, t);
        if (islimitReached) {
            expect(async () => await limited(...inputs)).rejects.toMatch('Time Limit Exceeded');
        } else {
            expect(limited(...inputs)).resolves.toBe(result);
        }
    });
});