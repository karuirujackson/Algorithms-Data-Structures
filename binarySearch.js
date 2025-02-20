// Only works on sorted arrays otherwise stick to linear search.
// Alternatively, sort the arr first the do a binary search

function binarySearch (arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // Returns 3
console.log(binarySearch([-5, 2, 4, 6, 10], 8)); // Returns -1


//Big-0 ==> 0(logn)