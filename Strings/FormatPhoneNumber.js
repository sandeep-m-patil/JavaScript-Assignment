function formatPhoneNumber(number) {
    if (number.length !== 10) {
      return "Invalid phone number"; // Or you might throw an error
    }
   return `(${number.slice(0, 3)})${number.slice(3, 6)}-${number.slice(6)}`;
  }
  
  console.log(formatPhoneNumber("1234567890")); // Output: (123) 456-7890
  console.log(formatPhoneNumber("12345"));    // Output: "Invalid phone number"
  
