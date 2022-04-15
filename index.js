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

const newManager(manager) {
    return inquirer.prompt([

    ])
}