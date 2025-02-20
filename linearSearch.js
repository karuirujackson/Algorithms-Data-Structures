//Check the first element on the array through to the last one.
// At each element, check whether the element is equal to the target element
// If element is found, return index of the element
// If element not found return -1


function linearSearch (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        } 
    }
    return -1;
}

console.log(linearSearch([2, 30, 15, 6, 9], 15)); // 2
console.log(linearSearch([2, 30, 15, 6, 9], 5)); // -1

//Big-0 ==> 0(n)