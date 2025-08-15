// // ES6

// class User{
//     constructor(userName,email,password){
//         this.userName=userName;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     setUsername(){
//         return `${this.userName.toUpperCase()}`
//     }
// }
// const chai=new User("Rishu","reshujayant070@gmail.com","123");


// console.log(chai.encryptPassword());

// console.log(chai.setUsername());


//behind the seen

function User(userName,email,password){
    this.userName=userName;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}

User.prototype.setUsername=function(){
    return `${this.userName.toUpperCase()}`
}





const chai=new User("Rishu","reshujayant070@gmail.com","123");

console.log(chai.encryptPassword());

console.log(chai.setUsername());