import { curry } from './curry';

describe('sum of arguments', () => {
   it.each([
       [[1],[2],[3]],
       [[1,2],[3]],
       [[],[1],[],[2],[3]]
   ])("function should return the same value as sum(1, 2, 3)", (...args) => {
      const curriedSum = curry((a, b, c) => a + b + c);
      const sum = args.reduce((_,el) => curriedSum(...el),null);
      expect(sum).toBe(6);
   })
});


 describe('multiplying arguments', () => {
   it.each([
      [[2,2]],
      [[2],[2]],
      [[],[2],[],[2]]
   ])("function should return the same value as 2*2", (...args) => {
      const curriedMult = curry((a, b) => a * b);
      const mult = args.reduce((_,el) => curriedMult(...el), null);
      expect(mult).toBe(4);
   })
});





