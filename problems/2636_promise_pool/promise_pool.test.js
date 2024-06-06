import { promisePool } from './promise_pool.js';

describe('Function return an asynchronous function promisePool. It should return a promise that resolves when all the input functions resolve. Pool limit n is defined as the maximum number promises that can be pending at once', () => {
    it.each(
        [{
            getFunctions: [() => new Promise(res => setTimeout(res, 300)), () => new Promise(res => setTimeout(res, 400)), () => new Promise(res => setTimeout(res, 200))],
            n: 2,
            ouput: [300,400,500]
        },
        {
            getFunctions: [() => new Promise(res => setTimeout(res, 300)), () => new Promise(res => setTimeout(res, 400)), () => new Promise(res => setTimeout(res, 200))],
            n: 5,
            ouput: [300,400,200]
        },
        {
            getFunctions: [() => new Promise(res => setTimeout(res, 300)), () => new Promise(res => setTimeout(res, 400)), () => new Promise(res => setTimeout(res, 200))],
            n: 1,
            ouput: [300,700,900]
        }
        ])('', async ({getFunctions,n,ouput}) => { 
            const resultTimes = await promisePool(getFunctions, n);
            resultTimes.forEach((element,i) => {
                expect(Math.abs(element-ouput[i])).toBeLessThan(50);
            });
        });
});