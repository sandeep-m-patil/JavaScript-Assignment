// Problem 2: The Delayed Greeter (Incorrect Assumption about Variable Scope) 
// Imagine we want to create a function delayedGreeter that takes an array of names and, after a delay, greets each name. 

function delayedGreeter(names) {
    for (var i = 0; i < names.length; i++) {
      setTimeout(function() {
        console.log(`Hello, ${names[i]}!`);
      }, i * 1000);
    }
}
  
  delayedGreeter(['Alice', 'Bob', 'Charlie']);

  // Expected output (with delays):
  // Hello, Alice! (after 0 seconds)
  // Hello, Bob! (after 1 second)
  // Hello, Charlie! (after 2 seconds)

  // Actual output: 
  // Hello, undefined!
  // Hello, undefined!
  // Hello, undefined!
  
  
  // Corrected version using an IIFE (Immediately Invoked Function Expression)
  function delayedGreeterCorrected(names) {
    for (var i = 0; i < names.length; i++) {
      (function(index) { // IIFE creates a new scope for each iteration
        setTimeout(function() {
          console.log(`Hello, ${names[index]}!`);
        }, index * 1000);
      })(i); // Pass the current value of 'i' into the IIFE
    }
  }
  
  delayedGreeterCorrected(['Alice', 'Bob', 'Charlie']);
  // Expected output (with delays):
  // Hello, Alice! (after 0 seconds)
  // Hello, Bob! (after 1 second)
  // Hello, Charlie! (after 2 seconds)
  
  

// Another corrected version using 'let' in the loop
// 'let' creates a new scope for each iteration of the loop
  function delayedGreeterLet(names) {
    for (let i = 0; i < names.length; i++) { // Using 'let'
      setTimeout(function() {
        console.log(`Hello, ${names[i]}!`);
      }, i * 1000);
    }
  }
  
  delayedGreeterLet(['Alice', 'Bob', 'Charlie']);
  // Expected output (with delays):
  // Hello, Alice! (after 0 seconds)
  // Hello, Bob! (after 1 second)
  // Hello, Charlie! (after 2 seconds)
  