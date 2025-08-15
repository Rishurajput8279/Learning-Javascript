class User{
    constructor(userName){
        this.userName=userName;
    }
    logMe(){
        console.log(`USERNAME IS :${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName,email,password){
        super(userName)     //veryPowerFull setuserName from extend class and we use in these Classes;
        this.email=email;
        this.password=password;
    }

    addCourses(){
        console.log(`New Course is added by ${this.userName}`);
    }
}



const chai= new Teacher("chai","chai@teacher.com","123");


chai.addCourses();

const masalaChai= new User("masalaChai");

masalaChai.logMe();

chai.logMe();



console.log(masalaChai=== chai);
console.log(chai=== Teacher);

console.log(chai instanceof Teacher);


console.log(chai instanceof User);




