// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [  
{
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
},
{
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default() {
      return 'Doe';
    },
},
{
    type: 'list',
    name: 'license',
    message: 'What size do you need?',
    choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
    filter(val) {
      return val.toLowerCase();
    },
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
