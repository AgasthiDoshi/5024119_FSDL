// DateTime.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateDate(input) {
    try {
        if (input.trim() === "") {
            throw new Error("Date input cannot be empty!");
        }

        // Create Date object
        const date = new Date(input);

        // Check if date is valid
        if (isNaN(date.getTime())) {
            throw new Error("Please enter a valid date format (YYYY-MM-DD)!");
        }

        console.log("Valid Date:", date.toDateString());

        // Display different date/time formats
        console.log("Year:", date.getFullYear());
        console.log("Month:", date.getMonth() + 1); // Months start from 0
        console.log("Day:", date.getDate());
        console.log("Day of Week:", date.getDay());
        console.log("Locale String:", date.toLocaleString());

        // Example: Calculate days difference from today
        const today = new Date();
        const diffTime = date - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        console.log("Days difference from today:", diffDays);
    }
    catch (error) {
        console.log("Error:", error.message);
    }
    finally {
        console.log("Date validation completed.");
        rl.close();
    }
}

rl.question("Enter a date (YYYY-MM-DD): ", function(input) {
    validateDate(input);
});