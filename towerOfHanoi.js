// Function to solve the Tower of Hanoi problem
// n: number of disks
// fromRod: the rod where the disks are initially placed
// toRod: the rod where the disks need to be moved
// usingRod: the auxiliary rod used for temporary storage
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) { // Base case: If there's only one disk, move it directly from 'fromRod' to 'toRod'
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }   
    towerOfHanoi(n - 1, fromRod, usingRod, toRod);  // Recursive case ==> Step 1: Move the top (n-1) disks from 'fromRod' to 'usingRod' using 'toRod' as the auxiliary rod  
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);  // Step 2: Move the nth disk (the largest one) from 'fromRod' to 'toRod'
    towerOfHanoi(n - 1, usingRod, toRod, fromRod);  // Step 3: Move the (n-1) disks from 'usingRod' to 'toRod' using 'fromRod' as the auxiliary rod
}

towerOfHanoi(3, 'A', 'C', 'B'); // Example usage: Solve the Tower of Hanoi problem for 3 disks, with rods labeled 'A', 'B', and 'C'

// Time Complexity: Big-0 ==> O(2^n)

// Explanation: The function makes two recursive calls for each disk (except the base case), leading to an exponential growth in the number of function calls. For n disks, the number of moves required is 2^n - 1, which results in a time complexity of O(2^n).