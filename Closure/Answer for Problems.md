### Problem 1: The Persistent Counter (Initial Incorrect Attempt)
### Our goal is to create a function createCounter that, when called, returns a new function. This returned function, when invoked, should increment and return a counter.

- The createCounter function works correctly because of closures. Each time you call it, a new count variable is created and remembered by the returned function. 

- This is why counterA and counterB have their own separate counts. You can’t change count from outside because it’s private inside the function. This shows how closures help keep data safe and independent.

- Extra ( uses of Closure) : 
  - **Data Privacy** : Closures allow you to create private variables that can't be accessed directly from outside a function.

  - **Creating Independent data / states** : Closures can store state across multiple function calls.


### Problem 2: The Delayed Greeter (Incorrect Assumption about Variable Scope) 
### Imagine we want to create a function delayedGreeter that takes an array of names and, after a delay, greets each name. 


- In the delayedGreeter function, the output is incorrect because it uses var in the loop. 
- Since var is function-scoped, all setTimeout callbacks end up sharing the same value of i, which becomes 3 after the loop ends. As a result, the function tries to access names[3], which doesn't exist, and prints undefined. 

- To fix this, the delayedGreeterCorrected version uses an IIFE (Immediately Invoked Function Expression) to create a new scope for each loop iteration, capturing the current value of i as index, so each setTimeout works with the correct name. 

-A cleaner and more modern fix is shown in delayedGreeterLet, where let is used instead of var. Since let is block-scoped, it automatically creates a fresh i value for each loop cycle.