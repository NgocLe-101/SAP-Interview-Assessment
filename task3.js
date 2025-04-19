function mergeTwoArray(arr1, arr2) {
    // We will create a new array to store the merged result and two pointers, each pointer 
    // will point to the current element of each array.
    const resultArr = []
    let firstPointer = 0;
    let secondPointer = 0;

    // We will loop through both arrays until we reach the end of one of them.
    while (firstPointer < arr1.length && secondPointer < arr2.length) {

        // Compare two pointed element from two arrays and push the smaller one to the result.
        // Then we will move the pointer of that array to the right.
        if (arr1[firstPointer] < arr2[secondPointer]) {
            resultArr.push(arr1[firstPointer]);
            firstPointer++;
        } else {
            resultArr.push(arr2[secondPointer]);
            secondPointer++;
        }
    }

    // After the above loop, one of the array has been completely traversed. We will push the 
    // remaining elements of the other array to the result array.
    while (firstPointer < arr1.length) {
        resultArr.push(arr1[firstPointer]);
        firstPointer++;
    }
    while (secondPointer < arr2.length) {
        resultArr.push(arr2[secondPointer]);
        secondPointer++;
    }

    // Finally, we will return the result array.
    return resultArr;
}
// Time complexity: O(n + m) where n and m are the lengths of the two arrays.

console.log(mergeTwoArray([1, 3, 5], [2, 4, 6])) // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeTwoArray([1, 5], [2, 3, 4])) // Output: [1, 2, 3, 4, 5]
