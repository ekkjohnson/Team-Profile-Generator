const generateHTML = require('./assets/src/generateHTML');
const Fs = require('fs'); 
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

function employeeOptions(){
inquirer.prompt([
    {type:"list",
     name: "AddEmployee",
     message: "What kind of employee would you like to add?",
     choices: ["Manager", "Intern", "Engineer", "Render Cards"]
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
        case 'Render Cards':
            renderCards()
            break;
    }
})
}
// prompts and functions to push data into teamArray to render cards
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
    const ManagerInstance = new Manager (data.name, data.id, data.email, data.officeNumber)
    teamArray.push(ManagerInstance)
    employeeOptions()
})
}


function addEngineer () {
    inquirer.prompt([
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
]).then(data =>{
    const EngineerInstance = new Engineer (data.name, data.id, data.email, data.github)
    teamArray.push(EngineerInstance)
    employeeOptions()
})
}
function addIntern () {
    inquirer.prompt([
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
        name:'school',
        message: "please enter the intern's school"
    },
]).then(data =>{
    const InternInstance = new Intern (data.name, data.id, data.email, data.school)
    teamArray.push(InternInstance)
    // renderCards()
    employeeOptions()
})

}
//function to use data pushed into teamArray that renders the cards
function renderCards (){
    Fs.writeFileSync(fileToDist, generateHTML(teamArray), "utf-8")
}
employeeOptions()