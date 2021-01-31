class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.university = "DIIT";
    }
}

const student1 = new Student(1, "mahfuj");
const student2 = new Student(2, "hasan");
const student3 = new Student(3, "munna");
console.log(student1, student2);
console.log(student1.name, student2.id);
console.log(student3);
