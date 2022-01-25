// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [''];

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter the usage information of your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter the contribution guidelines for your project.',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'instructions',
    },
    {
        type: 'list',
        message: 'Please choose a license for your README file.',
        name: 'license',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License'
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    ])
    .then((response) =>
    fs.writeFile('README2.md', writeToFile('README', response), (err) =>
    err ? console.log(err) : console.log('README was generated.'))
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return `#<${data.title}>

    ## Description

    ${data.description}

    ## Table of Contents

    -[Installation](#installation)
    -[Usage](#usage)
    -[Credits](#credits)
    -[License](#license)
    -[Guidelines](#guidelines)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Guidelines

    ${data.guidelines}

    ## Instructions

    ${data.instructions}

    
    `
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
