function quickSort(arr) { 
    if (arr.length < 2) { // Base case: if the array has 0 or 1 element, it's already sorted.
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Choose the last element of the array as the pivot
    let left = [];  // Create two empty arrays to hold elements less than (left) and greater than (right) the pivot
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {  // Loop through the array (excluding the pivot) to partition elements into left and right arrays    
        if (arr[i] < pivot) {  // If the current element is less than the pivot, add it to the left array
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];  // Recursively sort the left and right arrays, then combine them using the spread operator(...) while the pivot is between them to have the final sorted array.
}

const arr = [-6, 20, 8, -2, 4];
console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]

//Worst-Case Time Complexity: Big-O ==> 0(n^2)
//Average-Case: Big-O ==> 0(nlogn)