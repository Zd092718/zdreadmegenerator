// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [  
{
    type: 'input',
    name: 'project_title',
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
    message: "Describe your project",
},
{
    type: 'input',
    name: 'usage_information',
    message: "How is your project used?",
},
{
    type: 'input',
    name: 'contriubution_guidelines',
    message: "Who contributed to your project?",
},
{
    type: 'input',
    name: 'test_instructions',
    message: "How to test your program",
},
{
    type: 'input',
    name: 'email_address',
    message: "What's your email address?",
},
{
    type: 'list',
    name: 'license',
    message: 'What license is used for your application?',
    choices: ['MIT', 'Apache', 'Mozilla', 'Common DevelopmenT and Distribution', 'Eclipse', 'GNU'],
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
    fs.writeFile(fileName, md.generateMarkdown(data), )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(writeToFile('readme.md', data))
}

// Function call to initialize app
init();
