let globalVar = "I'm global"; // Global variable

function showGlobal() {
    console.log(globalVar); // Accessible here
}

showGlobal();
console.log(globalVar);    // Also accessible here


function localScopeDemo() {
    let localVar = "I'm local";
    console.log(localVar); //  Accessible
}

localScopeDemo();
// console.log(localVar); Error: localVar is not defined



if (true) {
    let blockVar = "I'm block scoped";
    console.log(blockVar); // Accessible
}
// console.log(blockVar); Error: blockVar is not defined


// Variable Shadowing
// When a local variable has the same name as a global one, the local one “shadows” it within that scope.


let name = "Global";

function greet() {
  let name = "Local";  // Shadows the global `name`
  console.log(name);   // "Local"
}

greet();
console.log(name);     // "Global"

