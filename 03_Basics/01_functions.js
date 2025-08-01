
function sayMyName(){
    console.log('R');
    console.log('I');
    console.log('S');
    console.log('H');
    console.log('U');
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2){
    // let result=number1 + number2;
    // return result;

    return number1 + number2;
    
}

const res=addTwoNumbers(3,5);
// console.log("Result :", res);


function loginUserMessage(userName = "sam"){
    // if(userName === undefined){
    //     console.log("please Enter a userName");
    //     return;
    // }
    if(!userName){
        console.log("please Enter a userName");
        return;
    }
        

    return `${userName} just Logged In`;
}

// console.log(loginUserMessage("Rishu"));

// console.log(loginUserMessage());


// Rest Operator ......
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500,2000))

const user={
    userName: "Rishu",
    prices: "199"
}

function handleObject(anyobject){
    console.log(`UserName is ${anyobject.userName} and Price is ${anyobject.price}`);
    
}
// handleObject(user);

handleObject({
    userName : "Sam",
    price: 199
});

const myNewArray = [200,300,400,100,600];


function returnSecondValue(getArray){
    return getArray[0];
}
 

console.log(returnSecondValue(myNewArray));