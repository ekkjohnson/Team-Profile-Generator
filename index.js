const generateHTML = require('./assets/src/index.html');
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

// new function to initialize the app, divide it up based on employee roles
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

const populate = (data) => {
    var cardContainer = [];
    
    for (var i = 0; i < data.length; i++) {
        console.log(data[i])
        if(data[i].role === "Manager") {
            var card = `
            <div class="card1" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              <h5>${data[i].role}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            </div>
            `
            cardContainer.push(card)
        }else if(data[i].role === "Engineer") {
            var card = `
            <div class="card1" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              <h5>${data[i].role}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            </div>
            `
            cardContainer.push(card)
        }else{
            var card = `
            <div class="card1" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              <h5>${data[i].role}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            </div>
            `
            cardContainer.push(card)
        }
        
        
}
return cardContainer;
}

const generateHtml = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./Assets/css/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
    <nav class="navbar navbar-light bg-primary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 mx-auto fs-1">My Team</span>
    </div>
    </nav>
    <div class="container">
        ${populate(data)}
    </div>
    </body>
    </html>
    `
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data),(err) => {
        if (err) {
            console.log('error');
        } else {

        }
    })
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

