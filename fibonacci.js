// RAYMOND NJAGALA

// This is a recursive implementation of the fibonacci function 
function fibonacci(n) {
    if (n === 0) return 0;  // Base case for 0
    if (n === 1) return 1;  // Base case for 1

    return fibonacci(n - 1) + fibonacci(n - 2);  
}

module.exports = fibonacci;
