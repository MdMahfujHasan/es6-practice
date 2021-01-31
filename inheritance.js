class Parent{
    constructor(){
        this.firstName = "mahfuj";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.lastName = name;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

const baby1 = new Child("hasan");
const baby2 = new Child("munna");
console.log(baby1);
console.log(baby2);
console.log(baby2.getFullName());