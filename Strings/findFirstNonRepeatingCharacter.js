function findFirstNonRepeatingCharacter(str) {
    let n = str.length;
    for (let i = 0; i < n; i++) {
        let isUnique = true;
        for (let j = 0; j < n; j++) {
            if (i !== j && str[i] === str[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            return str[i]; // Found the first non-repeating character
        }
    }
    return null; // No non-repeating character found
}


console.log(findFirstNonRepeatingCharacter("sandeep")) // Output: "s"
console.log(findFirstNonRepeatingCharacter("aabbcc")) // Output: null