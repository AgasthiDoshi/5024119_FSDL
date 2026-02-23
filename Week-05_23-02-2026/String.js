// String.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateString(input) {
    try {
        if (input.trim() === "") {
            throw new Error("String cannot be empty!");
        }

        if (input.length < 3) {
            throw new Error("String must be at least 3 characters long!");
        }

        // Check if string contains only letters
        const pattern = /^[A-Za-z]+$/;
        if (!pattern.test(input)) {
            throw new Error("String must contain only alphabets!");
        }

        console.log("Valid String:", input);

        // Example operations
        console.log("String Length:", input.length);
        console.log("Uppercase:", input.toUpperCase());
        console.log("Lowercase:", input.toLowerCase());
        console.log("Reversed:", input.split('').reverse().join(''));
    }
    catch (error) {
        console.log("Error:", error.message);
    }
    finally {
        console.log("String validation completed.");
        rl.close();
    }
}

rl.question("Enter a string: ", function(input) {
    validateString(input);
});