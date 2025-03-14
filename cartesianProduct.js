function cartesianProduct(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2)); //Output: [(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]

//Big-o Time Complexity: Big-O ==> O(m * n)https://www.youtube.com/watch?v=jrY7eONLHZs&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=31&pp=iAQB