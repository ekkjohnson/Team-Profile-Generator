const generateHTML = require('./assets/src/generateHTML');
const fs = require('fs'); 
const Path = require ('path')
const inquirer = require('inquirer');
const pathToDist = Path.resolve(__dirname, "dist")
const fileToDist = Path.join(pathToDist, 'index.html')
// team profiles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

// node modules 

const Employee = require('./lib/employee');

// team array
const teamArray = []; 

inquirer.prompt([
    {type:"list",
     name: "AddEmployee",
     message: "What kind of employee would you like to add?",
     choices: ["Manager", "Intern", "Engineer"]
    },
]) .then ((answers)=>{
    switch (answers.AddEmployee){
        case 'Manager':
            addManager();
            break;
        case 'Intern':
            addIntern();
            break;
        case 'Engineer':
            addEngineer();
            break;
        
    }
})

// new function to initialize the app, divide it up based on employee roles
function addManager () {
    inquirer.prompt([
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
]).then(data =>{
    const ManagerInstance = new Manager (data.ManagerName, data.ManagerID, data.ManagerEmail, data.officeNumber)
    teamMemberArray.push(ManagerInstance)
    renderCards()
})
}

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

function renderCards (fileToDist, data){
    Fs.writeFileSync(fileToDist, generateHTML(teamArray), "utf-8")
}

// TODO: Create a function to initialize app
function init (){
    inquirer
    .prompt(addManager)
    .then(answers =>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        if(manager) {
            teamArray.push(manager)
            newMember()
        }
    })
}


function newMember (){
    inquirer
    .prompt(addTeamMember)
    .then(answers=>{
        if(answers.addNExt === 'Engineer'){
            inquirer
            .prompt(addEngineer)
            .then(answers=>
                {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                    teamArray.push(engineer)
                    newMember()
                })
        } else if (answers.addNext === 'Inter'){
            inquirer
            .prompt(addIntern)
            .then(answers=> {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                teamArray.push(intern)
                newMember()
            })
        } else {
            console.log ('please run function to generate your html')
            console.log(teamArray)
        }
    })
}

// Function call to initialize app
init();



