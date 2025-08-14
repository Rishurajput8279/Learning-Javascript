// // Object Literal

// const user = {
//     userName: "Rishu",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got Users details from dataBase");
//         // console.log(`userName: ${this.userName}`)
//         console.log(this);
//     }
// }

// console.log(user.userName)
// console.log(user.getUserDetails())

// // console.log(this)


// const promise = new Promise((resolve,reject)=>{

// })


// const date=new Date();

// // new is constructor function



function User(userName, loginCount, isLoggedIn){
    this.myuserName=userName
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn;
    this.greeting =function(){
        console.log(`Welcome ${this.userName}`);
    }

    // return this // implicitly defined
}

const user1=new User("Rishu",12, true)
const user2=new User("ChaiAurCode",14,false);

console.log(user1.constructor);
// console.log(user2);

// new
// create an Empty Objects
// constructor function called
// inject the variale this
// displace the result


