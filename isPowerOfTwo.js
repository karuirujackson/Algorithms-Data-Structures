// If remainder is 0 and 'n' comes down to 1 eventually, n is a power of Two.

function isPowerOfTwo (n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
       if (n % 2 !== 0) {
        return false;
       } else {
        n = n /2;
       }
    }
    return true;
}
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(5)); //false

//Big-O ==> O(logn)


function isPowerOfTwoBitwise (n) {
    if (n < 1) {
        return false;
    }
    return (n & (n-1)) === 0;
}
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(5));
//Big-O ==> O(1)

