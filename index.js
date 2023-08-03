// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions that will be asked to the user in command line
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use it?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'list',
        message: 'What kind of license would you like to use?',
        name: 'license',
        choices: ['mit', 'apache', 'gpl', 'agpl', 'lgpl', 'mpl', 'cddl', 'epl', 'unlicense', 'isc', 'zlib', 'bsd2', 'bsd3', 'boost', 'artistic', 'epl', 'mspl']
    },
];

// This function writes the readme file
function writeToFile(fileName, data) {
    // Call the generateMarkdown function to generate the contents of the readme
    const readmeContent = generateMarkdown(data);

    // Write the readmeContent to a file
    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
            console.error('Error writing to README file:', err); // Logging an error if there are any
        } else {
            console.log('Your README.md is ready!'); // Otherwise, logs that the file was written successfully
        }
    });
}

// This function initializes the application
function init() {
    inquirer.prompt(questions) // Ask the user the questions
        .then((answers) => {
            writeToFile('README.md', answers); // Once the user has answered the questions, write the answers to the readme file
        })
        .catch((error) => {
            console.error('Error in main questions:', error); // If there was an error asking the questions, log it
        });
}

// Function call to initialize app
init();


// Starter Code provided for starts of functions:
// Credits: https://github.com/coding-boot-camp/potential-enigma/blob/main/Develop/package.json

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();