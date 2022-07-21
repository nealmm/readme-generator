// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['Apache 2.0 License'
                 ,'BSD 2-Clause License'
                 ,'GNU General Public License v2'
                 ,'MIT License']

// TODO: Create an array of questions for user input
const questions = [ {type: 'input', name: 'title', message: 'Enter project title'}
                  , {type: 'input', name: 'description', message: 'Enter description of project'}
                  , {type: 'input', name: 'installation', message: 'Enter installation instructions'}
                  , {type: 'input', name: 'usage', message: 'Enter usage information'}
                  , {type: 'input', name: 'contributing', message: 'Enter contribution guidelines'}
                  , {type: 'input', name: 'tests', message: 'Enter test instructions'}
                  , {type: 'list',  name: 'license', message: 'Choose license', choices: licenses}
                  , {type: 'input', name: 'username', message: 'Enter GitHub username'}
                  , {type: 'input', name: 'email', message: 'Enter email address'} ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => { if(err) throw err })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile('./README.md', generateMarkdown(answers)))
}

// Function call to initialize app
init();
