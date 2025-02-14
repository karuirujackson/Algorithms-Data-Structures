//Factorial of a non-negative integer 'n' denoted n! is a product of all positive integers less than or equal to 'n'.
//The Factorial of 0 and 1 is 1
function factorial (n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(5));

//Big-O ==> O(n)
