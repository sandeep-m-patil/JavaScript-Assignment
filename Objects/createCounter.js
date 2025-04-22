function createCounter() {
    let count = 0; // Keep count as a closure variable
  
    return {
      increment: function() {
        count++; // Increment the closure variable
        return count; // Return the updated count
      },
      decrement: function() {
        count--; // Decrement the closure variable
        return count; // Return the updated count
      }
    };
  }
  
  const counter = createCounter();  // No need for `new`
  console.log(counter.increment()); // Output: 1
  console.log(counter.increment()); // Output: 2
  console.log(counter.decrement()); // Output: 1
  