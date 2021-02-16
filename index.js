// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
  {
    type: "input",
    message: "What is your the name of your project?",
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
  },
  {
    type: "input",
    message: "Please provide the tests required for your application, if any, and provide examples on how to run them.",
    name: "tests",
  }]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
