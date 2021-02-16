// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    message: "What is your github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the name of your project?",
    name: "name",
  },
  {
    type: "input",
    message: "Please include a short description explaining the what, why, and how for your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installations",
  },
  {
    type: "input",
    message: "Please provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please list your collaborators, if any.",
    name: "credits",
    default: 'If there are no collaborators, type "none"',
  },
  {
    type: "input",
    message: "Please provide the tests required for your application, if any, and provide examples on how to run them.",
    name: "tests",
    default: 'If there are no tests, type "none"',
  },
  {
    type: "list",
    message: "Which license would you like to include?",
    choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT", "Boost Software License 1.0", "Unlicense"],
    name: "license",
  },
])

// TODO: Create a function to write README file
.then((data) => {
    const title = `# ${data.name} \n`; 
    const description = `## Description \n ${data.description} \n`;
    const tableOfContents = `## Table of Contents \n *[Installations](#installations) \n\n *[Usage](#usage) \n\n *[Credits](#credits) \n\n *[Tests](#test) \n\n *[Licnse](#license) \n\n *[Questions](#questions) \n`;
    const installations = `## Installations \n ${data.installations} \n`;
    const usage = `## Usage \n ${data.usage} \n`;
    const credits = `## Credits \n ${data.credits} \n`;
    const tests = `## Tests \n ${data.tests} \n`;
    const license = `## License \n ${data.license} \n`;
    const questions = `## Questions \n For any questions, please contact me. \n\n Github: ${data.username} \n\n Email: ${data.email}`

    fs.writeFile(`sampleREADME.md`, title + description + tableOfContents + installations + usage + credits + tests + license + questions, (err) =>
    err ? console.log(err) : console.log('Check out your Sample README!')
    );
  });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
