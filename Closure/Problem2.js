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
  
  