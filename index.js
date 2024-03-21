#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
    { message: chalk.greenBright("Enter First number"), type: "number", name: "firstNumber" },
    { message: chalk.magentaBright("Enter Second number"), type: "number", name: "secondNumber" },
    { message: "select the operator", type: "list", name: "operator", choices: ["Addition", "subtraction", "Multiplication", "Division"] }
]);
//CONDITIONAL STATEMENT:
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Assign a valid operator");
}
