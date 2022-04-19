function generateTeamCards(teamArray){
    function generateIntern (employee){
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">School: ${employee.getSchool()}</li>
            </ul>
        </div>
    </div>
        `
    }
    function generateEngineer (employee)
    {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">School: ${employee.getGitHub()}</li>
            </ul>
        </div>
    </div>`
    }
    function generateManager (employee)
    {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">School: ${employee.officeNumber()}</li>
            </ul>
        </div>
    </div>`
    }
    const employeeArray = [];
    employeeArray.push(teamArray
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    employeeArray.push(teamArray
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    employeeArray.push(teamArray
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    return employeeArray.join("");
}



module.exports = teamArray => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeamCards(teamArray)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};