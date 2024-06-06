import {addTwoPromises} from './add_two_promises.js';

describe('Function return a new promise, which should resolve with the sum of the two promises`s resolves', () => {
    it.each([
        {
            promise1: new Promise(resolve => setTimeout(() => resolve(2), 20)),
            promise2: new Promise(resolve => setTimeout(() => resolve(5), 60)),
            result: 7
        },
        {
            promise1: new Promise(resolve => setTimeout(() => resolve(10), 50)),
            promise2: new Promise(resolve => setTimeout(() => resolve(-12), 30)),
            result: -2
        }
    ])('Function should return: $result', async ({promise1, promise2,result}) => {
        const res = await addTwoPromises(promise1,promise2);
        expect(res).toBe(result);
    })
});
