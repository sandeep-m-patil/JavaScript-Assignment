
function groupByCategory(items, categoryKey) {
    // Initialize an empty object to store the grouped items
    const result = {};
    
    // Loop through each item in the array
    for (const item of items) {
      // Get the category value for this item
      const categoryValue = item[categoryKey];
      
      // If this category doesn't exist in our result object yet, create an empty array for it
      if (!result[categoryValue]) {
        result[categoryValue] = [];
      }
      
      // Add the current item to the appropriate category array
      result[categoryValue].push(item);
    }
    
    // Return the grouped object
    return result;
  }
  
  // Example usage
  const products = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'T-Shirt', category: 'Apparel', price: 25 },
    { name: 'Mouse', category: 'Electronics', price: 30 },
    { name: 'Jeans', category: 'Apparel', price: 70 },
  ];
  
  const grouped = groupByCategory(products, 'category');
  console.log(grouped);
  
  /* Expected output:
  {
    Electronics: [
      { name: 'Laptop', category: 'Electronics', price: 1200 },
      { name: 'Mouse', category: 'Electronics', price: 30 }
    ],
    Apparel: [
      { name: 'T-Shirt', category: 'Apparel', price: 25 },
      { name: 'Jeans', category: 'Apparel', price: 70 }
    ]
  }
  */