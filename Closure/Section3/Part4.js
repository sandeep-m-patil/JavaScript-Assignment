// Part 4: Objects - Properties and the Illusion of Order
// The Puzzle: Examine the following object and predict the order in which its properties might be logged:

const myObject = {
    z: 1,
    a: 2,
    10: 3,
    b: 4,
    2: 5,
    c: 6
};
// The expected order of properties when logged is not guaranteed to be the same as the order they were added.
for (const key in myObject) {
    console.log(key, myObject[key]);
}

// This will log the keys in the order they were added to the object, but numeric keys are sorted first in ascending order.
console.log(Object.keys(myObject)); 

// Creating an object with mixed keys (numeric and string) to demonstrate the order of properties

const mixedKeysObject = {
    d: 10,
    3: 'three',
    a: 1,
    1: 'one',
    b: 2,
    2: 'two'
  };
  
  console.log("Using for...in:");
  for (const key in mixedKeysObject) {
    console.log(key); // Logs: 1, 2, 3, d, a, b
  }
  
  console.log("Using Object.keys():");
  console.log(Object.keys(mixedKeysObject)); // ['1', '2', '3', 'd', 'a', 'b']
  