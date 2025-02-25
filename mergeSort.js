function mergeSort(arr) {
    if (arr.length < 2) {  // Base case: If the array has 1 or 0 elements, it's already sorted
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2); // Find the middle index of the array
    const leftArr = arr.slice(0, mid); // Split the array into two halves: Left half (from start to mid-1) and Right half (from mid to end)
    const rightArr = arr.slice(mid);   
    return merge(mergeSort(leftArr), mergeSort(rightArr)); // Recursively sort the left and right halves, then merge them
}

// Merge function to combine two sorted arrays into one sorted array
function merge(leftArr, rightArr) {
    const sortedArr = []; // Initialize an empty array to store the sorted result
    
    while (leftArr.length && rightArr.length) { // Compare elements from the left and right arrays and merge them in sorted order
        if (leftArr[0] <= rightArr[0]) {        
            sortedArr.push(leftArr.shift()); // If the first element of the left array is smaller, add it to sortedArr and remove it from the left array.
        } else {
            sortedArr.push(rightArr.shift()); // If the first element of the right array is smaller, add it to sortedArr and remove it from the right array.
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]; // If there are remaining elements in either leftArr or rightArr, add them to sortedArr. One of the arrays will be empty, so only the non-empty one will be concatenated.
}

const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr)); // Output: [-6, -2, 4, 8, 20]

//Best Time Complexity for sorting: Big-O ==> 0(nlogn)