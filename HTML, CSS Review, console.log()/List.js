// 1. Select all the list items
const listItems = document.querySelectorAll('#myList li');

// 2. Iterate through each item and log its text content
listItems.forEach((item, index) => {
  console.log(`Item ${index + 1}:`, item.textContent);

  // 3. Add "highlight" class to every second list item (index 1, 3, ...)
  if ((index + 1) % 2 === 0) {
    item.classList.add('highlight');
  }
});

// 4. Log the total number of list items
console.log("Total number of list items:", listItems.length);
