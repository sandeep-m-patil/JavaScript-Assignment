// Problem 1: The Persistent Counter (Initial Incorrect Attempt)
// Our goal is to create a function createCounter that, when called, returns a new function. This returned function, when invoked, should increment and return a counter.

function createCounter() {
  let count = 0;

  function incrementCounter() {
    count++;
    return count;
  }

  return incrementCounter;
}

const counterA = createCounter();
console.log(counterA()); // Expected: 1
console.log(counterA()); // Expected: 2

const counterB = createCounter();
console.log(counterB()); // Expected: 1 (independent counter)

// Trying to directly access 'count' - this will cause an error
//console.log(count);


count = 10; // This will not affect the count in counterA or counterB
console.log(counterA()); // Expected: 3