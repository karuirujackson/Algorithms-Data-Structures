
//Fibonacci sequence is a a sequence in which each number is the sum of the 2 proceding ones.
//for-loop helps us iterate and populate the array, up to n, with other elements while satisfying the fibonacci condition.
function fibonacci (n) {
    const fib = [0, 1]; //Initialize the array with 2 elements
    for (let i = 2; i < n; i++) { 
        fib[i] = fib[i-2] + fib[i-1]; //The fibonacci of a number is the summation of the two preceding numbers.
    }
    return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(6)); 

//Big-O ==> O(n) 
