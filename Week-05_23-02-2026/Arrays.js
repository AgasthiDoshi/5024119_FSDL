// Arrays.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateArray(input) {
    try {
        if (input.trim() === "") {
            throw new Error("Input cannot be empty!");
        }

        // Convert comma-separated string into array
        let arr = input.split(',').map(item => item.trim());

        if (arr.length === 0) {
            throw new Error("Array cannot be empty!");
        }

        // Check if all elements are numbers
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) {
                throw new Error("All elements must be valid numbers!");
            }
        }

        // Convert elements to numbers
        arr = arr.map(Number);

        console.log("Valid Array:", arr);

        // Example operation: Find sum
        const sum = arr.reduce((total, num) => total + num, 0);
        console.log("Sum of Array:", sum);
    }
    catch (error) {
        console.log("Error:", error.message);
    }
    finally {
        console.log("Array validation completed.");
        rl.close();
    }
}

rl.question("Enter numbers separated by commas: ", function(input) {
    validateArray(input);
});