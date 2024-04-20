#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n \t\t code with amna - word counter"));
console.log("=".repeat(60));
//prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
//trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//analaysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
