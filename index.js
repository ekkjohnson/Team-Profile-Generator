// const generateHTML = require('./src/generateHTML');
const fs = require('fs'); 
const inquirer = require('inquirer');
// team profiles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

// node modules 

const Employee = require('./lib/employee');

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

// TODO: Create a function to initialize app
function init (){
    inquirer
    .prompt(addManager)
    .then(answers =>{
        const manager = createManager(answers.name, answers.id, answers.email, answers.officeNumber)
        if(manager) {
            teamArray.push(manager)
            createMember()
        }
    })
}

function createMember (){
    inquirer
    .prompt(createTeamMember)
    .then(answers=>{
        if(answers.addNExt === 'Engineer'){
            inquirer
            .prompt(addEngineer)
            .then(answers=>
                {
                    const engineer = createEngineer (answers.name, answers.id, answers.email, answers.github)
                    teamArray.push(engineer)
                    createMember()
                })
        } else if (answers.addNext === 'Inter'){
            inquirer
            .prompt(addIntern)
            .then(answers=> {
                const intern = createIntern (answers.name, answers.id, answers.email, answers.school)
                teamArray.push(intern)
                createMember()
            })
        } else {
            console.log ('please run function to generate your html')
            console.log(teamArray)
        }
    })
}

// Function call to initialize app
init();
