//Recursion is when a function calls itself. Function within another function
//Every recursive solution needs to have a base case - a condition to terminate the recursion.

function fibonacciRecursion (n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2);
}

console.log(fibonacciRecursion(2));
console.log(fibonacciRecursion(3));
console.log(fibonacciRecursion(7));

//Big-O ==> O(2^n)


