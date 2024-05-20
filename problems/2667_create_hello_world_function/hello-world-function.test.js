import { createHelloWorld } from './hello-world-function';

describe('function should return a new function that always returns "Hello World"',() => {
    it.each([
        [],
        [{},null,42]
    ])('function should return "Hello World"', (...args) => {
        const func = createHelloWorld();
        expect(func(...args)).toBe('Hello World');
    })
})