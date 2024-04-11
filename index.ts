#! /usr/bin/env node

import inquirer from "inquirer"

// Computer will generate a random number - Done

// User input for guessing number - Done

// Compare user input with computer generated number adn show result - Done

const randomNumber = Math.floor(Math.random() * 5 + 1 )

console.log("Welcome to Number Guessing Game")

const answers = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Please enter a number between 1 to 5",
    },
]);

if (answers.userGuessednumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
} else {
    console.log("You guessed wrong number");
}

console.log(answers)

