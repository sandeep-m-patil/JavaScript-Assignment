// Initialize counter variable
let counter = 0;

// Get references to the DOM elements
const display = document.getElementById('display');
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');

// Update the display with the current counter value
function updateDisplay() {
    display.textContent = counter;
}

// Event handler for the increment button
incrementBtn.addEventListener('click', function () {
    counter++;
    updateDisplay();
});

// Event handler for the decrement button
decrementBtn.addEventListener('click', function () {
    if (counter > 0) {
        counter--;
        updateDisplay();
    }
});