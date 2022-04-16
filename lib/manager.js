const employee = require('./employee');

class manager extends employee{
    constructor(name, id, email, officeNumer){
        super (name, id, email);
        this.officeNumer=officeNumer;
    }
    getRole(){
        return "Manager";
    }
}
module.exports=manager;