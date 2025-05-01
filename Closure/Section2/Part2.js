// Part 2: The Perils of this - Object Methods and Arrow Functions
// The Puzzle: Consider the following user object with a method that uses setTimeout:


const user = {
    name: "Alice",
    greetDelayed: function () {
        setTimeout(function () {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};

user.greetDelayed(); // Expected: Hello, Alice! (after 1 second), Actual: Hello, undefined! (after 1 second)
// The value of `this` inside the setTimeout callback is not the `user` object.


const userFixed = {
    name: "Alice",
    greetDelayed: function () {
        const self = this; // Store the reference to the user object
        setTimeout(function () {
            console.log(`Hello, ${self.name}!`);
        }, 1000);
    }
};  

// The Corrected Code: Fixing the this Binding w Functions ( Traditional Function )

const userFixedBind = {
    name: "Alice",
    greetDelayed: function () {
        setTimeout(function () {
            console.log(`Hello, ${this.name}!`);
        }.bind(this), 1000); // Bind the correct this context
    }
};

userFixedBind.greetDelayed(); // Expected: Hello, Alice! (after 1 second)


// The Modern Solution (Arrow Function): Using Arrow Functions to Capture this
const userCorrectedArrow = {
    name: "Bob",
    greetDelayed: function() {
      setTimeout(() => { // Arrow function here
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    }
  };
  
  userCorrectedArrow.greetDelayed(); // Works perfectly!
  
// The arrow function captures the this value from the surrounding context, which is the user object.  
