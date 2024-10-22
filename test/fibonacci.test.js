// RAYMOND NJAGALA


const { expect } = require('chai');
const fibonacci = require('../fibonacci');  // Import Fibonacci function

describe('Fibonacci Function', () => {
    // First test: test for the 0th Fibonacci number
    it('should return 0 when n = 0', () => {
        expect(fibonacci(0)).to.equal(0);
    });

    // Second test: test for the 1st Fibonacci number
    it('should return 1 when n = 1', () => {
        expect(fibonacci(1)).to.equal(1);
    });

    // Third test: test for a small Fibonacci number
    it('should return 1 when n = 2', () => {
        expect(fibonacci(2)).to.equal(1);
    });

    // Fourth test: evolving test for a larger Fibonacci number
    it('should return 8 when n = 6', () => {
        expect(fibonacci(6)).to.equal(8);
    });

    // Fifth test: evolving test for a bigger Fibonacci number
    it('should return 21 when n = 8', () => {
        expect(fibonacci(8)).to.equal(21);
    });
});
