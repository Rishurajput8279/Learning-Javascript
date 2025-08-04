const user={
    username:"Rishu",
    price: 999,
    welcomeMessage: function (){
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();


// console.log(this);

// this -> context



// function chai(){
//     let username="Rishu"
//     console.log(this.username);
    
// }

// chai();

// const chai2=function(){
//     username="Rishu";
//     console.log(this.username)
// }



// chai2();


// arow
// const chai= () => {
//     const userName="Rishu";
//     console.log(this)
// }



// chai();




// const addTwo=(num1,num2)=>{
//     return num1+num2; // explicit
// }

// const addTwo=(num1,num2)=> num1+num2; // if {} are not present they mean that we don't need a return

// const addTwo=(num1,num2)=> (num1+num2); //inplicit



const ob=() => ({username:"Rishu"})

// console.log(addTwo(2,4));


console.log(ob());


