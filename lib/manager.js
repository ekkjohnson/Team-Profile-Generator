const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumer){
        super (name, id, email);
        this.officeNumer=officeNumer;
    }
    getRole(){
        return "Manager";
    }
}
module.exports=Manager;