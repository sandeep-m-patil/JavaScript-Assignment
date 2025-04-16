function createCalculator() {
    return {
        add: function (a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        },
        multiply: function (a, b) {
            return a * b;
        },
        divide: function (a, b) {
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;
        }
    };
}


const calculator = createCalculator();

console.log("Add:", calculator.add(10, 5));         //  15
console.log("Subtract:", calculator.subtract(10, 5)); // 5
console.log("Multiply:", calculator.multiply(10, 5)); // 50
console.log("Divide:", calculator.divide(10, 2));     // 5
console.log("Divide by 0:", calculator.divide(10, 0)); //  "Cannot divide by zero"
