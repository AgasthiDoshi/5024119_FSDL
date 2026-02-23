// validator.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateUser(username, email, password) {
    try {
        // Username validation
        if (username.trim() === "") {
            throw new Error("Username cannot be empty!");
        }

        if (username.length < 3) {
            throw new Error("Username must be at least 3 characters long!");
        }

        // Email validation
        if (email.trim() === "") {
            throw new Error("Email cannot be empty!");
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            throw new Error("Please enter a valid email address!");
        }

        // Password validation
        if (password.trim() === "") {
            throw new Error("Password cannot be empty!");
        }

        if (password.length < 6) {
            throw new Error("Password must be at least 6 characters long!");
        }

        console.log("All inputs are valid!");
        console.log("Username:", username);
        console.log("Email:", email);
    }
    catch (error) {
        console.log("Error:", error.message);
    }
    finally {
        console.log("Validation process completed.");
        rl.close();
    }
}

rl.question("Enter Username: ", function(username) {
    rl.question("Enter Email: ", function(email) {
        rl.question("Enter Password: ", function(password) {
            validateUser(username, email, password);
        });
    });
});