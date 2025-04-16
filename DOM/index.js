// Get references to the elements we need
const myList = document.getElementById('myList');
const addButton = document.getElementById('addButton');

// Add event listener to the button
addButton.addEventListener('click', function () {
    // Create a new list item
    const newItem = document.createElement('li');

    // Add the 'item' class to match the existing items
    newItem.classList.add('item');

    // Set the text content
    newItem.textContent = 'New Item';

    // Append the new item to the list
    myList.appendChild(newItem);
});

// Use event delegation to handle clicks on list items
// This will work for both existing and newly added items
myList.addEventListener('click', function (event) {
    // Check if the clicked element is a list item
    if (event.target.tagName === 'LI') {
        // Remove the clicked item from the list
        event.target.remove();
    }
});