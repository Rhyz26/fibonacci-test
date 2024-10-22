// test/fibonacci.test.js
import { expect } from 'chai';
import { fibonacci } from '../src/fibonacci.js';

describe('Fibonacci Function', () => {
    it('should return 0 for fibonacci(0)', () => {
        expect(fibonacci(0)).to.equal(0);
    });
});
