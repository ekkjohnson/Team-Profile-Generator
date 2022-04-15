const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 

const newManager(Manager) {
    return inquirer.prompt([

    ])
}