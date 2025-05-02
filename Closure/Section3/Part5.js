// Part 5: Loops - Breaking Free and Skipping Steps
// The Puzzle: Examine the following loop and predict its output:

for (let i = 0; i < 10; i++) {
    // Skip the current iteration if i is divisible by 3
    if (i % 3 === 0) {
        continue;
    }
    // Break the loop if i is equal to 7
    if (i === 7) {
        break;
    }
    console.log(i); // Logs: 1, 2, 4, 5, 7
}

console.log("\n");

// for loop that iterates from 1 to 20.

for (let i = 1; i <= 20; i++) {
    // If the number is divisible by 5, use continue to skip to the next iteration
    if (i % 5 == 0) continue;
    // If the number is greater than 15, use break to exit the loop
    if (i > 15) break;
    // all other numbers, log the number to the console
    console.log(i); // Logs: 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14

}

console.log("\n");

// Array Challenge
let arr = [10, 5, 8, 20, 3, 15, 25];

for (let i of arr) {
    // If you encounter a number greater than 12, log "Found a large number!" and immediately exit the loop using break.
    if (i > 12) {
        console.log("Found a large number!");
        break;
    }
    // If you encounter the number 5, skip to the next iteration using continue and log "Skipping 5!".
    if (i === 5) {
        console.log("Skipping 5!");
        continue;
    }
    // For all other numbers, log the number itself. Predict the output before running the code.
    console.log(i); // Logs: 10, "Skipping 5!", 8, "Found a large number!"
}

    /* 
        Ouput:
        10
        Skipping 5!
        8
        Found a large number!
        
    */