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


## Section 2

### Part 1: Variable Scope and Hoisting - The Case of the Missing Declaration
### The Puzzle: Examine the following code and predict the output

#### Rewritting code using `let`

- Using let instead of var gives a ReferenceError because let variables are not available before they are declared. Even though JavaScript moves the declaration to the top (called hoisting), let keeps the variable in something called the Temporal Dead Zone (TDZ). This means you can't use the variable until the line where it’s actually declared.

- Inside the revealMystery() function, if you try to use mysteryVariable before its let declaration, it also throws a ReferenceError. But with var, it would just show undefined instead of crashing.

In short:

  - var = hoisted and initialized (shows undefined before declaration)

  - let = hoisted but not initialized (error if used before declaration)

#### Paragraph on Hoisting and Differences Between var, let, and const

- Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope before the code runs. 

- When you use `var`, the variable is hoisted and set to `undefined` by default, so you can use it before it's declared (but it won't have the real value yet).

- However, `let` and `const` are also hoisted, but they are not automatically given a value. Until the line where they are declared, they are in a special state called the Temporal Dead Zone (TDZ). If you try to use them before the declaration, you'll get a `ReferenceError`.

- Also, `const` must be given a value when it's declared, while let does not need an immediate value. These rules help avoid common bugs like using a variable too early before it’s properly set.

### Part 2: The Perils of this - Object Methods and Arrow Functions
### The Puzzle: Consider the following user object with a method that uses setTimeout

- In JavaScript, the value of this can change depending on the context. In regular functions, this refers to the global object inside callbacks like setTimeout, leading to unexpected results (e.g., undefined instead of the object’s property).

- To fix this, we can either store this in a variable (like self) or use bind() to explicitly set the correct context. 

- A simpler and more modern solution is to use arrow functions, which automatically capture this from their surrounding context, ensuring it always refers to the correct object.


### Part 3: The Power of Closures - Maintaining State
### The Puzzle: Predict the output of the following code:

1.	Explain in your own words what a closure is and how it enables the increment and decrement functions to maintain their respective count variables.

  - A closure is a function that remembers and can use variables from the place where it was created, even after that outer function has finished running. In the setupCounter example, the increment and decrement functions keep access to the count variable, allowing them to update and remember it each time. Each time you call setupCounter, it creates a new, separate counter using this idea.

2. Create a function called createGreeting that takes a greeting string as an argument. This function should return another function that takes a name string and returns the full greeting (e.g., if createGreeting("Hello") is called, the returned function, when called with "World", should return "Hello, World!"). Demonstrate its usage

  - The createGreeting function returns a new function that remembers the greeting you passed in. This returned function can then be called with a name to complete the greeting. This works because of closures — the inner function "remembers" the greeting from its outer scope.

3.	The Challenge: Create a function createSecretHolder(secret) that takes a secret value. It should return an object with two methods: getSecret(): Returns the secret value.	setSecret(newSecret): Updates the secret value.

  - The variable hiddenSecret is not accessible outside the returned object. Only getSecret and setSecret can access or modify it, thanks to closure.

4.	The secret value should not be directly accessible from outside the object. Use closures to achieve this encapsulation. Demonstrate how to use createSecretHolder

  - In this code, the _secret variable is not part of the returned object — it's private inside the closure. The getSecret and setSecret methods can access and modify it, but from outside, no one can directly read or change _secret. This is how closures help protect data.