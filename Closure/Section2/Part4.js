// Part 4: Advanced Functions - Arguments and Flexibility
// The Puzzle: Predict the output of the following function calls:

// handles function calls with a different number of arguments than parameters


function flexibleFunction(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
}

flexibleFunction(1); // Output: a: 1, b: undefined, rest: []
flexibleFunction(1, 2); // Output: a: 1, b: 2, rest: []
flexibleFunction(1, 2, 3, 4, 5); // Output: a: 1, b: 2, rest: [3, 4, 5]


// Describe the purpose and syntax of the rest parameter.

function restParameterExample(...args) {
    console.log("Arguments:", args);
    console.log("Number of arguments:", args.length);
}

restParameterExample(1, 2, 3); // Output: Arguments: [1, 2, 3], Number of arguments: 3
restParameterExample("a", "b", "c", "d"); // Output: Arguments: ["a", "b", "c", "d"], Number of arguments: 4

// Sum all numbers in an array using the rest parameter

function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Usage
console.log(sumAll(1, 2, 3));        // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100


// The Challenge: Create a function processArguments that takes a primary function as its first argument and any number of additional arguments. The processArguments function should then call the primary function with all the additional arguments passed to it. Demonstrate its usage with a simple primary function (e.g., one that multiplies two numbers).
function processArguments(func, ...args) {
    return func(...args);
}

// A simple primary function that multiplies two numbers
function multiply(a, b) {
    return a * b;
}

// Usage
console.log(processArguments(multiply, 5, 3));  // Output: 15
console.log(processArguments(multiply, 2, 4));  // Output: 8
