function insertionSort(arr) {// Start from the second element (index 1) because the first element is already considered sorted.
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]; // Select the element to be inserted into the sorted part of the array.
        let j = i - 1; // Start comparing with the element just before the current element. Move elements of the sorted part that are greater than `numberToInsert` .One position ahead of their current position.
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert; // Insert the `numberToInsert` into its correct position.
    }
}

const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]

//Big-O ==> O(n^2)