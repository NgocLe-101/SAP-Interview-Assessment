function countOccurences(input) {
    // Create a hashmap. Loop through every character in the string and count it in the hashmap.
    const map = {};
    for (let i = 0; i < input.length; i++) {
        if (!map[input[i]]) {
            map[input[i]] = 1;
        } else {
            map[input[i]]++;
        }
    }
    
    // The final state of the hashmap will be the count of the occurrences of each character 
    // within the string
    return map;
}
// Time complexity: 
// O(n) time to loop through the string and count the occurrences of each character.
// Total time complexity: O(n) where n is the length of the input string

console.log(countOccurences("sapstar")); // Output: { s: 2, a: 2, p: 1, t: 1, r: 1 }
console.log(countOccurences("aaabbbbcc")); // Output: { a: 3, b: 4, c: 2 }
