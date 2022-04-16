const generateHTML = require('./src/generateHTML');

// team profiles
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 

// Create function to initialize the app, divide it up based on employee roles
// const newManager(manager) {
//     return inquirer.prompt([

//     ])
// }
// helper function in your src folder to generate HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), (err) => {
        if (err) {
            console.log('error');
        } else {

        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('html.index', answers)
        })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), (err) => {
        if (err) {
            console.log('error');
        } else {

        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('html.index', answers)
        })
}

// Function call to initialize app
init();
