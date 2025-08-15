
function setUsername(username){
    this.username=username;
    console.log("callled");
}

// function createUser(username,email,password){
//     setUsername(username);

//     this.email=email;
//     this.password=password;
// }


function createUser(username,email,password){
    setUsername.call(this,username);

    this.email=email;
    this.password=password;
}

const chai= new createUser("Rishu","reshujayant070@gmail.com",123);
console.log(chai);

//problem
//{ email: 'reshujayant070@gmail.com', password: 123 }

