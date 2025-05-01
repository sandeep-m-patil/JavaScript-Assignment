### Problem 1: The Persistent Counter (Initial Incorrect Attempt) ### Our goal is to create a function createCounter that, when called, returns a new function. This returned function, when invoked, should increment and return a counter.

- The createCounter function works correctly because of closures. Each time you call it, a new count variable is created and remembered by the returned function. 

- This is why counterA and counterB have their own separate counts. You can’t change count from outside because it’s private inside the function. This shows how closures help keep data safe and independent.

- Extra ( uses of Closure) : 
  - **Data Privacy** : Closures allow you to create private variables that can't be accessed directly from outside a function.

  - **Creating Independent data / states** : Closures can store state across multiple function calls.


### Problem 2: The Delayed Greeter (Incorrect Assumption about Variable Scope) 
### Imagine we want to create a function delayedGreeter that takes an array of names and, after a delay, greets each name. 

- In the original delayedGreeter function, the problem happens because var doesn’t create a new value of i for each loop — it shares the same one. 

- So when the setTimeout runs after the loop finishes, it tries to use names[3], which doesn’t exist, so it prints undefined. The corrected version uses a trick called an IIFE (a function that runs right away) to save the current value of i each time through the loop. 

- This way, each setTimeout remembers the right name to print. In modern JavaScript, you can simply use let instead of var, which fixes the problem without needing that trick, because let creates a new value of i for each loop. 

- This shows how closures help functions remember values even after the loop is done.
