// singleton
//constructor
// Object.create


//object literal

const mySym= Symbol("Key1")
// console.log(typeof mySym)

const jsUser={
    Name: "Rishu",
    "Full name": "Rishu Rajput",
    // mySym: "Rajput",
    [mySym]: "myKey1",
    Age: 21,
    location: "Delhi",
    email: "Rishurajput070@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(jsUser.Name)
// console.log(jsUser["Name"])
// console.log(jsUser["Full name"])

// console.log(jsUser[mySym])


// console.log(Object.getOwnPropertySymbols(jsUser))



jsUser.email="reshu.22b1531032@abes.ac.in"

// console.log(jsUser["email"])

// Object.freeze(jsUser)

jsUser.email="rishurajput070@gmail.com"

// console.log(jsUser) // after Freeze they can't change the Email


jsUser.greeting = function () {
    console.log("Hello Js Users");
}

// console.log(jsUser.greeting); [Function (anonymous)]
console.log(jsUser.greeting())


jsUser.greetingTwo= function(){
    console.log(`Hello Js Users, ${this.Name}.. yours Welcome`)
}

console.log(jsUser.greetingTwo())






