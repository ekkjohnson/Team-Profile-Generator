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
const addManager =[
    {
        type:'input',
        name:'name',
        message: "please enter manager's name"
    },
    {
        type:'input',
        name:'id',
        message: "please enter manager's employee ID"
    },
    {
        type:'input',
        name:'email',
        message: "please enter manager's email"
    },
    {
        type:'input',
        name:'officeNumber',
        message: "please enter manager's office number"
    }
]

const addTeamMember= [
    {
        type: 'list',
        name: 'addNextMember',
        message: 'to add more members to of your team select from the roles below or select "Finish" to generate your team',
        choices: ['Engineer', 'Intern', 'Finish']
    }
]

const addEngineer = [
    {
        type:'input',
        name:'name',
        message: "please enter engineer's name"
    },
    {
        type:'input',
        name:'id',
        message: "please enter engineer's employee ID"
    },
    {
        type:'input',
        name:'email',
        message: "please enter engineer's email address"
    },
    {
        type:'input',
        name:'github',
        message: "please enter the engineer's github username"
    },
]
const addIntern=[
    {
        type:'input',
        name:'name',
        message: "please enter interns's name"
    },
    {
        type:'input',
        name:'id',
        message: "please enter intern's employee ID"
    },
    {
        type:'input',
        name:'email',
        message: "please enter intern's email address"
    },
    {
        type:'input',
        name:'github',
        message: "please enter the intern's school"
    },
]
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
