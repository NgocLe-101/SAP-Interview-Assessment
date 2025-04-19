function firstNonRepeatingChar(input) {
    // Create a hashmap. Loop through every character in the string and count it in the
    // hashmap.
    const map = {};
    for (let i = 0; i < input.length; i++) {
        if (!map[input[i]]) {
            map[input[i]] = 1;
        } else {
            map[input[i]]++;
        }
    }

    // After finish looping through the input string, we will find the first character in the
    // hasmap that has the count of 1,meaning that it is the first non repeating character in
    // the string.
    const firstNonRepeatingCharacter = Object.keys(map).find(item => map[item] === 1);

    // If we find the first non repeating character, we will return it, otherwise, there are
    // no non repeating character in the string, we will return null.
    return firstNonRepeatingCharacter ? firstNonRepeatingCharacter : null;
}
// Time complexity: 
// O(n) time to loop through the string and count the occurrences of each character.
// O(n) time to loop through the hashmap to find the first non repeating character
// Total time complexity: O(n + n) = O(n) where n is the length of the input string

console.log(firstNonRepeatingChar("sapstar")); // Output: "p"
console.log(firstNonRepeatingChar("aaabbbbcc")); // Output: null
