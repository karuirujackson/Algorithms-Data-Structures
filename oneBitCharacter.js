function isOneBitCharacter(bits) {
    let i = 0;
    const n = bits.length;
    
    // Traverse the array
    while (i < n - 1) {
        // If the current bit is 1, it must be a two-bit character (10 or 11)
        if (bits[i] === 1) {
            i += 2; // Skip the next bit
        } else {
            i += 1; // Move to the next bit
        }
    }
    
    // If we end at the last bit, it must be a one-bit character
    return i === n - 1;
}

// Example usage:
console.log(isOneBitCharacter([1, 0, 0])); // Output: true
console.log(isOneBitCharacter([1, 1, 1, 0])); // Output: false

//Big-O ==> O(n)