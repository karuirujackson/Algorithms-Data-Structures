//Prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function primeNumber (n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeNumber(1)); //false
console.log(primeNumber(3)); //true
console.log(primeNumber(6)); //false


//Big-O ==> O(n) As the value of n increases the number of times the loop executes increases.



//Optimized Code
function isPrime (n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(3)); //true
console.log(isPrime(6)); //false

//Big-O ==> O(sqrt(n))
