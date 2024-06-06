import { promiseAll } from './async_functions_in_parallel.js'

describe('All the promises from array should be executed in parallel.', () => {
    it.each([
        {
            functions: [
                () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
                () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
                () => new Promise(resolve => setTimeout(() => resolve(16), 100))
            ],
            isResolved: true,
            ouput: [4,10,16],
            message: 'The promise should resolve when all the asynchronous functions in the array have completed execution in parallel'
        },
        {
            functions: [
                () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
                () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
            ],
            isResolved: false,
            message: 'When any of the promises returned from functions were rejected, promise should also reject'
        }
    ])('', ({functions,isResolved,ouput}) => {
        if (isResolved) {
            expect( promiseAll(functions)).resolves.toStrictEqual(ouput);
        } else {
            expect( promiseAll(functions)).rejects.toBeTruthy();
        }
    })
});