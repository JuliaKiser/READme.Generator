const inquirer = require("inquirer");

const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project',
    },
    {
        type: 'input',
        name: 'installCode',
        message: 'Please install npm i',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What contributions were made?',
    },
    {
        type: 'prompt',
        name: 'tests',
        message: 'To run tests, enter the following command',
        default: 'npm run test',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this project under?',
        choices: ["Github", "PyPI", "Apache", "GPLv3"],
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    }
];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log('SUCCESSFUL')
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((response) => {
                writeToFile("README.md", response)}
            
        )
}

// This will initialize the function
init();