//  Part 3: The Power of Closures - Maintaining State
// The Puzzle: Predict the output of the following code:

function setupCounter(initialValue) {
    let count = initialValue;

    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    return {
        increment: increment,
        decrement: decrement
    };
}

const counterOne = setupCounter(5);
console.log(counterOne.increment()); // Output: 6
console.log(counterOne.increment()); // Output: 7 
const counterTwo = setupCounter(10);
console.log(counterTwo.decrement()); // Output: 9
console.log(counterOne.decrement()); // Output: 6


// Greet Function: A Closure Example

function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

// Usage:
const sayHello = createGreeting("Hello");
console.log(sayHello("World")); // Output: Hello, World!

const sayHi = createGreeting("Hi");
console.log(sayHi("Sandeep")); // Output: Hi, Sandeep!


// Secrete Holder: A Closure Example

function createSecretHolder(secret) {
    let hiddenSecret = secret;

    return {
        getSecret: function () {
            return hiddenSecret;
        },
        setSecret: function (newSecret) {
            hiddenSecret = newSecret;
        }
    };
}


// Usage:
const holder = createSecretHolder("mySecret");
console.log(holder.getSecret()); // Output: mySecret
holder.setSecret("newSecret");
console.log(holder.getSecret()); // Output: newSecret
