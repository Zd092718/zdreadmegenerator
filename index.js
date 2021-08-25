// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [  
{
    type: 'input',
    name: 'projectTitle',
    message: "What's the name of your project?",
},
{
    type: 'input',
    name: 'username',
    message: "What's your Github username?",
},
{
    type: 'input',
    name: 'description',
    message: "Describe your project:",
},
{
    type: 'input',
    name: 'languages',
    message: "What languages did your project use?",
},
{
    type: 'input',
    name: 'usage',
    message: "How will your project be used?",
},
{
    type: 'input',
    name: 'contributions',
    message: "Who contributed to your project?",
},
{
    type: 'input',
    name: 'testInstructions',
    message: "How to test your program:",
},
{
    type: 'input',
    name: 'emailAddress',
    message: "What's your email address?",
},
{
    type: 'list',
    name: 'license',
    message: 'What license is used for your application?',
    choices: ['MIT', 'Apache', 'Mozilla', 'Boost', 'Eclipse', 'SIL'],
    filter(val) {
      return val.toLowerCase();
    },
}
];

// inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, ' '))
// })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!') )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => generateMarkdown(data))
    .then((data) => writeToFile('UREADME.md', data))
}

// Function call to initialize app
init();
