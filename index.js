// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
    .then((response) => {
        // Check what license was selected and grab the badge URL for that license
        response.license = getURL(response);

        fs.writeFile(`README.md`, writeToFile(response), (err) =>
        err ? console.log(err) : console.log('README was generated.'))
    });

function getURL(response){
    switch (response.license){
        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'GNU General Public License v3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'MIT License':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    return response.license;
}
// TODO: Create a function to write README file
function writeToFile(data) {
return `<${data.title}>

## Description

${data.description}

## Table of Contents

-[Installation-Instructions](#installation-instructions)\n
-[Usage-Information](#usage-information)\n
-[Contributing-Guidelines](#contributing-guidelines)\n
-[Test-Instructions](#test-instructions)\n
-[License](#license)\n
-[Questions](#questions?)

## Installation-Instructions

${data.installation}

## Usage-Information

${data.usage}

## Contributing-Guidelines

${data.guidelines}

## Test-Instructions

${data.instructions}

## License

${data.license}

## Questions?

Reach out to me through Github or email!

Github: 
[Github Link](https://github.com/${data.github})

Email:
${data.email}`
}

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)