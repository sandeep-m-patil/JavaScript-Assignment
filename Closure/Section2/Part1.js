// Part 1: Variable Scope and Hoisting - The Case of the Missing Declaration
// The Puzzle: Examine the following code and predict the output:


console.log(mysteryVariable);
let mysteryVariable = 10;
console.log(mysteryVariable);

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable);
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}

revealMystery();
console.log("After revealMystery:", mysteryVariable);


/*  
Ouput :

undefined
10
Inside revealMystery: undefined
Inside revealMystery (after declaration): 20
After revealMystery: 10
*/





// Rewriting the code using let

console.log(mysteryVariable); // ReferenceError
mysteryVariable = 10;
console.log(mysteryVariable);

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable);
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}

revealMystery();
console.log("After revealMystery:", mysteryVariable);

// Output
// ReferenceError: Cannot access 'mysteryVariable' before initialization