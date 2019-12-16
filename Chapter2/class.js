class Human{
    constructor(){
        this.gender = 'male';
    }
    printMyGender(){
        console.log(this.gender);
    }
};

class Person extends Human{
    constructor(){
        super(); //using to call Human constructor
        this.name = "Khanh";
        this.gender = 'femal';
    }
    printMyName(){
        console.log(this.name);
    }
    
}
const person = new Person();
person.printMyName();
person.printMyGender();