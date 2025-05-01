# Problem 1: The Persistent Counter (Initial Incorrect Attempt) Our goal is to create a function createCounter that, when called, returns a new function. This returned function, when invoked, should increment and return a counter.

- The createCounter function works correctly because of closures. Each time you call it, a new count variable is created and remembered by the returned function. 

- This is why counterA and counterB have their own separate counts. You can’t change count from outside because it’s private inside the function. This shows how closures help keep data safe and independent.

- Extra ( uses of Closure) : 
  - **Data Privacy** : Closures allow you to create private variables that can't be accessed directly from outside a function.

  - **Creating Independent data / states** : Closures can store state across multiple function calls.

``` 

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


```
