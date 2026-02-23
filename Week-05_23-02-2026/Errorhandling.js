const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkNumber(input) {
    try {
        if (input.trim() === "") {
            throw new Error("Input cannot be empty!");
        }

        if (isNaN(input)) {
            throw new Error("Please enter a valid number!");
        }

        input = Number(input);

        if (input < 1 || input > 10) {
            throw new Error("Number must be between 1 and 10!");
        }

        console.log("Valid Input: " + input);
    }
    catch (error) {
        console.log("Error: " + error.message);
    }
    finally {
        console.log("Execution Completed");
        rl.close();
    }
}

rl.question("Enter a number between 1 to 10: ", function(input) {
    checkNumber(input);
});