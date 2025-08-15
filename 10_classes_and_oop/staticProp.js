
class User{
    constructor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(`UserName Is :${this.userName}`);
    }

    static createId(){
        return `123${this.userName}`;
    }
}

class Teacher extends User{
    constructor(userName, email){
        super(userName);
        this.email=email;
    }
}

const rishu=new User("Rishu");

// console.log(rishu.createId());


const iphone=new Teacher("iphone","i@phone.com");


iphone.logMe();
console.log(iphone.createId());