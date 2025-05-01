function createUniqueCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}

// Demonstration:

const counter1 = createUniqueCounter();
const counter2 = createUniqueCounter();

counter1.increment(); // Increment counter1
console.log(counter1.getValue());   // Output: 2


counter2.increment(); // Increment counter1 again
counter2.increment(); // Increment counter1 again

// counter1 and counter2 are independent
console.log(counter2.getValue());   // Output: 2
