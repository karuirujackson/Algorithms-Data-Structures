function factorialrecursion (n) {
   if (n === 0) {
    return 1;
   }
    return n * factorialrecursion(n-1);
}

console.log(factorialrecursion(1));//1
console.log(factorialrecursion(5));//120

//Big-O ==> O(n)